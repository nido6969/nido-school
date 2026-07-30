import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import program1 from "@/assets/program-1.jpg";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";
import kidsCircle from "@/assets/kids-circle.png";

export const Route = createFileRoute("/programs-environments")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "Programs & Environments — NIDO Montessori Preschool" },
      {
        name: "description",
        content:
          "Toddler Community (14 months–2.9 years) and Primary (2.9–6 years) prepared environments with authentic Montessori materials at NIDO, Hyderabad.",
      },
      { property: "og:title", content: "Programs & Environments — NIDO Montessori Preschool" },
      {
        property: "og:description",
        content: "Prepared environments designed for each stage of development.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/programs-environments" },
    ],
    links: [{ rel: "canonical", href: "/programs-environments" }],
  }),
});

type Group = {
  number: string;
  title: string;
  intro: string;
  points: { term: string; detail: string }[];
};

const toddlerGroups: Group[] = [
  {
    number: "1",
    title: "Physical & Coordination Development:",
    intro: "These activities build strength, dexterity, and purposeful movement.",
    points: [
      {
        term: "Movement & Motor Skills:",
        detail:
          "Enhancing both Gross Motor Skills (like walking, running, and climbing) and Fine Motor Skills (such as grasping, manipulating objects, and developing the pincer grip).",
      },
      {
        term: "Precision & Control:",
        detail:
          "Developing Eye-Hand Coordination through tasks like stacking, pouring, and fitting shapes.",
      },
      {
        term: "Freedom of Movement:",
        detail:
          "Fostering the Development of Natural Movement by providing opportunities for exploration and practice in a safe environment.",
      },
    ],
  },
  {
    number: "2",
    title: "Cognitive & Sensorial Learning:",
    intro: "Focusing on the ways children explore the world, concentrate, and make choices.",
    points: [
      {
        term: "Sensorial Exploration:",
        detail:
          "Engaging the five senses with hands-on activities that encourage curiosity and a deeper understanding of the environment (e.g., textures, sounds, and smells).",
      },
      {
        term: "Focus & Attention:",
        detail:
          "Building Concentration skills through sustained, self-directed work on engaging activities.",
      },
      {
        term: "Empowered Decision Making:",
        detail:
          "Practicing early Decision Making by offering meaningful choices and respecting the child's autonomy, which builds confidence and independence.",
      },
    ],
  },
  {
    number: "3",
    title: "Language, Social & Creative Growth:",
    intro: "Cultivating communication, emotional intelligence, and self-expression.",
    points: [
      {
        term: "Communication & Literacy:",
        detail:
          "Strengthening Language Development through rich vocabulary, conversation, and Story Telling.",
      },
      {
        term: "Social-Emotional Learning (SEL):",
        detail:
          "Developing Social and Emotional Learning skills, including empathy, self-regulation, sharing, and understanding group dynamics.",
      },
      {
        term: "Creative Expression:",
        detail:
          "Introducing foundational experiences in Art (e.g., coloring, painting) and Music (e.g., singing, movement, simple instruments).",
      },
    ],
  },
];

const gallery = [
  { src: program1, alt: "Toddler working with wooden Montessori materials", w: 896, h: 1024 },
  { src: classroom1, alt: "Children at work in the prepared environment", w: 1280, h: 896 },
  { src: classroom2, alt: "Guide welcoming a child into the classroom", w: 1280, h: 896 },
  { src: kidsCircle, alt: "Illustration of children building with blocks", w: 1024, h: 1024 },
];

function ProgramsPage() {
  return (
    <PageShell>
      <h1 className="heading-script text-center text-[40px] lg:text-[48px]">
        Programs and Environments
      </h1>
      <p className="mx-auto mt-6 max-w-[1150px] text-center text-[19px] leading-[1.9]">
        At NIDO, each of our classrooms is a carefully 'prepared environment' designed to meet the
        specific developmental needs of children within distinct age ranges. Our beautiful spaces
        encourage freedom of movement, exploration, and hands-on learning with authentic Montessori
        materials.
      </p>

      <div className="mt-14 grid items-start gap-10 xl:grid-cols-[1.15fr_1fr]">
        <section>
          <h2 className="heading-script text-[32px] lg:text-[36px]">Toddler Community</h2>
          <p className="mt-3 font-display text-[24px] font-bold text-foreground">
            Toddler Community (Ages 14 months – 2.9 years)
          </p>

          {toddlerGroups.map((group) => (
            <div key={group.number} className="mt-10">
              <p className="text-[19px] leading-[1.9]">
                <strong>
                  {group.number}. {group.title}
                </strong>{" "}
                {group.intro}
              </p>
              <ul className="mt-5 list-disc space-y-4 pl-8">
                {group.points.map((point) => (
                  <li key={point.term} className="text-[19px] leading-[1.9]">
                    <strong>{point.term}</strong> {point.detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className="heading-script mt-16 text-[32px] lg:text-[36px]">Primary Community</h2>
          <p className="mt-3 font-display text-[24px] font-bold text-foreground">
            Primary Community (Ages 2.9 – 6 years)
          </p>
          <ul className="mt-5 list-disc space-y-4 pl-8">
            <li className="text-[19px] leading-[1.9]">
              <strong>Practical Life:</strong> Care of self, care of the environment, grace and
              courtesy — building order, coordination, concentration and independence.
            </li>
            <li className="text-[19px] leading-[1.9]">
              <strong>Sensorial:</strong> Refining the senses and classifying impressions of the
              world through scientifically designed materials.
            </li>
            <li className="text-[19px] leading-[1.9]">
              <strong>Language:</strong> Phonetic awareness, writing and reading emerging naturally
              through the moveable alphabet and rich conversation.
            </li>
            <li className="text-[19px] leading-[1.9]">
              <strong>Mathematics:</strong> Concrete materials that make quantity, the decimal
              system and operations tangible before they become abstract.
            </li>
            <li className="text-[19px] leading-[1.9]">
              <strong>Culture:</strong> Geography, botany, zoology, science, art and music that open
              the child's window to the wider world.
            </li>
          </ul>
        </section>

        <div className="grid grid-cols-2 gap-6">
          {gallery.map((image) => (
            <img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              width={image.w}
              height={image.h}
              loading="lazy"
              className="aspect-square w-full rounded-2xl bg-white/60 object-cover shadow-[0_6px_20px_oklch(0_0_0/0.16)]"
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
