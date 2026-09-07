import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { sideNav } from "./nav-items";

export function SiteFooter() {
  return (
    <footer className="relative z-10 bg-[#f3e8d8] px-4 py-10 sm:px-6 lg:px-16 border-t-2 border-[#e8dcc2]">
      <div className="mx-auto grid max-w-[1600px] gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start">
        {/* Column 1: Circular Logo */}
        <div className="flex items-center justify-center sm:justify-start">
          <img
            src={logo}
            alt="Nido — A Montessori Preschool"
            width={816}
            height={816}
            loading="lazy"
            className="h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover shadow-sm"
          />
        </div>

        {/* Column 2: Navigation Links */}
        <nav aria-label="Footer" className="text-center sm:text-left">
          <ul className="flex flex-col gap-2.5">
            {sideNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="font-body text-base sm:text-[19px] font-bold text-foreground transition-colors hover:text-olive py-1 inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Contact Info & Socials */}
        <div className="space-y-4 text-center sm:text-left">
          <p className="font-body text-base sm:text-[19px] text-foreground">
            <span className="font-bold">Phone:</span>{" "}
            <a href="tel:+919618853888" className="hover:text-olive underline">
              9618853888
            </a>
            ,{" "}
            <a href="tel:+918712034644" className="hover:text-olive underline">
              8712034644
            </a>
          </p>

          <p className="font-body text-base sm:text-[18px] text-foreground">
            <span className="font-bold">Email:</span>{" "}
            <a href="mailto:info@nidomontessori.in" className="hover:text-olive underline">
              info@nidomontessori.in
            </a>
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
            <a
              href="https://www.facebook.com/share/1HvdMm4v2Z/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-2 transition-transform hover:scale-110 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#1877F2]" aria-hidden="true">
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nido_montessorischool?igsh=c2tsN3p2dnJnOGZv&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 transition-transform hover:scale-110 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#E1306C]" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>
            <a
              href="https://wa.me/919618853888"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="p-2 transition-transform hover:scale-110 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-whatsapp" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.38a9.87 9.87 0 0 0 4.75 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.43 12.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 4: Location Map */}
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="font-display text-[22px] sm:text-[26px] font-bold text-foreground">
            Bowrampet, Hyderabad
          </h2>
          <iframe
            title="Nido Montessori Preschool location map"
            src="https://www.google.com/maps?q=Bowrampet,Hyderabad&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[180px] w-full max-w-full rounded-2xl border-0 shadow-[0_2px_8px_oklch(0_0_0/0.12)] mx-auto sm:mx-0"
          />
        </div>
      </div>
    </footer>
  );
}
