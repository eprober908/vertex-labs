import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { PageFrame } from "@/components/site-chrome";

const sideNavItems = [
  { icon: "language", label: "Neural Nodes" },
  { icon: "diamond", label: "Latency" },
  { icon: "stream", label: "Data Flow" },
  { icon: "group", label: "Architects", active: true },
  { icon: "bolt", label: "Upgrade" },
];

const stats = [
  {
    icon: "language",
    value: "942+",
    label: "Neural Nodes",
    iconColor: "text-primary",
    badgeClass: "bg-primary/10",
    glowClass: "group-hover:shadow-[0_0_40px_rgba(143,245,255,0.3)]",
    labelClass: "text-primary",
  },
  {
    icon: "diamond",
    value: "12.8ms",
    label: "Latency",
    iconColor: "text-secondary",
    badgeClass: "bg-secondary/10",
    glowClass: "group-hover:shadow-[0_0_40px_rgba(214,116,255,0.3)]",
    labelClass: "text-secondary",
  },
  {
    icon: "stream",
    value: "Infinite",
    label: "Data Flow",
    iconColor: "text-tertiary",
    badgeClass: "bg-tertiary/10",
    glowClass: "group-hover:shadow-[0_0_40px_rgba(172,137,255,0.3)]",
    labelClass: "text-tertiary",
  },
];

const team = [
  {
    name: "Kaelen Voss",
    role: "Core Systems Lead",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBva2zEZz6eyM_s4qt2Z72QM9PoKgunrXsMdufbzyKsx-a_lcX277QkR0vkNjf_yVGIL6sN67ps_HNGyLokgtylbOkVxQEsn_RQVeWe3cBicIqxQI3hVfB814ovisYwXHhSzQk2MaUWlw9xrligsBG2timHVuYMIhqrEfgP1vOqR8uRinI-ZR8TKKGhx49p_Nd7cFqQ88joXcp6laRBMTCLLuSb1oAIW29ZTnCGOqWQUTW-WDr9oHuVUMvItZRsBO_SNvbkbvI8CtsN",
    borderClass: "border-primary/20",
    roleClass: "text-primary",
  },
  {
    name: "Lyra Thorne",
    role: "Neural Architect",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTqeJvpP2ngXBkC0rjW0ICFQ6DMDf8yZZVjePnN5KHHVkS_1rwbCXhJ_yvW3l_T-wdTQvhSCobGPZchhu9sQP12X8iaMRfrpaMOQGZCkSkfu957aRzpGeLUT-T-QKcjRq1r97nnNtxOrCUX7emaIsbQdtbNpvGQNmaNXfB5V2NFHdY7fHZH0mYNNuHtxKAExVZeZMnMeogv9_KD4ywuhc4irnKKVb5vgh2o5gxYM6attZ49GDdkzrPKz7LrmXtRLGVo9pKwznNQyrm",
    borderClass: "border-secondary/20",
    roleClass: "text-secondary",
  },
  {
    name: "Cyrus Malek",
    role: "Protocol Designer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABCLZcgcRNE2YHL5Qb_ov8LXjXOGrn8U470kOObWeWgV_q-xSXe36e-qFL8oBIUocDaFXkiCTCK43TlOZVFWe4bCG0CjgSE_vI_rITzaAilfqhtVqoST6KN4x7JcdSDDaJhYQLD38wTiZW2pUrZgQyGMuHna59sLOBlHElctQHm2m-fjByQXfWyL7Ie-tw5Kmtl1n-lPcUgstSuGUyjJcovr87IoFQ05tB1G4dyZXZse0avZrTURLi3nY9kcpr0jSW05kzB1EYT0O2",
    borderClass: "border-tertiary/20",
    roleClass: "text-tertiary",
  },
  {
    name: "Elara Quinn",
    role: "Interface Strategist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqDWRccMe94xwYF6Kz0UGgYHjkVbvkpb1fxHMFXXlOPkCgbpaZwLwgIkAxuCv64CBML6Ti6bpqc8APIUQCo4Xm5pC1CMjuXVTRH_FwAGmGIAhubasdtwGPJZepzBMxU9-RiMYO8ssZMTXIPPKI-kfl5HiZzMM0mTJ-cMlNwDq399eTg0mcElr8uWSqOTzY3mP0RYSXjteLqMzRwk0L9WabeZr-1PJu0nwQ71GQK_PEc0GhQNyECAr7NNQstb5UHI6noEjt9IAX5-4V",
    borderClass: "border-primary-dim/20",
    roleClass: "text-primary-dim",
  },
];

