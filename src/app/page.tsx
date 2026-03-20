import { PageFrame } from "@/components/site-chrome";

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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6ZOKwV93HzhGn7z345ZUrl2LbUtDlnThR3ouvasmUi7AtrNcijRalvWxt6DpMUcohZvs6OF3uk1b3RclpJpVPQrrJwSdkHReTSWm2yi9FSosz5MeUHa_hHLbhmYBeQZcGiJKJMbQ0Sf-FPzghYxjXhHNilp990SmgaOkJ7KpismezjWlgxb9eaLRND93iY6-4qlk12-rK8s1bgiHe3ARqXCHlyTR-8H2dtD-fmX9wnuyDHXx5zYWhsFIU8z-4QKsGpgtPkxfSx4TX",
    label: "MODULE_01",
    accent: "text-primary",
    span: "md:col-span-8",
    titleClass: "text-3xl",
    pad: "p-10",
  },
  {
    title: "Web3 Systems",
    copy: "Secure, decentralized protocols built for the next era of value exchange.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAFP_SVMplpTWX5zob3CvnwzlfeTqtmKhn0oYMfvb92RG_abkIgwTucAkLsbKyeKo5P6htiS0o50WBnlLqQeVGUMKjAZ2HEg5yhbXO8jwjc5UO9TY3_ajOF9bmZbY3CfbKQnkIXzMdi2dxZJ4dfvP8GE4BoYstKX8cp9_MExPDJ-9_GXkrYJ_FbH5bVY5Wb7sNGEXK_2Dxd37lZzZpW-d1GQWPGZEPBm8epW0SkcHUiJttq-_iUW_tUbcBTCdlL4jJp-8SeH4ZF5W-",
    label: "MODULE_02",
    accent: "text-secondary",
    span: "md:col-span-4",
    titleClass: "text-2xl",
    pad: "p-8",
  },
  {
    title: "Spatial UI",
    copy: "Immersive experiences for AR/VR and the spatial computing revolution.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiFNr-ifOr5p_SnEB9NhzpCxF27GFE_pHh14xlQe2ERVwQ-x5-3ZMlREIgEiBGDM562HjwU9K6KHOEt2Dkd49DnHR49UxsRhToHCw2a7kFk8R_VSe06o1cwl2-6hIRMM-J3eTeKFuG4k3ofI3Os2SmbU5MUDKxZPnDIExFw-DAEhzO1kIOdZqyHkX_VJO1snQ9UhRaycn_7SNUnNYyPho73isQ3U184EWvhLjlU2Axy6r6sVA3Q-cNusC5QEXIKeKbOONtcgZxUnFf",
    label: "MODULE_03",
    accent: "text-tertiary",
    span: "md:col-span-4",
    titleClass: "text-2xl",
    pad: "p-8",
  },
  {
    title: "Hyper-Responsive Mobility",
    copy: "Blazing fast mobile native applications optimized for low-latency neural data streams.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8lOVfQb_FmP3MsroeRg0-M6Z0G2luPKwlq0N6y1ao0sevZIKFIJ4ZB18WEUFmqG4X3Upqitk-4eVqD_Om57ONLnxK_-sNIq7r9P9j6TrFnrl86gC9jDY6naOrsZhY4CYGQ-QVF_bjUPE-4rL0rngYlyfxb0MA-EbveGqlYtq-D4NVZMA0gIy0QkUbMrkxit10MozjEsllcD5zk8si4yRcRlAxqHu_hvmUHTvBPaaGXaDRwmfJJQ12CW_qUl7Gb_b266asVw1vDNJX",
    label: "MODULE_04",
    accent: "text-primary-container",
    span: "md:col-span-8",
    titleClass: "text-3xl",
    pad: "p-10",
  },
];

