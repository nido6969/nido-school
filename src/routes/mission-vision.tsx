import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

import missionImg from "@/assets/mission.jpg";
import visionImg from "@/assets/vision.jpg";

export const Route = createFileRoute("/mission-vision")({
  component: MissionVisionPage,
  head: () => ({
    meta: [
      { title: "Mission & Vision — NIDO Montessori Preschool" },
      {
        name: "description",
        content:
          "Our mission is to spread the light of the Montessori approach and nurture self-reliant, compassionate children. Read NIDO's vision and core values.",
      },
      { property: "og:title", content: "Mission & Vision — NIDO Montessori Preschool" },
      {
        property: "og:description",
        content: "NIDO's mission, vision and core values for early childhood.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/mission-vision" },
    ],
    links: [{ rel: "canonical", href: "/mission-vision" }],
  }),
});

const coreValues = [
  { term: "Respect", detail: "For the child, for others, for the environment." },
  { term: "Independence", detail: 'Fostering the ability to “do it myself.”' },
  { term: "Curiosity", detail: "Igniting a natural desire to explore and discover." },
  { term: "Community", detail: "Building a supportive and collaborative environment." },
  { term: "Authenticity", detail: "Upholding the true spirit and method of Montessori education." },
];

function MissionVisionPage() {
  return (
    <PageShell>
      <h1 className="font-body text-[#636B2F] text-[40px] sm:text-[50px] font-bold">
        Mission &amp; Vision
      </h1>

      {/* OUR MISSION */}
      <section className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src={missionImg}
            alt="Our Mission - Montessori Classroom"
            width={700}
            height={500}
            className="w-full max-w-[650px] rounded-[18px] object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
          />
        </div>
        <div>
          <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#2a2a2a]">
            Our Mission
          </h2>
          <p className="mt-4 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
            With an intention to spread the light of the Montessori approach, our mission is to promote a self-reliant, compassionate, empathetic childhood amongst the children who have an innate potential to do something noble while building a strong foundation for a responsible adulthood. The world in general is in dire need of such virtue to illuminate this world with their benevolence and create equal opportunities across for every aspiring individual. And the process roots back to the beginning - the childhood. We strive to create an inclusive, respectful, and stimulating 'prepared environment' where children can develop concentration, self-discipline, and a profound sense of self-worth.
          </p>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="mt-16 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#2a2a2a]">
            Our Vision
          </h2>
          <p className="mt-4 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
            We envision a community of curious, compassionate, and capable individuals who are prepared not just for future academic success, but for a lifetime of purposeful engagement with the world. We aim to inspire a deep respect for oneself, others, and the environment, empowering children to become adaptable and innovative thinkers in this fast and ever-changing world.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={visionImg}
            alt="Our Vision - NIDO Montessori"
            width={700}
            height={500}
            loading="lazy"
            className="w-full max-w-[650px] rounded-[18px] object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
          />
        </div>
      </section>

      {/* OUR CORE VALUES */}
      <section className="mt-16">
        <h2 className="font-body text-[#636B2F] text-[36px] sm:text-[44px] font-bold">
          Our Core Values
        </h2>
        <div className="mt-6 space-y-4 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
          {coreValues.map((value) => (
            <p key={value.term}>
              <strong className="font-bold">{value.term}:</strong> {value.detail}
            </p>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

