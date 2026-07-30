import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/nido-logo.png";
import { mainNav } from "./nav-items";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream shadow-[0_1px_6px_oklch(0_0_0/0.06)]">
      <div className="mx-auto grid max-w-[1800px] grid-cols-[auto_1fr] items-center gap-4 px-4 py-3 lg:px-10 lg:py-2">
        <Link to="/" className="shrink-0" aria-label="Nido Montessori Preschool home">
          <img
            src={logo}
            alt="Nido — A Montessori Preschool"
            width={816}
            height={816}
            className="h-16 w-16 object-contain lg:h-[124px] lg:w-[124px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden justify-center xl:flex">
          <ul className="flex flex-wrap items-center gap-x-9 gap-y-2">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="nav-link text-[17px]"
                  activeProps={{ className: "nav-link text-[17px] underline underline-offset-8" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="ml-auto rounded-md p-2 text-olive xl:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-cream-deep bg-cream px-4 pb-4 xl:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="side-pill" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
