import { Link } from "@tanstack/react-router";
import { sideNav } from "./nav-items";

export function SideMenu() {
  return (
    <aside className="sticky top-[140px] hidden h-fit w-[278px] shrink-0 rounded-b-3xl bg-[color-mix(in_oklab,var(--cream)_55%,white)] px-4 py-6 shadow-[0_6px_18px_oklch(0_0_0/0.06)] xl:block">
      <nav aria-label="Section">
        <ul className="flex flex-col gap-3">
          {sideNav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="side-pill text-[17px]"
                activeProps={{ className: "side-pill text-[17px] bg-white" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
