import { PageFrame } from "@/components/site-chrome";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

const sideNavItems = [
  { icon: "psychology", label: "Generative AI", active: true },
  { icon: "hub", label: "Web3 Systems", href: "/solutions#web3" },
  { icon: "layers", label: "Spatial UI", href: "/solutions#spatial" },
  { icon: "memory", label: "Neural Architectures" },
  { icon: "biotech", label: "Bio-Digital" },
];

const solutionCards = [
  {
    title: "Neural Architecture",
    copy: "Deploying custom LLMs and generative pipelines that integrate seamlessly into legacy infrastructure.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhmEBuy9TzH7FHx2xzNg8BofB3A10EkFkgpnkQJpbYDpuPtFpSQzBSx59en6xSTVhSAaJUxlVMC5Ne5p-7TvIwRp3c3nsVrgn5S_Ns4rhSy6Ty5gTAUNSEoU9ZjinmrQz38stg-k9rlMgl_7xNYAN2FhPE7UTn5CPevhA_UZrHApHptb6DQEaR4jaXXk7coH_fbSUVHUeb79C4zG8AktEv50LlNrFxAiurNCoYo1QAWdMTiszmuxMmAOJJu5oz2ypbgXRGjOl3WE7r",
    label: "MODULE 01",
    accent: "text-primary",
    span: "md:col-span-8",
    titleClass: "text-3xl",
    pad: "p-10",
  },
  {
    title: "Web3 Systems",
    copy: "Secure, decentralized protocols built for the next era of value exchange.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAf466o7Yk9Q5PmN-UVC8FHA7qQvcZbhXrVndhwumJ2Ge6g2keZVc6QtEXXhzzdE8pncmjDHYBlLtiRaU6W8_6HOLj1nuadDSoObSBPgA77EKAriq9JxFw8xfkof5dF3HBgUH_R1VAXUzMYk6gnC_-vMBYlqfVNzSHWJ3bVS5CjQL6Bo8EUU3qKlUXIg4wB5-KNrBu0m8GQ85r3NAZwtzzyzdBRJcI-b_HY-kPoUW6kUDkiBAL2M0mYWaw0xPDL2LGI4pdzLJOtVpAL",
    label: "MODULE 02",
    accent: "text-secondary",
    span: "md:col-span-4",
    titleClass: "text-2xl",
    pad: "p-8",
  },
  {
    title: "Spatial UI",
    copy: "Immersive experiences for AR/VR and the spatial computing revolution.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkR6oQnD7mYNb1uBCmWKzgIuoXQ0zZK02Wkppz0FyZDji6BtMLgfc2FzGybVdBIzvChLYzErLKSmZrkHDd3A2ZypWLonQd22O-pwcSRY_1zNmVQ4p-UpDALD1jJRD7tgoz3YpziEtRPOVx2v0fq6VuD0NbM8kUjaS_rLI0coBJxtJ6JqWKh6ZuwS0ycPt6PboyfamBmgFPLZ6vcUDOzdiIgkmYbi4rl_UnZj7VHbBagP4loZmpk5wb_WohTVNB4Dqt9O6U1lTcRby2",
    label: "MODULE 03",
    accent: "text-tertiary",
    span: "md:col-span-4",
    titleClass: "text-2xl",
    pad: "p-8",
  },
  {
    title: "Hyper-Responsive Mobility",
    copy: "Blazing fast mobile native applications optimized for low-latency neural data streams.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDe_En0aFwmGS-WrOh67f93fjOWf_jSRAYRtYK3Uq3ssJrw1tTrZDe71uoqlP9PW5i83W6SrmgqcKUDLFmpqUfTNLsCJEj50DE1AdAq5EbpwVXSaLwjiZi27FzXU05CeehLC4dXgGTVbmNljHOywopkxn9ZqOxJP_SHfFKD7SS0Vo-Fk6oesUX7Pcz32YNyMQpjhhZTvlomrJBFoQ9iZgE4mFQ3oOJw3KgY65Kdc6Yr_avnLGf5midF5sY8rxEyWJQij7ZP-gij78Op",
    label: "MODULE 04",
    accent: "text-primary-container",
    span: "md:col-span-8",
    titleClass: "text-3xl",
    pad: "p-10",
  },
];

