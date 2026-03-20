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
    title: "SYST CRYSTAL",
    label: "NEURAL NET V4",
    meta: "View Deployment // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmL63ykzumZT47-UeJuvvp1oI9wmiHo8qIqTxp-Rfm5h8ECXF8ANyh7_wolEal0lCclTwxoqjdjnr7ob-wgRQLDPHnngPsBVi5X4Jq6Zu0J9MPwC08tZYQQ67RG8cKd3lRtHoxskVZrSHdAvAKYUWRDzPzhacu_RfsEmblWO0YfVbtL8n3tLah7cDdm01L2nGAetnEf_7aVZT4b3AUDzdijKzrmKRY_ppci1v45spQuS6Uh8wIQzt83IKotKALh-4cSpCS6xuc6aNy",
    accent: "text-primary",
    span: "md:row-span-2",
  },
  {
    title: "TERRA 01 GEN",
    label: "SPATIAL INFRA",
    meta: "Access Matrix // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4Nbh630u35es7XTsCTFLshRa4GDvXx7IE_Qvc_QKWUxUgPrWbLX3ri_iSTAy3arHSFHXZvXMw_XNn8VmsUEBTOhEjld-ZmuhmYNCbElZgp1_oTDmxEfXRjXk9GqI5XWqgYET3imYh4df_YYjeP2OJ-cGZpp2bEgACx9bwjjzsp2ZkQIFJvpJa50bGuVtbTqD5sWJBhxFL1n5m-i85bpt4FQgE_N1MwoK6W7sLl03QBzDqsd0vKwgV5L6UaWbezo87A-fsskzlb9kK",
    accent: "text-secondary",
    span: "md:row-span-3",
  },
  {
    title: "PULSE ENCRYPT",
    label: "BIO ENCRYPTION",
    meta: "Stream Data // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5TYPJfv1l9c1i0g7_hRjxU5RdKqo6657d1wW0mCHPCYat7mDv8jfDBLNrKk9-0Z9yS74rsEg56Iq_jO5K7MAvZ7htOTEIhHpQ7p1eq3Bd8um7RZclANMkq7r-21AtWxLZPPCucQ9xrKbYuVSv5sUn5uXjrtxKgX7bFa5TV0D2zKMPoORWRo6z27IsJr70qQ_EHSNEiCZzUYVK5NLt789uQflaUIB8kg6xlzNQEoulNRf7HKpD1a7IdIqmN_bOPNyOgMbydcV28tLR",
    accent: "text-tertiary",
    span: "md:row-span-2",
  },
  {
    title: "VOID ORB CORE",
    label: "PROTO V02",
    meta: "Initialize // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB40ZNHis9uWlhUNNo9mmztT-NIAAv_A0T7AzUzi3bNoTFtvRXvbr7h_eIFRUOVnF3lRHcgJANJXXBikgITyU6OAkCsgoiIHK68JW9DZkTr4rAm8odBLzHuCxv3YrLQN-as1H7Tql7TpHTysd5MU298UEuLcG-S9Bak66OWHBNEDtMfKlMRS_vL0wuA9_FZ2qb2vU29nTrauPO2LHwa1SFSq7Y_An2hycnkNnyIJDnDrj3vDXYIs8BAO0l9vy3EUax01eWu5w5GxjtE",
    accent: "text-primary",
    span: "md:row-span-3",
  },
  {
    title: "STRATA DEFI",
    label: "WEB3 NODES",
    meta: "Verify Hash // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKbGqlJevP-GBq7hRGrzsh6DjWtAQsTRKs8wlY1uLETIYPxt22twuufwLCZI8wGZYwXtGwm9FKMs8lonyLj7lxN2_N6JS0Fuu7WGvluSNEjr6f706KRaaH6STO_C2X_LqiO2qcUIMDskxfz5zjEcP9J9wnc38aojdD4aY2cGXgi_wgAiqRBaejjscpnFZOrw1zvD5RBnD-QavM3X4PVLsJ9Vei1dxUiXCfwMlAw63mTR85Z5kUEUTb-8TxcPgd5XsP_9Dlt-ctDFf8",
    accent: "text-secondary",
    span: "md:row-span-2",
  },
  {
    title: "GEN SEQUENCE",
    label: "NEURAL DNA",
    meta: "Analyze // 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDLnUngFeHObAb_Sfb_3rAAvKPUHploHouAgTaMEvL_Zq4wnlaAmWsnrS_PB0wwXDj0-AheGIYSp_n2zABhXk7yLNzyACBaDtO5DakyFmVEKld75qwtuXCA-Uwj-bUsaV8-lPziVV44J2BhUMrSMb-02HAGRBKIVvdKEdWfMxswlxFn5izFSoqErIwZ87JYePpUuap9bctFg49pJpBzusFAfxV0BhmCJyNjGqA6Waw0upaah6gQalgZekNl5uroUeL_7TyMnPJTZR-",
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
    >
      <header className="relative mb-10 overflow-hidden px-5 sm:px-6 md:mb-16 md:px-8">
        <div className="mx-auto max-w-7xl py-6 md:py-12">
          <h1 className="mb-4 font-headline text-3xl font-black tracking-tighter sm:text-4xl md:text-8xl">
            Artifact Gallery
          </h1>
          <p className="max-w-2xl font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
            A curated dimension of high-fidelity neural outputs, decentralized
            protocols, and spatial interfaces engineered within the Ether framework.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:gap-4 md:mt-12">
            {[
              ["ALL UNITS", "bg-primary/10 border-primary/20 text-primary shadow-[0_0_15px_rgba(143,245,255,0.1)]"],
              ["CORE NEURAL", "bg-surface-container-highest border-outline-variant/30 text-on-surface-variant hover:text-on-surface"],
              ["DECENTRALIZED", "bg-surface-container-highest border-outline-variant/30 text-on-surface-variant hover:text-on-surface"],
              ["SPATIAL V01", "bg-surface-container-highest border-outline-variant/30 text-on-surface-variant hover:text-on-surface"],
            ].map(([label, classes]) => (
              <button
                key={label}
                className={`w-full rounded-full border px-6 py-3 font-label text-[10px] uppercase tracking-widest transition-all sm:w-auto sm:py-2 ${classes}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      </header>

      <section className="px-5 pb-16 sm:px-6 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-[1600px] auto-rows-[260px] grid-cols-1 gap-5 sm:gap-6 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] md:auto-rows-[200px]">
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
              <div className="absolute bottom-0 left-0 w-full translate-y-0 p-6 transition-transform duration-500 md:translate-y-4 group-hover:translate-y-0 md:p-8">
                <span className={`mb-2 block font-label text-[8px] uppercase tracking-[0.3em] ${card.accent}`}>
                  {card.label}
                </span>
                <h3 className="font-headline text-xl font-bold uppercase leading-tight sm:text-2xl">
                  {card.title}
                </h3>
                <div className="mt-3 flex opacity-100 transition-opacity duration-500 md:mt-4 md:opacity-0 group-hover:opacity-100">
                  <span className="font-body text-xs text-on-surface-variant">{card.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-cyan-900/30 bg-slate-950 py-20 md:py-40">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] rounded-full bg-primary blur-[180px]" />
          <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-secondary blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6 md:px-8">
          <h2 className="mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text font-headline text-3xl font-black uppercase tracking-tighter text-transparent sm:text-4xl md:mb-8 md:text-7xl">
            Ready to Build the Void?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-body text-base text-on-surface-variant md:mb-12 md:text-xl">
            Collaborate with ETHER LABS to synthesize your digital footprint into a
            high-fidelity artifact. Our neural architecture is primed for expansion.
          </p>
          <a
            href="#"
            className="group relative inline-block w-full rounded-2xl bg-gradient-to-br from-primary via-secondary to-tertiary p-1 shadow-[0_20px_60px_-15px_rgba(143,245,255,0.4)] hover:scale-105 active:scale-95 sm:w-auto"
          >
            <div className="flex items-center justify-center space-x-4 rounded-[14px] bg-slate-950 px-8 py-5 sm:px-12 sm:py-6">
              <span className="font-headline text-lg font-black uppercase tracking-widest text-on-surface sm:text-2xl">
                Start Mission
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
