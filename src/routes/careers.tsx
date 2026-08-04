import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers – NIDO Montessori" },
      {
        name: "description",
        content:
          "Join the NIDO Montessori Team in Bowrampet, Hyderabad. Openings for Montessori Guides and Montessori Assistants.",
      },
      { property: "og:title", content: "Careers – NIDO Montessori" },
      { property: "og:description", content: "Grow with a team that trusts the child." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

function CareersPage() {
  return (
    <PageShell>
      <h1 className="font-body text-[#636B2F] text-[40px] sm:text-[50px] font-bold">
        CAREERS
      </h1>

      <div className="mt-4 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333] max-w-[1050px]">
        <p className="font-bold text-[22px] text-[#2a2a2a]">
          Join the NIDO Montessori Team
        </p>
        <p className="mt-2">
          As we prepare to welcome young children into a thoughtfully prepared Montessori environment, we are inviting passionate and committed individuals to apply for the following positions:
        </p>
      </div>

      {/* POSITION 1 */}
      <section className="mt-8">
        <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#2a2a2a]">
          1. Montessori Guide
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-3 font-serif text-[18px] sm:text-[19px] leading-[1.7] text-[#333]">
          <li>Certified Montessori qualification (0–6 preferred)</li>
          <li>Minimum 3 years of experience in a Montessori environment</li>
          <li>Deep respect for the child and a strong understanding of Montessori philosophy and classroom practice</li>
        </ul>
      </section>

      {/* POSITION 2 */}
      <section className="mt-8">
        <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#2a2a2a]">
          2. Montessori Assistant
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-3 font-serif text-[18px] sm:text-[19px] leading-[1.7] text-[#333]">
          <li>Bachelor’s degree in any discipline</li>
          <li>Fluent in English (spoken and written)</li>
          <li>Minimum 5 years of experience working with young children</li>
          <li>Warm, patient, and collaborative approach to supporting children and guides</li>
        </ul>
      </section>

      {/* APPLICATION CONTACT */}
      <div className="mt-12 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333] max-w-[1050px]">
        <p className="font-bold">
          If you believe in nurturing independence, curiosity, and respect for the child, we would love to hear from you.
        </p>
        <div className="mt-4">
          <p className="font-bold text-[#2a2a2a]">Send Resume:</p>
          <p className="mt-1">
            <a
              href="https://wa.me/9618853888"
              target="_blank"
              rel="noreferrer"
              className="text-[#333] font-bold hover:text-[#636B2F] underline"
            >
              Phone: 9618853888
            </a>
          </p>
          <p className="mt-1">
            <a
              href="mailto:info@nidomontessori.in"
              className="text-[#333] font-bold hover:text-[#636B2F] underline"
            >
              Email: info@nidomontessori.in
            </a>
          </p>
        </div>
      </div>
    </PageShell>
  );
}