const processSteps = [
  {
    number: "01",
    title: "NEURAL MAPPING",
    copy: "We begin by analyzing the underlying logic of your ecosystem, mapping out data dependencies and user psychographics using deep-learning diagnostics.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAepdW4mBrDkuUIaHGSN1vFnVy2dRpBsDCmHwJiip928d1R35IV-DL0AEL_vpkTw76TPFw90nM1Iv4OHBZFVcpL8k44l2kmZsQXIFIQgmi94v7n46LCkjeJPckkgXqDyZs82vQfnshBXAwymgWzmX5cLZzOcNfcXh2SF1p2SU26meCZx5CKL2Z5zUGaZOewM3cllkWdCVxsL6EScbs7p0ayZNCaRMwbHWoG8ZKm4wO09WcEuVB6rbmiJndoVx1JRhCTr1HksLSXUnLi",
    accent: "text-primary/10",
    progress: "bg-primary",
    order: "md:order-1",
    imageOrder: "md:order-2",
    shadow: "shadow-primary/10",
  },
  {
    number: "02",
    title: "SYNTHETIC DESIGN",
    copy: "Our designers utilize algorithmic generative tools to iterate through thousands of layout permutations, selecting the one that maximizes cognitive engagement.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBW-PzHxvhmJxszuK__j_rxgL-W9GpQGF8rQWY9VWLcKMPetdLEcl-v8pi06GuoJ3zTNRJJ3i6RDxsdZWcPAvaMzPQWHbLdE1BEq968DzhZYFtwq-bz6t1izxBj78USfX31uxdR9hub5RZ-dh_r-EYotXTSBeNjAJuP3M2nB7DejSBAPwFvKzqf3IFftJCBtBKMWf2kOaHZSnZ9pAabB-dY9e7BksF_gQOP5GEtCpMPdJLtir5R-GiYS9HbmyCWLsJuo7_kOIc7jiS2",
    accent: "text-secondary/10",
    progress: "bg-secondary",
    order: "",
    imageOrder: "",
    shadow: "shadow-secondary/10",
  },
  {
    number: "03",
    title: "CORE ENGINEERING",
    copy: "Architecting the backbone. We build low-latency, highly scalable systems that thrive under high-concurrency neural loads.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0iqCX0QgWu567chJVUVEFD62UZ7Zo2qEhPzNPx-i7nA6wkqGQXQrtMwrBla6xJygsrI3iRjuqpTy19FhFkXpzoW5gB1_tS05-x3p8v59_A_wO4eLvfAkm7hYsr76ZIfEJ2_49wfhiOgBQhsrqhWSBGUZ7hW0JAYZVdsXQZkDskjF0nhCiRlDeR2QVrJ4Vc6v0lxqXhNXFmr-4AS5T8OJNSArHOFU9l01xC3eg98bmncpmIlQHwk2JIPXvM5WjwWr6jqq1WSlELHC9",
    accent: "text-tertiary/10",
    progress: "bg-tertiary",
    order: "md:order-1",
    imageOrder: "md:order-2",
    shadow: "shadow-tertiary/10",
  },
];

const testimonials = [
  {
    name: "X VECTOR CORP",
    role: "Chief Architect",
    quote:
      '"The level of fidelity achieved in the neural mapping phase exceeded our internal benchmarks by 40%. ETHER LABS is the standard for the synthetic era."',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkgH23Yf1yqJFeoBa_0vFbbRHD92u8rm3TvaD7kpxqUkhuoxeLI6VbQaWUSB2WE_fPkknfmE9QJsQ0UQL0m0U2AY1JmAJVxSCyKRan6p3Bgh9uhPSoRYnRez4zi1_j4ywBqUlxkjfHm5D3-qEbz3zV52oZSvOritAAKzDYoshISkoK3RuxW-1XxPHb4LsKTutfCH8UCvLH0XDICdmKIfWaiPZdm1m-iKNjiw-e0BNzU-YL4d5y41aWgEpWfMjNJyWracBtr2831d_f",
    accent: "primary",
  },
  {
    name: "VOID MINING",
    role: "Product Lead",
    quote:
      '"We transitioned our entire spatial interface to their design system. The user retention increase was instantaneous. Truly visionary work."',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCiaw5odFS8PdXQYKghSfa_9PMPc8tnBHQGH9qChnXtgt_5ELk3HRAC2nP1YolbTN60aFiT6bzDRYZrVqeqTGVQXZb2DXfYn634yM_J0jMT0io04jChyKOsRS4qAkbSYBLNtgt5Vl4I3cc4jR320hQseqmv4DA1f7RWblpNa7HN1ankGWwXZUOYPP9ItIUddU643_uPmhEMH1zEpMqU4y7uF4uXK8aJD2ejc_6fC6PEVyq-mVl-HFRmb6Gd2AodlF6-vjxBKy7z4Ez",
    accent: "secondary",
  },
  {
    name: "ALPHA NODES",
    role: "CTO",
    quote:
      '"Their approach to Bio-Digital logic allowed us to solve complex synchronization issues that had stalled our progress for months."',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD41aiNDA86cGIsq5htrZkIX6bVVe_bIruf3MAl6ztVsrsvKeuo_l98DMs0X3tzEz8M1TpPTacXcrfa9oAbFXyJ5z8ThJNXh0xLf3BVLr4bV6qFPAFhk87gMqX-F9AeoO1RhKx-BLBU1-VY6IazpM_xKSDHCGH_mhXd3-TQPEb3TdH2j8mFHCKQvUH59B3kTJQ2KQSjkJBF7p1daaAjcyBBKVfYPZaBLmbvHdr1KFstYaa2ltEYRxhvRge5JDU7mtAZYnLvLjzCtATs",
    accent: "tertiary",
  },
];

