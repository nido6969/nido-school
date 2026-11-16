import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/videos")({
  component: VideosPage,
  head: () => ({
    meta: [
      { title: "Videos – NIDO Montessori" },
      {
        name: "description",
        content:
          "Watch short videos from NIDO Montessori Preschool in Bowrampet, Hyderabad — classroom moments, Montessori practice, and life at NIDO.",
      },
      { property: "og:title", content: "Videos – NIDO Montessori" },
      {
        property: "og:description",
        content: "Short videos from NIDO Montessori Preschool, Bowrampet.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/videos" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
});

const videos = [
  {
    id: "BWUxNQ8f860",
    label: "Classroom Moments",
    title: "A day unfolding in the prepared environment",
    url: "https://youtube.com/shorts/BWUxNQ8f860",
  },
  {
    id: "hAVm65ROJMg",
    label: "Hands & Focus",
    title: "Children at work with Montessori materials",
    url: "https://youtube.com/shorts/hAVm65ROJMg",
  },
  {
    id: "nTmeG9D46cY",
    label: "Life at NIDO",
    title: "Quiet concentration, movement, and joy",
    url: "https://youtube.com/shorts/nTmeG9D46cY",
  },
];

function VideosPage() {
  return (
    <PageShell>
      <div className="relative mx-auto w-full max-w-[810px] overflow-hidden rounded-2xl border border-[#e6d9be] bg-[linear-gradient(165deg,#faf6ed_0%,#f3ebda_48%,#eef2df_100%)] px-4 py-5 shadow-[0_6px_20px_oklch(0_0_0/0.06)] sm:rounded-[22px] sm:px-6 sm:py-6 lg:px-8 xl:translate-x-21">
        <div
          className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#d4b56a]/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-14 -left-8 h-40 w-40 rounded-full bg-[#636B2F]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <span className="inline-block rounded-full border border-[#d4b56a]/50 bg-white/70 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#636B2F] shadow-sm sm:text-[11px]">
            Watch · Bowrampet
          </span>
          <h1 className="mt-2.5 font-body text-[28px] font-bold leading-tight text-[#636B2F] sm:text-[36px] lg:text-[42px]">
            VIDEOS
          </h1>
          <p className="mt-2 max-w-[560px] font-serif text-[14px] leading-[1.65] text-[#424638] sm:text-[16px] lg:text-[17px]">
            Short films from our sanctuary — a quieter look at independence, concentration, and the
            prepared environment at NIDO.
          </p>
        </div>
      </div>

      <section className="mt-8 sm:mt-10" aria-label="NIDO video shorts">
        <div className="grid grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-3">
          {videos.map((video, index) => (
            <article
              key={video.id}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-[#e8dcc2] bg-[#faf6ed] shadow-[0_8px_24px_oklch(0_0_0/0.07)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_oklch(0_0_0/0.10)]"
            >
              <div className="flex items-center gap-3 border-b border-[#eadfca] px-4 py-3.5 sm:px-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#636B2F] font-display text-sm font-extrabold text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#b3943c]">
                    {video.label}
                  </p>
                  <p className="mt-0.5 font-serif text-[14px] leading-snug text-[#2a2a2a] sm:text-[15px]">
                    {video.title}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center bg-[linear-gradient(180deg,#f3ebda_0%,#ebe3d0_100%)] px-4 py-5 sm:px-5">
                <div className="relative w-full max-w-[280px] overflow-hidden rounded-[22px] border-[3px] border-[#d4b56a]/55 bg-black shadow-[0_12px_28px_oklch(0_0_0/0.18)] ring-1 ring-[#636B2F]/10">
                  <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-[#eadfca] bg-[color-mix(in_oklab,white_55%,#faf6ed)] px-4 py-3.5 sm:px-5">
                <span className="font-serif text-[13px] text-[#6b7058]">YouTube Short</span>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl bg-[#636B2F] px-3.5 py-2 font-display text-sm font-bold text-white shadow-sm transition-all hover:bg-[#4e5424] hover:scale-[1.02] active:scale-98"
                >
                  Watch
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
