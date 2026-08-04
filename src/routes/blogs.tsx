import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Blogs — NIDO Montessori Preschool, Hyderabad" },
      {
        name: "description",
        content:
          "Welcome to the NIDO Blog — insights into Montessori education, child development, and parental guidance in Bowrampet, Hyderabad.",
      },
      { property: "og:title", content: "Blogs — NIDO Montessori Preschool" },
      { property: "og:description", content: "Montessori insights for parents and guides." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
});

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "spiritual-development",
    title: "Dr. Maria Montessori's Core Beliefs on the Child's Spiritual Development",
    excerpt:
      "Dr. Montessori believed that every child possesses an innate spiritual force that drives their natural development. Honoring this spiritual nature requires creating peaceful, respectful environments where children feel valued and heard.",
  },
  {
    id: "four-planes",
    title: "What Are the Four Planes of Development in Montessori?",
    excerpt:
      "Montessori identified four distinct six-year stages of human growth: Infancy (0–6), Childhood (6–12), Adolescence (12–18), and Maturity (18–24). Each plane brings distinct physical, psychological, and cognitive characteristics.",
  },
  {
    id: "follow-the-child",
    title: "Why \"Follow the Child\" is the Golden Rule of the Montessori Method",
    excerpt:
      "Observing each child's intrinsic interests and developmental readiness allows trained guides to offer the right material at the precise moment, fostering authentic love for learning.",
  },
  {
    id: "freedom-within-limits",
    title: "Freedom Within Limits: Finding the Balance Between Choice and Structure",
    excerpt:
      "Providing clear, consistent boundaries allows children true freedom to choose their activities independently within a safe, structured framework, building self-discipline.",
  },
  {
    id: "absorbent-mind",
    title: "The Absorbent Mind: Understanding How Your 0–6 Year Old Learns",
    excerpt:
      "During the first six years, a child's mind effortlessly absorbs language, social cues, and sensory impressions directly from their environment without conscious effort.",
  },
  {
    id: "importance-of-order",
    title: "The Importance of Order for the Young Child's Mind",
    excerpt:
      "External order in the prepared environment helps construct internal mental order, providing young children with a secure foundation for reasoning and security.",
  },
  {
    id: "sensitive-periods",
    title: "Understanding Sensitive Periods in Early Childhood",
    excerpt:
      "Sensitive periods are temporary developmental windows during which a child is passionately driven to master specific skills such as movement, language, and order.",
  },
  {
    id: "practical-life-home",
    title: "Practical Life Activities: Building Independence at Home",
    excerpt:
      "Everyday activities like pouring, sweeping, and buttoning build hand-eye coordination, concentration, confidence, and genuine self-reliance in early childhood.",
  },
];

function BlogsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-[1250px] px-2 py-4">
        <h1 className="heading-script text-center text-[42px] text-olive sm:text-[48px] lg:text-[54px]">
          Blogs
        </h1>

        <p className="mx-auto mt-6 max-w-[980px] text-center font-body text-[18px] leading-[1.85] text-foreground/90 sm:text-[19px] lg:text-[21px]">
          Welcome to the NIDO Blog - your resource for insights into Montessori education, child
          development, and parental understanding of the Montessori approach. Our goal is to share
          valuable information, celebrate our children's learning journeys, and build a strong
          community.
        </p>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[220px_1fr]">
          <div>
            <h2 className="font-body text-[26px] font-bold text-olive sm:text-[28px]">
              Blog Posts
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {blogPosts.map((post) => {
              const isExpanded = expandedId === post.id;
              return (
                <article
                  key={post.id}
                  onClick={() => toggleExpand(post.id)}
                  className="nido-card group cursor-pointer rounded-2xl border-2 border-dashed border-[#e6d8c3] bg-[#f8f3e9]/95 px-7 py-5 shadow-[0_2px_8px_oklch(0_0_0/0.04)] hover:border-olive/60 hover:bg-[#f5ebd9]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-body text-[20px] font-bold leading-snug text-foreground sm:text-[22px] lg:text-[24px]">
                      {post.title}
                    </h3>
                    <span className="shrink-0 text-olive transition-transform group-hover:scale-110">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </div>

                  {isExpanded && (
                    <p className="mt-4 border-t border-[#e3d3ba] pt-4 font-body text-[18px] leading-[1.8] text-foreground/85">
                      {post.excerpt}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
