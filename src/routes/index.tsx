import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

import heroClassroom from "@/assets/hero-classroom.png";
import heroLogo from "@/assets/nido_20hero_20logo.jpeg";
import blob1 from "@/assets/home_20image.png";
import blob2 from "@/assets/home_20blob_20image_202.png";
import blob3 from "@/assets/home_20blob_20image_203.png";

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
      <section className="relative mx-auto h-[220px] w-full max-w-[920px] overflow-hidden rounded-2xl sm:h-[300px] sm:rounded-[20px] bg-[#faf4e8] shadow-[0_6px_24px_oklch(0_0_0/0.06)]">
        <img
          src={heroClassroom}
          alt=""
          width={2003}
          height={785}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[78%_center] sm:object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="flex w-[54%] max-w-[400px] flex-col items-start px-4 py-4 sm:w-[48%] sm:px-6 sm:py-5 lg:px-8">
            <img
              src={heroLogo}
              alt="NIDO — A Montessori Preschool"
              width={800}
              height={300}
              className="w-full max-w-[140px] sm:max-w-[180px] lg:max-w-[210px] h-auto object-contain rounded-xl"
            />
            <p className="mt-2 font-display text-[8px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#6f7c3a]">
              Bowrampet, Hyderabad · Ages 14 months – 6 years
            </p>
            <h1 className="mt-1 font-display text-[14px] sm:text-[18px] lg:text-[24px] xl:text-[28px] font-black text-[#2a2a2a] leading-[1.15]">
              Your Child's Sanctuary
            </h1>
            <Link
              to="/admissions"
              className="mt-2 sm:mt-3 inline-flex items-center justify-center rounded-xl sm:rounded-[14px] bg-[#7fc2e8] px-3 sm:px-4 py-1.5 font-display text-xs sm:text-sm lg:text-[15px] font-extrabold text-black shadow-[0_3px_10px_oklch(0_0_0/0.12)] transition-all hover:bg-[#5ba7d1] hover:scale-105 active:scale-98 min-h-[30px] sm:min-h-[34px]"
            >
              Begin the Journey
            </Link>
          </div>
        </div>
      </section>

      {/* CORE PILLARS BLOBS SECTION */}
      <section className="mx-auto mt-5 w-full max-w-[920px] sm:mt-6" aria-label="Core Pillars">
        <div className="grid gap-2.5 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title.join(" ")}
              to="/blogs"
              className="group relative flex min-h-[96px] sm:h-[120px] w-full flex-col justify-center items-center rounded-3xl sm:rounded-[60%_40%_55%_45%_/_60%_45%_55%_40%] p-3.5 text-center shadow-[0_4px_16px_oklch(0_0_0/0.08)] transition-transform duration-300 hover:scale-[1.04] active:scale-98"
              style={{ backgroundColor: pillar.color }}
            >
              <img
                src={pillar.icon}
                alt=""
                className="absolute top-2 right-2 sm:top-2.5 sm:right-3.5 h-6 w-6 sm:h-8 sm:w-8 object-contain opacity-80 sm:opacity-100"
              />
              <span className="font-body text-[16px] sm:text-[18px] font-bold leading-tight text-[#333]">
                {pillar.title[0]}
                <br />
                {pillar.title[1]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SCHEDULE VISIT & SOCIAL */}
      <section className="mx-auto mt-5 flex w-full max-w-[920px] flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-2.5">
        <Link
          to="/contact-us"
          className="inline-flex w-fit max-w-full items-center justify-center rounded-full bg-[#03A9F4] px-4 py-2 text-center font-display text-sm sm:text-base font-bold text-black shadow-[0_4px_14px_oklch(0_0_0/0.14)] transition-all hover:scale-[1.02] active:scale-98 leading-snug min-h-[40px]"
        >
          Schedule a Visit &amp; Unlock Their Potential!
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/share/1HvdMm4v2Z/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 min-h-[40px] text-[#1877F2] shadow-[0_4px_14px_oklch(0_0_0/0.10)] transition-all hover:scale-[1.02] active:scale-98"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
            </svg>
            <span className="font-display text-sm font-bold">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/nido_montessorischool?igsh=c2tsN3p2dnJnOGZv&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 min-h-[40px] text-white shadow-[0_4px_14px_oklch(0_0_0/0.14)] transition-all hover:scale-[1.02] active:scale-98"
            style={{
              backgroundImage: "linear-gradient(45deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)",
            }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
            <span className="font-display text-sm font-bold">Instagram</span>
          </a>
        </div>
      </section>
    </PageShell>
  );
}
