import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faqs")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ's – NIDO Montessori Preschool, Hyderabad" },
      {
        name: "description",
        content:
          "Find answers to common questions about Montessori philosophy, the absorbent mind, sensitive periods, and our NIDO environments.",
      },
      { property: "og:title", content: "FAQ's – NIDO Montessori Preschool" },
      {
        property: "og:description",
        content: "Common questions about Montessori philosophy and NIDO, answered.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqCategories.flatMap((category) =>
            category.items.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          ),
        }),
      },
    ],
  }),
});

type FaqCategory = {
  title: string;
  items: { q: string; a: string }[];
};

const faqCategories: FaqCategory[] = [
  {
    title: "1) The Absorbent Mind: Understanding How Your 0–6 Year Old Learns",
    items: [
      {
        q: "Q1. What is the “Absorbent Mind”?",
        a: "It is the child’s natural ability (0–6 years) to absorb information effortlessly from the environment. Learning happens unconsciously in the early years and consciously after age three.",
      },
      {
        q: "Q2. Why is this stage so important?",
        a: "Experiences during this period form the foundation of personality, intelligence, language, and movement.",
      },
      {
        q: "Q3. How does NIDO support the Absorbent Mind?",
        a: "By offering a prepared environment rich in language, order, movement, and meaningful activity rather than overstimulation.",
      },
      {
        q: "Q4. What should parents remember during this phase?",
        a: "Children are not “taught” in the traditional sense; they construct themselves through interaction with their surroundings.",
      },
    ],
  },
  {
    title: "2) What are the Four Planes of Development in Montessori? A Parent’s Guide",
    items: [
      {
        q: "Q1. What are the Four Planes of Development?",
        a: "A framework identified by Maria Montessori describing growth in four stages: 0–6, 6–12, 12–18, and 18–24 years.",
      },
      {
        q: "Q2. What defines the first plane (0–6 years)?",
        a: "Rapid physical, psychological, and social formation through exploration and sensory experience.",
      },
      {
        q: "Q3. Why should parents understand the planes?",
        a: "Each stage has distinct developmental needs; education must match the child’s psychological characteristics.",
      },
      {
        q: "Q4. How does NIDO align with the first plane?",
        a: "Our environment supports independence, order, movement, and language development appropriate to early childhood.",
      },
    ],
  },
  {
    title: "3) Freedom Within Limits: Finding the Balance Between Choice and Structure",
    items: [
      {
        q: "Q1. What does “freedom within limits” mean?",
        a: "Children may choose activities freely, but within clear boundaries that protect safety, respect, and purpose.",
      },
      {
        q: "Q2. Why are limits necessary?",
        a: "Limits create security. Structure allows meaningful freedom rather than chaos.",
      },
      {
        q: "Q3. How is this practiced at NIDO?",
        a: "Children select work independently but follow community guidelines such as caring for materials and respecting peers.",
      },
      {
        q: "Q4. Does this approach build discipline?",
        a: "Yes. Self-discipline emerges naturally when children act within consistent, respectful boundaries.",
      },
    ],
  },
  {
    title: "4) What are the “Sensitive Periods” and How Do They Drive Early Learning?",
    items: [
      {
        q: "Q1. What are sensitive periods?",
        a: "Specific windows in early childhood when children are especially receptive to learning particular skills, such as language or order.",
      },
      {
        q: "Q2. Are sensitive periods permanent?",
        a: "No. They are temporary and fade once the skill is acquired.",
      },
      {
        q: "Q3. How can adults recognise them?",
        a: "Through intense interest, repetition, and deep concentration in specific activities.",
      },
      {
        q: "Q4. How does NIDO respond to sensitive periods?",
        a: "By observing each child and providing materials that meet current developmental needs.",
      },
    ],
  },
  {
    title: "5) Why “Follow the Child” is the Golden Rule of the Montessori Method",
    items: [
      {
        q: "Q1. What does “follow the child” mean?",
        a: "It means observing carefully and responding to the child’s developmental readiness rather than imposing a fixed pace.",
      },
      {
        q: "Q2. Does this mean no guidance?",
        a: "No. Adults guide intentionally but base decisions on observation.",
      },
      {
        q: "Q3. Why is observation central?",
        a: "Observation reveals interests, abilities, and emerging needs.",
      },
      {
        q: "Q4. How is this practiced at NIDO?",
        a: "Guides adjust presentations and support based on each child’s developmental stage and interests.",
      },
    ],
  },
  {
    title: "6) Dr. Maria Montessori’s Core Beliefs on the Child’s Spiritual Development",
    items: [
      {
        q: "Q1. What did Maria Montessori mean by spiritual development?",
        a: "She referred to the child’s inner growth—formation of character, will, empathy, and moral awareness.",
      },
      {
        q: "Q2. Is spiritual development religious instruction?",
        a: "No. It focuses on universal values such as respect, responsibility, and peace.",
      },
      {
        q: "Q3. Why is inner development important in early childhood?",
        a: "Character formation begins early and is shaped by experience and environment.",
      },
      {
        q: "Q4. How does NIDO nurture this aspect?",
        a: "Through grace and courtesy practices, community responsibility, and peaceful conflict resolution.",
      },
    ],
  },
  {
    title: "7) The Concept of the “Spiritual Embryo” and Its Educational Impact",
    items: [
      {
        q: "Q1. What is the “Spiritual Embryo”?",
        a: "A term used by Maria Montessori to describe the newborn’s psychological potential waiting to unfold.",
      },
      {
        q: "Q2. How does it differ from a physical embryo?",
        a: "While the body develops before birth, the mind and personality develop after birth through experience.",
      },
      {
        q: "Q3. Why does this concept matter in education?",
        a: "It emphasises that early childhood environments shape the adult the child will become.",
      },
      {
        q: "Q4. How does NIDO apply this idea?",
        a: "By offering calm, ordered surroundings that support self-construction rather than adult-directed instruction.",
      },
    ],
  },
  {
    title: "8) The Importance of Order for the Young Child’s Mind",
    items: [
      {
        q: "Q1. Why do young children need order?",
        a: "Order provides psychological security and helps them classify and understand their world.",
      },
      {
        q: "Q2. What happens when order is disrupted?",
        a: "Children may show frustration or disorientation.",
      },
      {
        q: "Q3. Is order only about tidiness?",
        a: "No. It includes routine, sequence, and logical organisation of materials.",
      },
      {
        q: "Q4. How is order maintained at NIDO?",
        a: "Materials have defined places, routines are consistent, and activities follow clear sequences.",
      },
    ],
  },
  {
    title: "9) The Power of Practice: Why Repetition is Your Child’s Best Teacher",
    items: [
      {
        q: "Q1. Why do children repeat activities?",
        a: "Repetition refines coordination, concentration, and mastery.",
      },
      {
        q: "Q2. Should adults interrupt repetition?",
        a: "No, unless safety is involved. Repetition indicates developmental work.",
      },
      {
        q: "Q3. What skills develop through repetition?",
        a: "Motor control, focus, independence, and confidence.",
      },
      {
        q: "Q4. How does NIDO support repetition?",
        a: "Children may repeat chosen work as long as they wish within classroom guidelines.",
      },
    ],
  },
  {
    title: "10) Debunking 7 Common Myths About the Montessori Method",
    items: [
      {
        q: "Q1. Is Montessori unstructured?",
        a: "No. It is highly structured, but the structure supports independent choice.",
      },
      {
        q: "Q2. Does Montessori avoid academics?",
        a: "No. Academic concepts are introduced through concrete, hands-on materials.",
      },
      {
        q: "Q3. Are children allowed to do anything they want?",
        a: "No. Freedom exists within clearly defined limits.",
      },
      {
        q: "Q4. Is Montessori only for certain types of children?",
        a: "No. The approach respects individual differences and supports diverse learners.",
      },
    ],
  },
];

function FaqPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-[1050px] px-1 sm:px-2 py-2 sm:py-4">
        <h1 className="font-body text-[#636B2F] text-[32px] sm:text-[42px] lg:text-[50px] font-bold">
          FAQS
        </h1>

        <div className="mt-8 sm:mt-10 space-y-8 sm:space-y-12">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="font-serif text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#2a2a2a] mb-4 sm:mb-5 leading-snug">
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => {
                  const itemId = `${catIdx}-${itemIdx}`;
                  const isOpen = openItem === itemId;

                  return (
                    <div
                      key={itemId}
                      className="rounded-xl sm:rounded-[12px] bg-[#f5ebda] border-2 border-dashed border-[#d6c1a5] overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-4 text-left font-display text-[17px] sm:text-[20px] lg:text-[22px] font-bold text-[#333] hover:text-[#c4935c] active:bg-[#ede0cb] transition-colors cursor-pointer min-h-[48px]"
                      >
                        <span className="leading-snug">{item.q}</span>
                        <ChevronDown
                          className={`h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#c4935c]" : "text-[#666]"
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5 font-serif text-[15px] sm:text-[18px] leading-[1.6] text-[#444] border-t border-[#e2d2b8]">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
