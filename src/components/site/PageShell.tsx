import type { ReactNode } from "react";
import pageBg from "@/assets/background.jpg";
import { SideMenu } from "./SideMenu";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate min-h-screen max-w-full overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-top bg-no-repeat opacity-[0.25]"
        style={{ backgroundImage: `url(${pageBg})` }}
      />
      <div className="mx-auto flex max-w-[1800px] gap-6 px-3.5 sm:px-6 lg:px-8 pb-16 pt-4 sm:pt-6 w-full">
        <SideMenu />
        <main className="min-w-0 flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
