import { Button, Badge, Card, CardContent, NavBar, Section, Footer } from "@vantage/ui"
import type { NavItem } from "@vantage/ui"

// ─── Nav ───────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: "Coverage", href: "/coverage" },
  { label: "Claims", href: "/claims" },
  { label: "Find an Agent", href: "/find-agent" },
  { label: "About", href: "/about" },
]

// ─── Coverage plans ────────────────────────────────────────────────────────

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "$89",
    period: "/ month",
    description: "Meets state minimums. A solid foundation.",
    features: ["Bodily injury liability", "Property damage liability", "Uninsured motorist"],
    recommended: false,
  },
  {
    id: "standard",
    name: "Standard",
    price: "$149",
    period: "/ month",
    description: "Our most popular — comprehensive protection for everyday drivers.",
    features: ["Everything in Basic", "Collision coverage", "Comprehensive coverage", "Rental reimbursement"],
    recommended: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$199",
    period: "/ month",
    description: "Full protection, 24/7 roadside, and gap coverage.",
    features: ["Everything in Standard", "Roadside assistance 24/7", "Gap coverage", "New car replacement"],
    recommended: false,
  },
]

// ─── Feature rows ──────────────────────────────────────────────────────────

const COVERAGE_FEATURES = [
  {
    icon: "🛡",
    title: "Coverage that fits your life",
    desc: "Choose from liability-only to fully comprehensive. Your premium adjusts instantly.",
  },
  {
    icon: "⚡",
    title: "Claims resolved in 48 hours",
    desc: "File online or by phone. Our team confirms receipt within the hour.",
  },
  {
    icon: "📋",
    title: "No-surprise policy terms",
    desc: "Plain-language policies. Every exclusion is explained before you sign.",
  },
]

const WHY_ANCHOR_FEATURES = [
  {
    icon: "🔒",
    title: "Fixed-rate premiums",
    desc: "Your rate won't change mid-term. What you quote is what you pay.",
  },
  {
    icon: "🤝",
    title: "Local agents, real people",
    desc: "Connect with a licensed agent in your state — in person or by video.",
  },
  {
    icon: "⭐",
    title: "4.8 out of 5 from 50,000+ reviews",
    desc: "Independently verified. Our customers rate us highest for claim speed.",
  },
]

// ─── Testimonials ──────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Filed my claim on a Monday morning, had a check by Wednesday.",
    author: "Marcus T.",
    location: "Austin, TX",
    stars: 5,
  },
  {
    id: 2,
    quote: "Switched from my old insurer and saved $60 a month with better coverage.",
    author: "Priya S.",
    location: "Chicago, IL",
    stars: 5,
  },
  {
    id: 3,
    quote: "My agent walked me through every option without any pressure. That's rare.",
    author: "David R.",
    location: "Portland, OR",
    stars: 5,
  },
  {
    id: 4,
    quote: "Fast, transparent, and incredibly easy. The whole process took 10 minutes.",
    author: "Angela M.",
    location: "Nashville, TN",
    stars: 5,
  },
]

const FOOTER_GROUPS = [
  {
    heading: "Coverage",
    links: [
      { label: "Liability", href: "/coverage/liability" },
      { label: "Comprehensive", href: "/coverage/comprehensive" },
      { label: "Collision", href: "/coverage/collision" },
      { label: "Compare Plans", href: "/coverage" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "File a Claim", href: "/claims" },
      { label: "Track a Claim", href: "/claims/track" },
      { label: "Find an Agent", href: "/find-agent" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Anchor", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Legal", href: "/legal" },
    ],
  },
]

