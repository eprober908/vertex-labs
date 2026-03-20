import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TopNavKey = "solutions" | "artifacts" | "none";
type FooterVariant = "home" | "solutions" | "artifacts" | "neural";

type SideNavItem = {
  icon: string;
  label: string;
  href?: string;
  active?: boolean;
};

const topNavItems = [
  { label: "Home", href: "/", key: "none" as const },
  { label: "Solutions", href: "/solutions", key: "solutions" as const },
  { label: "Artifacts", href: "/artifacts", key: "artifacts" as const },
  { label: "Process", href: "/#process", key: "none" as const },
  { label: "Neural Network", href: "/neural-network", key: "none" as const },
];

export function TopNav({ active }: { active: TopNavKey }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-950/40 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex w-full max-w-full items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="font-headline text-2xl font-black tracking-tighter text-cyan-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
        >
          ETHER LABS
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {topNavItems.map((item) => {
            const isActive = active === item.key && item.key !== "none";
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "font-label text-xs uppercase tracking-[0.1em]",
                  isActive
                    ? "border-b-2 border-cyan-400 pb-1 font-bold text-cyan-400"
                    : "text-slate-400 hover:text-cyan-200",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-primary to-primary-container px-4 py-2.5 font-label text-[10px] font-bold uppercase tracking-widest text-on-primary-container shadow-[0_0_20px_rgba(0,238,252,0.3)] hover:scale-105 active:scale-95 md:px-6"
          >
            INITIATE PROJECT
          </Link>
        </div>
        <details className="group relative md:hidden">
          <summary className="flex h-11 w-11 list-none items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 marker:content-none">
            <span className="material-symbols-outlined group-open:hidden">menu</span>
            <span className="material-symbols-outlined hidden group-open:block">close</span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-cyan-900/20 backdrop-blur-3xl">
            <div className="mb-3 font-label text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Navigation
            </div>
            <div className="flex flex-col gap-2">
              {topNavItems.map((item) => {
                const isActive = active === item.key && item.key !== "none";
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 font-label text-[11px] uppercase tracking-[0.18em]",
                      isActive
                        ? "bg-cyan-500/10 text-cyan-300"
                        : "bg-white/[0.03] text-slate-300",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="#contact"
                className="mt-2 rounded-xl bg-gradient-to-r from-primary to-primary-container px-4 py-3 text-center font-label text-[11px] font-bold uppercase tracking-[0.18em] text-on-primary-container"
              >
                Initiate Project
              </Link>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}

export function SideNav({ items }: { items: SideNavItem[] }) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col space-y-6 bg-slate-950/60 px-6 pb-8 pt-24 shadow-2xl shadow-cyan-900/20 backdrop-blur-3xl lg:flex">
      <div className="mb-4">
        <div className="font-label text-[10px] uppercase tracking-widest text-purple-400">
          STRATA CATEGORIES
        </div>
        <div className="mt-1 text-[8px] text-slate-500">V0.1 BETA</div>
      </div>
      <nav className="space-y-4">
        {items.map((item) => {
          const content = (
            <>
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              <span className="font-label text-[10px] uppercase tracking-widest">
                {item.label}
              </span>
            </>
          );

          const classes = cn(
            "flex items-center gap-4 py-3 px-4 transition-transform duration-300",
            item.active
              ? "rounded-r-full border-r-4 border-purple-500 bg-purple-500/10 text-purple-400"
              : "text-slate-500 hover:translate-x-2 hover:text-slate-200",
          );

          if (item.href) {
            return (
              <Link key={item.label} href={item.href} className={classes}>
                {content}
              </Link>
            );
          }

          return (
            <div key={item.label} className={classes}>
              {content}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export function MobileDock({
  active,
}: {
  active: "home" | "solutions" | "artifacts" | "neural";
}) {
  const items = [
    { icon: "home", label: "Home", href: "/", active: active === "home" },
    { icon: "wb_iridescent", label: "Solutions", href: "/solutions", active: active === "solutions" },
    { icon: "layers", label: "Artifacts", href: "/artifacts", active: active === "artifacts" },
    { icon: "neurology", label: "Neural", href: "/neural-network", active: active === "neural" },
  ];

  return (
    <div className="glass-panel fixed bottom-0 z-50 flex w-full items-center justify-around border-t border-outline-variant/10 px-4 pb-6 pt-3 md:hidden">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "flex min-w-[4.5rem] flex-col items-center gap-1 rounded-2xl px-3 py-2",
            item.active
              ? "bg-cyan-500/10 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
              : "text-slate-500",
          )}
        >
          <span
            className="material-symbols-outlined"
            style={item.active ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            {item.icon}
          </span>
          <span className="font-label text-[8px] uppercase tracking-widest">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

export function SiteFooter({ variant }: { variant: FooterVariant }) {
  if (variant === "home") {
    return (
      <footer className="relative overflow-hidden border-t border-cyan-900/30 bg-slate-950 px-12 py-20">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 font-headline text-4xl font-black uppercase text-slate-800/20">
              SYNTHETIC ETHER
            </div>
            <p className="max-w-sm font-body text-sm text-slate-500">
              Forging the next generation of digital infrastructure through neural
              research and aesthetic precision.
            </p>
          </div>
          <div className="space-y-4">
            <div className="font-label text-[10px] uppercase tracking-[0.2em] text-cyan-500">
              ACCESS POINTS
            </div>
            <ul className="space-y-2">
              {["TERMINAL", "ENCRYPTION POLICY", "NEURAL ACCESS", "DATA STREAM"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-label text-[10px] tracking-[0.2em] text-slate-600 hover:text-slate-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-right">
            <div className="font-label text-[10px] tracking-[0.2em] text-slate-500">
              ©2024 SYNTHETIC ETHER. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-10 -left-10 select-none font-headline text-[20rem] font-black text-slate-900/10">
          ETHER
        </div>
      </footer>
    );
  }

  if (variant === "solutions") {
    return (
      <footer className="relative overflow-hidden border-t border-cyan-900/30 bg-slate-950 px-12 py-20">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 font-headline text-4xl font-black text-slate-800/20">
              ETHER LABS
            </div>
            <p className="font-label text-[10px] tracking-[0.2em] text-slate-500">
              ©2024 SYNTHETIC ETHER. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <h6 className="font-label text-[10px] tracking-widest text-cyan-500">
              DIRECTORY
            </h6>
            <a href="#" className="font-label text-[10px] tracking-[0.2em] text-slate-600 hover:text-slate-300">
              TERMINAL
            </a>
            <a href="#" className="font-label text-[10px] tracking-[0.2em] text-slate-600 hover:text-slate-300">
              ENCRYPTION POLICY
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <h6 className="font-label text-[10px] tracking-widest text-cyan-500">
              DATA STREAMS
            </h6>
            <a href="#" className="font-label text-[10px] tracking-[0.2em] text-slate-600 hover:text-slate-300">
              NEURAL ACCESS
            </a>
            <a href="#" className="font-label text-[10px] tracking-[0.2em] text-slate-600 hover:text-slate-300">
              DATA STREAM
            </a>
          </div>
          <div className="text-right">
            <div className="mb-4 ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10">
              <span className="material-symbols-outlined text-cyan-400">arrow_upward</span>
            </div>
            <span className="font-label text-[8px] tracking-[0.3em] text-slate-500">
              TOP OF STACK
            </span>
          </div>
        </div>
        <div className="noise-carbon pointer-events-none absolute inset-0 opacity-10" />
      </footer>
    );
  }

  if (variant === "artifacts") {
    return (
      <footer className="relative overflow-hidden border-t border-cyan-900/30 bg-slate-950 px-12 py-20 shadow-[0_-20px_50px_rgba(0,240,255,0.05)]">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-6 font-headline text-4xl font-black text-slate-800/20">ETHER LABS</div>
            <p className="max-w-xs font-label text-[10px] uppercase leading-relaxed tracking-[0.2em] text-slate-500">
              ©2024 SYNTHETIC ETHER. ALL RIGHTS RESERVED. ENGINEERED IN THE VOID OF
              NEURAL PROCESSING.
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-headline text-[10px] uppercase tracking-widest text-cyan-500">
              DIRECTORIES
            </h4>
            <ul className="space-y-4">
              {["TERMINAL", "ENCRYPTION POLICY", "NEURAL ACCESS", "DATA STREAM"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-label text-[10px] uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-slate-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-end space-y-6">
            <div className="flex space-x-6">
              {["terminal", "language", "code"].map((icon) => (
                <span
                  key={icon}
                  className="material-symbols-outlined cursor-pointer text-slate-600 transition-colors hover:text-cyan-400"
                >
                  {icon}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-2 font-label text-[8px] uppercase tracking-[0.5em] text-slate-700">
              <span>SYSTEM STATUS</span>
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              <span className="text-green-500/50">STABLE</span>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-1/2 w-full -translate-x-1/2 bg-gradient-to-t from-cyan-900/10 to-transparent" />
      </footer>
    );
  }

  return (
    <footer className="relative overflow-hidden border-t border-cyan-900/30 bg-slate-950 px-12 py-20">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30 shadow-[0_0_20px_rgba(0,240,255,0.5)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 md:grid-cols-4">
        <div>
          <div className="mb-6 font-headline text-4xl font-black text-slate-800/20">ETHER LABS</div>
          <div className="font-label text-[10px] tracking-[0.2em] text-slate-500">
            ©2024 SYNTHETIC ETHER. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="font-headline text-xs uppercase tracking-widest text-cyan-500">
            DIRECTORY
          </div>
          <a href="#" className="font-label text-[10px] tracking-[0.2em] text-slate-600 hover:text-slate-300">
            TERMINAL
          </a>
          <a href="#" className="font-label text-[10px] tracking-[0.2em] text-slate-600 hover:text-slate-300">
            ENCRYPTION POLICY
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="font-headline text-xs uppercase tracking-widest text-cyan-500">
            CHANNELS
          </div>
          <a href="#" className="font-label text-[10px] tracking-[0.2em] text-slate-600 hover:text-slate-300">
            NEURAL ACCESS
          </a>
          <a href="#" className="font-label text-[10px] tracking-[0.2em] text-slate-600 hover:text-slate-300">
            DATA STREAM
          </a>
        </div>
        <div className="flex justify-end space-x-6">
          {["share", "language"].map((icon) => (
            <div
              key={icon}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-cyan-900/50 transition-all hover:bg-cyan-500/10"
            >
              <span className="material-symbols-outlined text-lg text-slate-400">{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({
  activeNav,
  sideNavItems,
  footerVariant,
  mobileDock,
  children,
}: {
  activeNav: TopNavKey;
  sideNavItems?: SideNavItem[];
  footerVariant: FooterVariant;
  mobileDock?: boolean;
  children: ReactNode;
}) {
  const dockActive =
    footerVariant === "home"
      ? "home"
      : footerVariant === "solutions"
        ? "solutions"
        : footerVariant === "artifacts"
          ? "artifacts"
          : "neural";

  return (
    <div className="selection-primary min-h-screen bg-background text-on-surface">
      <TopNav active={activeNav} />
      {sideNavItems ? <SideNav items={sideNavItems} /> : null}
      <main className={cn(sideNavItems ? "pb-28 pt-24 lg:ml-64 lg:pb-0" : "pb-28 pt-24 lg:pb-0")}>
        {children}
      </main>
      <SiteFooter variant={footerVariant} />
      {mobileDock === false ? null : <MobileDock active={dockActive} />}
    </div>
  );
}
