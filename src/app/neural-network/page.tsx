import { PageFrame } from "@/components/site-chrome";

const metrics = [
  ["hub", "942+", "NEURAL_NODES_DEPLOYED", "Scalable architecture across distributed quantum networks.", "bg-primary", "text-primary", "text-on-primary-container", "shadow-[0_0_20px_rgba(0,238,252,0.4)]"],
  ["psychology", "12.8ms", "LATENCY_THRESHOLD", "Near-instantaneous cognitive bridge synchronization.", "bg-secondary", "text-secondary", "text-white", "shadow-[0_0_20px_rgba(214,116,255,0.4)]"],
  ["memory", "∞", "DATA_FLOW_LIMIT", "Unrestricted throughput via holographic substrate.", "bg-tertiary", "text-tertiary", "text-white", "shadow-[0_0_20px_rgba(172,137,255,0.4)]"],
];

const team = [
  {
    role: "FOUNDING_ARCHITECT",
    name: "ELARA_SYNTH",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfPHY0PKMCHIRUOHO6uTgS4CuaO5moDJtNzGSmEr5W8uzgcI2qrF9uaQD6dLd_Im7fnWX_CdD3h6hS9McpBBS6nKcJ7xQo1zIfvKp7-i6rscQyMh6c1KnQgI2q8W2XDINZh2mFiiqGPJw7bK2U23GHQT9aVx3sIJaA3ceWcmw4y5jfLB7pUxuGUh8vVVo1LPhMxb_wlBVtUt1ByQ0s_YwdWf-BT_HOVvgTU3CFZW3G4VIRbrVsy5RFad8mq10C9MJAH-K4Krp6nRNp",
    accent: "text-primary",
  },
  {
    role: "NEURAL_DESIGNER",
    name: "KAI_V0ID",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqaUOGMyHVK-WpRR6_RyWj3wxsqXkQYQQ8MrfhB00rQ0SFPk5qRElHsYbeHg8sxpmi03JDkX-e-OKy5swsg_m2EjUMfccnwmK7ZC2bB625UrwUBfHXHEYDB8CS8yqc_DRmsL45BcyA0ZaoBVHU4nDwgVbkMRvlf4VaUrkWWQwwE5pldUSu7LxGYm_VAG63-ZmLN36uJfXjfiZptb6C5rZ4oJ8LC-QDD6AZKMcgMEhdGqdhH3arlPfmidIHaM55nDLien5tjkXK8A4F",
    accent: "text-secondary",
  },
  {
    role: "BIO_SYSTEMS_LEAD",
    name: "SARA_MORPH",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADn4k2LKM5xVcZDWzpTbtGWrdkKjKaMp_D4ULHgnUIW3qRh-2L7jvo7OkEdco8inwBubtcUJJPSsx-DkTADvpmdNZB5Kr_L1ksA6RLHXtlrtNrhFji06_Mv1XBL4VzV5nkThSKmF3aO7vrkacQfk994w-Hl58mvSVj1VsVDYVVB_SawpTfOzw0O7t2K8Yy-1DQ7cjYCnE9ZVD3wwTk0aJ_4CuGxZWPQmsLvd7PG5NmGhVhPFbPpIvQs1gAwe9wQrozxZPdufAoKV1T",
    accent: "text-tertiary",
  },
  {
    role: "QUANTUM_STREAMS",
    name: "JAX_ETHER",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAn83qn1R-MEI29YeMmQ1xmyR_XFpPL30FyZ904YjTZd8iNsHP4BsO2qF_uaVJJOVxfYDTPepltJlTPHIEy7XkLj7vB_oz-3dYyKHJ1V2tOIBUlIADLl9DitVzzL944AQBlpeFeQ0Nld5NG-d3nnEZS-r4g0zHOQIcJyNfTw2QUySjFtaeS2QafU_mgDP66czdPZBISAdBt3NhZAO2imNUC1Ytkmxoyyrclw9KbSRgMWr5ek2Ps6iRa-hYEgRkJPv2XU5Z81FbSojNr",
    accent: "text-primary-dim",
  },
];