// ─── Helpers ───────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] [text-decoration:underline] [text-decoration-color:var(--gold)] [text-underline-offset:4px]">
      {children}
    </p>
  )
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[var(--gold)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Navigation ───────────────────────────────────────────────── */}
      <NavBar
        logo={
          <a href="/" className="font-serif text-xl font-bold text-foreground" aria-label="Anchor Insurance home">
            Anchor
          </a>
        }
        items={NAV_ITEMS}
        cta={
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="/login">Log in</a>
            </Button>
            <Button
              size="sm"
              className="bg-[var(--accent-vivid)] text-[var(--accent-vivid-foreground)] hover:opacity-90"
              asChild
            >
              <a href="/quote">Get a Quote</a>
            </Button>
          </div>
        }
      />

      <main>
        {/* ── Hero — dark navy, image right, floating badge ────────── */}
        <section
          className="bg-[var(--surface-hero)] text-[var(--surface-hero-fg)]"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-8">
            {/* Left: copy */}
            <div>
              <p className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent-vivid)] [text-decoration:underline] [text-decoration-color:var(--accent-vivid)] [text-underline-offset:4px]">
                Car Insurance
              </p>

              <h1
                id="hero-heading"
                className="font-serif text-5xl font-bold leading-[1.1] tracking-tight lg:text-6xl"
              >
                Drive with total confidence.
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-[var(--surface-hero-muted)]">
                Fast quotes, honest premiums, real agents when you need them — and claims resolved in 48 hours.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="bg-[var(--accent-vivid)] text-[var(--accent-vivid-foreground)] hover:opacity-90"
                  asChild
                >
                  <a href="/quote">Get your quote</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <a href="/coverage">Compare plans</a>
                </Button>
              </div>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2">
                  <Stars />
                  <span className="text-sm text-[var(--surface-hero-muted)]">
                    4.8 from 50,000+ reviews
                  </span>
                </div>
                <span className="text-sm text-[var(--surface-hero-muted)]">
                  ✓ Licensed in all 50 states
                </span>
                <span className="text-sm text-[var(--surface-hero-muted)]">
                  ✓ A+ BBB rated
                </span>
              </div>
            </div>

            {/* Right: image placeholder + floating badge */}
            <div className="relative hidden lg:block">
              {/* Image placeholder */}
              <div
                className="aspect-[4/5] w-full rounded-[var(--image-radius)] bg-gradient-to-br from-[oklch(0.28_0.09_255)] to-[oklch(0.22_0.06_255)]"
                aria-hidden="true"
              />

              {/* Floating stat badge */}
              <div className="absolute bottom-6 left-6 rounded-xl bg-[var(--surface-hero)] p-5 shadow-lg ring-1 ring-white/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--surface-hero-muted)]">
                  Average claim resolved in
                </p>
                <p className="mt-1 font-serif text-4xl font-bold text-white">48h</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ticker ───────────────────────────────────── */}
        <section className="border-y border-border bg-background py-10" aria-label="Customer reviews">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex items-start gap-12 overflow-x-auto pb-2">
              {/* Rating summary */}
              <div className="shrink-0">
                <p className="font-serif text-2xl font-bold text-foreground">Excellent</p>
                <Stars />
                <p className="mt-1.5 text-xs text-muted-foreground">Based on 50,000+ reviews</p>
              </div>

              {/* Individual reviews */}
              {TESTIMONIALS.map((t) => (
                <article
                  key={t.id}
                  className="min-w-[220px] max-w-[260px] shrink-0"
                  aria-label={`Review by ${t.author}`}
                >
                  <div className="flex items-center gap-2">
                    <Stars count={t.stars} />
                    <span className="text-xs font-semibold text-foreground">Verified</span>
                  </div>
                  <blockquote className="mt-2">
                    <p className="text-sm leading-relaxed text-foreground">{t.quote}</p>
                    <footer className="mt-2">
                      <cite className="not-italic">
                        <span className="text-xs font-bold uppercase tracking-wide text-foreground">{t.author}</span>
                        <span className="ml-2 text-xs text-muted-foreground">{t.location}</span>
                      </cite>
                    </footer>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Coverage section — image left, features right ─────────── */}
        <Section aria-labelledby="coverage-heading">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left: image + floating badge */}
            <div className="relative">
              <div
                className="aspect-[4/5] w-full rounded-[var(--image-radius)] bg-gradient-to-br from-[var(--surface-cream)] to-[oklch(0.92_0.02_80)]"
                aria-hidden="true"
              />
              <div className="absolute bottom-6 left-6 rounded-xl bg-[var(--surface-hero)] p-5 text-white shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Starting from
                </p>
                <p className="mt-1 font-serif text-3xl font-bold">$89<span className="text-lg font-normal">/mo</span></p>
              </div>
            </div>

            {/* Right: label, heading, feature rows */}
            <div>
              <SectionLabel>Car Insurance Coverage</SectionLabel>
              <h2
                id="coverage-heading"
                className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground"
              >
                Coverage that works as hard as you do.
              </h2>

              <div className="mt-8 space-y-4">
                {COVERAGE_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-4 rounded-xl bg-[var(--surface-cream)] p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-xl shadow-sm">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{f.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Button
                  className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
                  asChild
                >
                  <a href="/quote">View offers</a>
                </Button>
                <Button variant="link" className="text-primary" asChild>
                  <a href="/coverage">Learn more</a>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Plans ─────────────────────────────────────────────────── */}
        <Section className="bg-[var(--surface-cream)]" aria-labelledby="plans-heading">
          <header className="mb-12 text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h2
              id="plans-heading"
              className="font-serif text-4xl font-bold tracking-tight text-foreground"
            >
              Simple, honest pricing.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              No hidden fees. Choose your coverage, start immediately.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <article
                key={plan.id}
                aria-label={`${plan.name} plan`}
                className={
                  plan.recommended
                    ? "relative rounded-xl bg-[var(--surface-hero)] p-8 text-white shadow-xl md:scale-105"
                    : "rounded-xl border border-border bg-card p-8"
                }
              >
                {plan.recommended && (
                  <Badge
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent-vivid)] text-[var(--accent-vivid-foreground)] text-xs font-bold"
                  >
                    Most popular
                  </Badge>
                )}

                <h3 className="font-serif text-xl font-bold">{plan.name}</h3>

                <p className="mt-4">
                  <span className="font-serif text-4xl font-bold">{plan.price}</span>
                  <span className={plan.recommended ? "text-white/60" : "text-muted-foreground"}>
                    {" "}{plan.period}
                  </span>
                </p>

                <p className={`mt-3 text-sm ${plan.recommended ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-2.5" role="list" aria-label="Included features">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2.5 text-sm ${plan.recommended ? "text-white" : "text-foreground"}`}>
                      <svg className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-8 w-full ${plan.recommended ? "bg-[var(--accent-vivid)] text-[var(--accent-vivid-foreground)] hover:opacity-90" : ""}`}
                  variant={plan.recommended ? "default" : "outline"}
                  asChild
                >
                  <a href={`/quote?plan=${plan.id}`}>
                    {plan.recommended ? "Get started" : `Choose ${plan.name}`}
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </Section>

        {/* ── Why Anchor — features right, image left ───────────────── */}
        <Section aria-labelledby="why-heading">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left: label, heading, features */}
            <div>
              <SectionLabel>Why Anchor</SectionLabel>
              <h2
                id="why-heading"
                className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground"
              >
                Insurance that actually shows up.
              </h2>

              <div className="mt-8 space-y-4">
                {WHY_ANCHOR_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-4 rounded-xl bg-[var(--surface-cream)] p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-xl shadow-sm">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{f.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Button
                  className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
                  asChild
                >
                  <a href="/quote">View offers</a>
                </Button>
                <Button variant="link" className="text-primary" asChild>
                  <a href="/about">Learn more</a>
                </Button>
              </div>
            </div>

            {/* Right: image + floating badge */}
            <div className="relative">
              <div
                className="aspect-[4/5] w-full rounded-[var(--image-radius)] bg-gradient-to-br from-[oklch(0.85_0.04_255)] to-[oklch(0.78_0.06_255)]"
                aria-hidden="true"
              />
              <div className="absolute bottom-6 right-6 rounded-xl bg-[var(--surface-hero)] p-5 text-white shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Drivers protected
                </p>
                <p className="mt-1 font-serif text-3xl font-bold">2M+</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ── CTA Band ──────────────────────────────────────────────── */}
        <section className="bg-[var(--surface-hero)]" aria-labelledby="cta-heading">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent-vivid)]">
                Get protected today
              </p>
              <h2
                id="cta-heading"
                className="font-serif text-3xl font-bold text-white"
              >
                Your quote takes five minutes.
              </h2>
              <p className="mt-2 text-white/60">No agent required. No commitment.</p>
            </div>
            <Button
              size="lg"
              className="shrink-0 bg-[var(--accent-vivid)] text-[var(--accent-vivid-foreground)] hover:opacity-90"
              asChild
            >
              <a href="/quote">Get started</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer
        logo={
          <a href="/" className="font-serif text-xl font-bold text-foreground" aria-label="Anchor Insurance">
            Anchor
          </a>
        }
        tagline="Protecting drivers across America since 1987. Licensed in all 50 states."
        groups={FOOTER_GROUPS}
        legal="© 2026 Anchor Insurance Group, Inc. All rights reserved. Coverage subject to policy terms and conditions."
      />
    </>
  )
}
