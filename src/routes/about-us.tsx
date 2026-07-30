import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import buildingBg from "@/assets/building-bg.jpg";
import founder from "@/assets/founder.jpg";
import advisor from "@/assets/advisor.jpg";

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
        content: "Our story, our founder Ms. Shobha Goyal and our pedagogical advisor.",
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
          src={buildingBg}
          alt="Watercolour illustration of the NIDO Montessori school building"
          width={1920}
          height={1280}
          className="w-full rounded-2xl bg-white/70 p-3 shadow-[0_8px_26px_oklch(0_0_0/0.12)]"
        />
      </section>

      <section className="mt-24 grid items-start gap-10 xl:grid-cols-[1fr_1.1fr]">
        <img
          src={founder}
          alt="Ms. Shobha Goyal, founder of NIDO Montessori Preschool"
          width={896}
          height={1152}
          loading="lazy"
          className="w-full rounded-2xl border-r-8 border-caramel object-cover shadow-[0_8px_26px_oklch(0_0_0/0.14)]"
        />
        <div>
          <h2 className="heading-script text-[40px] lg:text-[46px]">Meet Our Founder</h2>
          <p className="mt-6 text-[19px] leading-[1.9]">
            <strong>Ms. Shobha Goyal,</strong> AMI-Trained Educator &amp; Visionary NIDO Montessori
            School is the direct realization of Shobha Goyal's 20 years long dedication to the
            Montessori philosophy. Her journey began not just as an educator, but as a parent whose
            two daughters thrived under the method, validating its profound, lifelong impact.
          </p>
          <p className="mt-8 text-[19px] leading-[1.9]">
            Shobha is formally trained by the prestigious Association Montessori Internationale (AMI
            Netherlands), holding Diplomas in both Montessori Education (3–6 years) and Montessori
            Administration, alongside specialized orientation for toddler and primary groups.
          </p>
          <p className="mt-8 text-[19px] leading-[1.9]">
            Beyond the classroom, Shobha brings the essential acumen of a seasoned entrepreneur and
            strategist. This unique synthesis of AMI expertise, deeply personal parental insight,
            and strong operational skill has enabled her to create NIDO: a truly world-class
            institution.
          </p>
        </div>
      </section>

      <section className="mt-24 grid items-start gap-10 xl:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="heading-script text-[40px] lg:text-[46px]">NIDO's Pedagogical Advisor</h2>
          <p className="mt-8 text-[19px] leading-[1.9]">
            At NIDO, we believe that a school is only as strong as the wisdom behind it. We are
            honoured to have Mr. Pavan Goyal serve as our Pedagogical Advisor - a Montessori
            practitioner, philosopher and father whose 25 years of living and breathing this method
            have profoundly shaped the vision on which NIDO was built.
          </p>
          <p className="mt-8 text-[19px] leading-[1.9]">
            <strong>Pavan is the founder of Blue Blocks Montessori,</strong> a school that stands as
            one of the most remarkable proof points of what happens when you truly trust the
            Montessori child. Under his guidance, Blue Blocks children co-built and launched a
            CubeSat satellite into orbit - a feat that places his students among the most
            extraordinary young learners anywhere in the world, and one that is impossible to
            achieve without years of deep, uninterrupted, child-led learning. His understanding of
            the Montessori method is not theoretical. Pavan holds all four age-group AMI Montessori
            diplomas - spanning the 0-3, 3-6, 6-12 and adolescent stages - making him among a rare
            group of practitioners who have studied the full arc of Montessori formation from
            infancy through young adulthood. He has also raised two daughters entirely within the
            Montessori philosophy, giving him a perspective that is at once deeply personal and
            rigorously informed.
          </p>
          <p className="mt-8 text-[19px] leading-[1.9]">
            As a mentor, advisor and - in the words of our founder Ms. Shobha Goyal - a brother,
            Pavan has been a constant presence throughout the conception and creation of NIDO. His
            counsel has shaped everything from our prepared environment to our approach to guide
            training, parent engagement and the long-term culture we intend to build. "His 25 years
            of experience and unwavering belief in the Montessori child is the backbone on which
            NIDO stands."
          </p>
        </div>
        <figure className="xl:sticky xl:top-40">
          <img
            src={advisor}
            alt="Mr. Pavan Goyal, NIDO's pedagogical advisor"
            width={1152}
            height={1024}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-[0_8px_26px_oklch(0_0_0/0.14)]"
          />
          <figcaption className="mt-6 text-center font-body text-[32px] font-bold">
            Mr. Pavan Goyal
          </figcaption>
        </figure>
      </section>
    </PageShell>
  );
}