export default function NeuralNetworkPage() {
  return (
    <PageFrame activeNav="none" footerVariant="neural" sideNavItems={sideNavItems}>
      <section className="relative flex min-h-[800px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="hero-ken-burns h-full w-full object-cover opacity-60 rounded-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2AMk9Angzf72kGFjoIKZWPbZ6SU92s0UCLTxiSIp9y8mWFlMcoRy4rB4nrUAZxPcwnbFwiQLvf4l47x-AxAU5bID_JtwCMlFPSiKaVDj7SpjxN1Kp4ewJQuEQFE_LnJKYX80POMpg13JxExjJ4zqBo6bzs1j6Waw7yecYo0LqtkLXh8Zfv8gm2B1MATpmCc3yYB2Yeue7Y7a_1aA8d_peVvrFEAaWwWg6GkC7BsQQDVJbHYO5DE0O_KWqGzc_O52me5EmHmjhmmWK"
            alt="Luminous neural network nodes connected by electric blue light trails"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        </div>

        <RevealOnScroll as="div" className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h1 className="hero-headline-glow mb-6 font-headline text-6xl font-bold leading-none tracking-tighter text-on-background sm:text-7xl md:text-8xl lg:text-9xl">
            SYNTHESIZING{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              REALITY
            </span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-xl font-light leading-relaxed tracking-wide text-on-surface-variant md:text-2xl">
            The human-machine collective defining the future of digital architecture.
          </p>
          <div className="mt-12 flex justify-center gap-6">
            <div className="h-24 w-1 bg-gradient-to-b from-primary to-transparent opacity-50" />
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-6 py-24">
        <RevealOnScroll
          as="div"
          className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel premium-card inner-bevel group flex flex-col items-center rounded-2xl p-10 text-center"
            >
              <div
                className={`mb-8 flex h-20 w-20 items-center justify-center rounded-full ${stat.badgeClass} ${stat.glowClass} transition-all`}
              >
                <span
                  className={`material-symbols-outlined text-4xl ${stat.iconColor}`}
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  {stat.icon}
                </span>
              </div>
              <div className="mb-2 font-headline text-4xl font-bold text-on-background">
                {stat.value}
              </div>
              <div
                className={`font-label text-xs font-semibold uppercase tracking-[0.2em] ${stat.labelClass}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </section>

      <section className="px-6 py-32">
        <RevealOnScroll as="div" className="mx-auto mb-24 max-w-screen-2xl text-center">
          <h2 className="section-heading mb-4 font-headline text-4xl font-black uppercase tracking-widest text-on-background md:text-5xl">
            Architects of the Void
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary opacity-50" />
        </RevealOnScroll>

        <RevealOnScroll
          as="div"
          className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="premium-card group relative overflow-hidden rounded-2xl bg-surface-container-high"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  className="h-full w-full rounded-2xl object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div
                className={`glass-panel absolute bottom-0 left-0 w-full translate-y-4 rounded-none border-t ${member.borderClass} p-8 transition-transform group-hover:translate-y-0`}
              >
                <h3 className="font-headline text-xl font-bold text-on-background">{member.name}</h3>
                <p className={`font-label text-[10px] uppercase tracking-widest ${member.roleClass}`}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden bg-surface-container-lowest px-6 py-40">
        <div className="absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

        <RevealOnScroll as="div" className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="section-heading mb-12 font-headline text-5xl font-bold tracking-tight text-on-background md:text-7xl">
            READY FOR <span className="italic text-primary">UPGRADE</span>
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <a
              href="#"
              className="primary-cta w-full rounded-lg bg-gradient-to-r from-primary to-primary-container px-10 py-5 text-center font-label text-sm font-bold uppercase tracking-widest text-on-primary md:w-auto"
            >
              Initiate Protocol
            </a>
            <a
              href="#"
              className="glass-panel w-full rounded-lg border border-outline-variant px-10 py-5 text-center font-label text-sm font-bold uppercase tracking-widest text-on-background md:w-auto"
            >
              Consult the Architects
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </PageFrame>
  );
}
