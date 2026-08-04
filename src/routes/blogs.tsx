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
          "Welcome to the NIDO Blog – your resource for insights into Montessori education, child development, and parental guidance in Bowrampet, Hyderabad.",
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
      <div className="mx-auto max-w-[1250px] px-2 py-4">
        <h1 className="font-body text-[#636B2F] text-center text-[42px] sm:text-[48px] lg:text-[54px] font-bold">
          BLOGS
        </h1>

        <p className="mx-auto mt-4 max-w-[1000px] text-center font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
          Welcome to the NIDO Blog – your resource for insights into Montessori education, child development, and parental understanding of the Montessori approach. Our goal is to share valuable information, celebrate our children's learning journeys, and build a strong community.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {allBlogArticles.map((article) => (
            <Link
              key={article.id}
              to="/blogs/$blogId"
              params={{ blogId: article.id }}
              className="group block rounded-[18px] border border-[#e0cbaf] bg-[#f8f3e9] p-6 sm:p-8 shadow-sm transition-all hover:border-[#636B2F] hover:bg-[#f5ebd9] hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#2a2a2a] leading-snug group-hover:text-[#636B2F] transition-colors">
                    {article.title}
                  </h2>
                  {article.subtitle && (
                    <p className="mt-1 font-serif text-[16px] sm:text-[18px] font-semibold text-[#636B2F]">
                      {article.subtitle}
                    </p>
                  )}
                  <p className="mt-3 font-serif text-[17px] sm:text-[18px] leading-[1.7] text-[#444]">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 font-serif text-[16px] sm:text-[17px] font-bold text-[#636B2F] group-hover:underline">
                    Read Full Article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}


