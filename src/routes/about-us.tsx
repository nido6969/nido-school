import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import founder from "@/assets/ChatGPT Image Aug 1, 2026, 03_34_20 PM.png";
import heroImg from "@/assets/image copy.png";

export const Route = createFileRoute("/about-us")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — NIDO Montessori Preschool, Hyderabad" },
      {
        name: "description",
        content:
          "Meet NIDO: a nurturing Montessori haven founded on Dr. Maria Montessori's principles, led by AMI-trained educator Ms. Shobha Goyal.",
      },
      { property: "og:title", content: "About Us — NIDO Montessori Preschool" },
      {
        property: "og:description",
        content: "Our story, our founder Ms. Shobha Goyal and our vision.",
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
      <section className="grid items-start gap-10 xl:grid-cols-2">
        <div>
          <h1 className="heading-script text-[44px] lg:text-[52px]">About Us</h1>
          <p className="mt-8 text-[19px] leading-[1.9]">
            Welcome to NIDO, a nurturing haven where children embark on a journey of self-discovery
            and joyful learning. Founded on the profound principles of Dr. Maria Montessori, our
            school is dedicated to fostering independence, concentration, and a lifelong love for
            learning in every child.
          </p>
          <p className="mt-8 text-[19px] leading-[1.9]">
            Our dedicated team of AMI/AMS certified Montessori guides creates a meticulously
            prepared environment, allowing children to explore at their own pace and develop their
            inherent potential. We believe in the power of a child-centered approach, where respect,
            freedom within limits, and hands-on learning are at the heart of everything we do.
          </p>
        </div>
        <img
          src={heroImg}
          alt="NIDO Montessori School environment"
          width={1920}
          height={1280}
          className="nido-card w-full rounded-2xl bg-white/70 p-3 shadow-[0_8px_26px_oklch(0_0_0/0.12)]"
        />
      </section>

      <section className="mt-20 grid items-start gap-10 xl:grid-cols-[1fr_1.1fr]">
        <img
          src={founder}
          alt="Ms. Shobha Goyal, founder of NIDO Montessori Preschool"
          width={896}
          height={1152}
          loading="lazy"
          className="nido-card w-full rounded-2xl border-r-8 border-caramel object-cover shadow-[0_8px_26px_oklch(0_0_0/0.14)]"
        />
        <div>
          <h2 className="heading-script text-[38px] lg:text-[44px]">Meet Our Founder</h2>
          <p className="mt-3 font-display text-[24px] font-bold text-foreground">
            Ms. Shobha Goyal, AMI-Trained Educator &amp; Visionary
          </p>
          <p className="mt-6 text-[19px] leading-[1.9]">
            NIDO Montessori School is the direct realization of Shobha Goyal's 20 years long
            dedication to the Montessori philosophy. Her journey began not just as an educator, but
            as a parent whose two daughters thrived under the method, validating its profound,
            lifelong impact. Shobha is formally trained by the prestigious Association Montessori
            Internationale (AMI Netherlands), holding Diplomas in both Montessori Education (3–6
            years) and Montessori Administration, alongside specialized orientation for toddler and
            primary groups.
          </p>
          <p className="mt-8 text-[19px] leading-[1.9]">
            Beyond the classroom, Shobha brings the essential acumen of a seasoned entrepreneur and
            strategist, equipped with years of leadership experience from the trading and diamond
            industries. This unique synthesis of AMI expertise, deeply personal parental insight,
            and strong operational skill has enabled her to create NIDO: a truly world-class
            Montessori institution where children thrive and the philosophy comes authentically to
            life.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
