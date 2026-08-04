import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

import heroLogo from "@/assets/nido_20hero_20logo.jpeg";
import heroImg from "@/assets/hero.png";
import blob1 from "@/assets/home_20image.png";
import blob2 from "@/assets/home_20blob_20image_202.png";
import blob3 from "@/assets/home_20blob_20image_203.png";
import facebookLogo from "@/assets/facebook_20logo_202.webp";
import instagramLogo from "@/assets/instagram.avif";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "NIDO Montessori Preschool — Your Child's Sanctuary, Hyderabad" },
      {
        name: "description",
        content:
          "NIDO — A Montessori Preschool in Bowrampet, Hyderabad. Prepared environments, nurturing independence and hands-on learning for ages 14 months to 6 years.",
      },
      { property: "og:title", content: "NIDO Montessori Preschool — Your Child's Sanctuary" },
      {
        property: "og:description",
        content: "A nurturing Montessori haven in Bowrampet, Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const blogTopics = [
  {
    title: ["Prepared", "Environments"],
    color: "#b8d8c0",
    icon: blob1,
  },
  {
    title: ["Nurturing", "Independence"],
    color: "#e6a58f",
    icon: blob2,
  },
  {
    title: ["Hands-On", "Learning"],
    color: "#f2d47a",
    icon: blob3,
  },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO SECTION */}
      <section className="nido-card rounded-[30px] bg-[#faf4e8] p-8 lg:p-12 shadow-[0_6px_24px_oklch(0_0_0/0.06)]">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="text-center">
            <img
              src={heroLogo}
              alt="NIDO Montessori Logo"
              width={800}
              height={300}
              fetchPriority="high"
              className="mx-auto w-full max-w-[620px] max-h-[260px] object-contain rounded-xl"
            />
            <h1 className="mt-4 font-display text-[36px] sm:text-[44px] lg:text-[50px] font-black text-[#2a2a2a] leading-tight">
              Your Child's Sanctuary
            </h1>
            <Link
              to="/admissions"
              className="mt-6 inline-block rounded-[20px] bg-[#7fc2e8] px-7 py-3.5 font-display text-[22px] font-extrabold text-black shadow-[0_3px_10px_oklch(0_0_0/0.12)] transition-all hover:bg-[#5ba7d1] hover:scale-105"
            >
              Begin the Journey
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="/programs-environments" className="block overflow-hidden rounded-2xl group">
              <img
                src={heroImg}
                alt="Kids Learning at NIDO"
                width={420}
                height={420}
                loading="lazy"
                className="w-full max-w-[420px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG BLOBS SECTION */}
      <section className="mt-14" aria-labelledby="blogs-heading">
        <h2
          id="blogs-heading"
          className="font-body text-[#636B2F] text-[36px] sm:text-[44px] font-bold"
        >
          Explore our Blogs
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogTopics.map((topic) => (
            <Link
              key={topic.title.join(" ")}
              to="/blogs"
              className="group relative flex h-[210px] w-full flex-col justify-end rounded-[60%_40%_55%_45%_/_60%_45%_55%_40%] pb-6 text-center shadow-[0_4px_16px_oklch(0_0_0/0.08)] transition-transform duration-300 hover:scale-[1.06]"
              style={{ backgroundColor: topic.color }}
            >
              <img
                src={topic.icon}
                alt=""
                className="absolute top-5 right-5 h-14 w-14 object-contain"
              />
              <span className="font-body text-[26px] font-bold leading-tight text-[#333]">
                {topic.title[0]}
                <br />
                {topic.title[1]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SCHEDULE VISIT & SOCIAL CRAYON SECTION */}
      <section className="mt-14">
        {/* BLUE CRAYON BAR */}
        <Link
          to="/contact-us"
          className="block rounded-[40px] bg-[#03A9F4] px-6 py-6 text-center font-display text-[26px] sm:text-[32px] font-bold text-black shadow-[0_4px_14px_oklch(0_0_0/0.14)] transition-all hover:scale-[1.02] hover:brightness-95"
        >
          Schedule a Visit &amp; Unlock Their Potential!
        </Link>

        {/* BROWN CRAYON BAR FOR SOCIALS */}
        <div className="mt-8 rounded-[40px] bg-[#c4935c] px-6 py-6 shadow-[0_4px_14px_oklch(0_0_0/0.14)]">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-20 text-black">
            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/share/1HvdMm4v2Z/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-transform hover:scale-105"
            >
              <img src={facebookLogo} alt="Facebook" className="h-8 w-8 object-contain" />
              <span className="font-body text-[20px] sm:text-[22px] font-bold leading-snug">
                Facebook
                <br />
                Nido Montessori Preschool
              </span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/nido_montessorischool?igsh=c2tsN3p2dnJnOGZv&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-transform hover:scale-105"
            >
              <img src={instagramLogo} alt="Instagram" className="h-8 w-8 object-contain" />
              <span className="font-body text-[20px] sm:text-[22px] font-bold leading-snug">
                Instagram
                <br />
                @nido_montessorischool
              </span>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

