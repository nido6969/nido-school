import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Blogs — NIDO Montessori Preschool, Hyderabad" },
      {
        name: "description",
        content:
          "Reflections from the NIDO team on prepared environments, nurturing independence and hands-on Montessori learning.",
      },
      { property: "og:title", content: "Blogs — NIDO Montessori Preschool" },
      { property: "og:description", content: "Montessori insights for parents and guides." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
});

const posts = [
  {
    title: "Prepared Environments",
    color: "var(--sage)",
    excerpt:
      "Every shelf, tray and chair in a Montessori classroom is chosen for the child. Here is how a prepared environment quietly teaches order, independence and care.",
  },
  {
    title: "Nurturing Independence",
    color: "var(--terracotta)",
    excerpt:
      "\"Help me to do it by myself.\" Small acts — pouring water, buttoning a coat, carrying a tray — build the confidence of a lifetime.",
  },
  {
    title: "Hands-On Learning",
    color: "var(--sunny)",
    excerpt:
      "Children think with their hands. Concrete Montessori materials let abstract ideas be touched long before they are explained.",
  },
];

function BlogsPage() {
  return (
    <PageShell>
      <h1 className="heading-script text-[40px] lg:text-[46px]">Explore our Blogs</h1>

      <ul className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <li
            key={post.title}
            className="overflow-hidden rounded-3xl bg-white/85 shadow-[0_6px_20px_oklch(0_0_0/0.08)] transition-transform hover:-translate-y-1"
          >
            <div className="grid h-[170px] place-items-center px-6 text-center" style={{ backgroundColor: post.color }}>
              <h2 className="font-body text-[26px] font-bold leading-tight">{post.title}</h2>
            </div>
            <p className="px-6 py-6 text-[18px] leading-[1.8]">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
