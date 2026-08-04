import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Blogs – NIDO Montessori" },
      {
        name: "description",
        content:
          "Welcome to the NIDO Blog – your resource for insights into Montessori education, child development, and parental guidance in Bowrampet, Hyderabad.",
      },
      { property: "og:title", content: "Blogs – NIDO Montessori" },
      { property: "og:description", content: "Montessori insights for parents and guides." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
});

interface BlogArticle {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  sections: {
    heading?: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  faqs?: { question: string; answer: string }[];
  references?: string[];
}

const allBlogArticles: BlogArticle[] = [
  {
    id: "debunking-7-myths",
    title: "Debunking 7 Common Myths About the Montessori Method",
    subtitle: "A Parent's Guide to Understanding Authentic Montessori Education",
    excerpt:
      "Despite its global recognition, several misconceptions surround Montessori education. From 'lack of structure' to 'only for gifted children,' we address and debunk the 7 most common myths.",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Montessori education has been empowering children globally for over a century. However, as its popularity grows, so do various misconceptions about what actually happens in a Montessori classroom. Many parents considering Montessori for their children encounter conflicting opinions and myths.",
          "At NIDO Montessori, we believe in clarity and open dialogue. Here, we address and debunk seven of the most common myths about Montessori education.",
        ],
      },
      {
        heading: "Myth 1: Montessori Classrooms Have No Structure and Children Do Whatever They Want",
        paragraphs: [
          "The Reality: Montessori operates on the principle of 'Freedom Within Limits.' While children have the freedom to choose their activities, this choice exists within a carefully structured environment.",
          "Children learn self-discipline because they are guided by ground rules that emphasize respect for others, care for materials, and completion of chosen tasks.",
        ],
        bullets: [
          "Freedom to choose work from prepared materials",
          "Respect for the working space of peers",
          "Responsibility to return materials to their designated spots",
        ],
      },
      {
        heading: "Myth 2: Montessori Discourages Creativity and Imagination",
        paragraphs: [
          "The Reality: Montessori fosters authentic creativity by grounding it in reality and sensory experiences. Rather than offering fantasy-based toys, Montessori materials encourage children to explore real-world concepts, art, music, storytelling, and practical life skills.",
          "True imagination blossoms when children have a solid understanding of the world around them, allowing them to solve real problems and express themselves meaningfully.",
        ],
      },
      {
        heading: "Myth 3: Montessori is Only for Preschool or Early Childhood",
        paragraphs: [
          "The Reality: While Montessori is widely known for early childhood (0–6 years), Dr. Maria Montessori developed an educational framework spanning four distinct planes of development up to age 24.",
          "Montessori programs exist for toddlers, primary children, elementary students, and adolescents, adapting to the psychological needs of each stage of life.",
        ],
      },
      {
        heading: "Myth 4: Montessori Does Not Prepare Children for the Real World or Traditional Schools",
        paragraphs: [
          "The Reality: Montessori children develop exceptional executive function, adaptability, critical thinking, and social-emotional resilience.",
          "Research shows that Montessori graduates adapt remarkably well to traditional school environments because they possess strong self-motivation, independence, and problem-solving skills.",
        ],
      },
      {
        heading: "Myth 5: Montessori is Only for Wealthy Families or Gifted Children",
        paragraphs: [
          "The Reality: Dr. Maria Montessori originally developed her method working with children from low-income backgrounds in the Casa dei Bambini in Rome.",
          "The Montessori philosophy is universal and benefits children of all backgrounds, learning styles, and abilities by meeting each child at their individual stage of development.",
        ],
      },
      {
        heading: "Myth 6: Children Work Only Individually and Do Not Learn Social Skills",
        paragraphs: [
          "The Reality: Mixed-age classrooms naturally foster rich social interaction, mentorship, and community spirit. Older children mentor younger peers, building leadership and empathy.",
          "Lessons in Grace and Courtesy teach children explicit social skills such as introducing oneself, waiting for a turn, and resolving conflicts peacefully.",
        ],
      },
      {
        heading: "Myth 7: Academics Are Pushed Too Early or Ignored Completely",
        paragraphs: [
          "The Reality: Montessori balances academic mastery with developmental readiness. Concrete materials allow young children to grasp complex concepts in math, language, and geography effortlessly through tactile exploration.",
          "Children learn to read, write, and compute when their individual development calls for it, creating a lifelong love for learning rather than stress or rote memorization.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Montessori suitable for energetic or active children?",
        answer:
          "Yes! Montessori environments allow freedom of movement. Children are not forced to sit at desks for long hours, making it ideal for active learners.",
      },
      {
        question: "How do Montessori teachers assess progress without grades?",
        answer:
          "Trained Montessori guides use continuous, detailed observation to track mastery of concepts and tailor future presentations to each child's individual pace.",
      },
    ],
  },
  {
    id: "spiritual-belief",
    title: "Dr. Maria Montessori's Core Beliefs on the Child's Spiritual Development",
    subtitle: "Nurturing the Inner Spirit and Natural Humanity of the Young Child",
    excerpt:
      "Dr. Montessori believed that every child possesses an innate spiritual force that drives their natural development. Honoring this spiritual nature requires creating peaceful, respectful environments.",
    sections: [
      {
        heading: "Understanding the Child's Spiritual Nature",
        paragraphs: [
          "Dr. Maria Montessori viewed the child not merely as a biological entity to be fed and educated, but as a spiritual embryo unfolding according to natural laws. In her writings, she emphasized that true education must serve the spirit of the child.",
          "For Montessori, 'spiritual' did not refer to dogmatic religious instruction, but to the child's intrinsic human spirit—their capacity for wonder, love, concentration, peace, and moral dignity.",
        ],
      },
      {
        heading: "The Role of the Prepared Environment in Spiritual Growth",
        paragraphs: [
          "A quiet, orderly, and beautiful environment allows the child's inner spiritual life to manifest. When children engage in deep, uninterrupted work with Montessori materials, they enter a state of peaceful concentration.",
          "This concentration leads to what Montessori called 'normalization'—a state where the child becomes joyful, helpful, self-disciplined, and deeply peaceful.",
        ],
        bullets: [
          "Beauty, harmony, and cleanliness in the classroom",
          "Freedom of choice leading to intrinsic motivation",
          "Respect for the child's inner rhythm and focus",
        ],
      },
    ],
  },
  {
    id: "follow-the-child",
    title: "Why \"Follow the Child\" is the Golden Rule of the Montessori Method",
    subtitle: "Observation, Respect, and Individualized Learning Paths",
    excerpt:
      "Observing each child's intrinsic interests and developmental readiness allows trained guides to offer the right material at the precise moment, fostering authentic love for learning.",
    sections: [
      {
        heading: "What 'Follow the Child' Really Means",
        paragraphs: [
          "One of Maria Montessori's most famous quotes is: 'Follow the child, but follow the child as his leader.' This phrase is often misunderstood as allowing children unguided license. In reality, it means observing the child carefully to discover their individual developmental needs, interests, and readiness.",
          "By following the child, the Montessori guide presents materials that match the child's exact sensitive period, leading to spontaneous engagement and deep understanding.",
        ],
      },
      {
        heading: "The Power of Scientific Observation",
        paragraphs: [
          "Observation is the primary tool of a Montessori educator. Rather than imposing a rigid one-size-fits-all curriculum, the guide watches how the child interacts with materials, peers, and space.",
          "Through quiet observation, adults learn when to step in with a new presentation and when to step back and let the child master a skill independently.",
        ],
      },
    ],
  },
  {
    id: "freedom-within-limits",
    title: "Freedom Within Limits: Finding the Balance Between Choice and Structure",
    subtitle: "Building Internal Discipline and Independence in Early Childhood",
    excerpt:
      "Providing clear, consistent boundaries allows children true freedom to choose their activities independently within a safe, structured framework, building self-discipline.",
    sections: [
      {
        heading: "The Balance Between Choice and Responsibility",
        paragraphs: [
          "Dr. Maria Montessori observed: 'To let the child do as he likes when he has not yet developed any powers of control is to betray the idea of freedom.' Real freedom is not chaos; it is the capacity for self-direction within respectful boundaries.",
          "In a Montessori environment, children are free to choose their work, decide where to sit, and work for as long as they need—provided they respect the rights of others and care for the materials.",
        ],
      },
      {
        heading: "Key Elements of Freedom Within Limits",
        paragraphs: [
          "Limits create psychological safety and predictability. When boundaries are clear, consistent, and logical, children do not waste energy testing rules and can focus fully on exploration and learning.",
        ],
        bullets: [
          "Freedom of movement vs. respect for others' workspace",
          "Freedom to choose work vs. commitment to complete and return materials",
          "Freedom to communicate vs. maintaining a peaceful classroom tone",
        ],
      },
    ],
  },
  {
    id: "absorbent-mind",
    title: "The Absorbent Mind: Understanding How Your 0-6-Year-Old Learns",
    subtitle: "The Neurobiology of Early Learning and Peak Brain Plasticity",
    excerpt:
      "During the first six years, a child's mind effortlessly absorbs language, social cues, and sensory impressions directly from their environment without conscious effort.",
    sections: [
      {
        heading: "The Unconscious and Conscious Absorbent Mind",
        paragraphs: [
          "Dr. Maria Montessori discovered that from birth to age six, children possess a unique mind that absorbs knowledge directly from their environment like a sponge. Unlike adults, who must make conscious efforts to study, the young child absorbs language, culture, and concepts effortlessly.",
          "From 0 to 3 years, the Absorbent Mind works unconsciously. From 3 to 6 years, it transitions into a conscious absorbent mind where the child begins categorizing and refining what was previously absorbed.",
        ],
      },
      {
        heading: "Modern Neuroscience Validation",
        paragraphs: [
          "Harvard University's Center on the Developing Child highlights that more than one million new neural connections are formed every second in the first few years of life.",
          "Because the brain is at its peak neuroplasticity, the quality of the child's environment directly shapes their brain architecture. This is why NIDO Montessori creates rich, beautiful, and purposeful spaces.",
        ],
      },
    ],
  },
  {
    id: "importance-of-order",
    title: "The Importance of Order for the Young Child's Mind",
    subtitle: "Structure, Security, and Early Brain Development (0–6 Years)",
    excerpt:
      "External order in the prepared environment helps construct internal mental order, providing young children with a secure foundation for reasoning, security, and emotional stability.",
    sections: [
      {
        heading: "Why Young Children Crave Order",
        paragraphs: [
          "Order is not merely an aesthetic preference in early childhood—it is a developmental necessity. Between birth and six years, children undergo a sensitive period for order.",
          "External order in the room allows the child to build internal mental order. When every object has a designated, predictable place, the child feels safe, confident, and capable of navigating their environment independently.",
        ],
      },
      {
        heading: "Benefits of Order in the Montessori Environment",
        paragraphs: [
          "When children know where materials are stored and how to return them, they develop organizational skills, logical thinking, and emotional self-regulation.",
        ],
        bullets: [
          "Promotes independence and self-reliance",
          "Reduces anxiety and tantrums caused by unpredictability",
          "Fosters spatial awareness and logical reasoning",
        ],
      },
    ],
  },
  {
    id: "power-of-practice",
    title: "The Power of Practice: Why Repetition is Your Child's Best Teacher",
    subtitle: "Mastery, Brain Development, and Deep Learning in Early Childhood",
    excerpt:
      "Young children often repeat activities dozens of times. Repetition builds neural pathways, refines fine motor control, and strengthens concentration.",
    sections: [
      {
        heading: "The Purpose of Repetition",
        paragraphs: [
          "To adults, watching a child pour water back and forth 20 times might seem repetitive. However, in Montessori, repetition is understood as the child's natural mechanism for brain wiring and skill mastery.",
          "Dr. Montessori noted: 'The child repeats an exercise until he has gained full mastery.' Through repetition, motor pathways become automatic, allowing the brain to move from physical execution to cognitive understanding.",
        ],
      },
      {
        heading: "Neuroscience Behind Practice",
        paragraphs: [
          "Repeated practice strengthens myelination—the protective insulation around nerve fibers—increasing the speed and efficiency of neural signals.",
          "By allowing uninterrupted time for repetition, Montessori environments foster deep concentration, perseverance, and genuine self-confidence.",
        ],
      },
    ],
  },
  {
    id: "spiritual-embryo",
    title: "The Spiritual Embryo: Decoding the First Plane of Development",
    subtitle: "Psychic Self-Construction and Human Adaptation from Birth to Age 3",
    excerpt:
      "Just as the physical embryo forms organs in the womb, the child from 0–3 years forms their personality, intellect, and will through interaction with the prepared environment.",
    sections: [
      {
        heading: "The Human Child's 'Second Birth'",
        paragraphs: [
          "Human infants are born in a state of biological incompletion compared to other mammals. Dr. Maria Montessori called the period from birth to age three the 'Spiritual Embryo' stage—a second womb phase where the child constructs their human personality.",
          "Because humans are not born with fixed instincts, the infant absorbs the specific language, customs, and environment of the world they enter.",
        ],
      },
      {
        heading: "Supporting the Spiritual Embryo at Home and School",
        paragraphs: [
          "Protecting this delicate developmental phase requires warm, calm, and respectful environments free from overstimulation, harsh noise, or forced instruction.",
        ],
      },
    ],
  },
  {
    id: "four-planes",
    title: "What Are the Four Planes of Development in Montessori?",
    subtitle: "A Parent's Guide to Growth from Birth to Age 24",
    excerpt:
      "Montessori identified four distinct six-year stages of human growth: Infancy (0–6), Childhood (6–12), Adolescence (12–18), and Maturity (18–24). Each plane brings distinct physical, psychological, and cognitive characteristics.",
    sections: [
      {
        heading: "Overview of the Four Planes",
        paragraphs: [
          "Dr. Maria Montessori described human development as a series of four distinct six-year cycles: Infancy (0–6), Childhood (6–12), Adolescence (12–18), and Maturity (18–24).",
          "'Development is a series of rebirths,' wrote Montessori. Each plane requires a unique educational environment that responds to the child's evolving psychological needs.",
        ],
      },
      {
        heading: "The First Plane: Birth to 6 Years (The Absorbent Mind)",
        paragraphs: [
          "Characterized by rapid physical growth, sensory exploration, language acquisition, and the construction of individual personality and functional independence.",
        ],
        bullets: [
          "0–3 years: Unconscious Absorbent Mind & Spiritual Embryo",
          "3–6 years: Conscious Absorbent Mind & Sensorial Categorization",
          "Core Needs: Order, movement, real-life practical experiences, language richness",
        ],
      },
    ],
  },
  {
    id: "sensitive-periods",
    title: "What are the \"Sensitive Periods\" and How Do They Drive Early Learning?",
    subtitle: "A Research-Backed Parent's Guide for Children Aged 0–6 Years",
    excerpt:
      "Sensitive periods are temporary developmental windows during which a child is passionately driven to master specific skills such as movement, language, order, and sensory refinement.",
    sections: [
      {
        heading: "Understanding Sensitive Periods",
        paragraphs: [
          "Maria Montessori observed that young children pass through 'sensitive periods'—transitory windows of intense interest and heightened neuroplasticity during which learning specific skills occurs effortlessly.",
          "If a child is supported during a sensitive period, skill acquisition happens with joy and ease. If the window passes unutilized, acquiring the same skill later requires significantly more conscious effort.",
        ],
      },
      {
        heading: "Key Sensitive Periods in Early Childhood (0–6 Years)",
        paragraphs: [
          "1. Language (Birth–6 Years): Rapid absorption of spoken language, vocabulary, and written symbols.",
          "2. Order (6 Months–3 Years): Deep psychological need for consistency, routine, and predictable environments.",
          "3. Sensory Refinement (Birth–5 Years): Tactile, visual, auditory, and olfactory classification.",
          "4. Movement & Coordination (Birth–4 Years): Development of gross motor stability and fine motor pincer grip.",
          "5. Small Objects (1.5–4 Years): Intense fascination with tiny details strengthening focus and fine motor precision.",
          "6. Social Behavior (2.5–6 Years): Emergence of empathy, group cooperation, and grace & courtesy.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are sensitive periods fixed age ranges?",
        answer: "No. They are flexible developmental windows rather than strict timelines.",
      },
      {
        question: "What happens if a child misses a sensitive period?",
        answer: "Learning remains possible; it may simply require more structured effort later.",
      },
    ],
    references: [
      "Montessori, Maria. The Absorbent Mind.",
      "Montessori, Maria. The Secret of Childhood.",
      "Lillard, Angeline Stoll. Montessori: The Science Behind the Genius.",
      "Center on the Developing Child, Harvard University – Early Brain Development Research.",
    ],
  },
];

function BlogsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-[1250px] px-2 py-4">
        <h1 className="font-body text-[#636B2F] text-center text-[42px] sm:text-[48px] lg:text-[54px] font-bold">
          BLOGS
        </h1>

        <p className="mx-auto mt-4 max-w-[1000px] text-center font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
          Welcome to the NIDO Blog – your resource for insights into Montessori education, child development, and parental understanding of the Montessori approach. Our goal is to share valuable information, celebrate our children's learning journeys, and build a strong community.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {allBlogArticles.map((article) => {
            const isExpanded = expandedId === article.id;
            return (
              <article
                key={article.id}
                className="rounded-[18px] border border-[#e0cbaf] bg-[#f8f3e9] p-6 sm:p-8 shadow-sm transition-all hover:border-[#636B2F]/60"
              >
                <div
                  onClick={() => toggleExpand(article.id)}
                  className="flex cursor-pointer items-start justify-between gap-4"
                >
                  <div>
                    <h2 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#2a2a2a] leading-snug">
                      {article.title}
                    </h2>
                    {article.subtitle && (
                      <p className="mt-1 font-serif text-[16px] sm:text-[18px] font-semibold text-[#636B2F]">
                        {article.subtitle}
                      </p>
                    )}
                    <p className="mt-3 font-serif text-[17px] sm:text-[18px] leading-[1.7] text-[#444]">
                      {article.excerpt}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Toggle article view"
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8dcc2] font-bold text-[22px] text-[#636B2F] transition-transform hover:scale-110"
                  >
                    {isExpanded ? "−" : "+"}
                  </button>
                </div>

                {/* FULL EXPANDED ARTICLE CONTENT */}
                {isExpanded && (
                  <div className="mt-6 border-t border-[#e2ceb1] pt-6 font-serif text-[17px] sm:text-[18px] leading-[1.8] text-[#333] space-y-6">
                    {article.sections.map((section, idx) => (
                      <div key={idx} className="space-y-3">
                        {section.heading && (
                          <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#2a2a2a]">
                            {section.heading}
                          </h3>
                        )}
                        {section.paragraphs.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                        {section.bullets && (
                          <ul className="list-disc pl-6 space-y-2 text-[#444]">
                            {section.bullets.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {/* FAQS SECTION IF AVAILABLE */}
                    {article.faqs && article.faqs.length > 0 && (
                      <div className="mt-6 rounded-[12px] bg-white/80 p-5 border border-[#e0cbaf]">
                        <h4 className="font-serif text-[19px] font-bold text-[#636B2F] mb-3">
                          Frequently Asked Questions
                        </h4>
                        <div className="space-y-3">
                          {article.faqs.map((faq, fIdx) => (
                            <div key={fIdx}>
                              <p className="font-bold text-[#2a2a2a]">{faq.question}</p>
                              <p className="text-[#444] mt-1">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* REFERENCES SECTION IF AVAILABLE */}
                    {article.references && article.references.length > 0 && (
                      <div className="mt-4 text-[15px] text-[#666] pt-3 border-t border-[#e2ceb1]">
                        <p className="font-bold text-[#444]">References & Reading:</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                          {article.references.map((ref, rIdx) => (
                            <li key={rIdx}>{ref}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

