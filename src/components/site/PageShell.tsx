import type { ReactNode } from "react";
import buildingBg from "@/assets/building-bg.jpg";
import { SideMenu } from "./SideMenu";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-top bg-no-repeat opacity-[0.35]"
        style={{ backgroundImage: `url(${buildingBg})` }}
      />
      <div className="mx-auto flex max-w-[1800px] gap-6 px-4 pb-16 pt-6 lg:px-8">
        <SideMenu />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
