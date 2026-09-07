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

const pillars = [
  {
    title: ["Prepared", "Environment"],
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
      <section className="nido-card rounded-2xl sm:rounded-[30px] bg-[#faf4e8] p-5 sm:p-8 lg:p-12 shadow-[0_6px_24px_oklch(0_0_0/0.06)]">
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="text-center flex flex-col items-center">
            <img
              src={heroLogo}
              alt="NIDO Montessori Logo"
              width={800}
              height={300}
              fetchPriority="high"
              className="mx-auto w-full max-w-[260px] sm:max-w-[450px] lg:max-w-[620px] max-h-[220px] sm:max-h-[260px] object-contain rounded-xl"
            />
            <h1 className="mt-4 font-display text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#2a2a2a] leading-tight">
              Your Child's Sanctuary
            </h1>
            <Link
              to="/admissions"
              className="mt-6 flex w-full sm:w-auto items-center justify-center rounded-2xl sm:rounded-[20px] bg-[#7fc2e8] px-6 sm:px-8 py-3.5 font-display text-lg sm:text-[22px] font-extrabold text-black shadow-[0_3px_10px_oklch(0_0_0/0.12)] transition-all hover:bg-[#5ba7d1] hover:scale-105 active:scale-98 min-h-[48px]"
            >
              Begin the Journey
            </Link>
          </div>
          <div className="flex justify-center mt-2 lg:mt-0">
            <Link
              to="/programs-environments"
              className="block overflow-hidden rounded-2xl group w-full max-w-[320px] sm:max-w-[420px]"
            >
              <img
                src={heroImg}
                alt="Kids Learning at NIDO"
                width={420}
                height={420}
                loading="lazy"
                className="w-full h-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE PILLARS BLOBS SECTION */}
      <section className="mt-8 sm:mt-12" aria-label="Core Pillars">
        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title.join(" ")}
              to="/blogs"
              className="group relative flex min-h-[160px] sm:h-[210px] w-full flex-col justify-center items-center rounded-3xl sm:rounded-[60%_40%_55%_45%_/_60%_45%_55%_40%] p-6 text-center shadow-[0_4px_16px_oklch(0_0_0/0.08)] transition-transform duration-300 hover:scale-[1.04] active:scale-98"
              style={{ backgroundColor: pillar.color }}
            >
              <img
                src={pillar.icon}
                alt=""
                className="absolute top-3 right-3 sm:top-5 sm:right-5 h-10 w-10 sm:h-14 sm:w-14 object-contain opacity-80 sm:opacity-100"
              />
              <span className="font-body text-[22px] sm:text-[26px] font-bold leading-tight text-[#333]">
                {pillar.title[0]}
                <br />
                {pillar.title[1]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SCHEDULE VISIT & SOCIAL CRAYON SECTION */}
      <section className="mt-10 sm:mt-14 space-y-6 sm:space-y-8">
        {/* BLUE CRAYON BAR */}
        <Link
          to="/contact-us"
          className="flex items-center justify-center rounded-2xl sm:rounded-[40px] bg-[#03A9F4] px-5 py-5 sm:px-6 sm:py-6 text-center font-display text-xl sm:text-[28px] lg:text-[32px] font-bold text-black shadow-[0_4px_14px_oklch(0_0_0/0.14)] transition-all hover:scale-[1.02] active:scale-98 leading-snug min-h-[56px]"
        >
          Schedule a Visit &amp; Unlock Their Potential!
        </Link>

        {/* BROWN CRAYON BAR FOR SOCIALS */}
        <div className="rounded-2xl sm:rounded-[40px] bg-[#c4935c] px-5 py-5 sm:px-6 sm:py-6 shadow-[0_4px_14px_oklch(0_0_0/0.14)]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-20 text-black">
            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/share/1HvdMm4v2Z/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto p-2 rounded-xl transition-transform hover:scale-105 active:scale-98"
            >
              <img src={facebookLogo} alt="Facebook" className="h-8 w-8 shrink-0 object-contain" />
              <span className="font-body text-base sm:text-[20px] lg:text-[22px] font-bold leading-snug text-center sm:text-left">
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
              className="flex items-center justify-center gap-3 w-full sm:w-auto p-2 rounded-xl transition-transform hover:scale-105 active:scale-98"
            >
              <img
                src={instagramLogo}
                alt="Instagram"
                className="h-8 w-8 shrink-0 object-contain"
              />
              <span className="font-body text-base sm:text-[20px] lg:text-[22px] font-bold leading-snug text-center sm:text-left">
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