export default function HomePage() {
  return (
    <PageFrame activeNav="solutions" footerVariant="home" sideNavItems={sideNavItems}>
      <section className="relative flex min-h-[540px] items-center justify-center overflow-hidden px-5 pt-8 sm:px-6 md:min-h-screen md:px-8 md:pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            className="hero-ken-burns h-full w-full rounded-2xl object-cover opacity-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOEVQUK_ac1XjnzWCFtYM6rF1Nrx1OO42NHIicrrR0fimnV2oXMTn32gcB7hYPedCtJ7XsJA6OjYLKgDCW7lqd6CjTQgonRGv1NyVahonQ69aCbJSpjFE-XSGiOJKei71lYzroq3d93R369QpqsMrOCi-zuSDyTDi0YreFyBUqLzQabUVEAJShj1BZFaSHgPoK5a3gSojiIPR4EP45YWjF7MIVzZegMDi914xA3gqOduhO_NHUz9Ex8Zhpa7ELMkL2mRU3WcsF1YQ2"
            alt="Massive 3D abstract glass sculpture glowing with cyan and purple light"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="noise-grain absolute inset-0 opacity-40" />
        </div>
        <RevealOnScroll as="div" className="relative z-10 max-w-5xl text-center">
          <div className="mb-5 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">
              Intelligence Formed in the Void
            </span>
          </div>
          <h1 className="text-glow-primary hero-headline-glow font-headline text-3xl font-black leading-[0.95] tracking-tighter sm:text-4xl md:text-7xl lg:text-8xl">
            FORGING THE <br />{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SYNTHETIC ETHER
            </span>
          </h1>
          <p className="mx-auto mb-8 mt-6 max-w-2xl font-body text-base leading-relaxed text-on-surface-variant sm:text-lg md:mb-10 md:mt-8 md:text-xl">
            We engineer high-fidelity digital artifacts using neural architectures and
            bio-digital logic. Your vision, rendered in impossible dimensions.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#contact"
              className="primary-cta w-full rounded-lg bg-gradient-to-br from-primary to-primary-container px-10 py-5 text-center font-headline text-sm font-bold tracking-widest text-on-primary-container hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] sm:w-auto"
            >
              INITIALIZE STREAM
            </a>
            <a
              href="/artifacts"
              className="w-full rounded-lg border border-outline-variant bg-surface-variant/20 px-10 py-5 text-center font-headline text-sm font-bold tracking-widest text-on-surface backdrop-blur-lg hover:bg-surface-variant/40 sm:w-auto"
            >
              VIEW ARCHIVE
            </a>
          </div>
        </RevealOnScroll>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-8 md:py-24">
        <RevealOnScroll as="div" className="mb-10 md:mb-14">
          <h2 className="section-heading text-glow-primary font-headline text-2xl font-bold tracking-tight sm:text-3xl">
            SOLUTIONS MATRIX
          </h2>
          <div className="mt-3 h-0.5 w-20 bg-gradient-to-r from-primary to-transparent" />
        </RevealOnScroll>
        <RevealOnScroll as="div" className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {solutionCards.map((card) => (
            <div
              key={card.title}
              className={`${card.span} premium-card group relative overflow-hidden rounded-2xl bg-surface-container-high p-1 inner-bevel-light`}
            >
              <div className="card-image-vignette relative h-[320px] overflow-hidden rounded-2xl sm:h-[350px]">
                <img
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className={`absolute bottom-0 left-0 p-6 sm:${card.pad}`}>
                  <span className={`mb-2 block font-label text-[10px] tracking-[0.2em] ${card.accent}`}>
                    {card.label}
                  </span>
                  <h3 className={`mb-3 font-headline text-2xl font-bold sm:${card.titleClass}`}>
                    {card.title}
                  </h3>
                  <p className="max-w-md font-body text-sm text-on-surface-variant md:text-base">
                    {card.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </section>

      <section id="process" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <RevealOnScroll as="div" className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="section-heading mb-4 font-headline text-3xl font-bold uppercase tracking-tight md:mb-6 md:text-4xl">
                The Extraction Process
              </h2>
              <p className="font-body text-on-surface-variant">
                Moving from raw data to refined experience through our proprietary
                three-phase methodology.
              </p>
            </div>
            <div className="border-b border-slate-800 pb-2 font-label text-[10px] tracking-[0.5em] text-slate-600">
              SEQ 001 TO SEQ 004
            </div>
          </RevealOnScroll>
          <div className="space-y-14 md:space-y-20">
            {processSteps.map((step, index) => {
              const imageFirst = index % 2 === 1;
              return (
                <RevealOnScroll
                  key={step.title}
                  as="div"
                  className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-14"
                >
                  <div className={imageFirst ? "md:order-2" : ""}>
                    <div className={`mb-3 font-headline text-5xl font-black ${step.accent} md:text-6xl`}>
                      {step.number}
                    </div>
                    <h3 className="mb-5 font-headline text-2xl font-bold tracking-wide">
                      {step.title}
                    </h3>
                    <p className="mb-6 font-body text-base leading-relaxed text-on-surface-variant">
                      {step.copy}
                    </p>
                    <div className="flex gap-3">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className={`h-1 rounded-full ${dot === index ? `w-10 ${step.progress}` : "w-2 bg-outline"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className={`${imageFirst ? "md:order-1" : ""} premium-card card-image-vignette overflow-hidden rounded-2xl shadow-2xl ${step.shadow}`}>
                    <img
                      className="aspect-[4/3] w-full rounded-2xl object-cover"
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                    />
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <RevealOnScroll as="div" className="mb-12 text-center md:mb-20">
            <h2 className="section-heading mb-4 font-headline text-3xl font-bold md:text-4xl">
              VALIDATION FEEDBACK
            </h2>
            <p className="font-body text-on-surface-variant">
              Verified signal from our global network of collaborators.
            </p>
          </RevealOnScroll>
          <RevealOnScroll as="div" className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className={`glass-card premium-card inner-bevel-light rounded-2xl border p-6 md:p-10 ${
                  item.accent === "primary"
                    ? "border-primary/5 hover:border-primary/20"
                    : item.accent === "secondary"
                      ? "border-secondary/5 hover:border-secondary/20"
                      : "border-tertiary/5 hover:border-tertiary/20"
                }`}
              >
                <div className="mb-8 flex items-center gap-4">
                  <div
                    className={`h-14 w-14 overflow-hidden rounded-full border-2 ${
                      item.accent === "primary"
                        ? "border-primary/20"
                        : item.accent === "secondary"
                          ? "border-secondary/20"
                          : "border-tertiary/20"
                    }`}
                  >
                    <img
                      className="h-full w-full rounded-2xl object-cover"
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="font-headline text-sm font-bold">{item.name}</div>
                    <div
                      className={`font-label text-[8px] uppercase tracking-widest ${
                        item.accent === "primary"
                          ? "text-primary"
                          : item.accent === "secondary"
                            ? "text-secondary"
                            : "text-tertiary"
                      }`}
                    >
                      {item.role}
                    </div>
                  </div>
                </div>
                <p className="font-body italic leading-relaxed text-on-surface/80">{item.quote}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden px-5 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <RevealOnScroll as="div" className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="section-heading mb-8 font-headline text-3xl font-black uppercase tracking-tighter sm:text-4xl md:mb-12 md:text-7xl">
            Ready to Initialize?
          </h2>
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8">
            <a
              href="#"
              className="primary-cta w-full rounded-lg bg-primary px-12 py-6 text-center font-headline text-sm font-black tracking-[0.2em] text-on-primary-container hover:scale-105 hover:shadow-[0_0_20px_rgba(0,238,252,0.25)] md:w-auto"
            >
              BEGIN PROTOCOLS
            </a>
            <a
              href="/neural-network"
              className="font-label text-xs tracking-widest text-on-surface-variant hover:text-primary"
            >
              REQUEST TECHNICAL DEEP DIVE -&gt;
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </PageFrame>
  );
}
