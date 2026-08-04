import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import program1 from "@/assets/program-1.jpg";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";
import kidsCircle from "@/assets/image.png";

export const Route = createFileRoute("/programs-environments")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "Programs & Environments — NIDO Montessori Preschool" },
      {
        name: "description",
        content:
          "Toddler Community (14 months–2.9 years) and Primary (2.6–6 years) prepared environments with authentic Montessori materials at NIDO, Hyderabad.",
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
  {
    number: "4",
    title: "Practical Life & Independence:",
    intro: "Skills that build independence and routine.",
    points: [
      {
        term: "Practical Independence:",
        detail:
          "Supporting the journey toward self-sufficiency with Toilet Training and other practical life skills like dressing, washing hands, and preparing simple snacks.",
      },
    ],
  },
];

type PrimaryArea = {
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  points: { term: string; detail: string }[];
};

const primaryAreas: PrimaryArea[] = [
  {
    number: "1",
    title: "Practical Life",
    subtitle: "The Foundation of Success",
    intro: 'While it looks like "housework," these activities are the secret to academic focus.',
    points: [
      {
        term: "Refining Coordination:",
        detail:
          'Tasks like pouring, sweeping, and polishing develop the "pincer grip" and hand-strength necessary for writing.',
      },
      {
        term: "Executive Function:",
        detail:
          "Following a multi-step process (getting a tray, setting up, performing the task, cleaning up) builds the logical thinking required for complex math later.",
      },
      {
        term: "Grace and Courtesy:",
        detail:
          "Children learn the social \"mechanics\" of life—how to introduce themselves, resolve a conflict with a peer, and care for their community.",
      },
    ],
  },
  {
    number: "2",
    title: "Sensorial",
    subtitle: "Organizing the World",
    intro: "Children use scientifically designed materials to categorize their surroundings.",
    points: [
      {
        term: "Abstract to Concrete:",
        detail:
          'By handling the Pink Tower or Broad Stair, children physically "feel" the difference in dimensions, preparing their brains for geometry.',
      },
      {
        term: "Refining the Senses:",
        detail:
          "Activities focus on grading colors, matching sounds, and identifying textures, which heightens observation skills and scientific inquiry.",
      },
    ],
  },
  {
    number: "3",
    title: "Mathematics",
    subtitle: "From Quantity to Symbols",
    intro: "In Montessori, math isn't on a worksheet; it’s in the child's hands.",
    points: [
      {
        term: "The Decimal System:",
        detail:
          'Using the Golden Bead material, a 4-year-old can physically hold a "unit" and a "thousand" cube, understanding the literal weight and volume of numbers.',
      },
      {
        term: "Operations:",
        detail:
          "Children perform addition, subtraction, multiplication, and division using tangible tools, ensuring they understand the concept before they ever see a symbol on paper.",
      },
    ],
  },
  {
    number: "4",
    title: "Language",
    subtitle: "The Writing Explosion",
    intro: "We follow the natural developmental path: Listening → Speaking → Writing → Reading.",
    points: [
      {
        term: "Phonetic Awareness:",
        detail:
          "Using Sandpaper Letters, children learn the sounds of the alphabet through touch and sight simultaneously.",
      },
      {
        term: "The Moveable Alphabet:",
        detail:
          "Before a child has the fine motor control to hold a pencil perfectly, they can \"write\" stories by laying out wooden letters, ensuring their creativity isn't held back by their physical development.",
      },
      {
        term: "Total Reading:",
        detail:
          "Our environment is rich in high-quality literature and vocabulary cards, turning reading into a joyful discovery rather than a chore.",
      },
    ],
  },
  {
    number: "5",
    title: "Cultural Studies",
    subtitle: "Citizens of the World",
    intro: "This is where we spark a child’s wonder for the universe.",
    points: [
      {
        term: "Geography:",
        detail:
          "Using colorful puzzle maps, children learn the names and shapes of continents and countries, fostering a sense of global belonging.",
      },
      {
        term: "Sciences:",
        detail:
          "Botany and Zoology are explored through hands-on classification, gardening, and observing life cycles (like the butterfly or the frog).",
      },
      {
        term: "Art & Music:",
        detail:
          "Integrated daily, allowing children to express their internal world through various mediums and rhythms.",
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
        Programs &amp; Environments
      </h1>
      <p className="mx-auto mt-6 max-w-[1150px] text-center text-[19px] leading-[1.9]">
        At NIDO, each of our classrooms is a carefully 'prepared environment' designed to meet the
        specific developmental needs of children within distinct age ranges. Our beautiful spaces
        encourage freedom of movement, exploration, and hands-on learning with authentic Montessori
        materials.
      </p>

      <div className="mt-14 grid items-start gap-10 xl:grid-cols-[1.15fr_1fr]">
        <section>
          <h2 className="heading-script text-[34px] lg:text-[38px]">Toddler Community</h2>
          <p className="mt-2 font-display text-[22px] font-bold text-foreground">
            Toddler Community (Ages 14 months – 2.9 years)
          </p>

          {toddlerGroups.map((group) => (
            <div key={group.number} className="nido-card mt-8 rounded-2xl bg-[#f8f3e9]/95 p-6 shadow-sm">
              <p className="text-[19px] leading-[1.9]">
                <strong>
                  {group.number}. {group.title}
                </strong>{" "}
                {group.intro}
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                {group.points.map((point) => (
                  <li key={point.term} className="text-[18px] leading-[1.8]">
                    <strong>{point.term}</strong> {point.detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className="heading-script mt-16 text-[34px] lg:text-[38px]">Primary Classroom</h2>
          <p className="mt-2 font-display text-[22px] font-bold text-foreground">
            Primary Classroom (Ages 2.6 – 6 years)
          </p>
          <p className="mt-4 text-[19px] leading-[1.9]">
            In our Primary environment, the world opens up. Children transition from the "how-to" of
            the toddler years to the "why" and "what" of the world. This mixed-age setting allows
            younger children to learn from their peers and older children to solidify their
            knowledge by becoming mentors.
          </p>

          {primaryAreas.map((area) => (
            <div key={area.number} className="nido-card mt-8 rounded-2xl bg-[#f8f3e9]/95 p-6 shadow-sm">
              <h3 className="font-body text-[22px] font-bold text-olive">
                {area.number}. {area.title}: {area.subtitle}
              </h3>
              <p className="mt-2 text-[18px] italic text-foreground/85">{area.intro}</p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                {area.points.map((point) => (
                  <li key={point.term} className="text-[18px] leading-[1.8]">
                    <strong>{point.term}</strong> {point.detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="sticky top-28 grid grid-cols-2 gap-6">
          {gallery.map((image) => (
            <img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              width={image.w}
              height={image.h}
              loading="lazy"
              className="nido-card aspect-square w-full rounded-2xl bg-white/60 object-cover shadow-[0_6px_20px_oklch(0_0_0/0.16)]"
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
