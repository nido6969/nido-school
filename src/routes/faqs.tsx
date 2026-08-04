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
          "Answers to common questions about our programs, age groups, timings and the Montessori Method at NIDO Montessori Preschool, Bowrampet.",
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
    a: "Our Toddler Community welcomes children from 14 months to 2.9 years, and our Primary Community serves children from 2.6 to 6 years.",
  },
  {
    q: "What are your school timings?",
    a: "Our office hours are Monday through Saturday from 8:30 AM to 3:00 PM. Classroom hours follow uninterrupted Montessori work cycles.",
  },
  {
    q: "Are your guides Montessori trained?",
    a: "Yes. Our classrooms are led by AMI/AMS certified Montessori guides supported by trained assistants with deep respect for the child.",
  },
  {
    q: "How is Montessori different from a conventional preschool?",
    a: "Children choose purposeful work from a carefully prepared environment, learn at their own pace with concrete materials, and are guided rather than instructed — building concentration, independence and intrinsic motivation.",
  },
  {
    q: "Can we visit the school before applying?",
    a: "Absolutely. We encourage every family to schedule a tour, observe our prepared environment firsthand, and meet our team before submitting an application.",
  },
];

function FaqPage() {
  return (
    <PageShell>
      <h1 className="heading-script text-[40px] lg:text-[48px]">FAQs</h1>
      <p className="mt-6 max-w-[1000px] font-body text-[19px] leading-[1.9] text-foreground/90">
        Here you'll find answers to some of the most common questions about our programs, and the
        Montessori Method. If you can't find the information you're looking for, please don't
        hesitate to contact us directly, we are always there to help!!!
      </p>

      <dl className="mt-10 max-w-[1000px] space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="nido-card rounded-2xl border-2 border-dashed border-[#e6d8c3] bg-[#f8f3e9]/95 px-7 py-6 shadow-sm"
          >
            <dt className="font-body text-[22px] font-bold text-olive">{faq.q}</dt>
            <dd className="mt-3 font-body text-[18px] leading-[1.85] text-foreground/85">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </PageShell>
  );
}
