import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

import logo from "@/assets/logo.png";
import { mainNav } from "./nav-items";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-md shadow-[0_1px_6px_oklch(0_0_0/0.06)]">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-10 lg:py-2">
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Nido Montessori Preschool home"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Nido — A Montessori Preschool"
            width={816}
            height={816}
            className="h-14 w-14 rounded-full object-cover shadow-sm sm:h-16 sm:w-16 lg:h-[100px] lg:w-[100px]"
          />
          <div className="flex flex-col xl:hidden">
            <span className="font-display font-extrabold text-lg text-olive leading-tight">
              NIDO
            </span>
            <span className="font-serif text-[11px] text-muted-foreground tracking-wide uppercase">
              Montessori Preschool
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden justify-center xl:flex">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 2xl:gap-x-9">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="nav-link text-[15px] 2xl:text-[17px] py-1"
                  activeProps={{
                    className:
                      "nav-link text-[15px] 2xl:text-[17px] underline underline-offset-8 font-bold text-olive",
                  }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle Button - 44px min touch target */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-deep/60 text-olive transition-colors hover:bg-cream-deep focus:outline-none focus:ring-2 focus:ring-olive xl:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {open && (
        <div className="fixed inset-0 top-[65px] z-40 flex flex-col bg-cream/98 px-5 pb-8 pt-2 overflow-y-auto backdrop-blur-lg xl:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav aria-label="Mobile Navigation" className="flex-1">
            <ul className="flex flex-col gap-2.5 pt-2">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="side-pill text-[17px] py-3 px-5 flex items-center justify-between"
                    activeProps={{
                      className:
                        "side-pill text-[17px] py-3 px-5 flex items-center justify-between bg-white text-olive font-bold border-l-4 border-olive",
                    }}
                    activeOptions={{ exact: item.to === "/" }}
                    onClick={() => setOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs opacity-60">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 border-t border-cream-deep pt-5 space-y-3">
            <Link
              to="/contact-us"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-olive py-3.5 px-4 font-display text-lg font-bold text-white shadow-md active:scale-98 transition-transform"
              onClick={() => setOpen(false)}
            >
              <PhoneCall className="h-5 w-5" />
              <span>Schedule a Visit</span>
            </Link>
            <p className="text-center font-serif text-xs text-muted-foreground">
              Bowrampet, Hyderabad • +91 9618853888
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
