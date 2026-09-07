import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { allBlogArticles, getBlogArticleById } from "@/data/blog-articles";
import { ArrowLeft, Clock, Calendar, BookOpen, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/blogs_/$blogId")({
  component: SingleBlogPage,
  head: ({ params }) => {
    const article = getBlogArticleById(params.blogId);
    const title = article?.metaTitle || article?.title || "Montessori Blog";
    const description =
      article?.metaDescription ||
      article?.excerpt ||
      "Explore authentic Montessori insights, child development principles, and parenting guides from NIDO Montessori.";

    return {
      meta: [
        { title: `${title} – NIDO Montessori` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} – NIDO Montessori` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blogs/${article?.id || params.blogId}` },
      ],
      links: [{ rel: "canonical", href: `/blogs/${article?.id || params.blogId}` }],
    };
  },
});

function SingleBlogPage() {
  const { blogId } = Route.useParams();
  const article = getBlogArticleById(blogId);

  if (!article) {
    return (
      <PageShell>
        <div className="mx-auto max-w-[900px] px-4 py-20 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f4ebe1] text-[#636B2F]">
            <BookOpen className="h-10 w-10" />
          </div>
          <h1 className="font-body text-[32px] sm:text-[40px] font-bold text-[#636B2F]">
            Article Not Found
          </h1>
          <p className="mt-4 font-serif text-[18px] sm:text-[20px] text-[#4a4e40]">
            We could not find the blog article you requested. It may have moved or been updated.
          </p>
          <div className="mt-8">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-full bg-[#636B2F] px-8 py-3.5 font-serif font-bold text-white shadow-md transition-all hover:bg-[#4d5324]"
            >
              <ArrowLeft className="h-5 w-5" />
              Return to All Blogs
            </Link>
          </div>
        </div>
      </PageShell>
    );
  }

  // Get 2 other articles for recommendation
  const relatedArticles = allBlogArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <PageShell>
      <article className="mx-auto max-w-[980px] px-3 sm:px-6 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 font-serif text-[14px] sm:text-[15px] text-[#717664]"
        >
          <Link to="/" className="hover:text-[#636B2F] hover:underline">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#a8ad9b]" />
          <Link to="/blogs" className="hover:text-[#636B2F] hover:underline">
            Blogs
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#a8ad9b]" />
          <span className="truncate max-w-[280px] sm:max-w-[450px] font-medium text-[#2d3027]">
            {article.title}
          </span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 font-serif text-[15px] sm:text-[16px] font-bold text-[#636B2F] transition-colors hover:text-[#495021]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Articles
          </Link>
        </div>

        {/* Header Container */}
        <header className="rounded-3xl border border-[#e8dcc4] bg-[#faf6ed] p-6 sm:p-10 shadow-xs">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px]">
            <span className="rounded-full bg-[#636B2F] px-4 py-1 font-sans font-semibold uppercase tracking-wider text-white">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 font-serif text-[#606555]">
              <Clock className="h-4 w-4 text-[#8b9176]" />
              {article.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 font-serif text-[#606555]">
              <Calendar className="h-4 w-4 text-[#8b9176]" />
              {article.date}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="mt-5 font-body text-[28px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.25] text-[#222814]">
            {article.title}
          </h1>

          {/* Subtitle */}
          {article.subtitle && (
            <p className="mt-4 font-serif text-[18px] sm:text-[21px] italic leading-relaxed text-[#515745]">
              {article.subtitle}
            </p>
          )}
        </header>

        {/* Article Body */}
        <div className="mt-8 sm:mt-12">
          {article.blocks.map((block, idx) => {
            switch (block.type) {
              case "heading": {
                if (block.level === 2) {
                  return (
                    <h2
                      key={idx}
                      className="mt-12 mb-4 pt-4 font-body text-[24px] sm:text-[30px] font-bold text-[#636B2F] border-b border-[#ebdcc3] pb-2 leading-tight"
                    >
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <h3
                    key={idx}
                    className="mt-8 mb-3 font-body text-[20px] sm:text-[23px] font-bold text-[#343b1c] leading-snug"
                  >
                    {block.text}
                  </h3>
                );
              }

              case "paragraph": {
                return (
                  <p
                    key={idx}
                    className="mb-5 font-serif text-[17px] sm:text-[19px] leading-[1.85] text-[#2c3026]"
                  >
                    {block.text}
                  </p>
                );
              }

              case "list": {
                return (
                  <ul
                    key={idx}
                    className="my-5 list-disc space-y-2.5 pl-6 sm:pl-8 font-serif text-[16px] sm:text-[18px] leading-[1.75] text-[#2c3026]"
                  >
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                );
              }

              case "quote": {
                return (
                  <blockquote
                    key={idx}
                    className="my-8 rounded-r-2xl border-l-4 border-[#636B2F] bg-[#faf5ea] px-6 py-5 font-serif text-[18px] sm:text-[21px] italic leading-[1.7] text-[#3e442c] shadow-2xs"
                  >
                    {block.text}
                  </blockquote>
                );
              }

              case "faq": {
                return (
                  <div
                    key={idx}
                    className="my-5 rounded-2xl border border-[#e4d9c3] bg-[#fcf9f2] p-5 sm:p-6 shadow-2xs"
                  >
                    <h4 className="font-body text-[18px] sm:text-[20px] font-bold text-[#232912] mb-2 leading-snug">
                      {block.question}
                    </h4>
                    <p className="font-serif text-[16px] sm:text-[18px] leading-[1.75] text-[#424738]">
                      {block.answer}
                    </p>
                  </div>
                );
              }

              case "table": {
                return (
                  <div
                    key={idx}
                    className="my-8 overflow-x-auto rounded-2xl border border-[#decfae] bg-white shadow-2xs"
                  >
                    <table className="w-full text-left font-serif text-[15px] sm:text-[17px]">
                      <thead className="bg-[#636B2F] text-white">
                        <tr>
                          {block.headers.map((header, hIdx) => (
                            <th
                              key={hIdx}
                              className="px-4 sm:px-5 py-3.5 font-sans font-bold text-[14px] sm:text-[15px] tracking-wide"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ede1cc]">
                        {block.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-[#fdfbf6]" : "bg-white"}>
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className="px-4 sm:px-5 py-3.5 text-[#2d3027] leading-relaxed align-top"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              case "reference": {
                return (
                  <div
                    key={idx}
                    className="my-2 pl-4 border-l-2 border-[#d9cbb2] font-serif text-[15px] sm:text-[16px] leading-[1.65] text-[#555a4a]"
                  >
                    {block.text}
                  </div>
                );
              }

              default:
                return null;
            }
          })}
        </div>

        {/* NIDO Admissions CTA Card */}
        <section className="mt-14 rounded-3xl border border-[#dfd2ba] bg-[#f5ede0] p-6 sm:p-10 text-center shadow-xs">
          <h3 className="font-body text-[24px] sm:text-[28px] font-bold text-[#636B2F]">
            Experience the Montessori Difference at NIDO
          </h3>
          <p className="mx-auto mt-3 max-w-[650px] font-serif text-[16px] sm:text-[18px] leading-relaxed text-[#3f4434]">
            See our prepared environments, purposeful materials, and guided independence firsthand.
            Schedule a campus tour to observe a live Montessori classroom.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="rounded-full bg-[#636B2F] px-8 py-3.5 font-serif text-[16px] font-bold text-white shadow-md transition hover:bg-[#4d5324]"
            >
              Admissions & Tours
            </Link>
            <Link
              to="/contact-us"
              className="rounded-full border-2 border-[#636B2F] px-8 py-3.5 font-serif text-[16px] font-bold text-[#636B2F] transition hover:bg-[#636B2F] hover:text-white"
            >
              Contact Our Guides
            </Link>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-14 pt-10 border-t border-[#ebdcc3]">
            <h3 className="font-body text-[22px] sm:text-[26px] font-bold text-[#272d16] mb-6">
              More Montessori Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to="/blogs_/$blogId"
                  params={{ blogId: rel.id }}
                  className="flex flex-col justify-between rounded-2xl border border-[#ebdcc3] bg-[#faf6ee] p-5 shadow-2xs transition-transform hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <span className="text-[12px] font-sans font-semibold uppercase tracking-wider text-[#636B2F]">
                      {rel.category}
                    </span>
                    <h4 className="mt-2 font-body text-[17px] sm:text-[18px] font-bold text-[#1f2412] leading-snug line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="mt-2 font-serif text-[14px] sm:text-[15px] text-[#555a49] line-clamp-3 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between font-serif text-[13px] text-[#787e6c]">
                    <span>{rel.readTime}</span>
                    <span className="font-bold text-[#636B2F]">Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded-full border border-[#636B2F] px-8 py-3.5 font-serif font-bold text-[#636B2F] transition-colors hover:bg-[#636B2F] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Articles
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
