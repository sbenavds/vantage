import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ShieldCheck,
  Zap,
  FileText,
  Lock,
  Users,
  Star,
  Check,
} from "lucide-react"
import { Button, Badge, NavBar, Section, Footer, SectionLabel } from "@vantage/ui"
import type { NavItem } from "@vantage/ui"

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Anchor Insurance — Drive with Total Confidence",
  description:
    "Fast quotes, honest premiums, real agents when you need them. Car insurance claims resolved in 48 hours. Licensed in all 50 states.",
}

// ─── Nav ───────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: "Coverage", href: "/coverage" },
  { label: "Claims", href: "/claims" },
  { label: "Find an Agent", href: "/find-agent" },
  { label: "About", href: "/about" },
]

// ─── Plans ─────────────────────────────────────────────────────────────────

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "$89",
    period: "/ month",
    description: "Meets state minimums. A solid foundation.",
    features: [
      "Bodily injury liability",
      "Property damage liability",
      "Uninsured motorist",
    ],
    recommended: false,
  },
  {
    id: "standard",
    name: "Standard",
    price: "$149",
    period: "/ month",
    description: "Our most popular — comprehensive protection for everyday drivers.",
    features: [
      "Everything in Basic",
      "Collision coverage",
      "Comprehensive coverage",
      "Rental reimbursement",
    ],
    recommended: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$199",
    period: "/ month",
    description: "Full protection, 24/7 roadside, and gap coverage.",
    features: [
      "Everything in Standard",
      "Roadside assistance 24/7",
      "Gap coverage",
      "New car replacement",
    ],
    recommended: false,
  },
]

// ─── Features ──────────────────────────────────────────────────────────────

const COVERAGE_FEATURES = [
  {
    Icon: ShieldCheck,
    title: "Coverage that fits your life",
    desc: "Choose from liability-only to fully comprehensive. Your premium adjusts instantly.",
  },
  {
    Icon: Zap,
    title: "Claims resolved in 48 hours",
    desc: "File online or by phone. Our team confirms receipt within the hour.",
  },
  {
    Icon: FileText,
    title: "No-surprise policy terms",
    desc: "Plain-language policies. Every exclusion is explained before you sign.",
  },
]

const WHY_ANCHOR_FEATURES = [
  {
    Icon: Lock,
    title: "Fixed-rate premiums",
    desc: "Your rate won't change mid-term. What you quote is what you pay.",
  },
  {
    Icon: Users,
    title: "Local agents, real people",
    desc: "Connect with a licensed agent in your state — in person or by video.",
  },
  {
    Icon: Star,
    title: "4.8 out of 5 from 50,000+ reviews",
    desc: "Independently verified. Customers rate us highest for claim speed.",
  },
]

// ─── Testimonials ──────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Filed my claim on a Monday morning, had a check by Wednesday.",
    author: "Marcus T.",
    location: "Austin, TX",
  },
  {
    id: 2,
    quote: "Switched from my old insurer and saved $60 a month with better coverage.",
    author: "Priya S.",
    location: "Chicago, IL",
  },
  {
    id: 3,
    quote: "My agent walked me through every option without any pressure. That's rare.",
    author: "David R.",
    location: "Portland, OR",
  },
  {
    id: 4,
    quote: "Fast, transparent, and incredibly easy. The whole process took 10 minutes.",
    author: "Angela M.",
    location: "Nashville, TN",
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

function Stars({ count = 5, size = "sm" }: { count?: number; size?: "sm" | "xs" }) {
  const dim = size === "xs" ? "h-3 w-3" : "h-3.5 w-3.5"
  return (
    <span className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className={`${dim} fill-[var(--gold,var(--primary))] text-[var(--gold,var(--primary))]`}
          aria-hidden="true"
        />
      ))}
    </span>
  )
}

