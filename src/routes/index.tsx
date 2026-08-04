import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Home, Sparkles, Hand } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import logo from "@/assets/logo.png";
import kidsCircle from "@/assets/image.png";

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
  { title: ["Prepared", "Environments"], color: "var(--sage)", icon: Home },
  { title: ["Nurturing", "Independence"], color: "var(--terracotta)", icon: Sparkles },
  { title: ["Hands-On", "Learning"], color: "var(--sunny)", icon: Hand },
];

function HomePage() {
  return (
    <PageShell>
      <section className="nido-card rounded-[28px] bg-[color-mix(in_oklab,var(--cream)_70%,white)] px-6 py-10 shadow-[0_6px_24px_oklch(0_0_0/0.06)] lg:px-14 lg:py-12">
        <div className="grid items-center gap-10 xl:grid-cols-[1.4fr_1fr]">
          <div className="text-center">
            <img
              src={logo}
              alt="NIDO — A Montessori Preschool"
              width={816}
              height={816}
              fetchPriority="high"
              className="mx-auto w-full max-w-[640px] aspect-[2.4/1] object-cover rounded-xl"
            />
            <h1 className="mt-6 font-display text-[38px] font-bold leading-tight text-foreground sm:text-[52px] lg:text-[58px]">
              Your Child's Sanctuary
            </h1>
            <Link
              to="/admissions"
              className="mt-7 inline-block rounded-full bg-sky-cta px-8 py-3 font-body text-[19px] font-bold text-foreground shadow-[0_3px_10px_oklch(0_0_0/0.12)] transition-transform hover:scale-105"
            >
              Begin the Journey
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src={kidsCircle}
              alt="Children working with Montessori materials"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full max-w-[420px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="blogs-heading">
        <h2 id="blogs-heading" className="heading-script text-[36px] lg:text-[42px]">
          Explore our Blogs
        </h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {blogTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <li key={topic.title.join(" ")}>
                <Link
                  to="/blogs"
                  className="nido-card relative grid aspect-[3/2] place-items-center rounded-[50%] px-6 text-center shadow-[0_4px_16px_oklch(0_0_0/0.08)]"
                  style={{ backgroundColor: topic.color }}
                >
                  <Icon className="absolute top-6 right-8 h-6 w-6 text-foreground/60" />
                  <span className="font-body text-[27px] font-bold leading-[1.25] text-foreground">
                    {topic.title[0]}
                    <br />
                    {topic.title[1]}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-14">
        <Link
          to="/contact-us"
          className="nido-card block rounded-full bg-[oklch(0.68_0.17_235)] px-6 py-6 text-center font-body text-[26px] font-bold text-foreground shadow-[0_4px_14px_oklch(0_0_0/0.14)] lg:text-[34px]"
        >
          Schedule a Visit &amp; Unlock Their Potential!
        </Link>

        <div className="nido-card mt-8 grid gap-6 rounded-full bg-caramel px-8 py-6 sm:grid-cols-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-4"
          >
            <svg viewBox="0 0 24 24" className="h-10 w-10 shrink-0 fill-[#1877F2]" aria-hidden>
              <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
            </svg>
            <span className="font-body text-[22px] font-bold leading-tight">
              Facebook
              <br />
              Nido Montessori Preschool
            </span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-4 sm:border-l sm:border-white/40"
          >
            <svg viewBox="0 0 24 24" className="h-10 w-10 shrink-0 fill-[#E1306C]" aria-hidden>
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
            <span className="font-body text-[22px] font-bold leading-tight">
              Instagram
              <br />
              @nido_montessorischool
            </span>
          </a>
        </div>
      </section>
    </PageShell>
  );
}
