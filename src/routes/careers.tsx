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
          "Join NIDO Montessori Preschool in Bowrampet, Hyderabad. Openings for Montessori guides, classroom assistants and administrative roles.",
      },
      { property: "og:title", content: "Careers — NIDO Montessori Preschool" },
      { property: "og:description", content: "Grow with a team that trusts the child." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

const roles = [
  {
    title: "Montessori Guide — Primary (2.9–6 years)",
    detail: "AMI/AMS diploma preferred. Full-time. Bowrampet campus.",
  },
  {
    title: "Montessori Guide — Toddler (14 months–2.9 years)",
    detail: "Assistants to Infancy training or equivalent experience. Full-time.",
  },
  {
    title: "Classroom Assistant",
    detail: "Warm, observant and patient. Training provided in-house.",
  },
  {
    title: "Front Office & Parent Relations",
    detail: "Excellent communication and organisation. Full-time.",
  },
];

function CareersPage() {
  return (
    <PageShell>
      <h1 className="heading-script text-[40px] lg:text-[46px]">Careers</h1>
      <p className="mt-6 max-w-[1000px] text-[19px] leading-[1.9]">
        At NIDO we are building a team that shares one belief: trust the child. If you are a
        Montessori practitioner — trained or aspiring — we would love to hear from you.
      </p>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {roles.map((role) => (
          <li
            key={role.title}
            className="rounded-3xl bg-white/85 px-7 py-7 shadow-[0_5px_18px_oklch(0_0_0/0.08)]"
          >
            <h2 className="font-body text-[22px] font-bold text-olive">{role.title}</h2>
            <p className="mt-3 text-[18px] leading-[1.8]">{role.detail}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-[19px] leading-[1.9]">
        Send your résumé to{" "}
        <a href="mailto:info@nidomontessori.in" className="font-bold text-olive underline">
          info@nidomontessori.in
        </a>{" "}
        with the role in the subject line.
      </p>
    </PageShell>
  );
}
