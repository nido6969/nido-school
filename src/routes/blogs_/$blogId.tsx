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
          <h1 className="font-body text-[32px] font-bold text-[#636B2F]">Article Not Found</h1>
          <p className="mt-4 font-serif text-[18px] text-[#333]">
            Sorry, the blog article you are looking for does not exist.
          </p>
          <Link
            to="/blogs"
            className="mt-6 inline-block rounded-full bg-[#636B2F] px-6 py-3 font-bold text-white hover:bg-[#4d5324]"
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
        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 font-serif text-[17px] font-bold text-[#636B2F] hover:underline mb-6"
        >
          ← Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="font-body text-[#636B2F] text-[32px] sm:text-[42px] font-bold text-center leading-snug">
          {article.title}
        </h1>

        {/* Subtitle */}
        {article.subtitle && (
          <h2 className="mt-4 text-center font-serif text-[18px] sm:text-[20px] font-bold text-[#2a2a2a]">
            {article.subtitle}
          </h2>
        )}

        {/* Main Sections */}
        <div className="mt-10 space-y-8 font-serif text-[18px] leading-[1.7] text-[#333]">
          {article.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              {section.heading && (
                <h2 className="font-body text-[#636B2F] text-[24px] sm:text-[28px] font-bold pt-2">
                  {section.heading}:
                </h2>
              )}
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-8 space-y-2 text-[#333]">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Frequently Asked Questions */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="pt-4 space-y-4">
              <h2 className="font-body text-[#636B2F] text-[24px] sm:text-[28px] font-bold">
                Frequently Asked Questions:
              </h2>
              <div className="space-y-4">
                {article.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="space-y-1">
                    <p className="font-bold text-[#000]">
                      {fIdx + 1}. {faq.question}
                    </p>
                    <p className="text-[#333]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Research Foundations & References */}
          {article.references && article.references.length > 0 && (
            <div className="pt-6 space-y-3">
              <h2 className="font-body text-[#636B2F] text-[24px] sm:text-[28px] font-bold">
                Research Foundations & References:
              </h2>
              <ul className="list-disc pl-8 space-y-2 text-[#333]">
                {article.references.map((ref, rIdx) => (
                  <li key={rIdx}>{ref}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-[#e0cbaf]">
          <Link
            to="/blogs"
            className="inline-block rounded-full bg-[#636B2F] px-8 py-3.5 font-serif font-bold text-white shadow hover:bg-[#4e5424] transition-all"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

