import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact-us")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — NIDO Montessori Preschool, Bowrampet Hyderabad" },
      {
        name: "description",
        content:
          "Call 9618853888 or 8712034644, email info@nidomontessori.in, or visit NIDO Montessori Preschool in Bowrampet, Hyderabad.",
      },
      { property: "og:title", content: "Contact Us — NIDO Montessori Preschool" },
      { property: "og:description", content: "Schedule a visit to our Bowrampet campus." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact-us" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
  }),
});

function ContactPage() {
  return (
    <PageShell>
      <h1 className="heading-script text-[40px] lg:text-[46px]">Contact Us</h1>

      <div className="mt-10 grid gap-10 xl:grid-cols-2">
        <div className="rounded-3xl bg-white/85 px-8 py-8 shadow-[0_5px_18px_oklch(0_0_0/0.08)]">
          <h2 className="font-body text-[24px] font-bold text-olive">Bowrampet, Hyderabad</h2>
          <p className="mt-5 text-[19px] leading-[1.9]">
            <strong>Phone:</strong>{" "}
            <a href="tel:+919618853888" className="hover:text-olive">
              9618853888
            </a>
            ,{" "}
            <a href="tel:+918712034644" className="hover:text-olive">
              8712034644
            </a>
          </p>
          <p className="mt-2 text-[19px] leading-[1.9]">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@nidomontessori.in" className="hover:text-olive">
              info@nidomontessori.in
            </a>
          </p>
          <a
            href="https://wa.me/919618853888"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block rounded-full bg-sky-cta px-8 py-3 font-body text-[19px] font-bold text-foreground shadow-[0_3px_10px_oklch(0_0_0/0.12)] transition-transform hover:scale-105"
          >
            Schedule a Visit
          </a>
        </div>

        <iframe
          title="Map to NIDO Montessori Preschool, Bowrampet"
          src="https://www.google.com/maps?q=Bowrampet,Hyderabad&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[380px] w-full rounded-3xl border-0 shadow-[0_5px_18px_oklch(0_0_0/0.12)]"
        />
      </div>
    </PageShell>
  );
}
