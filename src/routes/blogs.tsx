import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { allBlogArticles } from "@/data/blog-articles";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Blogs – NIDO Montessori" },
      {
        name: "description",
        content:
          "Welcome to the NIDO Blog - your resource for insights into Montessori education, child development, and parental understanding of the Montessori approach.",
      },
      { property: "og:title", content: "Blogs – NIDO Montessori" },
      { property: "og:description", content: "Montessori insights for parents and guides." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
});

function BlogsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[1050px] px-2 py-4">
        <h1 className="font-body text-[#636B2F] text-center text-[42px] sm:text-[48px] font-bold">
          Blogs
        </h1>

        <div className="mt-4 mx-auto max-w-[900px] text-center font-serif text-[18px] sm:text-[19px] leading-[1.7] text-[#333]">
          Welcome to the NIDO Blog - your resource for insights into Montessori education, child
          development, and parental understanding of the Montessori approach. Our goal is to share valuable
          information, celebrate our children's learning journeys, and build a strong community.
        </div>

        <h2 className="mt-10 font-body text-[#636B2F] text-[28px] sm:text-[32px] font-bold">
          Blog Posts
        </h2>

        <ul className="mt-6 space-y-4 font-serif">
          {allBlogArticles.map((article) => (
            <li key={article.id}>
              <Link
                to="/blogs/$blogId"
                params={{ blogId: article.id }}
                className="block rounded-[12px] border-2 border-dashed border-[#d6c1a5] bg-[#f5ebda] px-6 py-5 font-serif text-[20px] sm:text-[22px] font-bold text-[#333] shadow-sm transition-all duration-300 hover:bg-[#f0e4cc] hover:translate-x-1.5 hover:text-[#636B2F]"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}



