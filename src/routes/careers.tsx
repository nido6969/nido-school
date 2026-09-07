import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers: Join the NIDO Montessori Team" },
      {
        name: "description",
        content:
          "As we prepare to welcome young children into a thoughtfully prepared Montessori environment, we are inviting passionate and committed individuals to apply.",
      },
      { property: "og:title", content: "Careers: Join the NIDO Montessori Team" },
      {
        property: "og:description",
        content: "Join the NIDO Montessori team in Bowrampet, Hyderabad.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

function CareersPage() {
  return (
    <PageShell>
      <h1 className="font-body text-[#636B2F] text-[32px] sm:text-[42px] lg:text-[50px] font-bold">
        CAREERS: Join the NIDO Montessori Team
      </h1>

      <div className="mt-3 sm:mt-4 font-serif text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-[#333] max-w-[1050px]">
        <p>
          As we prepare to welcome young children into a thoughtfully prepared Montessori
          environment, we are inviting passionate and committed individuals to apply for the
          following positions:
        </p>
      </div>

      {/* POSITION 1 */}
      <section className="mt-6 sm:mt-8 rounded-2xl bg-[#f7f2e8] p-4 sm:p-6 border border-[#e8dcc2] shadow-xs max-w-[1050px]">
        <h2 className="font-serif text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#2a2a2a]">
          1. Montessori Guide
        </h2>
        <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 font-serif text-[15px] sm:text-[18px] leading-[1.6] text-[#333]">
          <li>Certified Montessori qualification (0–6 preferred)</li>
          <li>Minimum 3 years of experience in a Montessori environment</li>
          <li>
            Deep respect for the child and a strong understanding of Montessori philosophy and
            classroom practice
          </li>
        </ul>
      </section>

      {/* POSITION 2 */}
      <section className="mt-5 sm:mt-6 rounded-2xl bg-[#f7f2e8] p-4 sm:p-6 border border-[#e8dcc2] shadow-xs max-w-[1050px]">
        <h2 className="font-serif text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#2a2a2a]">
          2. Montessori Assistant
        </h2>
        <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 font-serif text-[15px] sm:text-[18px] leading-[1.6] text-[#333]">
          <li>Bachelor’s degree in any discipline</li>
          <li>Fluent in English (spoken and written)</li>
          <li>Minimum 5 years of experience working with young children</li>
          <li>Warm, patient, and collaborative approach to supporting children and guides</li>
        </ul>
      </section>

      {/* APPLICATION CONTACT */}
      <div className="mt-8 sm:mt-12 rounded-2xl bg-[#f5ebda] p-5 sm:p-6 border-2 border-dashed border-[#d6c1a5] font-serif text-[16px] sm:text-[18px] leading-[1.7] text-[#333] max-w-[1050px]">
        <p className="font-bold text-[#2a2a2a] text-lg">
          If you believe in nurturing independence, curiosity, and respect for the child, we would
          love to hear from you.
        </p>
        <p className="mt-2 text-[#333]">
          Please share your resume and a brief statement of interest at:
        </p>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <a
            href="https://wa.me/919618853888"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 font-display font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-98 min-h-[44px]"
          >
            <span>WhatsApp: 9618853888</span>
          </a>
          <a
            href="mailto:info@nidomontessori.in"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#636B2F] px-5 py-3 font-display font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-98 min-h-[44px]"
          >
            <span>Email: info@nidomontessori.in</span>
          </a>
        </div>
      </div>
    </PageShell>
  );
}
