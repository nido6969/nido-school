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
          "Embark on a Montessori education for your child. Explore our 6-step admissions process at NIDO Montessori Preschool, Bowrampet, Hyderabad.",
      },
      { property: "og:title", content: "Admissions — NIDO Montessori Preschool" },
      { property: "og:description", content: "Our admissions process and guidelines." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
});

const admissionSteps = [
  {
    step: "01",
    title: "Explore our website & philosophy",
    detail: "Familiarize yourself with the Montessori Method and our school's unique approach.",
  },
  {
    step: "02",
    title: "Schedule a Tour",
    detail:
      "Experience our prepared environment firsthand, observe classrooms, and meet our team. This is a wonderful opportunity to ask questions.",
  },
  {
    step: "03",
    title: "Submit an application",
    detail: (
      <span>
        Complete our online application form. (
        <Link to="/contact-us" className="text-olive underline font-bold hover:text-caramel">
          Application Form
        </Link>
        )
      </span>
    ),
  },
  {
    step: "04",
    title: "Schedule a collaborative session",
    detail:
      'This session makes sure to understand each other better to remain focussed on the common crux - "The Child".',
  },
  {
    step: "05",
    title: "Enrollment Offer",
    detail: "We will notify you of your child's acceptance.",
  },
  {
    step: "06",
    title: "Secure Your Spot",
    detail:
      "Complete the enrollment agreement and submit required deposits by the specified deadline.",
  },
];

function AdmissionsPage() {
  return (
    <PageShell>
      <h1 className="heading-script text-[40px] lg:text-[48px]">Admissions</h1>
      
      <p className="mt-6 max-w-[1050px] font-body text-[19px] leading-[1.9] text-foreground/90">
        Embarking on a Montessori education for your child is a significant and rewarding decision.
        At NIDO, we strive to make our admissions process clear, supportive, and welcoming for
        every family. We encourage prospective parents to fully understand our philosophy and
        environment to ensure it's the perfect fit for your child's developmental journey.
      </p>

      <h2 className="heading-script mt-12 text-[32px] lg:text-[38px]">Our Admissions Process</h2>

      <ol className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {admissionSteps.map((item) => (
          <li
            key={item.step}
            className="nido-card flex flex-col justify-between rounded-3xl border-2 border-dashed border-[#e6d8c3] bg-[#f8f3e9]/95 p-7 shadow-sm"
          >
            <div>
              <span className="font-display text-[32px] font-bold text-terracotta">{item.step}</span>
              <h3 className="mt-2 font-body text-[22px] font-bold leading-snug text-olive">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-[18px] leading-[1.8] text-foreground/85">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <Link
        to="/contact-us"
        className="nido-card mt-14 block rounded-full bg-[oklch(0.68_0.17_235)] px-6 py-6 text-center font-body text-[26px] font-bold text-foreground shadow-[0_4px_14px_oklch(0_0_0/0.14)] lg:text-[32px]"
      >
        Schedule a Visit &amp; Unlock Their Potential!
      </Link>
    </PageShell>
  );
}
