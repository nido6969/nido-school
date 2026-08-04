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
          "Embark on a Montessori education for your child. Explore our admissions process at NIDO Montessori Preschool, Bowrampet, Hyderabad.",
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
  return (
    <PageShell>
      <h1 className="font-body text-[#636B2F] text-[40px] sm:text-[50px] font-bold">
        ADMISSIONS
      </h1>

      <p className="mt-6 max-w-[1050px] font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
        Embarking on a Montessori education for your child is a significant and rewarding decision. At NIDO, we strive to make our admissions process clear, supportive, and welcoming for every family. We encourage prospective parents to fully understand our philosophy and environment to ensure it's the perfect fit for your child's developmental journey.
      </p>

      <h2 className="mt-10 font-body text-[#636B2F] text-[32px] sm:text-[40px] font-bold">
        Our Admissions Process
      </h2>

      <div className="mt-6 space-y-6 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333] max-w-[1050px]">
        <p>
          <strong className="font-bold">1. Explore our website &amp; philosophy:</strong> Familiarize yourself with the Montessori Method and our school's unique approach.
        </p>

        <p>
          <strong className="font-bold">2. Schedule a Tour:</strong> Experience our prepared environment firsthand, observe classrooms, and meet our team. This is a wonderful opportunity to ask questions.
        </p>

        <p>
          <strong className="font-bold">3. Submit an application:</strong> Complete our online application form.{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfAYIppgWT5WNm0p6splEqJjd9WpC1Q-Tck_5WELaJhsLecfg/viewform"
            target="_blank"
            rel="noreferrer"
            className="text-[#636B2F] font-bold underline hover:text-[#c4935c]"
          >
            ( Basic Information Form )
          </a>
        </p>

        <p>
          <strong className="font-bold">4. Schedule a collaborative session:</strong> This session makes sure to understand each other better to remain focussed on the common crux - “The Child”
        </p>

        <p>
          <strong className="font-bold">5. Enrollment Offer:</strong> We will notify you of your child's acceptance.
        </p>

        <p>
          <strong className="font-bold">6. Secure Your Spot:</strong> Complete the enrollment agreement and submit required deposits by the specified deadline.
        </p>
      </div>
    </PageShell>
  );
}

