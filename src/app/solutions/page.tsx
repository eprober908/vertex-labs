import { PageFrame } from "@/components/site-chrome";

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
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface-container-low via-background to-background" />
        <div className="hero-glow absolute inset-0 opacity-50" />
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <span className="mb-6 block font-label text-xs uppercase tracking-[0.4em] text-primary">
            Technological_Ecosystem_V2
          </span>
          <h1 className="text-glow-primary mb-8 font-headline text-6xl font-black leading-tight tracking-tighter md:text-8xl">
            DIMENSIONAL
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              SOLUTIONS
            </span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant">
            We synthesize intelligence, decentralized trust, and immersive spatial
            computing into a cohesive digital monolith for the future of industry.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#contact"
              className="rounded-lg bg-gradient-to-r from-primary to-primary-container px-8 py-4 font-label text-xs font-bold uppercase tracking-widest text-on-primary-container shadow-xl shadow-primary/10 hover:shadow-primary/30"
            >
              DEPLOY_NODE
            </a>
            <a
              href="#gen-ai"
              className="glass-panel rounded-lg border border-outline-variant/30 px-8 py-4 font-label text-xs uppercase tracking-widest text-on-surface hover:bg-surface-variant/40"
            >
              VIEW_SPECS
            </a>
          </div>
        </div>
        <div className="absolute right-10 top-1/4 hidden h-64 w-64 opacity-40 mix-blend-screen blur-sm lg:block">
          <img
            className="h-full w-full object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQpKvFwANtZdTHYWYsGkoL35DL5InWOrNldL7ylbIDx6yRe8GJxRvPsWSU4yBMw0CoRQhSapnzIL3k59oImXn_5G2HMnF9pPSUZPaXGV9AwO5kJSkqBq4b3ZqBReYLjxLEUzQgxWJ5gw2expuETqrtig5TrJmpzwUR0emsP-lKmvOn5gOKk6joFVD2LJ8c3vi9D16MIeXqQK2_Vqu8ApfSSUfZohprS0OX0FBED9jJJKPqLQVvv50l5JgqsAzytwoQy0QvJlfbbIt8"
            alt="Floating abstract 3D crystalline structure glowing blue"
          />
        </div>
        <div className="absolute bottom-1/4 left-10 hidden h-48 w-48 opacity-30 blur-md lg:block">
          <img
            className="h-full w-full object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDbJt9cgE3foDRbBYtcgaQFyG26DziuR_5kLa1cLWbkKF_7oBHB6-yC__6T7iFocN4A66ot0Kih4-3WOk1zg2ZmHlUQD_mtIRQK2nEmXMiZkTLy9AQl5NdmmsVhnKIc1Qvyq-V2foJXHzzoVUmhoSYpVnuozqhqNw373KeeGqfPPnLMl1sghH-BxlcwZ1tjBbT1OG2gUkqxyPZgk7X01YZ85wHBrGFB8ubALPS96fwtytV8SGhy2Cr_HK5qyvfpQIiO4dbWmPs7Wso"
            alt="Floating abstract 3D torus shape with purple neon light"
          />
        </div>
      </section>

      <section id="gen-ai" className="relative overflow-hidden py-32">
        <div
          className="parallax-bg absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQuFaWUaFrqi0tQnYPy0pDaKmh2o9kIiAUuTJSYBjXbpe2bZTuwlJ4Q9Hi0o0n5gzfR9Zt6MQzJujOET8NfsbRmcUo7BhFCkwHMkRJP1EKbA7_CnFKvAPGRgCLeseHUhjE6KB1A8zfbUJsRT46GJK9WJxawOQGWfB7oRuvfIMb1CDqo4P0xCK_XkTIF0s5_WBN4sLDaq4OEf8Be0r-ZM242hmvHhv5QSRpoq23BchpdWlQl_zJALPHKgxeSQgyltnt8odhrnj6oyxR')",
          }}
        />
        <div className="container relative z-10 mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="glass-panel inner-bevel flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    psychology
                  </span>
                </div>
                <span className="font-label text-sm uppercase tracking-widest text-secondary">
                  STRATUM_01 / COGNITION
                </span>
              </div>
              <h2 className="mb-8 font-headline text-5xl font-bold text-on-surface">
                GENERATIVE_AI_ARCHITECTURES
              </h2>
              <p className="mb-10 font-body text-lg leading-relaxed text-on-surface-variant">
                Beyond simple prompts. We build custom LLM pipelines, specialized
                agentic workflows, and proprietary synthetic data generators that
                transform raw information into strategic intelligence.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="glass-panel inner-bevel rounded-xl p-6">
                  <h4 className="mb-3 font-label text-xs tracking-widest text-primary">
                    NEURAL_SYNTHESIS
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    Custom training on enterprise datasets with zero-leakage security.
                  </p>
                </div>
                <div className="glass-panel inner-bevel rounded-xl p-6">
                  <h4 className="mb-3 font-label text-xs tracking-widest text-primary">
                    AGENTIC_SWARMS
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    Autonomous multi-agent systems for complex task orchestration.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative aspect-square w-full max-w-lg">
                <div className="absolute inset-0 rounded-full bg-secondary/10 blur-3xl" />
                <img
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_50px_rgba(214,116,255,0.3)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPoVBIwgl34RROF7LLLJeaIudl2o97vwUI9EFx9Hngi2QWTvywLKvERKkyjb3O8jRc3LRI13fbbcCQhc4eAk9yy48c1OR4qzFJJ3Ok9PgV3gE6rAGNuLOCdwwBynkv1q4m1izNETkAuyPjkSqPPcCwQo2YISUJ-_0df9_6HrHUN_fl1sSidT4BjNVS-vyGcycmFwpMpqWY5VEui4aIOr0e7t69Oga1CiCaNmQIPj7K4pGdq53-7iaeJ_YXppDaqRdoum3IzRZ2TSB2"
                  alt="Intricate 3D render of a glowing human brain made of glass and fibers"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="web3" className="relative overflow-hidden bg-surface-container-low py-32">
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #00eefc 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative z-10 mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="relative aspect-square w-full max-w-lg">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
                <img
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_50px_rgba(143,245,255,0.2)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTrh0VFuIRFX8qxk_6wUiG63B7VD-FhxiNdFXl4jtrB3KchHBGgtRwMpywpSuCCGPV4GdgXoDJ_LpU9sbTqBdat9_f2Wg4s_7l9yepNFXEc5fs9c2hBtXurI9mtBXRXqvWLzeCMo1_ZJOwFZR0a3bKuU2dHtnKxhOwsInE_D-kOcspl2VS5F6o_y9UUo7hGHO-24aTHccPcpqGWrVAoH651x8Q6NWmbU9N7ygC5ruNWS3oc3X7A_QnQHr4oJJR6UYwOord5M4rwjzs"
                  alt="High-detail 3D golden and silver block link representing blockchain"
                />
              </div>
            </div>
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="glass-panel inner-bevel flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    hub
                  </span>
                </div>
                <span className="font-label text-sm uppercase tracking-widest text-primary">
                  STRATUM_02 / PROTOCOL
                </span>
              </div>
              <h2 className="mb-8 font-headline text-5xl font-bold text-on-surface">
                DECENTRALIZED_TRUST_SYSTEMS
              </h2>
              <p className="mb-10 font-body text-lg leading-relaxed text-on-surface-variant">
                Engineering secure, scalable Web3 ecosystems. From smart contract
                auditing to custom L2 chain deployment, we build the rails for the next
                economy of value.
              </p>
              <div className="space-y-4">
                {[
                  ["security", "CRYPTOGRAPHIC_AUDITS", "Zero-vulnerability assurance for smart protocol layers."],
                  ["token", "TOKENOMIC_MODELING", "Mathematical frameworks for sustainable digital economies."],
                ].map(([icon, title, copy]) => (
                  <div key={title} className="inner-bevel flex items-center gap-6 rounded-xl bg-surface-container-highest/40 p-4">
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
            </div>
          </div>
        </div>
      </section>

      <section id="spatial" className="relative overflow-hidden py-32">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            background:
              "linear-gradient(90deg, transparent 49.5%, #414857 50%, transparent 50.5%), linear-gradient(0deg, transparent 49.5%, #414857 50%, transparent 50.5%)",
            backgroundSize: "100px 100px",
          }}
        />
        <div className="container relative z-10 mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="glass-panel inner-bevel flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    layers
                  </span>
                </div>
                <span className="font-label text-sm uppercase tracking-widest text-tertiary">
                  STRATUM_03 / INTERFACE
                </span>
              </div>
              <h2 className="mb-8 font-headline text-5xl font-bold text-on-surface">
                SPATIAL_COMPUTING_UX
              </h2>
              <p className="mb-10 font-body text-lg leading-relaxed text-on-surface-variant">
                The screen is no longer a boundary. We design immersive interfaces for
                AR/VR environments, utilizing gaze-tracking, gesture-recognition, and
                spatial audio to redefine user interaction.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Volumetric_Design", "Haptic_Feedback", "Mixed_Reality"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-tertiary/20 bg-tertiary/10 px-4 py-2 font-label text-[10px] uppercase tracking-widest text-tertiary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative aspect-square w-full max-w-lg">
                <div className="absolute inset-0 rounded-full bg-tertiary/10 blur-3xl" />
                <img
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_50px_rgba(172,137,255,0.3)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2H_t5iu3NIXEpvPaL2xjGQ-vmBDEU9nqI4NmIly4LGqFVqO5nbsPMcf7QqnisMXnO7b-SYsTUr5mZLBJ5pJV1AASYujQhxCiNeoDRLarhjnhVetaGRqrRWSPvu_ul_BOS9RHUbviTFKuAD_1xOU97zt-Xw12yaZs9OCVTB-mKYf4L6ZHtbkSZWKFDNMdMZWcB14AvCQems7Ckalf0DPd8BP7--XS_5PrN553nIQv53yzVHzGJcTNwBgZf2ybX_sTiOV6Bo1uv9vXu"
                  alt="Floating transparent glass cubes with digital UI elements inside"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden px-6 py-32 md:px-8">
        <div className="glass-panel relative z-10 mx-auto max-w-4xl rounded-[2rem] border border-outline-variant/10 p-8 text-center shadow-2xl md:p-16">
          <h3 className="mb-6 font-headline text-4xl font-bold text-on-surface">
            READY_TO_INITIALIZE?
          </h3>
          <p className="mb-12 font-body text-lg text-on-surface-variant">
            Connect with our neural network to discuss your project requirements.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <input
              type="email"
              placeholder="ENCRYPTED_EMAIL_ADDRESS"
              className="min-w-0 rounded-lg bg-black px-8 py-4 font-label text-xs tracking-widest outline-none focus:ring-2 focus:ring-primary sm:min-w-[300px]"
            />
            <button className="rounded-lg bg-gradient-to-r from-secondary to-tertiary px-10 py-4 font-label text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-secondary/20 hover:scale-105">
              OPEN_COMM_CHANNEL
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-primary/5 to-transparent" />
      </section>
    </PageFrame>
  );
}
