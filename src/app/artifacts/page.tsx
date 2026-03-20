import { PageFrame } from "@/components/site-chrome";

const sideNavItems = [
  { icon: "psychology", label: "Generative AI", active: true },
  { icon: "hub", label: "Web3 Systems" },
  { icon: "layers", label: "Spatial UI" },
  { icon: "memory", label: "Neural Architectures" },
  { icon: "biotech", label: "Bio-Digital" },
];

const artifactCards = [
  {
    title: "SYST_CRYSTAL",
    label: "NEURAL_NET_V4",
    meta: "View Deployment // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4VTw9GIA_oQNrkjC83Bq4X-evfO4tGjj-yzjgD3csDHxO9ddrE5JWRma7oEMuecCuXvj2KTtR8V3F2_d2pmWzvODvdxVWTx5IKSsUyuu03IrN5RwqlA6IVlxcWMYzgaj19xLC8lnHOa_tzmIPVya7EM9E2otO_sfKwWhz2Lyw5UGZvRgDv6-5tMM1UIAZGL8OSXQN_6CBnBIIJ4zQzaKz0bspuNyyXk8WAqdjXOEcfQXFDp2YEIZ-HafpdY38Ubc_9gyqbiSz_f54",
    accent: "text-primary",
    span: "md:row-span-2",
  },
  {
    title: "TERRA_01_GEN",
    label: "SPATIAL_INFRA",
    meta: "Access Matrix // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCa_rnzeELWn5iDHxctfbr5wROvc4R6klHZQ2_GUO7Zr4iWqshBdcDX2RbmK2EsQQ9v370VnvfDA2T523KAzXzjU40CcuFyS_togSs2QOMcbR_mZLbA2pdBtn_810Xz8grIc_p80u1LSUjnAO7467MwAehonJpWgFi-UU7Mri5ddM9fu7hy5IapexNqxHuxCxCT8hAENmbOc-mgpa5dnmQrIr4nuw5AwA6ux6p96vbdaNtpxiWW-L15zZxL3DUCMW5bX94givtIrIow",
    accent: "text-secondary",
    span: "md:row-span-3",
  },
  {
    title: "PULSE_ENCRYPT",
    label: "BIO_ENCRYPTION",
    meta: "Stream Data // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuPoSgy5uzjgwVYbiF2LdU6xcwQRcHWxkc1uRdwW3IsKjhFpnAtWSvrSqmsxpUgicTRKcNIUgxgrrN8dU-eSx2PuJUSdN8AW33SX5py3HXpuG9zugL3K50LdztAYOE5RHb3GsNZhYyYYSGn-CbV-N1oeurunkjLVzVpxvHxeds8qYT8UmzSywgRhPm6eKgiJib5qWMsXeW5OMKpKDxm2LtXT55aBoSt803hnWUmeuho3q9D34eXLfqoz9XvO4C7OSCRTV7XKfJneG0",
    accent: "text-tertiary",
    span: "md:row-span-2",
  },
  {
    title: "VOID_ORB_CORE",
    label: "PROTO_V02",
    meta: "Initialize // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzy7JtaSM4peSTPuv5XTdD1y8siZjeSA7d4R1Lb6YZaBqWXdwX9IuY3tvRPOahlmczetlPlSCZ4StzGJzlXJ4CfBqthrYug8uB7feT8Cm0jD1IVJ2e_eDJN1Oao4zkh_rPi6ts3JWK9aKm4JWREh1SvCkDmuxIdJ2vPp_uB_UuYBaUyUuOqjYNhWTVj1GXPcvqUDO0769DrdLyZMDFTUXYgMS8XM_pV2M6nmSu0c8NTG8c6XaTpc8iI7NtUQIC67-epOM12ZPQG56E",
    accent: "text-primary",
    span: "md:row-span-3",
  },
  {
    title: "STRATA_DEFI",
    label: "WEB3_NODES",
    meta: "Verify Hash // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPZ2J1oNZD7Ytm0Z_3bcHDhJNYDrmi7idC_k19TOZn8L60bs1yCPl9mIBzbbzpiQxAUKdeKTs2MWmfDOQTB5L9dodpikWfaXe0RtXCjlikxkbDRHhE5H22_hiq7G3Yc926PLuFIOLnakphULTgFjYdgw4Ts7-2JZ_OXWoXDZPRRbW4EHo9eglwOBgSA66OQn302Kz9FgUMR98VlFjIs_oTNjcY7bCVwpSCKlkbessczFMN1SDzOAMI3mGyvJnOAlt5VtTWjY1X-gAx",
    accent: "text-secondary",
    span: "md:row-span-2",
  },
  {
    title: "GEN_SEQUENCE",
    label: "NEURAL_DNA",
    meta: "Analyze // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAISERMWM3PuEYUmxzZGGRGByjSylwY5t9ZLxMUfcStz58iQF3GeJlv1LYsaGe2OuICdu2dvyyuqgGfP_y0peMlnRb3zwITaNO_Y0H-tdGOe1I9JVa_BDmDe4GXVZJHVDPjppLdAkTjsrFMb5-R3tmj6HXv0X1t-wIKcieRibHqhJ4LrJMd85glWYCcaORyb1y1qjlDNAYn-qYwpcEfv6tLA3x7Jo9C5sP3xdobaUGNH8t8qE67fSztrb5POF2rSCTgPqsjv5FWqROj",
    accent: "text-tertiary",
    span: "md:row-span-2",
  },
];

