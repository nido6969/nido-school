import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — Work at NIDO Montessori Preschool" },
      {
        name: "description",
        content:
          "Join the NIDO Montessori Team in Bowrampet, Hyderabad. Openings for Montessori Guides and Montessori Assistants.",
      },
      { property: "og:title", content: "Careers — NIDO Montessori Preschool" },
      { property: "og:description", content: "Grow with a team that trusts the child." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

const careerPositions = [
  {
    title: "1. Montessori Guide",
    requirements: [
      "Certified Montessori qualification (0–6 preferred)",
      "Minimum 3 years of experience in a Montessori environment",
      "Deep respect for the child and a strong understanding of Montessori philosophy and classroom practice",
    ],
  },
  {
    title: "2. Montessori Assistant",
    requirements: [
      "Bachelor’s degree in any discipline",
      "Fluent in English (spoken and written)",
      "Minimum 5 years of experience working with young children",
      "Warm, patient, and collaborative approach to supporting children and guides",
    ],
  },
];

function CareersPage() {
  return (
    <PageShell>
      <h1 className="heading-script text-[38px] lg:text-[44px]">
        CAREERS: Join the NIDO Montessori Team
      </h1>

      <p className="mt-6 max-w-[1000px] font-body text-[19px] leading-[1.9] text-foreground/90">
        As we prepare to welcome young children into a thoughtfully prepared Montessori environment,
        we are inviting passionate and committed individuals to apply for the following positions:
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {careerPositions.map((pos) => (
          <div
            key={pos.title}
            className="nido-card rounded-3xl border-2 border-dashed border-[#e6d8c3] bg-[#f8f3e9]/95 p-8 shadow-sm"
          >
            <h2 className="font-body text-[24px] font-bold text-olive">{pos.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 font-body text-[18px] leading-[1.8] text-foreground/85">
              {pos.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="nido-card mt-10 rounded-3xl border-2 border-dashed border-olive/30 bg-white/90 p-8 shadow-sm">
        <p className="font-body text-[19px] leading-[1.9] text-foreground/90">
          If you believe in nurturing independence, curiosity, and respect for the child, we would love to hear from you.
        </p>
        <p className="mt-4 font-body text-[19px] font-bold text-olive">
          Please share your resume and a brief statement of interest at:{" "}
          <a href="tel:+919618853888" className="underline hover:text-caramel">
            9618853888
          </a>{" "}
          or{" "}
          <a href="mailto:info@nidomontessori.in" className="underline hover:text-caramel">
            info@nidomontessori.in
          </a>
        </p>
      </div>
    </PageShell>
  );
}
