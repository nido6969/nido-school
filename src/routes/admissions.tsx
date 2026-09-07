import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsPage,
  head: () => ({
    meta: [
      { title: "Admissions – NIDO Montessori" },
      {
        name: "description",
        content:
          "Embarking on a Montessori education for your child is a significant and rewarding decision. At NIDO, we strive to make our admissions process clear, supportive, and welcoming for every family.",
      },
      { property: "og:title", content: "Admissions – NIDO Montessori" },
      { property: "og:description", content: "Our admissions process and guidelines." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
});

function AdmissionsPage() {
  const steps = [
    {
      num: "1",
      title: "Explore our website & philosophy",
      desc: "Familiarize yourself with the Montessori Method and our school's unique approach.",
    },
    {
      num: "2",
      title: "Schedule a Tour",
      desc: "Experience our prepared environment firsthand, observe classrooms, and meet our team. This is a wonderful opportunity to ask questions.",
    },
    {
      num: "3",
      title: "Submit an application",
      desc: "Complete our online application form. (application form)",
      link: {
        text: "Online Application Form",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfAYIppgWT5WNm0p6splEqJjd9WpC1Q-Tck_5WELaJhsLecfg/viewform",
      },
    },
    {
      num: "4",
      title: "Schedule a collaborative session",
      desc: "This session makes sure to understand each other better to remain focussed on the common crux - “The Child”",
    },
    {
      num: "5",
      title: "Enrollment Offer",
      desc: "We will notify you of your child's acceptance.",
    },
    {
      num: "6",
      title: "Secure Your Spot",
      desc: "Complete the enrollment agreement and submit required deposits by the specified deadline.",
    },
  ];

  return (
    <PageShell>
      <h1 className="font-body text-[#636B2F] text-[32px] sm:text-[42px] lg:text-[50px] font-bold">
        ADMISSIONS
      </h1>

      <p className="mt-4 sm:mt-6 max-w-[1050px] font-serif text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-[#333]">
        Embarking on a Montessori education for your child is a significant and rewarding decision.
        At NIDO, we strive to make our admissions process clear, supportive, and welcoming for every
        family. We encourage prospective parents to fully understand our philosophy and environment
        to ensure it's the perfect fit for your child's developmental journey.
      </p>

      <h2 className="mt-8 sm:mt-10 font-body text-[#636B2F] text-[26px] sm:text-[34px] lg:text-[40px] font-bold">
        Our Admissions Process
      </h2>

      <div className="mt-6 grid gap-4 max-w-[1050px]">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 rounded-2xl bg-[#f7f2e8] p-4 sm:p-5 border border-[#e8dcc2] shadow-xs"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#636B2F] font-display text-lg font-bold text-white shadow-xs">
              {step.num}
            </div>
            <div className="flex-1 font-serif text-[16px] sm:text-[18px] text-[#333] leading-[1.6]">
              <h3 className="font-bold text-[18px] sm:text-[20px] text-[#2a2a2a] mb-1">
                {step.title}
              </h3>
              <p>{step.desc}</p>
              {step.link && (
                <div className="mt-3">
                  <a
                    href={step.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#636B2F] px-4 py-2.5 font-display text-sm sm:text-base font-bold text-white shadow-sm transition-all hover:bg-[#4e5424] active:scale-98 min-h-[44px]"
                  >
                    <span>{step.link.text}</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