const processSteps = [
  {
    number: "01",
    title: "NEURAL_MAPPING",
    copy: "We begin by analyzing the underlying logic of your ecosystem, mapping out data dependencies and user psychographics using deep-learning diagnostics.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXRvwrK0VQs2-Tq5wmY-GDB_UaykX_eaqQ0RA9wXPsd7zya79GtyKwD1mYkpKp7NL-mWl4bTONazyBfK_Imt_D3aIrCOckxe5wVKEnfjDYaxvuQplR8O9yRPNCS_-7KFypt53Ge5uol_KnWWRcB4Xs53Nasa8P9KGZYH8A10p78ymlmvx6Px5sOBxNIn4Y60E-3k9EE1DRaNB3-Y5UsheLAPeyzXEHs1nv-TRD4_Si3rX81U1AOck1j1N3W-4PrVNk2EZDE3uoVY53",
    accent: "text-primary/10",
    progress: "bg-primary",
    order: "md:order-1",
    imageOrder: "md:order-2",
    shadow: "shadow-primary/10",
  },
  {
    number: "02",
    title: "SYNTHETIC_DESIGN",
    copy: "Our designers utilize algorithmic generative tools to iterate through thousands of layout permutations, selecting the one that maximizes cognitive engagement.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChOV-G_3Vfn4Gfbk1rdDgdOkYeQBYdBG2lVOLSaaQQ9sGdV5svE63sl-803lADzPwuQsLMNXoeRAVjDaPZ5sIeqkSi68bvBf_5QugHjnv4X1dVGYRsLqPojV9HfDrVwrgbWOI2HwOp3WtCZ0W7TxccavRkeVYqcoavSkLOA1HSXGt12lDWn9gFcTEiGZsLR2CHYztHdua9e4VmBe5xzG5bL7wZwCAyF_jF867_1eLymfwRtEB85pEqTEhwtpjVeTpltwKrbLYwFQ1d",
    accent: "text-secondary/10",
    progress: "bg-secondary",
    order: "",
    imageOrder: "",
    shadow: "shadow-secondary/10",
  },
  {
    number: "03",
    title: "CORE_ENGINEERING",
    copy: "Architecting the backbone. We build low-latency, highly scalable systems that thrive under high-concurrency neural loads.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcPP2b70-Mn7_qJQib18Ez-KEsWJ87p3QKhwQaX4DvryD9C9Sg7h3LarlL5gANPa5Y-M__EdKlunH3WtKe68MQA5W58JGjgGfov5Z1tiTqhHpZQKM_IE5iTQxEBks0YAgHgtJ8jMI6CSbTvwys5U0fI9c1-Ep4QT8B3lubJfA7v25qg0djy-nZS_or-Zyvx5m7wMrKG6EWFmE1J_1A-_2MowjaACrq6cICZGMFXZkDvBcw0Pu9CcK5h3mrb3jTJaucAbLRu8k6RDkk",
    accent: "text-tertiary/10",
    progress: "bg-tertiary",
    order: "md:order-1",
    imageOrder: "md:order-2",
    shadow: "shadow-tertiary/10",
  },
];

const testimonials = [
  {
    name: "X_VECTOR_CORP",
    role: "Chief Architect",
    quote:
      '"The level of fidelity achieved in the neural mapping phase exceeded our internal benchmarks by 40%. ETHER_LABS is the standard for the synthetic era."',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcm0Wk_kNjvc0EORrTqWbnmo_51SreEN4m7RDXCQe1E8mjSo7blHrh7nEkkZKNtlXM_blEth7_MmlSEnFoeWqmtEYPk82ZnzO4lmQ5JhSO1bu_WFfJLc1xs4TMhYZS4QDj8VqDBDtk8FKfwhP4Zx2yNDw1Ieun2dMv1Mql8Oqu_ZGllUTVyErNQAqHZ-5vFNTXq7uWyWk_mkZ2nxeRB9nVfdS7yfxraZguv72syD_vlSrUFKWN678zAykK6P5Wk_uqIhZYbUzxIjXd",
    accent: "primary",
  },
  {
    name: "VOID_MINING",
    role: "Product Lead",
    quote:
      '"We transitioned our entire spatial interface to their design system. The user retention increase was instantaneous. Truly visionary work."',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPQDyg-gw_r0ebTW0AzkNv42pVpMlGDT65anEznaRsmsnNBVgu66_45Sd-XRRN0StltRavMi8bmm8NaiEJ8V2yYYuU30_WKGXK2fmpksfBBm9gnuwrIpjaaKoY3l0wOZFakMTh3e_K8Rp_w9LWtmIbgqkRREorkZPu1xHucNg-lSsP6-sTWpbHfXKejynULTq5gO6aGhYKnMoxmbdtWsy9I7-NYR4DwuJLFfvjrNK1sl3ueehue5tr-NCFfyxRwCB0CJSIU-yrZfNp",
    accent: "secondary",
  },
  {
    name: "ALPHA_NODES",
    role: "CTO",
    quote:
      '"Their approach to Bio-Digital logic allowed us to solve complex synchronization issues that had stalled our progress for months."',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4nkKbsxpFn2UR6MT3F0efolDOCo9ua1nXfJWFcLhOvfPRZSdTP8wHQYiVMgRLp3mEFbRruLrQuAGAHXXf8yzh5LDsNdubJa889Y6UUuPfre6K5bNyJGoyZ6k_EEBOZ4Hz_4a90BTk8GtVI8GVQDFydY5XkFannFPqUbbYyaFT8IE1dcxbBIS9tyMDfSuerOfz8XMOUQznq0-s0glbVhTCi53k7kPt4TBVQ498cTs7b6d2Ep8ZLmy_xDLC3neXK_ZgEFjTvCwTID-6",
    accent: "tertiary",
  },
];

