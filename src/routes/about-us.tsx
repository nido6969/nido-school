import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

import bgImg from "@/assets/background.jpg";
import founderImg from "@/assets/founder.jpeg";
import pavanImg from "@/assets/pavan.nido.jpeg";

export const Route = createFileRoute("/about-us")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — NIDO Montessori Preschool, Hyderabad" },
      {
        name: "description",
        content:
          "Meet NIDO: a nurturing Montessori haven founded on Dr. Maria Montessori's principles, led by AMI-trained educator Ms. Shobha Goyal and Pedagogical Advisor Mr. Pavan Goyal.",
      },
      { property: "og:title", content: "About Us — NIDO Montessori Preschool" },
      {
        property: "og:description",
        content: "Our story, our founder Ms. Shobha Goyal, and our pedagogical advisor Mr. Pavan Goyal.",
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
      <div className="space-y-16 lg:space-y-24">
        {/* SECTION 1: ABOUT US */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-body text-[#636B2F] text-[40px] sm:text-[48px] font-bold leading-tight">
              About Us
            </h1>
            <p className="mt-6 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
              Welcome to NIDO, a nurturing haven where children embark on a journey of self-discovery and joyful learning.
              Founded on the profound principles of Dr. Maria Montessori, our school is dedicated to fostering independence,
              concentration, and a lifelong love for learning in every child.
            </p>
            <p className="mt-6 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
              Our dedicated team of AMI/AMS certified Montessori guides creates a meticulously prepared environment,
              allowing children to explore at their own pace and develop their inherent potential. We believe in the power
              of a child-centered approach, where respect, freedom within limits, and hands-on learning are at the heart
              of everything we do.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={bgImg}
              alt="NIDO Montessori Prepared Environment"
              width={700}
              height={500}
              className="w-full max-w-[650px] rounded-[18px] object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
            />
          </div>
        </section>

        {/* SECTION 2: MEET OUR FOUNDER */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1 text-center">
            <img
              src={founderImg}
              alt="Ms. Shobha Goyal, AMI-Trained Educator & Visionary"
              width={500}
              height={600}
              loading="lazy"
              className="mx-auto w-full max-w-[450px] rounded-[18px] object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
            />
            <h3 className="mt-4 font-serif text-[18px] sm:text-[20px] font-bold text-foreground">
              Ms. Shobha Goyal, AMI-Trained Educator &amp; Visionary
            </h3>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-body text-[#636B2F] text-[38px] sm:text-[46px] font-bold leading-tight">
              Meet Our Founder
            </h2>
            <p className="mt-6 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
              <strong className="font-bold">Ms. Shobha Goyal,</strong> AMI-Trained Educator &amp; Visionary<br />
              NIDO Montessori School is the direct realization of Shobha Goyal's 20 years long dedication to the Montessori philosophy.
              Her journey began not just as an educator, but as a parent whose two daughters thrived under the method, validating its
              profound, lifelong impact.
            </p>
            <p className="mt-6 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
              Shobha is formally trained by the prestigious Association Montessori Internationale (AMI Netherlands), holding Diplomas
              in both Montessori Education (3–6 years) and Montessori Administration, alongside specialized orientation for toddler and
              primary groups.
            </p>
            <p className="mt-6 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
              Beyond the classroom, Shobha brings the essential acumen of a seasoned entrepreneur and strategist. This unique synthesis
              of AMI expertise, deeply personal parental insight, and strong operational skill has enabled her to create NIDO: a truly
              world-class institution.
            </p>
          </div>
        </section>

        {/* SECTION 3: PEDAGOGICAL ADVISOR */}
        <section className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-body text-[#636B2F] text-[38px] sm:text-[46px] font-bold leading-tight">
              NIDO's Pedagogical Advisor
            </h2>
            <p className="mt-6 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
              At NIDO, we believe that a school is only as strong as the wisdom behind it. We are honoured to have Mr. Pavan Goyal serve as our Pedagogical Advisor - a Montessori practitioner, philosopher and father whose 25 years of living and breathing this method have profoundly shaped the vision on which NIDO was built.
            </p>
            <p className="mt-6 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
              <strong className="font-bold">Pavan is the founder of Blue Blocks Montessori,</strong> a school that stands as one of the most remarkable proof points of what happens when you truly trust the Montessori child. Under his guidance, Blue Blocks children co-built and launched a CubeSat satellite into orbit - a feat that places his students among the most extraordinary young learners anywhere in the world, and one that is impossible to achieve without years of deep, uninterrupted, child-led learning.
              His understanding of the Montessori method is not theoretical. Pavan holds all four age-group AMI Montessori diplomas - spanning the 0-3, 3-6, 6-12 and adolescent stages - making him among a rare group of practitioners who have studied the full arc of Montessori formation from infancy through young adulthood. He has also raised two daughters entirely within the Montessori philosophy, giving him a perspective that is at once deeply personal and rigorously informed.
            </p>
            <p className="mt-6 font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#333]">
              As a mentor, advisor and - in the words of our founder Ms. Shobha Goyal - a brother, Pavan has been a constant presence throughout the conception and creation of NIDO. His counsel has shaped everything from our prepared environment to our approach to guide training, parent engagement and the long-term culture we intend to build.
              <br />
              <em className="italic block mt-4 text-[#636B2F] font-semibold">
                "His 25 years of experience and unwavering belief in the Montessori child is the backbone on which NIDO stands."
              </em>
            </p>
          </div>

          <div className="text-center">
            <img
              src={pavanImg}
              alt="Mr. Pavan Goyal, Pedagogical Advisor"
              width={500}
              height={600}
              loading="lazy"
              className="mx-auto w-full max-w-[450px] rounded-[18px] object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
            />
            <h2 className="mt-4 font-body text-[28px] font-bold text-foreground">
              Mr. Pavan Goyal
            </h2>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

