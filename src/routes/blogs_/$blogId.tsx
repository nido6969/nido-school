import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getBlogArticleById } from "@/data/blog-articles";

export const Route = createFileRoute("/blogs_/$blogId")({
  component: SingleBlogPage,
  head: ({ params }) => {
    const article = getBlogArticleById(params.blogId);
    return {
      meta: [
        { title: `${article?.title || "Blog Post"} – NIDO Montessori` },
        { name: "description", content: article?.excerpt || "Montessori blog post" },
        { property: "og:title", content: `${article?.title || "Blog Post"} – NIDO Montessori` },
        { property: "og:description", content: article?.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
});

function SingleBlogPage() {
  const { blogId } = Route.useParams();
  const article = getBlogArticleById(blogId);

  if (!article) {
    return (
      <PageShell>
        <div className="mx-auto max-w-[900px] px-4 py-16 text-center">
          <h1 className="font-serif text-[32px] font-bold text-[#636B2F]">Article Not Found</h1>
          <p className="mt-4 font-serif text-[18px] text-[#444]">
            Sorry, the blog article you are looking for does not exist.
          </p>
          <Link
            to="/blogs"
            className="mt-6 inline-block rounded-full bg-[#636B2F] px-6 py-3 font-serif font-bold text-white hover:bg-[#4d5324]"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-[1050px] px-2 py-4">
        {/* Back link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 font-serif text-[17px] font-bold text-[#636B2F] hover:underline mb-6"
        >
          ← Back to Blogs
        </Link>

        {/* Title & Header */}
        <h1 className="font-serif text-[32px] sm:text-[42px] font-bold text-[#2a2a2a] leading-tight">
          {article.title}
        </h1>
        {article.subtitle && (
          <p className="mt-2 font-serif text-[18px] sm:text-[20px] font-semibold text-[#636B2F]">
            {article.subtitle}
          </p>
        )}
        {article.date && (
          <p className="mt-2 font-serif text-[14px] text-[#777]">
            Published: {article.date}
          </p>
        )}

        {/* Excerpt Banner */}
        <div className="mt-6 rounded-[14px] bg-[#f8f3e9] p-5 sm:p-6 border-l-4 border-[#636B2F]">
          <p className="font-serif text-[18px] sm:text-[19px] italic text-[#444] leading-[1.8]">
            "{article.excerpt}"
          </p>
        </div>

        {/* Main Article Sections */}
        <div className="mt-8 font-serif text-[18px] sm:text-[19px] leading-[1.85] text-[#333] space-y-8">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              {section.heading && (
                <h2 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#2a2a2a] pt-2">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6 space-y-2 text-[#444] mt-2">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* FAQs section if present */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="mt-10 rounded-[16px] bg-[#f7f2e8] p-6 sm:p-8 border border-[#e0cbaf]">
              <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-[#636B2F] mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {article.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="bg-white rounded-[10px] p-4 shadow-sm border border-[#e8dcc2]">
                    <p className="font-bold text-[#2a2a2a] text-[18px]">{faq.question}</p>
                    <p className="text-[#444] mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References if present */}
          {article.references && article.references.length > 0 && (
            <div className="mt-10 pt-4 border-t border-[#e0cbaf] text-[15px] text-[#666]">
              <p className="font-bold text-[#444] text-[16px]">References & Further Reading:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {article.references.map((ref, rIdx) => (
                  <li key={rIdx}>{ref}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Back to blogs button */}
        <div className="mt-12 pt-6 border-t border-[#e0cbaf]">
          <Link
            to="/blogs"
            className="inline-block rounded-full bg-[#636B2F] px-8 py-3.5 font-serif font-bold text-white shadow hover:bg-[#4e5424] transition-all"
          >
            ← View All Blog Articles
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
