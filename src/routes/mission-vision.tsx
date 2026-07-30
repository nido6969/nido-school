import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";

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
  { term: "Independence", detail: "Helping the child to do it by themselves." },
  { term: "Curiosity", detail: "Protecting and fuelling the natural desire to learn." },
  { term: "Community", detail: "A partnership between children, guides and families." },
  { term: "Excellence", detail: "Authentic Montessori practice, without compromise." },
];

function MissionVisionPage() {
  return (
    <PageShell>
      <h1 className="heading-script text-center text-[40px] lg:text-[48px]">Mission &amp; Vision</h1>

      <section className="mt-12 grid items-start gap-10 xl:grid-cols-2">
        <img
          src={classroom1}
          alt="Children working with Montessori materials in a prepared classroom"
          width={1280}
          height={896}
          className="w-full rounded-2xl object-cover shadow-[0_8px_26px_oklch(0_0_0/0.16)]"
        />
        <div>
          <h2 className="font-body text-[34px] font-bold">Our Mission</h2>
          <p className="mt-5 text-[19px] leading-[1.9]">
            With an intention to spread the light of the Montessori approach, our mission is to
            promote a self-reliant, compassionate, empathetic childhood amongst the children who
            have an innate potential to do something noble while building a strong foundation for a
            responsible adulthood. The world in general is in dire need of such virtue to illuminate
            this world with their benevolence and create equal opportunities across for every
            aspiring individual. And the process roots back to the beginning - the childhood. We
            strive to create an inclusive, respectful, and stimulating 'prepared environment' where
            children can develop concentration, self-discipline, and a profound sense of self-worth.
          </p>
        </div>
      </section>

      <section className="mt-20 grid items-start gap-10 xl:grid-cols-2">
        <div>
          <h2 className="font-body text-[34px] font-bold">Our Vision</h2>
          <p className="mt-5 text-[19px] leading-[1.9]">
            We envision a community of curious, compassionate, and capable individuals who are
            prepared not just for future academic success, but for a lifetime of purposeful
            engagement with the world. We aim to inspire a deep respect for oneself, others, and the
            environment, empowering children to become adaptable and innovative thinkers in this
            fast and ever-changing world.
          </p>
        </div>
        <img
          src={classroom2}
          alt="A Montessori guide welcoming a toddler while parents observe"
          width={1280}
          height={896}
          loading="lazy"
          className="w-full rounded-2xl object-cover shadow-[0_8px_26px_oklch(0_0_0/0.16)]"
        />
      </section>

      <section className="mt-20">
        <h2 className="heading-script text-[38px] lg:text-[44px]">Our Core Values</h2>
        <dl className="mt-6 space-y-4">
          {coreValues.map((value) => (
            <div key={value.term} className="text-[19px] leading-[1.9]">
              <dt className="inline font-bold">{value.term}</dt>
              <dd className="inline">: {value.detail}</dd>
            </div>
          ))}
        </dl>
      </section>
    </PageShell>
  );
}
