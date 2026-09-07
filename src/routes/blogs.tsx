import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { allBlogArticles } from "@/data/blog-articles";
import { Clock, Calendar, Search, ArrowRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Montessori Blogs & Articles – NIDO Montessori" },
      {
        name: "description",
        content:
          "Explore 10 comprehensive articles on the Montessori method, early brain development, the absorbent mind, sensitive periods, and practical parenting guides from NIDO Montessori.",
      },
      { property: "og:title", content: "Montessori Blogs & Articles – NIDO Montessori" },
      {
        property: "og:description",
        content:
          "Explore 10 comprehensive articles on the Montessori method, early brain development, the absorbent mind, sensitive periods, and practical parenting guides from NIDO Montessori.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
});

function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set(allBlogArticles.map((a) => a.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredArticles = useMemo(() => {
    return allBlogArticles.filter((article) => {
      const matchesCat = selectedCategory === "All" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        (article.subtitle && article.subtitle.toLowerCase().includes(q)) ||
        article.excerpt.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <PageShell>
      <div className="mx-auto max-w-[1140px] px-3 sm:px-6 py-6 sm:py-12">
        {/* Page Header */}
        <div className="text-center max-w-[850px] mx-auto">
          <span className="inline-block rounded-full bg-[#f1f4df] px-4 py-1.5 font-sans text-[13px] font-semibold tracking-wider text-[#555d24] uppercase mb-3">
            Parent Resources & Educational Insights
          </span>
          <h1 className="font-body text-[#636B2F] text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-tight">
            NIDO MONTESSORI BLOGS
          </h1>
          <p className="mt-4 font-serif text-[17px] sm:text-[20px] text-[#424638] leading-relaxed">
            Welcome to the NIDO Montessori publication hub. Delve into 10 deep-dive articles
            exploring Dr. Maria Montessori's core tenets, child psychology, developmental planes,
            and actionable guidance for parents.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="mt-10 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-[#ebdcc3] bg-[#faf6ed] p-4 sm:p-5 shadow-2xs">
          {/* Search Box */}
          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8a917e]" />
            <input
              type="text"
              placeholder="Search topics, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#ded1ba] bg-white py-2.5 pl-10 pr-4 font-serif text-[15px] text-[#2c3024] placeholder-[#8e9482] focus:border-[#636B2F] focus:outline-none focus:ring-1 focus:ring-[#636B2F]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 font-sans text-[13px] font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#636B2F] text-white shadow-xs"
                    : "bg-[#ece4d2] text-[#4f5442] hover:bg-[#dfd5c0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Count */}
        <div className="mb-6 flex items-center justify-between font-serif text-[15px] text-[#6d7260]">
          <span>
            Showing <strong className="text-[#252b14]">{filteredArticles.length}</strong> of{" "}
            <strong>{allBlogArticles.length}</strong> articles
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#636B2F] hover:underline text-[14px]"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="my-16 rounded-2xl border border-dashed border-[#d5c7ae] bg-[#fbf8f2] p-12 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-[#9a9f8d] mb-4" />
            <h3 className="font-body text-[22px] font-bold text-[#343a20]">
              No articles match your criteria
            </h3>
            <p className="mt-2 font-serif text-[16px] text-[#5e6353]">
              Try searching with different terms or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-full bg-[#636B2F] px-6 py-2.5 font-serif font-bold text-white hover:bg-[#4d5324]"
            >
              Show All Articles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col justify-between rounded-3xl border border-[#ebdcc3] bg-[#fdfbf7] p-6 sm:p-8 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#cfbe9e] hover:shadow-md"
              >
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 text-[13px] sm:text-[14px]">
                    <span className="rounded-full bg-[#f0f3dc] px-3.5 py-1 font-sans font-semibold uppercase tracking-wider text-[#555e24]">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-3 font-serif text-[#787e6d]">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-[#919685]" />
                        {article.readTime}
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-[#919685]" />
                        {article.date}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 font-body text-[22px] sm:text-[25px] font-bold leading-snug text-[#1f2511] group-hover:text-[#636B2F] transition-colors">
                    <Link
                      to="/blogs_/$blogId"
                      params={{ blogId: article.id }}
                      className="focus:outline-none"
                    >
                      {article.title}
                    </Link>
                  </h2>

                  {/* Subtitle */}
                  {article.subtitle && (
                    <p className="mt-2 font-serif text-[15px] sm:text-[16px] italic text-[#636855] line-clamp-2">
                      {article.subtitle}
                    </p>
                  )}

                  {/* Excerpt */}
                  <p className="mt-3.5 font-serif text-[15px] sm:text-[16px] leading-[1.7] text-[#44483a] line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-[#ede1cb] flex items-center justify-between">
                  <span className="font-serif text-[13px] sm:text-[14px] text-[#787e6d]">
                    {article.blocks.length} sections &bull; 8 FAQs
                  </span>
                  <Link
                    to="/blogs_/$blogId"
                    params={{ blogId: article.id }}
                    className="inline-flex items-center gap-1.5 font-serif text-[15px] font-bold text-[#636B2F] transition-transform group-hover:translate-x-1 hover:text-[#4d5324]"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl border border-[#e2d5bd] bg-[#f7f0e3] p-8 sm:p-12 text-center">
          <h2 className="font-body text-[24px] sm:text-[32px] font-bold text-[#636B2F]">
            Want to Discuss Montessori for Your Child?
          </h2>
          <p className="mx-auto mt-3 max-w-[680px] font-serif text-[16px] sm:text-[18px] leading-relaxed text-[#3e4334]">
            Our AMI-certified guides and admissions team are happy to answer your questions
            regarding our Toddler, Primary, and Elementary environments.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="rounded-full bg-[#636B2F] px-8 py-3.5 font-serif font-bold text-white shadow-md hover:bg-[#4d5324] transition-all"
            >
              Explore Admissions
            </Link>
            <Link
              to="/faqs"
              className="rounded-full border border-[#636B2F] px-8 py-3.5 font-serif font-bold text-[#636B2F] hover:bg-[#636B2F] hover:text-white transition-all"
            >
              Browse 40 School FAQs
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
