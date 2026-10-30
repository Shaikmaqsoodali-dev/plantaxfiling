import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, BadgeCheck, LineChart, Building2, Scale } from "lucide-react"
import PageHero from "@/components/page-hero"
import Reveal from "@/components/reveal"
import Counter from "@/components/counter"
import CtaBand from "@/components/cta-band"

const reasons = [
  { icon: BadgeCheck, title: "Licensed & vetted", text: "Every CPA on our team is state-licensed and continuously trained on federal and state code changes." },
  { icon: LineChart, title: "Proactive planning", text: "We look ahead — quarterly estimates, entity structure, retirement vehicles — to lower next year's bill." },
  { icon: Scale, title: "Audit-ready records", text: "Clean books and documentation mean you are prepared if the IRS ever asks questions." },
  { icon: Building2, title: "Business fluent", text: "S-corps, partnerships, multi-state nexus, payroll — we speak corporate finance natively." },
]

const engagements = [
  { title: "Annual tax preparation", text: "Full federal and state preparation with a CPA review on every return before filing." },
  { title: "Quarterly tax planning", text: "Four scheduled reviews a year to adjust estimates and capture new deductions." },
  { title: "Business advisory", text: "Cash-flow forecasting, entity selection and compensation strategy for growing companies." },
  { title: "IRS representation", text: "Your CPA stands in for you in every correspondence, notice and audit meeting." },
]

export default function CpaPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <PageHero
        label="CPA services"
        title="A licensed CPA in your corner, year-round"
        description="Work one-on-one with a Certified Public Accountant who knows your history — not a seasonal preparer who sees your return once a year."
      />

      {/* Why a CPA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <Reveal as="div"><span className="section-label">Why a CPA</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">The difference is in the decisions</Reveal>
            <Reveal as="p" delay={160} className="mt-6 text-base leading-8 text-ink/65">
              A tax preparer files what happened last year. A CPA helps you shape what happens next. From choosing the
              right entity to timing income and deductions, small decisions early in the year compound into real
              savings — and your CPA is accountable for the advice.
            </Reveal>
            <Reveal delay={240} className="mt-8 grid gap-5 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="group border-t-2 border-ink/15 pt-5 transition-colors duration-500 hover:border-lime">
                  <r.icon size={22} className="text-lime-deep transition-transform duration-500 group-hover:-translate-y-0.5" />
                  <h3 className="mt-4 text-base font-medium text-ink">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{r.text}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal variant="right" className="relative">
            <div className="zoom-card relative aspect-[4/5] w-full overflow-hidden bg-paper">
              <Image
                src="/img/results.jpg"
                alt="CPA reviewing financial figures"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="animate-float absolute -bottom-6 -left-4 bg-lime px-7 py-5 shadow-[0_18px_40px_-18px_rgba(0,0,0,.35)]">
              <p className="text-3xl font-medium tracking-tight text-ink">
                <Counter to={98} suffix="%" />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[.14em] text-ink/70">Client retention</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[600px] text-center">
            <Reveal as="div"><span className="section-label justify-center">Engagements</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">How we work with you</Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {engagements.map((e, i) => (
              <Reveal key={e.title} delay={i * 100}>
                <div className="group h-full border border-ink/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/30 hover:shadow-[0_28px_60px_-30px_rgba(0,0,0,.35)]">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-medium text-ink">{e.title}</h3>
                    <span className="text-sm font-medium text-ink/30 transition-colors group-hover:text-lime-deep">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-ink/60">{e.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink/45 transition-colors group-hover:text-ink">
                    Learn more <ArrowRight size={15} className="nudge" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-12 flex justify-center">
            <Link href="/contact" className="btn-brand">
              Book a CPA consultation <ArrowRight size={18} className="nudge" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Checklist */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8">
          <div>
            <Reveal as="div"><span className="section-label text-lime">Get prepared</span></Reveal>
            <Reveal as="h2" delay={80} className="mt-4 text-4xl font-medium leading-[1.08] tracking-[-.02em] sm:text-5xl">
              Documents to bring to your first meeting
            </Reveal>
            <Reveal as="p" delay={160} className="mt-5 text-base leading-8 text-white/60">
              Gathering these upfront lets your CPA model scenarios in the first session instead of the third.
            </Reveal>
          </div>
          <Reveal delay={120} className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {[
              "Last two years' tax returns",
              "W-2s and 1099 forms",
              "Payroll and expense records",
              "Mortgage and interest statements",
              "Retirement and investment statements",
              "Entity formation documents",
              "Year-to-date profit & loss",
              "Notices from the IRS or state",
            ].map((doc) => (
              <span key={doc} className="flex items-start gap-3 border-b border-white/10 pb-4 text-[15px] text-white/75">
                <Check size={17} className="mt-0.5 shrink-0 text-lime" strokeWidth={3} />
                {doc}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Meet your CPA before you commit"
        text="The first consultation is free — bring your questions and leave with a plan."
      />
    </main>
  )
}
