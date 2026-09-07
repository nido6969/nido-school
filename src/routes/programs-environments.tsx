import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

import toddler1 from "@/assets/toddler_1.jpg";
import toddler2 from "@/assets/toddler_2.jpg";
import toddler3 from "@/assets/toddler_3.jpg";
import toddler4 from "@/assets/toddler_4.jpg";
import toddler5 from "@/assets/toddler_5.jpg";
import toddler6 from "@/assets/toddler_6.jpg";
import toddler7 from "@/assets/toddler_7.jpg";

import primary1 from "@/assets/primary_1.jpg";
import primary2 from "@/assets/primary_2.jpg";
import primary3 from "@/assets/primary_3.jpg";
import primary4 from "@/assets/primary_4.jpg";
import primary5 from "@/assets/primary_5.jpg";

export const Route = createFileRoute("/programs-environments")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "Programs & Environments — NIDO Montessori Preschool" },
      {
        name: "description",
        content:
          "At NIDO, each of our classrooms is a carefully 'prepared environment' designed to meet the specific developmental needs of children within distinct age ranges.",
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

const toddlerImages = [toddler1, toddler2, toddler3, toddler4, toddler5, toddler6, toddler7];
const primaryImages = [primary1, primary2, primary3, primary4, primary5];

function ProgramsPage() {
  return (
    <PageShell>
      <h1 className="font-body text-[#636B2F] text-[32px] sm:text-[42px] lg:text-[50px] font-bold">
        PROGRAMS/ENVIRONMENTS
      </h1>

      <div className="mt-4 sm:mt-6 max-w-[1100px] font-serif text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-[#333]">
        <p>
          At NIDO, each of our classrooms is a carefully 'prepared environment' designed to meet the
          specific developmental needs of children within distinct age ranges. Our beautiful spaces
          encourage freedom of movement, exploration, and hands-on learning with authentic
          Montessori materials.
        </p>
      </div>

      {/* TODDLER COMMUNITY */}
      <section className="mt-10 sm:mt-14 grid items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="font-body text-[#636B2F] text-[26px] sm:text-[34px] lg:text-[42px] font-bold">
            Toddler Community
          </h2>
          <p className="mt-1.5 font-serif text-[17px] sm:text-[20px] font-bold text-foreground">
            Toddler Community (Ages 14 months – 2.9 years)
          </p>

          <div className="mt-5 space-y-6 sm:space-y-8 font-serif text-[15px] sm:text-[18px] leading-[1.7] text-[#333]">
            <div>
              <p>
                <strong className="font-bold text-[17px] sm:text-[19px]">
                  1. Physical &amp; Coordination Development:
                </strong>{" "}
                These activities build strength, dexterity, and purposeful movement.
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                <li>
                  <strong className="font-bold">Movement &amp; Motor Skills:</strong> Enhancing both
                  Gross Motor Skills (like walking, running, and climbing) and Fine Motor Skills
                  (such as grasping, manipulating objects, and developing the pincer grip).
                </li>
                <li>
                  <strong className="font-bold">Precision &amp; Control:</strong> Developing
                  Eye-Hand Coordination through tasks like stacking, pouring, and fitting shapes.
                </li>
                <li>
                  <strong className="font-bold">Freedom of Movement:</strong> Fostering the
                  Development of Natural Movement by providing opportunities for exploration and
                  practice in a safe environment.
                </li>
              </ul>
            </div>

            <div>
              <p>
                <strong className="font-bold text-[17px] sm:text-[19px]">
                  2. Cognitive &amp; Sensorial Learning:
                </strong>{" "}
                Focusing on the ways children explore the world, concentrate, and make choices.
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                <li>
                  <strong className="font-bold">Sensorial Exploration:</strong> Engaging the five
                  senses with hands-on activities that encourage curiosity and a deeper
                  understanding of the environment (e.g., textures, sounds, and smells).
                </li>
                <li>
                  <strong className="font-bold">Focus &amp; Attention:</strong> Building
                  Concentration skills through sustained, self-directed work on engaging activities.
                </li>
                <li>
                  <strong className="font-bold">Empowered Decision Making:</strong> Practicing early
                  Decision Making by offering meaningful choices and respecting the child's
                  autonomy, which builds confidence and independence.
                </li>
              </ul>
            </div>

            <div>
              <p>
                <strong className="font-bold text-[17px] sm:text-[19px]">
                  3. Language, Social &amp; Creative Growth:
                </strong>{" "}
                Cultivating communication, emotional intelligence, and self-expression.
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                <li>
                  <strong className="font-bold">Communication &amp; Literacy:</strong> Strengthening
                  Language Development through rich vocabulary, conversation, and Story Telling.
                </li>
                <li>
                  <strong className="font-bold">Social-Emotional Learning (SEL):</strong> Developing
                  Social and Emotional Learning skills, including empathy, self-regulation, sharing,
                  and understanding group dynamics.
                </li>
                <li>
                  <strong className="font-bold">Creative Expression:</strong> Introducing
                  foundational experiences in Art (e.g., coloring, painting) and Music (e.g.,
                  singing, movement, simple instruments).
                </li>
              </ul>
            </div>

            <div>
              <p>
                <strong className="font-bold text-[17px] sm:text-[19px]">
                  4. Practical Life &amp; Independence:
                </strong>{" "}
                Skills that build independence and routine.
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                <li>
                  <strong className="font-bold">Practical Independence:</strong> Supporting the
                  journey toward self-sufficiency with Toilet Training and other practical life
                  skills like dressing, washing hands, and preparing simple snacks.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* TODDLER IMAGES COLUMN */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4 mt-4 lg:mt-0">
          {toddlerImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Toddler Community ${idx + 1}`}
              width={260}
              height={370}
              loading="lazy"
              className="w-full h-[160px] sm:h-[220px] lg:h-[260px] rounded-xl object-cover shadow-sm"
            />
          ))}
        </div>
      </section>

      {/* PRIMARY CLASSROOM */}
      <section className="mt-14 sm:mt-20">
        <h2 className="font-body text-[#636B2F] text-[26px] sm:text-[34px] lg:text-[42px] font-bold">
          Primary Classroom
        </h2>
        <p className="mt-1.5 font-serif text-[17px] sm:text-[20px] font-bold text-foreground">
          Primary Classroom (Ages 2.6 - 6 years)
        </p>

        <div className="mt-6 sm:mt-8 grid items-start gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* PRIMARY IMAGES COLUMN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {primaryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Primary Classroom ${idx + 1}`}
                width={700}
                height={500}
                loading="lazy"
                className="w-full h-[220px] sm:h-[260px] lg:h-[320px] rounded-xl object-cover shadow-sm"
              />
            ))}
          </div>

          <div className="font-serif text-[15px] sm:text-[18px] leading-[1.7] text-[#333] space-y-6 sm:space-y-8">
            <p>
              In our Primary environment, the world opens up. Children transition from the "how-to"
              of the toddler years to the "why" and "what" of the world. This mixed-age setting
              allows younger children to learn from their peers and older children to solidify their
              knowledge by becoming mentors.
            </p>

            <div>
              <p>
                <strong className="font-bold text-[17px] sm:text-[20px]">
                  1. Practical Life: The Foundation of Success
                </strong>
              </p>
              <p className="mt-1 text-foreground/80 italic text-sm sm:text-base">
                While it looks like "housework," these activities are the secret to academic focus.
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                <li>
                  <strong className="font-bold">Refining Coordination:</strong> Tasks like pouring,
                  sweeping, and polishing develop the "pincer grip" and hand-strength necessary for
                  writing.
                </li>
                <li>
                  <strong className="font-bold">Executive Function:</strong> Following a multi-step
                  process (getting a tray, setting up, performing the task, cleaning up) builds the
                  logical thinking required for complex math later.
                </li>
                <li>
                  <strong className="font-bold">Grace and Courtesy:</strong> Children learn the
                  social "mechanics" of life—how to introduce themselves, resolve a conflict with a
                  peer, and care for their community.
                </li>
              </ul>
            </div>

            <div>
              <p>
                <strong className="font-bold text-[17px] sm:text-[20px]">
                  2. Sensorial: Organizing the World
                </strong>
              </p>
              <p className="mt-1 text-foreground/80 italic text-sm sm:text-base">
                Children use scientifically designed materials to categorize their surroundings.
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                <li>
                  <strong className="font-bold">Abstract to Concrete:</strong> By handling the Pink
                  Tower or Broad Stair, children physically "feel" the difference in dimensions,
                  preparing their brains for geometry.
                </li>
                <li>
                  <strong className="font-bold">Refining the Senses:</strong> Activities focus on
                  grading colors, matching sounds, and identifying textures, which heightens
                  observation skills and scientific inquiry.
                </li>
              </ul>
            </div>

            <div>
              <p>
                <strong className="font-bold text-[17px] sm:text-[20px]">
                  3. Mathematics: From Quantity to Symbols
                </strong>
              </p>
              <p className="mt-1 text-foreground/80 italic text-sm sm:text-base">
                In Montessori, math isn't on a worksheet; it’s in the child's hands.
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                <li>
                  <strong className="font-bold">The Decimal System:</strong> Using the Golden Bead
                  material, a 4-year-old can physically hold a "unit" and a "thousand" cube,
                  understanding the literal weight and volume of numbers.
                </li>
                <li>
                  <strong className="font-bold">Operations:</strong> Children perform addition,
                  subtraction, multiplication, and division using tangible tools, ensuring they
                  understand the concept before they ever see a symbol on paper.
                </li>
              </ul>
            </div>

            <div>
              <p>
                <strong className="font-bold text-[17px] sm:text-[20px]">
                  4. Language: The Writing Explosion
                </strong>
              </p>
              <p className="mt-1 text-foreground/80 italic text-sm sm:text-base">
                We follow the natural developmental path: Listening → Speaking → Writing → Reading.
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                <li>
                  <strong className="font-bold">Phonetic Awareness:</strong> Using Sandpaper
                  Letters, children learn the sounds of the alphabet through touch and sight
                  simultaneously.
                </li>
                <li>
                  <strong className="font-bold">The Moveable Alphabet:</strong> Before a child has
                  the fine motor control to hold a pencil perfectly, they can "write" stories by
                  laying out wooden letters, ensuring their creativity isn't held back by their
                  physical development.
                </li>
                <li>
                  <strong className="font-bold">Total Reading:</strong> Our environment is rich in
                  high-quality literature and vocabulary cards, turning reading into a joyful
                  discovery rather than a chore.
                </li>
              </ul>
            </div>

            <div>
              <p>
                <strong className="font-bold text-[17px] sm:text-[20px]">
                  5. Cultural Studies: Citizens of the World
                </strong>
              </p>
              <p className="mt-1 text-foreground/80 italic text-sm sm:text-base">
                This is where we spark a child’s wonder for the universe.
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                <li>
                  <strong className="font-bold">Geography:</strong> Using colorful puzzle maps,
                  children learn the names and shapes of continents and countries, fostering a sense
                  of global belonging.
                </li>
                <li>
                  <strong className="font-bold">Sciences:</strong> Botany and Zoology are explored
                  through hands-on classification, gardening, and observing life cycles (like the
                  butterfly or the frog).
                </li>
                <li>
                  <strong className="font-bold">Art &amp; Music:</strong> Integrated daily, allowing
                  children to express their internal world through various mediums and rhythms.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
