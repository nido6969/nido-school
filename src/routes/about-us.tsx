import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

import bgImg from "@/assets/background.jpg";
import founderImg from "@/assets/ChatGPT Image Aug 1, 2026, 03_34_20 PM.png";

export const Route = createFileRoute("/about-us")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — NIDO Montessori Preschool, Hyderabad" },
      {
        name: "description",
        content:
          "Welcome to NIDO, a nurturing haven where children embark on a journey of self-discovery and joyful learning, founded on the principles of Dr. Maria Montessori.",
      },
      { property: "og:title", content: "About Us — NIDO Montessori Preschool" },
      {
        property: "og:description",
        content:
          "Welcome to NIDO, a nurturing haven where children embark on a journey of self-discovery and joyful learning.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about-us" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
});

function AboutPage() {
  return (
    <PageShell>
      <div className="space-y-12 sm:space-y-16 lg:space-y-20">
        {/* SECTION 1: ABOUT US */}
        <section className="grid items-center gap-6 sm:gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-body text-[#636B2F] text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight">
              About Us
            </h1>
            <p className="mt-4 sm:mt-6 font-serif text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-[#333]">
              Welcome to NIDO, a nurturing haven where children embark on a journey of
              self-discovery and joyful learning. Founded on the profound principles of Dr. Maria
              Montessori, our school is dedicated to fostering independence, concentration, and a
              lifelong love for learning in every child.
            </p>
            <p className="mt-4 sm:mt-6 font-serif text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-[#333]">
              Our dedicated team of AMI/AMS certified Montessori guides creates a meticulously
              prepared environment, allowing children to explore at their own pace and develop their
              inherent potential. We believe in the power of a child-centered approach, where
              respect, freedom within limits, and hands-on learning are at the heart of everything
              we do.
            </p>
          </div>
          <div className="flex justify-center mt-2 lg:mt-0">
            <img
              src={bgImg}
              alt="NIDO Montessori Prepared Environment"
              width={700}
              height={500}
              className="w-full max-w-full sm:max-w-[650px] rounded-2xl object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
            />
          </div>
        </section>

        {/* SECTION 2: MEET OUR FOUNDER */}
        <section className="grid items-center gap-6 sm:gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1 text-center mt-2 lg:mt-0">
            <img
              src={founderImg}
              alt="Ms. Shobha Goyal, AMI-Trained Educator & Visionary"
              width={500}
              height={600}
              loading="lazy"
              className="mx-auto w-full max-w-[320px] sm:max-w-[450px] rounded-2xl object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
            />
            <h3 className="mt-3 font-serif text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-foreground">
              Ms. Shobha Goyal, AMI-Trained Educator &amp; Visionary
            </h3>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-body text-[#636B2F] text-[28px] sm:text-[38px] lg:text-[46px] font-bold leading-tight">
              Meet Our Founder
            </h2>
            <p className="mt-4 sm:mt-6 font-serif text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-[#333]">
              <strong className="font-bold">Ms. Shobha Goyal,</strong> AMI-Trained Educator &amp;
              Visionary
            </p>
            <p className="mt-4 font-serif text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-[#333]">
              NIDO Montessori School is the direct realization of Shobha Gupta's 20 years long
              dedication to the Montessori philosophy. Her journey began not just as an educator,
              but as a parent whose two daughters thrived under the method, validating its profound,
              lifelong impact. Shobha is formally trained by the prestigious Association Montessori
              Internationale (AMI Netherlands), holding Diplomas in both Montessori Education (3–6
              years) and Montessori Administration, alongside specialized orientation for toddler
              and primary groups.
            </p>
            <p className="mt-4 sm:mt-6 font-serif text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-[#333]">
              Beyond the classroom, Shobha brings the essential acumen of a seasoned entrepreneur
              and strategist, equipped with years of leadership experience from the trading and
              diamond industries. This unique synthesis of AMI expertise, deeply personal parental
              insight, and strong operational skill has enabled her to create NIDO: a truly
              world-class Montessori institution where children thrive and the philosophy comes
              authentically to life.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