/** Feature card — left border mark is the Anchor signature. */
function FeatureCard({
  Icon: IconComponent,
  title,
  desc,
}: {
  Icon: React.ElementType
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-4 rounded-lg border-l-[length:var(--mark-border-width,3px)] border-l-primary bg-secondary p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
        <IconComponent className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold leading-snug text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Navigation ───────────────────────────────────────────────── */}
      <NavBar
        logo={
          <Link href="/" className="font-serif text-xl font-bold text-foreground" aria-label="Anchor Insurance home">
            Anchor
          </Link>
        }
        items={NAV_ITEMS}
        cta={
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button variant="vivid" size="sm" asChild>
              <Link href="/quote">Get a quote</Link>
            </Button>
          </div>
        }
      />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="bg-primary text-primary-foreground" aria-labelledby="hero-heading">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-8 lg:py-32">
            <div>
              <SectionLabel variant="underline" invert>Car Insurance</SectionLabel>

              <h1
                id="hero-heading"
                className="font-serif text-5xl font-bold leading-[1.1] tracking-tight lg:text-6xl"
              >
                Drive with total confidence.
              </h1>

              <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/65">
                Fast quotes, honest premiums, real agents when you need them — and claims resolved in 48 hours.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button variant="vivid" size="lg" className="px-8" asChild>
                  <Link href="/quote">Get your quote</Link>
                </Button>
                <Button variant="ghost-invert" size="lg" className="px-8" asChild>
                  <Link href="/coverage">Compare plans</Link>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-primary-foreground/10 pt-8">
                <div className="flex items-center gap-2">
                  <Stars />
                  <span className="text-sm text-primary-foreground/65">4.8 from 50,000+ reviews</span>
                </div>
                <span className="text-sm text-primary-foreground/65">Licensed in all 50 states</span>
                <span className="text-sm text-primary-foreground/65">A+ BBB rated</span>
              </div>
            </div>

            {/* Image + floating stat badge */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-car.png"
                  alt="Dark sedan driving on an open highway at golden hour"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-8 left-8 rounded-xl bg-primary p-6 ring-1 ring-primary-foreground/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                  Average claim resolved in
                </p>
                <p className="mt-1.5 font-serif text-4xl font-bold">48h</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Social proof bar ─────────────────────────────────────────── */}
        <section className="border-y border-border bg-background" aria-label="Customer reviews">
          <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
            <div className="flex items-start gap-10 overflow-x-auto pb-1">
              <div className="shrink-0 border-r border-border pr-10">
                <p className="font-serif text-2xl font-bold text-foreground">Excellent</p>
                <Stars />
                <p className="mt-1.5 text-xs text-muted-foreground">50,000+ verified reviews</p>
              </div>

              <div className="flex gap-10">
                {TESTIMONIALS.map((t) => (
                  <article
                    key={t.id}
                    className="min-w-[200px] max-w-[240px] shrink-0"
                    aria-label={`Review by ${t.author}`}
                  >
                    <Stars size="xs" />
                    <blockquote className="mt-2">
                      <p className="text-sm leading-relaxed text-foreground">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <footer className="mt-2">
                        <cite className="not-italic text-xs font-semibold text-foreground">{t.author}</cite>
                        <span className="ml-1.5 text-xs text-muted-foreground">{t.location}</span>
                      </footer>
                    </blockquote>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Coverage — image left, features right ─────────────────── */}
        <Section aria-labelledby="coverage-heading">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/coverage-family.png"
                  alt="Couple reviewing their insurance coverage options together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-8 left-8 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                  Starting from
                </p>
                <p className="mt-1.5 font-serif text-3xl font-bold">
                  $89<span className="text-base font-normal text-primary-foreground/60">/mo</span>
                </p>
              </div>
            </div>

            <div>
              <SectionLabel>Car Insurance Coverage</SectionLabel>
              <h2
                id="coverage-heading"
                className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-foreground"
              >
                Coverage that works as hard as you do.
              </h2>

              <div className="mt-8 space-y-3">
                {COVERAGE_FEATURES.map((f) => (
                  <FeatureCard key={f.title} Icon={f.Icon} title={f.title} desc={f.desc} />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button variant="default" className="px-6" asChild>
                  <Link href="/quote">View offers</Link>
                </Button>
                <Button variant="link" asChild>
                  <Link href="/coverage">Learn more →</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Plans ─────────────────────────────────────────────────── */}
        <Section className="bg-surface-cream" aria-labelledby="plans-heading">
          <header className="mb-14 text-center">
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
                className={[
                  "relative flex flex-col rounded-xl p-8",
                  plan.recommended
                    ? "bg-primary text-primary-foreground shadow-2xl md:scale-105 md:-my-4"
                    : "bg-card shadow-sm",
                ].join(" ")}
              >
                {plan.recommended && (
                  <Badge
                    variant="vivid"
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold"
                  >
                    Most popular
                  </Badge>
                )}

                <h3 className="font-serif text-xl font-bold">{plan.name}</h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-bold">{plan.price}</span>
                  <span className={plan.recommended ? "text-primary-foreground/50" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>

                <p className={["mt-3 text-sm leading-relaxed", plan.recommended ? "text-primary-foreground/65" : "text-muted-foreground"].join(" ")}>
                  {plan.description}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5" role="list" aria-label="Included features">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={["flex items-center gap-2.5 text-sm", plan.recommended ? "text-primary-foreground/90" : "text-foreground"].join(" ")}
                    >
                      <Check
                        className={["h-4 w-4 shrink-0", plan.recommended ? "text-[var(--accent-vivid,currentColor)]" : "text-primary"].join(" ")}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.recommended ? "vivid" : "outline"}
                  size="lg"
                  className="mt-8 w-full"
                  asChild
                >
                  <Link href={`/quote?plan=${plan.id}`}>
                    {plan.recommended ? "Get started" : `Choose ${plan.name}`}
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </Section>

        {/* ── Why Anchor — features left, image right ────────────────── */}
        <Section aria-labelledby="why-heading">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel>Why Anchor</SectionLabel>
              <h2
                id="why-heading"
                className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-foreground"
              >
                Insurance that actually shows up.
              </h2>

              <div className="mt-8 space-y-3">
                {WHY_ANCHOR_FEATURES.map((f) => (
                  <FeatureCard key={f.title} Icon={f.Icon} title={f.title} desc={f.desc} />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button variant="default" className="px-6" asChild>
                  <Link href="/quote">View offers</Link>
                </Button>
                <Button variant="link" asChild>
                  <Link href="/about">Learn more →</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/why-anchor-agent.png"
                  alt="Anchor agent on a video call attentively helping a customer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-8 right-8 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                  Drivers protected
                </p>
                <p className="mt-1.5 font-serif text-3xl font-bold">2M+</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ── CTA Band ──────────────────────────────────────────────── */}
        <section className="bg-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center lg:px-8">
            <div>
              <SectionLabel variant="underline" invert>Get protected today</SectionLabel>
              <h2 id="cta-heading" className="font-serif text-3xl font-bold">
                Your quote takes five minutes.
              </h2>
              <p className="mt-2 text-primary-foreground/55">No agent required. No commitment.</p>
            </div>
            <Button variant="vivid" size="lg" className="shrink-0 px-10" asChild>
              <Link href="/quote">Get started</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer
        logo={
          <Link href="/" className="font-serif text-xl font-bold text-foreground" aria-label="Anchor Insurance">
            Anchor
          </Link>
        }
        tagline="Protecting drivers across America since 1987. Licensed in all 50 states."
        groups={FOOTER_GROUPS}
        legal="© 2026 Anchor Insurance Group, Inc. All rights reserved. Coverage subject to policy terms and conditions."
      />
    </>
  )
}
