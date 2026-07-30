import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsPage,
  head: () => ({
    meta: [
      { title: "Admissions — NIDO Montessori Preschool, Bowrampet" },
      {
        name: "description",
        content:
          "Begin the journey: enquire, observe the environment, meet our guides and enrol your child at NIDO Montessori Preschool, Bowrampet, Hyderabad.",
      },
      { property: "og:title", content: "Admissions — NIDO Montessori Preschool" },
      { property: "og:description", content: "Our simple four-step admissions process." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
});

const steps = [
  { step: "01", title: "Enquire", detail: "Call us or send an enquiry and tell us about your child." },
  { step: "02", title: "Observe", detail: "Visit the school and observe a prepared environment at work." },
  { step: "03", title: "Meet", detail: "A conversation with our founder and the classroom guide." },
  { step: "04", title: "Enrol", detail: "Complete the forms and plan a gentle settling-in week." },
];

function AdmissionsPage() {
  return (
    <PageShell>
      <h1 className="heading-script text-[40px] lg:text-[46px]">Admissions</h1>
      <p className="mt-6 max-w-[1000px] text-[19px] leading-[1.9]">
        Admissions at NIDO are open for the Toddler Community (14 months – 2.9 years) and the
        Primary Community (2.9 – 6 years). We keep our classrooms small and our ratios generous, so
        seats are limited each cycle.
      </p>

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((item) => (
          <li
            key={item.step}
            className="rounded-3xl bg-white/85 px-6 py-7 shadow-[0_5px_18px_oklch(0_0_0/0.08)]"
          >
            <span className="font-display text-[34px] font-bold text-terracotta">{item.step}</span>
            <h2 className="mt-2 font-body text-[23px] font-bold text-olive">{item.title}</h2>
            <p className="mt-3 text-[18px] leading-[1.8]">{item.detail}</p>
          </li>
        ))}
      </ol>

      <Link
        to="/contact-us"
        className="mt-12 block rounded-full bg-[oklch(0.68_0.17_235)] px-6 py-6 text-center font-body text-[26px] font-bold text-foreground shadow-[0_4px_14px_oklch(0_0_0/0.14)] transition-transform hover:scale-[1.01] lg:text-[34px]"
      >
        Schedule a Visit &amp; Unlock Their Potential!
      </Link>
    </PageShell>
  );
}
