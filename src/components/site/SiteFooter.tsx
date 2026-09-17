import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { mainNav } from "./nav-items";

const exploreLinks = mainNav.filter((item) =>
  ["/", "/about-us", "/mission-vision", "/programs-environments", "/blogs"].includes(item.to),
);
const familyLinks = mainNav.filter((item) =>
  ["/faqs", "/admissions", "/careers", "/contact-us"].includes(item.to),
);

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.6 21.1 2.9 13.4 2.9 3.7 2.9 3.1 3.4 2.6 4 2.6h3.3c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-4V7h1.5v4.5H13V13z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-8 overflow-hidden text-[#4a4528]">
      <div className="absolute inset-0 bg-[#f6edd8]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[center_top] bg-cover opacity-[0.22]"
        style={{ backgroundImage: `url(${logo})` }}
      />
      <div className="relative h-1.5 bg-gradient-to-r from-[#6f7c3a] via-[#b3943c] to-[#d4b56a]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.9fr_1.15fr_1.1fr] lg:gap-12 items-start">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link to="/" className="inline-flex overflow-hidden rounded-2xl shadow-[0_4px_16px_oklch(0.4_0.04_80/0.12)] ring-1 ring-[#d4b56a]/40">
              <img
                src={logo}
                alt="NIDO — A Montessori Preschool"
                width={140}
                height={140}
                loading="lazy"
                className="h-[96px] w-[96px] sm:h-[120px] sm:w-[120px] object-cover"
              />
            </Link>
            <p className="mt-4 font-display text-xl sm:text-2xl font-bold leading-tight text-[#b3943c]">
              NIDO Montessori
            </p>
            <p className="mt-2 max-w-[280px] font-serif text-sm sm:text-[15px] leading-relaxed text-[#6b6448]">
              A prepared environment in Bowrampet, Hyderabad — nurturing independence from 14 months
              to 6 years.
            </p>
            <Link
              to="/contact-us"
              className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#b3943c] px-5 py-2.5 font-display text-sm sm:text-base font-bold text-[#f6edd8] shadow-[0_4px_12px_oklch(0.45_0.08_85/0.28)] transition-transform hover:scale-[1.03] hover:bg-[#9a7b2e] active:scale-98"
            >
              Schedule a Visit
            </Link>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.facebook.com/share/1HvdMm4v2Z/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#faf6ec] text-[#6f7c3a] ring-1 ring-[#d4b56a]/50 transition-transform hover:scale-110 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nido_montessorischool?igsh=c2tsN3p2dnJnOGZv&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#faf6ec] text-[#6f7c3a] ring-1 ring-[#d4b56a]/50 transition-transform hover:scale-110 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919618853888"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#faf6ec] text-[#6f7c3a] ring-1 ring-[#d4b56a]/50 transition-transform hover:scale-110 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.38a9.87 9.87 0 0 0 4.75 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.43 12.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
                </svg>
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-center sm:text-left">
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-[#6f7c3a]">
                Explore
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {exploreLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="font-serif text-[15px] sm:text-base text-[#4a4528] transition-colors hover:text-[#b3943c]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-[#6f7c3a]">
                Families
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {familyLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="font-serif text-[15px] sm:text-base text-[#4a4528] transition-colors hover:text-[#b3943c]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="text-center sm:text-left">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-[#6f7c3a]">
              Visit Us
            </h2>
            <address className="mt-4 not-italic space-y-3 font-serif text-[15px] sm:text-base leading-relaxed text-[#6b6448]">
              <p className="flex items-start justify-center sm:justify-start gap-2.5 text-[#4a4528]">
                <span className="mt-0.5 text-[#b3943c]">
                  <PinIcon />
                </span>
                <span>
                  Plot No. 405, Block no. 19,
                  <br />
                  Lahari Green Park Road,
                  <br />
                  Bowrampet, Telangana 500043
                </span>
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-2.5">
                <span className="text-[#b3943c]">
                  <PhoneIcon />
                </span>
                <span>
                  <a href="tel:+919618853888" className="transition-colors hover:text-[#b3943c]">
                    9618853888
                  </a>
                  <span className="text-[#b3943c]"> · </span>
                  <a href="tel:+918712034644" className="transition-colors hover:text-[#b3943c]">
                    8712034644
                  </a>
                </span>
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-2.5">
                <span className="text-[#b3943c]">
                  <MailIcon />
                </span>
                <a
                  href="mailto:info@nidomontessori.in"
                  className="transition-colors hover:text-[#b3943c]"
                >
                  info@nidomontessori.in
                </a>
              </p>
              <p className="flex items-start justify-center sm:justify-start gap-2.5">
                <span className="text-[#b3943c]">
                  <ClockIcon />
                </span>
                <span>Mon–Sat, 8:30 AM – 3:00 PM</span>
              </p>
            </address>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-[#6f7c3a]">
              Find Us
            </h2>
            <a
              href="https://www.google.com/maps/place/17%C2%B033'11.5%22N+78%C2%B023'01.9%22E/@17.5536953,78.3826678,18z/data=!4m4!3m3!8m2!3d17.5531826!4d78.3838654"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block overflow-hidden rounded-2xl ring-1 ring-[#d4b56a]/50 shadow-[0_8px_24px_oklch(0.45_0.04_80/0.12)] transition-transform hover:scale-[1.01]"
            >
              <iframe
                title="NIDO Montessori Preschool location map"
                src="https://www.google.com/maps?q=17.5531826,78.3838654&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[180px] w-full border-0 pointer-events-none"
              />
            </a>
            <p className="mt-2 font-serif text-xs sm:text-sm text-[#6b6448]">Open in Google Maps</p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#d4b56a]/35 bg-[#efe4c8]/80">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-5 py-4 sm:flex-row sm:px-8 lg:px-12">
          <p className="font-serif text-xs sm:text-sm text-[#6b6448]">
            © {new Date().getFullYear()} NIDO Montessori Preschool. All rights reserved.
          </p>
          <p className="font-serif text-xs sm:text-sm text-[#6b6448]">Bowrampet, Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
