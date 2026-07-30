import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/faqs")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ's — NIDO Montessori Preschool, Hyderabad" },
      {
        name: "description",
        content:
          "Answers to common questions about age groups, timings, the Montessori method and admissions at NIDO Montessori Preschool, Bowrampet.",
      },
      { property: "og:title", content: "FAQ's — NIDO Montessori Preschool" },
      { property: "og:description", content: "Common questions from NIDO parents, answered." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
});

const faqs = [
  {
    q: "What age groups do you accept?",
    a: "Our Toddler Community welcomes children from 14 months to 2.9 years, and our Primary Community serves children from 2.9 to 6 years.",
  },
  {
    q: "What are your school timings?",
    a: "The Toddler Community runs a shorter morning cycle, while the Primary Community follows the full three-hour uninterrupted work cycle. Extended day options are available on request.",
  },
  {
    q: "Are your guides Montessori trained?",
    a: "Yes. Our classrooms are led by AMI/AMS certified Montessori guides supported by trained assistants.",
  },
  {
    q: "How is Montessori different from a conventional preschool?",
    a: "Children choose purposeful work from a carefully prepared environment, learn at their own pace with concrete materials, and are guided rather than instructed — building concentration, independence and intrinsic motivation.",
  },
  {
    q: "Can we visit the school before applying?",
    a: "Absolutely. We encourage every family to schedule a visit and observe the environment before applying.",
  },
];

function FaqPage() {
  return (
    <PageShell>
      <h1 className="heading-script text-[40px] lg:text-[46px]">FAQ's</h1>
      <dl className="mt-10 max-w-[1000px] space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="rounded-2xl bg-white/85 px-7 py-6 shadow-[0_4px_14px_oklch(0_0_0/0.07)]"
          >
            <dt className="font-body text-[22px] font-bold text-olive">{faq.q}</dt>
            <dd className="mt-3 text-[18px] leading-[1.85]">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </PageShell>
  );
}
