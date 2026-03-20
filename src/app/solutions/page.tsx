import { PageFrame } from "@/components/site-chrome";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

const sideNavItems = [
  { icon: "psychology", label: "Generative AI", href: "#gen-ai", active: true },
  { icon: "hub", label: "Web3 Systems", href: "#web3" },
  { icon: "layers", label: "Spatial UI", href: "#spatial" },
  { icon: "memory", label: "Neural Architectures" },
  { icon: "biotech", label: "Bio-Digital" },
];

export default function SolutionsPage() {
  return (
    <PageFrame activeNav="solutions" footerVariant="solutions" sideNavItems={sideNavItems}>
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden px-5 pt-6 sm:px-6 md:min-h-screen md:px-0 md:pt-20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface-container-low via-background to-background" />
        <div className="hero-glow absolute inset-0 opacity-50" />
        <RevealOnScroll as="div" className="relative z-10 max-w-5xl text-center md:px-6">
          <span className="mb-4 block font-label text-[10px] uppercase tracking-[0.3em] text-primary md:mb-6 md:text-xs md:tracking-[0.4em]">
            Technological Ecosystem V2
          </span>
          <h1 className="text-glow-primary hero-headline-glow mb-6 font-headline text-3xl font-black leading-[1.05] tracking-tighter sm:text-4xl md:mb-8 md:text-6xl lg:text-8xl">
            DIMENSIONAL
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              SOLUTIONS
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-md font-body text-base leading-relaxed text-on-surface-variant sm:max-w-xl sm:text-lg md:mb-12 md:max-w-2xl md:text-xl">
            We synthesize intelligence, decentralized trust, and immersive spatial
            computing into a cohesive digital monolith for the future of industry.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
            <a
              href="#contact"
              className="primary-cta w-full rounded-lg bg-gradient-to-r from-primary to-primary-container px-8 py-4 text-center font-label text-xs font-bold uppercase tracking-widest text-on-primary-container shadow-xl shadow-primary/10 hover:shadow-primary/30 sm:w-auto"
            >
              Deploy Node
            </a>
            <a
              href="#gen-ai"
              className="glass-panel w-full rounded-lg border border-outline-variant/30 px-8 py-4 text-center font-label text-xs uppercase tracking-widest text-on-surface hover:bg-surface-variant/40 sm:w-auto"
            >
              View Specs
            </a>
          </div>
        </RevealOnScroll>
        <div className="absolute right-10 top-1/4 hidden h-64 w-64 opacity-40 mix-blend-screen blur-sm lg:block">
          <img
            className="h-full w-full rounded-2xl object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlxoMfWroTVPAQK9svidL3_L8eSa3_Lh0YXvvkt1AtnxzXN_LCzU-2wR_z1v1v5dlMg_kAqmuYPpXMg9Ggzukm4ElfrP9qUZolsMRuf8jfjrXCJUcgQ_2YHJO6DOAU7Z3WyWv5QKuezSAxHT2Pan9nzQGYvwjZ7sqke5HMZgd1tYkiMmveZ78wPGT3RFQRj0SGgXw2Eh12822jy1DCIdxGnygn-3n94Kz8IJRBygVZ6Lidz2Qd85KykHXtCkOkrTa_0uMpxbA5favS"
            alt="Floating abstract 3D crystalline structure glowing blue"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-1/4 left-10 hidden h-48 w-48 opacity-30 blur-md lg:block">
          <img
            className="h-full w-full rounded-2xl object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgy7Abb5g2YG5TNRw8cOgtTNh7lqqvrcB-fPzpa-0KqYBA5SgQCRSJYCAHofnyZfKzLSL11rsfZ6tz9OzcxWgYdsFAa9riv2Lxhdh-ifpvWQTwP9vegyH-cvXAj-g7DJm8n_iqE2A-zFvfgfdZTX2EW4muQNd864K-ZmGDfm82HGwJETHZf9bZM6o8hJFmX_4AdqH4Ao805oc0O9fM6Wu0tRVkNhbJGLrTJhR8XR1vnT8wNnuCL0hGxyYFnxsrli72u9Lp8P6RiAE8"
            alt="Floating abstract 3D torus shape with purple neon light"
            loading="lazy"
          />
        </div>
      </section>

      <section id="gen-ai" className="relative overflow-hidden py-16 md:py-32">
        <div
          className="parallax-bg absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgxH6irolv4SLwaKbgzM6Y_wCcsMN3OSJ7QIyTc5bDyIuyh9LTxuKgeF0JMN833jW3Z7l6ruj1c59NQdn8URwFm2RvY7VkoVfRDeYihn17XoiK2-kEpBwMVbWoE-i7umaHyA1Mz1xgoN246Vk76YFfHkPy0we5fQPH46KZIURNOSA6ig7Hrm1NRBju1fpfkYqSILozaaYXkvMOoFPLZhsYnqN5wZiHbKrVYBJFWUvqJTZYIambyK8gLXbwf0hssVhCMEc8F3dbj7sA')",
          }}
        />
        <div className="container relative z-10 mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll as="div" className="order-2 lg:order-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="glass-panel inner-bevel flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    psychology
                  </span>
                </div>
                <span className="font-label text-sm uppercase tracking-widest text-secondary">
                  STRATUM 01 / COGNITION
                </span>
              </div>
              <h2 className="section-heading mb-6 font-headline text-3xl font-bold text-on-surface md:mb-8 md:text-5xl">
                Generative AI
              </h2>
              <p className="mb-8 font-body text-base leading-relaxed text-on-surface-variant md:mb-10 md:text-lg">
                Beyond simple prompts. We build custom LLM pipelines, specialized
                agentic workflows, and proprietary synthetic data generators that
                transform raw information into strategic intelligence.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="glass-panel premium-card inner-bevel rounded-xl p-6">
                  <h4 className="mb-3 font-label text-xs tracking-widest text-primary">
                    Neural Synthesis
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    Custom training on enterprise datasets with zero-leakage security.
                  </p>
                </div>
                <div className="glass-panel premium-card inner-bevel rounded-xl p-6">
                  <h4 className="mb-3 font-label text-xs tracking-widest text-primary">
                    Agentic Swarms
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    Autonomous multi-agent systems for complex task orchestration.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll as="div" className="order-1 flex justify-center lg:order-2">
              <div className="card-image-vignette relative aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl sm:max-w-md lg:max-w-lg">
                <div className="absolute inset-0 rounded-full bg-secondary/10 blur-3xl" />
                <img
                  className="relative z-10 h-full w-full rounded-2xl object-cover drop-shadow-[0_0_50px_rgba(214,116,255,0.3)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwBUCc6LKSk-TZqs_34r5xrQqnYP6gj2kQuRD-izrmj88NRrrtzpxZIBeB8bj5S03NwenQNBvhTBgmqXrBt4YypqigTJBkkSXs5yoN3BtagP6ML_oJsi1lbahcE2_BrPnLMcXN2_eG5359W__shl4GwAYU1E3uvOnvTaWewcMCmwSfFJrQ61W5AkgR2WP83Z8AUdWUSnsP4g0GhOlbaZnc7xeDO1MaUeQWM7NPG9fydNtrbqsFyOLIbkmTwrm6PzedYwhJx58pQnDC"
                  alt="Intricate 3D render of a glowing human brain made of glass and fibers"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section id="web3" className="relative overflow-hidden bg-surface-container-low py-16 md:py-32">
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #00eefc 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative z-10 mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll as="div" className="flex justify-center">
              <div className="card-image-vignette relative aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl sm:max-w-md lg:max-w-lg">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
                <img
                  className="relative z-10 h-full w-full rounded-2xl object-cover drop-shadow-[0_0_50px_rgba(143,245,255,0.2)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtlAbIMo_12wNdfBSCyAM9CQI0IDcb_6-QmRG-zNVjKuCfYMWMAsgoxnbyiChdYwsJFkzpS3MmZPKzEhYAPtM8oHSzhhK4tBiqTzIlPgyO82oFo50H9gEyHZrGr5oU3aVIrMniVFkHo8c3nvnJQziBiuUY1KTmEtpbxFy7cxKDiYRnEZhttZesYD5w6cAp_mmpA9wV0qNxcQG82gWS9FvwgNJrpapYUh_dXVLDbPSERO5X8bXIu4vrB3xEQZudI_L_gvXrW3kX03a0"
                  alt="High-detail 3D golden and silver block link representing blockchain"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll as="div">
              <div className="mb-6 flex items-center gap-4">
                <div className="glass-panel inner-bevel flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    hub
                  </span>
                </div>
                <span className="font-label text-sm uppercase tracking-widest text-primary">
                  STRATUM 02 / PROTOCOL
                </span>
              </div>
              <h2 className="section-heading mb-6 font-headline text-3xl font-bold text-on-surface md:mb-8 md:text-5xl">
                DECENTRALIZED TRUST SYSTEMS
              </h2>
              <p className="mb-8 font-body text-base leading-relaxed text-on-surface-variant md:mb-10 md:text-lg">
                Engineering secure, scalable Web3 ecosystems. From smart contract
                auditing to custom L2 chain deployment, we build the rails for the next
                economy of value.
              </p>
              <div className="space-y-4">
                {[
                  ["security", "CRYPTOGRAPHIC AUDITS", "Zero-vulnerability assurance for smart protocol layers."],
                  ["token", "TOKENOMIC MODELING", "Mathematical frameworks for sustainable digital economies."],
                ].map(([icon, title, copy]) => (
                  <div key={title} className="premium-card inner-bevel flex items-center gap-6 rounded-xl bg-surface-container-highest/40 p-4">
                    <span className="material-symbols-outlined text-secondary">{icon}</span>
                    <div>
                      <h5 className="font-label text-[10px] tracking-widest text-on-surface">
                        {title}
                      </h5>
                      <p className="text-[10px] text-on-surface-variant">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section id="spatial" className="relative overflow-hidden py-16 md:py-32">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            background:
              "linear-gradient(90deg, transparent 49.5%, #414857 50%, transparent 50.5%), linear-gradient(0deg, transparent 49.5%, #414857 50%, transparent 50.5%)",
            backgroundSize: "100px 100px",
          }}
        />
        <div className="container relative z-10 mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll as="div" className="order-2 lg:order-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="glass-panel inner-bevel flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    layers
                  </span>
                </div>
                <span className="font-label text-sm uppercase tracking-widest text-tertiary">
                  STRATUM 03 / INTERFACE
                </span>
              </div>
              <h2 className="section-heading mb-6 font-headline text-3xl font-bold text-on-surface md:mb-8 md:text-5xl">
                Spatial Computing UX
              </h2>
              <p className="mb-8 font-body text-base leading-relaxed text-on-surface-variant md:mb-10 md:text-lg">
                The screen is no longer a boundary. We design immersive interfaces for
                AR/VR environments, utilizing gaze-tracking, gesture-recognition, and
                spatial audio to redefine user interaction.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {["Volumetric Design", "Haptic Feedback", "Mixed Reality"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-tertiary/20 bg-tertiary/10 px-4 py-2 font-label text-[10px] uppercase tracking-widest text-tertiary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll as="div" className="order-1 flex justify-center lg:order-2">
              <div className="card-image-vignette relative aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl sm:max-w-md lg:max-w-lg">
                <div className="absolute inset-0 rounded-full bg-tertiary/10 blur-3xl" />
                <img
                  className="relative z-10 h-full w-full rounded-2xl object-cover drop-shadow-[0_0_50px_rgba(172,137,255,0.3)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtNUAILFNl8GSDyrw27zI0ip8xXXpmxScIzLc8FpZWs-SB8DtRELpvVkUojggSJUHlqd9sY5FRM2coHOFRm3f5-Qb8LYW5IDn1l_9QTJutcmDYz-CBHc1yPAMWCXSucOKucpb0B6iT0JpP6LuRKlrAx2_jomLo0_U6TmCFJ5_YCjSyyeHaekYbUZOScAmYOEEwLPFjfAcIwEfCvh9uPPWv2EmmYybgFrYEK_Giny7IiiA2qCygZOLoeBi9DymFlzFNC7LTR1JkS4Qa"
                  alt="Floating transparent glass cubes with digital UI elements inside"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden px-5 py-20 sm:px-6 md:px-8 md:py-32">
        <RevealOnScroll as="div" className="glass-panel relative z-10 mx-auto max-w-4xl rounded-[2rem] border border-outline-variant/10 p-6 text-center shadow-2xl md:p-16">
          <h3 className="section-heading mb-4 font-headline text-3xl font-bold text-on-surface md:mb-6 md:text-4xl">
            Ready to Initialize?
          </h3>
          <p className="mb-8 font-body text-base text-on-surface-variant md:mb-12 md:text-lg">
            Connect with our neural network to discuss your project requirements.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <input
              type="email"
              placeholder="your@email.com"
              className="min-w-0 rounded-lg bg-black px-6 py-4 font-label text-xs tracking-widest outline-none focus:ring-2 focus:ring-primary sm:min-w-[300px] sm:px-8"
            />
            <button className="secondary-cta-glow w-full rounded-lg bg-gradient-to-r from-secondary to-tertiary px-10 py-4 font-label text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-secondary/20 hover:scale-105 sm:w-auto">
              Open Comm Channel
            </button>
          </div>
        </RevealOnScroll>
        <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-primary/5 to-transparent" />
      </section>
    </PageFrame>
  );
}