export default function HomePage() {
  return (
    <PageFrame activeNav="solutions" footerVariant="home" sideNavItems={sideNavItems}>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 md:px-8">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full scale-110 object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX1sGfxXq8WSd_FX62eNfxwb_URrCiwJ6efn_cwVjuSz7wsyFWpzBvJT-YGub88Y5eigNbN0RV_2FllXMbAbj47dsq_VKFtY64jAuDw3CKZPIH2yZjBFn1nVmnRG51R5RUliopAJhO4K4jZPB3Mfvl1pm2WdrME6GhbwcwcD-I6AJWXqTeucf0PBSMXYfzQAH1zR0W2WIov_OTBk0Y8hF-iDV1qoGefIh3QadgkMarE5QPKW7AA_j4DjZ9-mwo6ZfBs8P78nfPBCDE"
            alt="Massive 3D abstract glass sculpture glowing with cyan and purple light"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>
        <div className="relative z-10 max-w-5xl text-center">
          <div className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">
              Intelligence Formed in the Void
            </span>
          </div>
          <h1 className="text-glow-primary font-headline text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl">
            FORGING THE <br />{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SYNTHETIC_ETHER
            </span>
          </h1>
          <p className="mx-auto mb-10 mt-8 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant md:text-xl">
            We engineer high-fidelity digital artifacts using neural architectures and
            bio-digital logic. Your vision, rendered in impossible dimensions.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-gradient-to-br from-primary to-primary-container px-10 py-5 font-headline text-sm font-bold tracking-widest text-on-primary-container hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(143,245,255,0.4)]"
            >
              INITIALIZE_STREAM
            </a>
            <a
              href="/artifacts"
              className="rounded-lg border border-outline-variant bg-surface-variant/20 px-10 py-5 font-headline text-sm font-bold tracking-widest text-on-surface backdrop-blur-lg hover:bg-surface-variant/40"
            >
              VIEW_ARCHIVE
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="mb-14">
          <h2 className="text-glow-primary font-headline text-3xl font-bold tracking-tight">
            SOLUTIONS_MATRIX
          </h2>
          <div className="mt-3 h-0.5 w-20 bg-gradient-to-r from-primary to-transparent" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {solutionCards.map((card) => (
            <div
              key={card.title}
              className={`${card.span} group relative overflow-hidden rounded-xl bg-surface-container-high p-1 inner-bevel-light`}
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={card.image}
                  alt={card.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className={`absolute bottom-0 left-0 ${card.pad}`}>
                  <span className={`mb-2 block font-label text-[10px] tracking-[0.2em] ${card.accent}`}>
                    {card.label}
                  </span>
                  <h3 className={`mb-4 font-headline font-bold ${card.titleClass}`}>{card.title}</h3>
                  <p className="max-w-md font-body text-sm text-on-surface-variant md:text-base">
                    {card.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="mb-6 font-headline text-4xl font-bold uppercase tracking-tight">
                The_Extraction_Process
              </h2>
              <p className="font-body text-on-surface-variant">
                Moving from raw data to refined experience through our proprietary
                three-phase methodology.
              </p>
            </div>
            <div className="border-b border-slate-800 pb-2 font-label text-[10px] tracking-[0.5em] text-slate-600">
              SEQ_001_TO_SEQ_004
            </div>
          </div>
          <div className="space-y-20">
            {processSteps.map((step, index) => {
              const imageFirst = index % 2 === 1;
              return (
                <div key={step.title} className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
                  <div className={imageFirst ? "md:order-2" : ""}>
                    <div className={`mb-3 font-headline text-6xl font-black ${step.accent}`}>
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
                  <div className={`${imageFirst ? "md:order-1" : ""} overflow-hidden rounded-2xl shadow-2xl ${step.shadow}`}>
                    <img className="aspect-[4/3] w-full object-cover" src={step.image} alt={step.title} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low/50 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-4 font-headline text-4xl font-bold">VALIDATION_FEEDBACK</h2>
            <p className="font-body text-on-surface-variant">
              Verified signal from our global network of collaborators.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className={`glass-card inner-bevel-light rounded-2xl border p-10 hover:-translate-y-2 ${
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
                    <img className="h-full w-full object-cover" src={item.image} alt={item.name} />
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
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden px-6 py-28 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-12 font-headline text-5xl font-black uppercase tracking-tighter md:text-7xl">
            Ready_to_Initialize?
          </h2>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <a
              href="#"
              className="w-full rounded-lg bg-primary px-12 py-6 font-headline text-sm font-black tracking-[0.2em] text-on-primary-container hover:scale-105 hover:shadow-[0_0_20px_rgba(0,238,252,0.25)] md:w-auto"
            >
              BEGIN_PROTOCOLS
            </a>
            <a
              href="/neural-network"
              className="font-label text-xs tracking-widest text-on-surface-variant hover:text-primary"
            >
              REQUEST_TECHNICAL_DEEP_DIVE -&gt;
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
