import { PageFrame } from "@/components/site-chrome";

const metrics = [
  ["hub", "942+", "NEURAL NODES DEPLOYED", "Scalable architecture across distributed quantum networks.", "bg-primary", "text-primary", "text-on-primary-container", "shadow-[0_0_20px_rgba(0,238,252,0.4)]"],
  ["psychology", "12.8ms", "LATENCY THRESHOLD", "Near-instantaneous cognitive bridge synchronization.", "bg-secondary", "text-secondary", "text-white", "shadow-[0_0_20px_rgba(214,116,255,0.4)]"],
  ["memory", "∞", "DATA FLOW LIMIT", "Unrestricted throughput via holographic substrate.", "bg-tertiary", "text-tertiary", "text-white", "shadow-[0_0_20px_rgba(172,137,255,0.4)]"],
];

const team = [
  {
    role: "FOUNDING ARCHITECT",
    name: "ELARA SYNTH",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcpc8RjMxdOJFcTY50ijsSRApbdYkAuLoSZUbCZYdAi1JjZlJwfsxFe9kM4Y-7DMbdD-sOzoIu8qc4IIZqWnoZ0uOVjH-DpIJSx7zZ14umGsqxdimKA-eaPM-Of-thO9lr4opLeMxwAjQR1Je7UsPJKK1sL44uGg1m2TMctS8A_m8C2wB1cxW6eqd1ZYzIiEFiDQa3GGEqAdL_Q589SnCi-5I5u3SvYSaAksc0PI6wNJH7EN37gY8b__s5cKesH8Xhb70cnFy1xjFN",
    accent: "text-primary",
  },
  {
    role: "NEURAL DESIGNER",
    name: "KAI VOID",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDc0xDj8FYwJ-rInDh6V88vYnCTFI4VWHDZaJA0rf96JZwTqEsTx_atI3iFRruWRnH1mdP9FSmdUQrfapJnc8uagpj-fOFeJe325loUtKaf0bvNr72wryLtLIfGTB06YCEj61WK8cdTmonqR9Nfz1r_Z-zMLSZ25h4aFf4p8pQI7AVSS-zMNyTf7HYyg0tmLkn63zZGlg8scYFsIXSSx8m2qzC9o3jhdIPqMHYDRn5bhYYttRNqGGaI9FoTaXVQrRwFGDSXura-_dKA",
    accent: "text-secondary",
  },
  {
    role: "BIO SYSTEMS LEAD",
    name: "SARA MORPH",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBq3ss0nxGrn1R19nFWyZ9jsYf2iJKdxQUHh9IbZBnPdKjAKWVJAb7zZbENPKrJvI1v5S8oHG4DGyzfOQ4RjAUZ1RjdyAyXwY6enEr9n06E6Y9k1rvTheZuubYUwrcYr1cFf28SMFP1iQnlfvF9MTB-ttIl26rMghSYr3JPEQ1DTViy1TPVcpMHXUe9TuPKia0eCAuii1v1jePlGaYqyrCzaT470G1vYie-RUJDWmZXfIynX-Kqaco0EjNNGsduHf50Zzo9iv6XR4jQ",
    accent: "text-tertiary",
  },
  {
    role: "QUANTUM STREAMS",
    name: "JAX ETHER",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9N2smFG_DsVsmvTdNGNfsshlpcNywlVxyyQsoF0wW3MhUn1G-HYRAMkftpRrZjM0GvYyNE5h5BKd_Ljw9akID9K_jfx3M42SZtMIXo4rlMXmSATTABdTlmtVV8lJC5lz2xYzRQoeLgl93oTQMAwmoDnp9BmZ9M_IHaAYiMbYk_Xz39bdFxZU6WKNj38AoLRaiX2B8fS6B3uQlEhS_IdIZc2Xt15z_nMMOsC3zR7TOU0d4BCEHbPwtWpHzpM2XEoT8pbVmGuEbfeXG",
    accent: "text-primary-dim",
  },
];

export default function NeuralNetworkPage() {
  return (
    <PageFrame activeNav="none" footerVariant="neural" sideNavItems={[
      { icon: "psychology", label: "Generative AI" },
      { icon: "hub", label: "Web3 Systems" },
      { icon: "layers", label: "Spatial UI" },
      { icon: "memory", label: "Neural Architectures", active: true },
      { icon: "biotech", label: "Bio-Digital" },
    ]}>
      <section className="relative flex min-h-[819px] items-center overflow-hidden px-6 md:px-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background/20" />
          <img
            className="h-full w-full scale-110 object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa5paWuuK1p0_x8JCpFHcH-0CgpFbmK3vluHomVR-sBtdCKJaDPg1LiH_AaYPD99X3L1Q0R2YuGQl7NqG_rJHCuW7J3l8BOR2CNOj967p2EAeXsbFDN79x1dqmsCuDapB3SGVfmBElaAl-VyQKH_Vk1dmB0BuA5QHqlxEiDLQxBT1FjgCqOrYxRPOHEkSSmuE-8I45YdlIpiaI7stswjPJIDrNKKQlD3P_mQH_4-rySIYc_Yl6JfyODxnSnlIk91-iTWvCWCGziDBM"
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
            ARCHITECTS OF THE VOID
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
              READY FOR UPGRADE?
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