export default function NeuralNetworkPage() {
  return (
    <PageFrame activeNav="none" footerVariant="neural">
      <section className="relative flex min-h-[819px] items-center overflow-hidden px-6 md:px-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background/20" />
          <img
            className="h-full w-full scale-110 object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxlM22DxhtWNskB60v_3Hg_tCt20dCXoyiPc23v5pRxqBVhs-k_lRiHx4Wr9P48_r3GSiwKQrzI3YzP9JOM542xF7vnyTxxYR-4EQEEkDe0Jyzl6qIMKoxWab2FYXZvoejV9gugMhmxmTFCQDu_evOqt2Q4zDkjd4q3oj9BwWKiB-NJfz51CJdUgyeg63n1foHrQmzbg3RUT004KMU-IKWvWAmjzwTFXdIl5x--AB7zpIYgpIHJRPAYt-gtwRMvhCtwVjZwLwYYun"
            alt="Futuristic digital network of light and floating data particles"
          />
        </div>
        <div className="relative z-20 max-w-4xl">
          <div className="mb-6 flex items-center space-x-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The Visionary Core
            </span>
          </div>
          <h1 className="mb-8 font-headline text-7xl font-black leading-[0.9] tracking-tighter md:text-9xl">
            SYNTHESIZING{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              REALITY
            </span>
          </h1>
          <p className="max-w-2xl font-body text-xl font-light leading-relaxed text-on-surface-variant md:text-2xl">
            We architect neural conduits between human intuition and machine
            intelligence, manifesting the next era of digital existence.
          </p>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 py-32 md:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {metrics.map(([icon, value, label, copy, bg, text, iconColor, shadow]) => (
            <div key={label} className="glass-card inner-bevel-light group relative rounded-xl p-12">
              <div className={`absolute -top-6 left-12 flex h-12 w-12 items-center justify-center rounded-lg ${bg} ${shadow}`}>
                <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
              </div>
              <div className={`mb-2 font-headline text-6xl font-black ${text}`}>{value}</div>
              <div className="mb-4 font-headline text-xs uppercase tracking-widest text-on-surface-variant">
                {label}
              </div>
              <p className="text-sm leading-relaxed text-on-surface-variant">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-6 py-32 md:px-20">
        <div className="mx-auto mb-20 max-w-7xl">
          <h2 className="mb-4 font-headline text-5xl font-bold tracking-tighter text-on-surface">
            ARCHITECTS_OF_THE_VOID
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent" />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-surface-container-high inner-bevel-light"
            >
              <div className="relative aspect-[4/5]">
                <img
                  className="h-full w-full object-cover mix-blend-luminosity transition-all duration-700 group-hover:scale-110 group-hover:mix-blend-normal"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
              </div>
              <div className="absolute bottom-0 left-0 w-full translate-y-4 p-8 transition-transform duration-500 group-hover:translate-y-0">
                <div className={`mb-1 font-headline text-[10px] uppercase tracking-widest ${member.accent}`}>
                  {member.role}
                </div>
                <div className="font-headline text-2xl font-black text-on-surface">
                  {member.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-outline-variant/10 bg-surface-container-low px-6 py-32 md:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-12 md:flex-row md:space-y-0">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mb-6 font-headline text-4xl font-black text-on-surface">
              READY_FOR_UPGRADE?
            </h3>
            <p className="mb-8 font-body text-lg font-light text-on-surface-variant">
              Connect your interface to our neural backbone and begin the synthesis of
              your next architectural masterpiece.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-lg bg-gradient-to-r from-primary to-primary-container px-10 py-5 font-headline font-bold uppercase tracking-widest text-on-primary-container shadow-[0_0_30px_rgba(0,238,252,0.2)] hover:scale-105"
            >
              LAUNCH_TERMINAL
            </a>
            <a
              href="/artifacts"
              className="glass-card inner-bevel-light rounded-lg px-10 py-5 font-headline font-bold uppercase tracking-widest text-on-surface hover:bg-surface-container-highest"
            >
              VIEW_RECORDS
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
