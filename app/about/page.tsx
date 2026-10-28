import Link from "next/link"
import { ArrowRight, Check, ShieldCheck, Clock, Users, TrendingUp } from "lucide-react"
import PageHero from "@/components/page-hero"
import Reveal from "@/components/reveal"
import Counter from "@/components/counter"
import CtaBand from "@/components/cta-band"
import { stats, testimonials } from "@/lib/data"

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Straight answers, honest fees, and advice we would give our own families." },
  { icon: Clock, title: "Timeliness", text: "Deadlines tracked for you — every filing, extension and deposit made on time." },
  { icon: Users, title: "Partnership", text: "A dedicated advisor who knows your history and answers within one business day." },
  { icon: TrendingUp, title: "Optimization", text: "We review every return for missed credits before it ever reaches the IRS." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <PageHero
        label="About us"
        title="A team that treats your taxes like our own"
        description="For over 30 years, Plantaxfiling has helped individuals and businesses across the USA file with confidence — and keep more of what they earn."
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal variant="left">
            <div className="zoom-card relative h-[360px] w-full overflow-hidden lg:h-[440px]">
              <img src="/img/about-1.jpg" alt="Advisory team collaborating" className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <div>
            <Reveal as="div"><span className="section-label">Our story</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">Three decades of careful, human advice</Reveal>
            <Reveal as="p" delay={160} className="mt-6 text-base leading-8 text-ink/65">
              Plantaxfiling started with a simple belief: tax help should be understandable. Today our advisors handle
              everything from simple individual returns to multi-state corporate filings and payroll — always explaining
              the why behind every number.
            </Reveal>
            <Reveal as="p" delay={220} className="mt-4 text-base leading-8 text-ink/65">
              Our tax advisors provide consultations and handle legal matters through phone, email, and our secure
              client portal, ensuring convenient and confidential service.
            </Reveal>
            <Reveal delay={280} className="mt-8 space-y-3">
              {["Free initial consultation", "Secure client portal for documents", "Enrolled agents and CPAs on staff", "Year-round support, not just filing season"].map((item) => (
                <span key={item} className="flex items-center gap-3 text-[15px] text-ink/75">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-lime">
                    <Check size={12} strokeWidth={3} className="text-ink" />
                  </span>
                  {item}
                </span>
              ))}
            </Reveal>
            <Reveal delay={340} className="mt-9">
              <Link href="/contact" className="btn-brand">Talk to an advisor <ArrowRight size={18} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[600px] text-center">
            <Reveal as="div"><span className="section-label justify-center">What we stand for</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">Values that show up in every return</Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="group h-full border border-ink/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/30">
                  <span className="flex size-12 items-center justify-center bg-lime text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-lime">
                    <v.icon size={22} />
                  </span>
                  <h3 className="mt-6 text-lg font-medium">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-ink/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-10 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="text-center lg:text-left">
              <p className="text-5xl font-medium tracking-tight text-white sm:text-6xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[.14em] text-white/50">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonial spotlight */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[820px] text-center">
            <Reveal as="div"><span className="section-label justify-center">In their words</span></Reveal>
            <Reveal as="blockquote" delay={80} className="mt-8">
              <p className="font-display text-3xl leading-[1.35] tracking-tight text-ink sm:text-4xl">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <footer className="mt-7 flex items-center justify-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-lime text-sm font-bold text-ink">
                  {testimonials[0].name.split(" ").map((n) => n[0]).join("")}
                </span>
                <span className="text-left">
                  <span className="block text-sm font-medium text-ink">{testimonials[0].name}</span>
                  <span className="block text-xs text-ink/50">{testimonials[0].role}</span>
                </span>
              </footer>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to work with a team that has your back?"
        text="Book a free consultation — we will review your situation and outline exactly how we can help."
      />
    </main>
  )
}