export default function ArtifactsPage() {
  return (
    <PageFrame
      activeNav="artifacts"
      footerVariant="artifacts"
      sideNavItems={sideNavItems}
      mobileDock
    >
      <header className="relative mb-16 overflow-hidden px-6 md:px-8">
        <div className="mx-auto max-w-7xl py-12">
          <h1 className="mb-4 font-headline text-6xl font-black tracking-tighter md:text-8xl">
            ARTIFACT_GALLERY
          </h1>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
            A curated dimension of high-fidelity neural outputs, decentralized
            protocols, and spatial interfaces engineered within the Ether framework.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            {[
              ["ALL_UNITS", "bg-primary/10 border-primary/20 text-primary shadow-[0_0_15px_rgba(143,245,255,0.1)]"],
              ["CORE_NEURAL", "bg-surface-container-highest border-outline-variant/30 text-on-surface-variant hover:text-on-surface"],
              ["DECENTRALIZED", "bg-surface-container-highest border-outline-variant/30 text-on-surface-variant hover:text-on-surface"],
              ["SPATIAL_V01", "bg-surface-container-highest border-outline-variant/30 text-on-surface-variant hover:text-on-surface"],
            ].map(([label, classes]) => (
              <button
                key={label}
                className={`rounded-full border px-6 py-2 font-label text-[10px] uppercase tracking-widest transition-all ${classes}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      </header>

      <section className="px-6 pb-32 md:px-8">
        <div className="mx-auto grid max-w-[1600px] auto-rows-[200px] grid-cols-1 gap-6 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
          {artifactCards.map((card) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-xl bg-surface-container-highest shadow-2xl transition-all duration-500 hover:scale-[1.02] ${card.span}`}
            >
              <img
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                src={card.image}
                alt={card.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 transition-opacity group-hover:opacity-40" />
              <div className="absolute bottom-0 left-0 w-full translate-y-4 p-8 transition-transform duration-500 group-hover:translate-y-0">
                <span className={`mb-2 block font-label text-[8px] uppercase tracking-[0.3em] ${card.accent}`}>
                  {card.label}
                </span>
                <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                  {card.title}
                </h3>
                <div className="mt-4 flex opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-body text-xs text-on-surface-variant">{card.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-cyan-900/30 bg-slate-950 py-40">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] rounded-full bg-primary blur-[180px]" />
          <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-secondary blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-8">
          <h2 className="mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text font-headline text-5xl font-black uppercase tracking-tighter text-transparent md:text-7xl">
            READY_TO_BUILD_THE_VOID?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl font-body text-xl text-on-surface-variant">
            Collaborate with ETHER_LABS to synthesize your digital footprint into a
            high-fidelity artifact. Our neural architecture is primed for expansion.
          </p>
          <a
            href="#"
            className="group relative inline-block rounded-2xl bg-gradient-to-br from-primary via-secondary to-tertiary p-1 shadow-[0_20px_60px_-15px_rgba(143,245,255,0.4)] hover:scale-105 active:scale-95"
          >
            <div className="flex items-center space-x-4 rounded-[14px] bg-slate-950 px-12 py-6">
              <span className="font-headline text-2xl font-black uppercase tracking-widest text-on-surface">
                START_MISSION
              </span>
              <span className="material-symbols-outlined text-primary transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </div>
          </a>
        </div>
      </section>
    </PageFrame>
  );
}
