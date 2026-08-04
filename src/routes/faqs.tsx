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
          "Answers to important questions about Montessori philosophy, sensitive periods, the absorbent mind, and our NIDO environments.",
      },
      { property: "og:title", content: "FAQ's – NIDO Montessori Preschool" },
      { property: "og:description", content: "Common questions about Montessori philosophy and NIDO, answered." },
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
            }))
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
        a: "It is the child’s natural ability (0–6 years) to absorb information effortlessly from the environment.",
      },
      {
        q: "Q2. Why is this stage so important?",
        a: "Experiences during this period form the foundation of personality, intelligence, language, and movement.",
      },
      {
        q: "Q3. How does NIDO support the Absorbent Mind?",
        a: "By offering a prepared environment rich in language, order, movement, and meaningful activity.",
      },
      {
        q: "Q4. What should parents remember during this phase?",
        a: "Children construct themselves through interaction with a calm, rich and ordered environment.",
      },
    ],
  },
  {
    title: "2) What Are the Four Planes of Development in Montessori?",
    items: [
      {
        q: "Q1. What are the Four Planes?",
        a: "A developmental framework divided into four stages: 0–6, 6–12, 12–18, and 18–24 years.",
      },
      {
        q: "Q2. What defines the first plane?",
        a: "Rapid physical, emotional, and cognitive development through sensory exploration.",
      },
      {
        q: "Q3. Why should parents understand the planes?",
        a: "Each stage has distinct needs that guide how we support children effectively.",
      },
      {
        q: "Q4. How does NIDO align with the first plane?",
        a: "By creating a prepared environment that supports independence, order, and purposeful movement.",
      },
    ],
  },
  {
    title: "3) Freedom Within Limits: Finding the Balance Between Choice and Structure",
    items: [
      {
        q: "Q1. What does “freedom within limits” mean?",
        a: "Children may choose activities freely, but within boundaries that ensure safety, respect, and purposeful learning.",
      },
      {
        q: "Q2. Why are limits necessary?",
        a: "Limits provide security and structure. They allow meaningful freedom rather than chaos or randomness.",
      },
      {
        q: "Q3. How is this practiced at NIDO?",
        a: "Children select work independently but follow community rules like returning materials and respecting peers.",
      },
      {
        q: "Q4. Does this approach build discipline?",
        a: "Yes. Real discipline arises from freedom exercised responsibly—not from forced obedience.",
      },
    ],
  },
  {
    title: "4) What Are the “Sensitive Periods” in Early Learning?",
    items: [
      {
        q: "Q1. What are sensitive periods?",
        a: "Special windows when children are highly receptive to learning specific skills like language or order.",
      },
      {
        q: "Q2. Are sensitive periods permanent?",
        a: "No. They are temporary phases that fade after the child masters the skill.",
      },
      {
        q: "Q3. How can adults recognize them?",
        a: "Through intense interest, repetition, deep focus, and love for certain activities.",
      },
      {
        q: "Q4. How does NIDO support them?",
        a: "We observe each child closely and provide materials aligned with their developmental needs.",
      },
    ],
  },
  {
    title: "5) Why “Follow the Child” Is the Golden Rule of Montessori",
    items: [
      {
        q: "Q1. What does “follow the child” mean?",
        a: "Observe carefully and respond to each child’s readiness instead of imposing a fixed teaching pace.",
      },
      {
        q: "Q2. Does this mean no guidance?",
        a: "Not at all. Guidance is intentional, but based on observation rather than adult control.",
      },
      {
        q: "Q3. Why is observation central?",
        a: "Observation reveals interests, abilities, challenges, and developmental needs.",
      },
      {
        q: "Q4. How does NIDO practice this?",
        a: "Guides adjust presentations and support based on each child’s development and interests.",
      },
    ],
  },
  {
    title: "6) Dr. Maria Montessori’s Views on Spiritual Development",
    items: [
      {
        q: "Q1. What did Montessori mean by spiritual development?",
        a: "The inner growth of character, empathy, willpower, and moral awareness.",
      },
      {
        q: "Q2. Is it religious instruction?",
        a: "No. It focuses on universal values such as respect, responsibility, and peace.",
      },
      {
        q: "Q3. Why is inner development important?",
        a: "Character begins forming early and is shaped through meaningful experiences and interactions.",
      },
      {
        q: "Q4. How does NIDO nurture this?",
        a: "Through grace and courtesy lessons, peaceful interactions, and community responsibility.",
      },
    ],
  },
  {
    title: "7) The Concept of the “Spiritual Embryo”",
    items: [
      {
        q: "Q1. What is the “Spiritual Embryo”?",
        a: "A term describing the newborn’s psychological potential waiting to unfold after birth.",
      },
      {
        q: "Q2. How is it different from a physical embryo?",
        a: "Physical development happens before birth; psychological development continues through experiences after birth.",
      },
      {
        q: "Q3. Why is this concept important?",
        a: "It highlights the importance of early environments in shaping the adult the child will become.",
      },
      {
        q: "Q4. How does NIDO apply this?",
        a: "By creating calm, ordered environments that support self-construction.",
      },
    ],
  },
  {
    title: "8) The Importance of Order for the Young Child’s Mind",
    items: [
      {
        q: "Q1. Why do young children need order?",
        a: "Order provides security and helps children classify and understand the world around them.",
      },
      {
        q: "Q2. What happens when order is disrupted?",
        a: "Children may show frustration or become disoriented.",
      },
      {
        q: "Q3. Is order only about tidiness?",
        a: "No. It also includes predictable routines, sequences, and logical organization of materials.",
      },
      {
        q: "Q4. How is order maintained at NIDO?",
        a: "Materials have designated places, routines are consistent, and activities follow clear sequences.",
      },
    ],
  },
  {
    title: "9) The Power of Practice: Why Repetition Builds Mastery",
    items: [
      {
        q: "Q1. Why do children repeat activities?",
        a: "Repetition improves coordination, concentration, confidence, and mastery.",
      },
      {
        q: "Q2. Should adults interrupt repetition?",
        a: "No—unless safety is involved. Repetition is developmental work.",
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
    title: "10) Debunking 7 Common Myths About Montessori",
    items: [
      {
        q: "Q1. Is Montessori unstructured?",
        a: "No. It is structured, but that structure supports independence and exploration.",
      },
      {
        q: "Q2. Does Montessori avoid academics?",
        a: "No. Academic concepts are taught through hands-on, concrete materials.",
      },
      {
        q: "Q3. Are children allowed to do anything they want?",
        a: "No. Children follow clear limits and community guidelines.",
      },
      {
        q: "Q4. Is Montessori only for certain types of children?",
        a: "No. Montessori supports diverse learners with different strengths and learning styles.",
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
      <h1 className="font-body text-[#636B2F] text-[40px] sm:text-[50px] font-bold">
        FAQ's
      </h1>

      <p className="mt-4 max-w-[1000px] font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
        Here you'll find answers to important questions about Montessori philosophy and our NIDO environments. Click a question to reveal the answer.
      </p>

      <div className="mt-10 max-w-[1050px] space-y-12">
        {faqCategories.map((category, catIdx) => (
          <div key={catIdx}>
            <h2 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#2a2a2a] mb-5">
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.items.map((item, itemIdx) => {
                const itemId = `${catIdx}-${itemIdx}`;
                const isOpen = openItem === itemId;

                return (
                  <div
                    key={itemId}
                    className="rounded-[12px] bg-[#f5ebda] border-2 border-dashed border-[#d6c1a5] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(itemId)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left font-display text-[20px] sm:text-[22px] font-bold text-[#333] hover:text-[#c4935c] transition-colors cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`h-6 w-6 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#c4935c]" : "text-[#666]"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 font-serif text-[18px] sm:text-[19px] leading-[1.7] text-[#444] border-t border-[#e2d2b8] pt-3">
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
    </PageShell>
  );
}

