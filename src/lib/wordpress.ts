import { allBlogArticles, type BlogArticle, type BlogBlock } from "@/data/blog-articles";

type WpRendered = { rendered?: string; protected?: boolean };

type WpTerm = { id?: number; name?: string; slug?: string };

type WpEmbedded = {
  "wp:term"?: WpTerm[][];
};

type WpPost = {
  id: number;
  slug: string;
  date?: string;
  modified?: string;
  title?: WpRendered;
  excerpt?: WpRendered;
  content?: WpRendered;
  _embedded?: WpEmbedded;
};

/** Live NIDO WordPress (subdirectory). Editors: /blog/wp-admin */
const DEFAULT_WORDPRESS_URL = "https://www.nidomontessori.in/blog";

/** Short TTL so a newly published post appears on /blogs without a git deploy. */
const CACHE_MS = 15_000;

let articleCache: { expires: number; articles: BlogArticle[]; fromCms: boolean } | null = null;

function wordpressOrigin(): string {
  const raw =
    (typeof process !== "undefined" && process.env.WORDPRESS_URL) ||
    (typeof import.meta !== "undefined" && (import.meta.env.WORDPRESS_URL as string | undefined)) ||
    (typeof import.meta !== "undefined" &&
      (import.meta.env.VITE_WORDPRESS_URL as string | undefined)) ||
    DEFAULT_WORDPRESS_URL;
  return raw.trim().replace(/\/+$/, "");
}

function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export function sanitizeWpHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "");
}

function formatWpDate(iso?: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function categoryFromPost(post: WpPost): string {
  const groups = post._embedded?.["wp:term"] ?? [];
  for (const group of groups) {
    const named = group.find((term) => term?.name);
    if (named?.name) return named.name;
  }
  return "Blog";
}

function mapPost(post: WpPost): BlogArticle {
  const title = stripTags(post.title?.rendered ?? "Untitled");
  const excerpt = stripTags(post.excerpt?.rendered ?? "");
  const html = sanitizeWpHtml(post.content?.rendered ?? "");
  const plain = stripTags(html);
  const blocks: BlogBlock[] = html.trim()
    ? [{ type: "html", html }]
    : [{ type: "paragraph", text: excerpt || title }];

  return {
    id: post.slug,
    title,
    category: categoryFromPost(post),
    date: formatWpDate(post.date),
    readTime: estimateReadTime(plain || excerpt),
    excerpt: excerpt || plain.slice(0, 220),
    metaTitle: title,
    metaDescription: (excerpt || plain).slice(0, 160),
    blocks,
  };
}

function restUrls(origin: string, page: number): string[] {
  const query = `per_page=100&page=${page}&_embed=1&status=publish`;
  return [
    `${origin}/wp-json/wp/v2/posts?${query}`,
    `${origin}/index.php?rest_route=/wp/v2/posts&${query}`,
  ];
}

async function fetchPostsPage(
  origin: string,
  page: number,
): Promise<{
  posts: WpPost[];
  totalPages: number;
} | null> {
  for (const url of restUrls(origin, page)) {
    try {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        cache: "no-store",
        signal: AbortSignal.timeout(12000),
      });
      if (response.status === 404) continue;
      if (!response.ok) {
        console.warn(`WordPress posts request failed: ${response.status} ${url}`);
        continue;
      }
      const payload = (await response.json()) as unknown;
      if (!Array.isArray(payload)) continue;
      const totalPages = Number(response.headers.get("X-WP-TotalPages") || "1") || 1;
      return { posts: payload as WpPost[], totalPages };
    } catch (error) {
      console.warn(`WordPress posts request error ${url}`, error);
    }
  }
  return null;
}

async function fetchAllWordpressPosts(): Promise<BlogArticle[] | null> {
  const origin = wordpressOrigin();
  if (!origin) return null;

  const first = await fetchPostsPage(origin, 1);
  if (!first) return null;

  const collected = [...first.posts];
  for (let page = 2; page <= first.totalPages; page += 1) {
    const next = await fetchPostsPage(origin, page);
    if (!next) break;
    collected.push(...next.posts);
  }

  return collected.map(mapPost);
}

export async function getBlogArticles(): Promise<BlogArticle[]> {
  const now = Date.now();
  if (articleCache && articleCache.expires > now) {
    return articleCache.articles;
  }

  const fromCms = await fetchAllWordpressPosts();
  const fromCmsOk = fromCms !== null;
  const articles = fromCmsOk ? fromCms : allBlogArticles;
  articleCache = { expires: now + CACHE_MS, articles, fromCms: fromCmsOk };
  return articles;
}

export function findBlogArticle(
  articles: BlogArticle[],
  idOrAlias: string,
): BlogArticle | undefined {
  if (!idOrAlias) return undefined;
  const target = idOrAlias.toLowerCase().trim();
  return articles.find(
    (article) =>
      article.id.toLowerCase() === target ||
      article.aliasIds?.some((alias) => alias.toLowerCase() === target),
  );
}
