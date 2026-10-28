"use client"

import Link from "next/link"
import { ArrowRight, Check, Star } from "lucide-react"
import Reveal from "@/components/reveal"
import Counter from "@/components/counter"
import Marquee from "@/components/marquee"
import CtaBand from "@/components/cta-band"
import FaqAccordion from "@/components/faq-accordion"
import { services, steps, faqs, stats, testimonials } from "@/lib/data"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      {/* ---------- Hero ---------- */}
      <section id="top" className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -left-32 top-10 size-[420px] rounded-full bg-lime/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/3 size-[360px] rounded-full bg-lime/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <Reveal as="div" delay={0}>
              <span className="inline-flex items-center gap-2.5 border border-ink/15 bg-white px-4 py-2 text-[13px] font-medium text-ink/70">
                <span className="flex size-5 items-center justify-center rounded-full bg-lime text-ink">
                  <Check size={12} strokeWidth={3} />
                </span>
                Trusted by 12,000+ taxpayers
              </span>
            </Reveal>

            <Reveal as="h1" delay={80} className="mt-7 text-[clamp(2.6rem,5.5vw,4.75rem)] font-medium leading-[1.04] tracking-[-.03em] text-ink">
              <span className="line-mask"><span>Your Trusted Partner in</span></span>
              <span className="line-mask" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
                <span>
                  Tax <em className="font-display italic text-lime-deep">Solutions</em>
                </span>
              </span>
            </Reveal>

            <Reveal as="p" delay={240} className="mt-7 max-w-lg text-lg leading-8 text-ink/65">
              Simplifying taxes for individuals and businesses across the USA — filing, audits, payroll and planning,
              handled by advisors with 30+ years of experience.
            </Reveal>

            <Reveal delay={320} className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-dark">
                Start the process! <ArrowRight size={18} className="nudge" />
              </Link>
              <Link href="/services" className="btn-outline-dark">
                Explore services
              </Link>
            </Reveal>

            <Reveal delay={400} className="mt-12 flex flex-wrap items-center gap-x-9 gap-y-4 border-t border-ink/10 pt-7">
              {["Proven Results", "Expert Trust", "Ongoing Support"].map((item) => (
                <span key={item} className="flex items-center gap-2.5 text-sm text-ink/70">
                  <span className="flex size-5 items-center justify-center rounded-full border border-lime">
                    <Check className="size-3 text-lime-deep" strokeWidth={3} />
                  </span>
                  {item}
                </span>
              ))}
            </Reveal>
          </div>

          <div className="relative">
            <div className="zoom-card relative aspect-[4/5] max-h-[560px] w-full overflow-hidden bg-paper">
              <img src="/img/hero-person.jpg" alt="Tax professional working on a laptop" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/25 to-transparent" />
            </div>

            <div className="animate-float absolute -left-3 top-8 hidden items-center gap-3 border border-ink/10 bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(0,0,0,.3)] sm:flex">
              <span className="flex size-9 items-center justify-center rounded-full bg-lime text-xs font-bold text-ink">KS</span>
              <span className="text-sm font-medium text-ink">Karina Stone</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-ink">
                <Check className="size-3 text-lime" strokeWidth={3} />
              </span>
            </div>

            <div className="animate-float absolute -bottom-6 right-2 flex flex-col gap-1 bg-ink px-6 py-5 shadow-[0_18px_40px_-18px_rgba(0,0,0,.4)]" style={{ animationDelay: "1.4s" }}>
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-lime text-lime" />
                ))}
              </span>
              <span className="text-lg font-medium text-white">4.9/5 client rating</span>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="border-y border-ink/10 bg-ink py-4 text-white">
          <Marquee
            items={["Individual Tax Filing", "Audit Representation", "Amendment Filing", "Corporate Tax", "Payroll Services", "Tax Planning"]}
            duration={38}
          />
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="overflow-hidden bg-paper py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal variant="left" className="relative">
            <div className="zoom-card relative h-[340px] w-full overflow-hidden lg:h-[420px]">
              <img src="/img/about-1.jpg" alt="Tax advisory team in a meeting" className="h-full w-full object-cover" />
            </div>
            <div className="zoom-card absolute -bottom-10 right-0 hidden h-[220px] w-[62%] overflow-hidden border-[10px] border-paper lg:block">
              <img src="/img/about-2.jpg" alt="Advisors reviewing documents with a client" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -left-4 -top-4 hidden size-20 border-2 border-lime lg:block" />
          </Reveal>

          <div>
            <Reveal as="div"><span className="section-label">Why choose us</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">
              Building trust through results and integrity
            </Reveal>
            <Reveal as="p" delay={160} className="mt-6 text-base leading-8 text-ink/65">
              At Plantaxfiling, we are a passionate team of accounting professionals dedicated to providing comprehensive
              and reliable tax consulting and accounting services. With a diverse group of experts located around the
              globe, we bring together a wealth of knowledge and experience to help our clients navigate the
              complexities of tax regulations and financial management.
            </Reveal>
            <Reveal as="p" delay={220} className="mt-4 text-base leading-8 text-ink/65">
              Our tax advisors provide consultations and handle legal matters through phone, email, and our secure
              client portal, ensuring convenient and confidential service.
            </Reveal>
            <Reveal delay={280} className="mt-9">
              <Link href="/about" className="btn-brand">
                More about us <ArrowRight size={18} className="nudge" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-10 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="text-center lg:text-left">
              <p className="text-5xl font-medium tracking-tight text-lime sm:text-6xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[.14em] text-white/50">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section id="services" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[600px] text-center">
            <Reveal as="div"><span className="section-label justify-center">Personalized tax help</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">
              Tax services tailored for you
            </Reveal>
            <Reveal as="p" delay={160} className="mt-5 text-base leading-8 text-ink/65">
              Whether you&apos;re optimizing your tax liabilities or ensuring compliance, our expert advisors are your
              trusted partners in financial success.
            </Reveal>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full min-h-[300px] flex-col border-b border-r border-ink/10 p-8 transition-colors duration-500 hover:bg-paper"
                >
                  <div className="flex items-center justify-between border-b border-ink pb-3 text-sm font-medium">
                    <span>{service.number}</span>
                    <ArrowRight size={16} className="nudge text-ink/30 group-hover:text-lime-deep" />
                  </div>
                  <h3 className="mt-8 text-xl font-medium leading-snug text-ink">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-ink/60">{service.short}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-ink/50 transition-colors group-hover:text-lime-deep">
                    Learn more <ArrowRight size={15} className="nudge" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={180} className="border-b border-ink/10">
              <Link
                href="/services"
                className="group flex h-full min-h-[300px] flex-col justify-between bg-lime p-8 transition-colors duration-500 hover:bg-ink hover:text-white"
              >
                <span className="text-sm font-medium uppercase tracking-[.16em]">All services</span>
                <span className="text-3xl font-medium leading-tight">
                  See the full
                  <br />
                  service list
                  <ArrowRight size={30} className="mt-4 nudge" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section id="process" className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[600px] text-center">
            <Reveal as="div"><span className="section-label justify-center">How we work</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">
              Simplified tax solutions in 4 steps
            </Reveal>
            <Reveal as="p" delay={160} className="mt-5 text-base leading-8 text-ink/65">
              Taxes are complicated. But here, we&apos;re on a mission to make them simpler for people who aren&apos;t
              tax professionals.
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 110} className="group relative border-t-2 border-ink/15 pt-6">
                <span className="absolute -top-[2px] left-0 h-0.5 w-0 bg-lime transition-all duration-700 group-hover:w-full" />
                <span className="text-sm font-medium text-lime-deep">{step.number}</span>
                <h3 className="mt-6 text-lg font-medium leading-snug text-ink">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-ink/60">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Results ---------- */}
      <section id="results" className="grid lg:grid-cols-[55%_45%]">
        <div className="flex flex-col justify-center bg-ink px-5 py-16 text-white lg:px-16 lg:py-24 xl:pl-[max(2rem,calc((100vw-1240px)/2+2rem))]">
          <Reveal as="div">
            <span className="section-label text-lime">Proven results</span>
            <h2 className="mt-4 max-w-md text-4xl font-medium leading-[1.08] tracking-[-.02em] sm:text-5xl">
              Expertise You Can Trust
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Plantaxfiling prides itself on having a team of experienced professionals who prepare and review tax
              returns with meticulous attention to detail. Our expertise spans across various tax regulations, ensuring
              compliance while maximizing your tax benefits. Whether you&apos;re an individual looking to file your
              taxes or a business seeking comprehensive tax planning strategies, we are here to assist you every step of
              the way.
            </p>
            <div className="mt-9">
              <Link href="/contact" className="btn-white">Free consultation</Link>
            </div>
          </Reveal>
        </div>
        <div className="zoom-card min-h-[380px] overflow-hidden">
          <img src="/img/results.jpg" alt="Accountant calculating figures at a desk" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal as="div"><span className="section-label">Client stories</span></Reveal>
              <Reveal as="h2" delay={80} className="section-title max-w-lg">What our clients say</Reveal>
            </div>
            <Reveal delay={160}>
              <Link href="/contact" className="btn-outline-dark">Become a client</Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 110}>
                <div className="group flex h-full flex-col border border-ink/10 bg-paper p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/30 hover:shadow-[0_28px_60px_-30px_rgba(0,0,0,.35)]">
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} className="fill-lime text-lime" />
                    ))}
                  </span>
                  <p className="mt-5 flex-1 text-[15px] leading-7 text-ink/70">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
                    <span className="flex size-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-lime">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-ink">{t.name}</span>
                      <span className="block text-xs text-ink/50">{t.role}</span>
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[640px] text-center">
            <Reveal as="div"><span className="section-label justify-center">Your questions answered</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">Answers to your common questions</Reveal>
          </div>
          <Reveal delay={140} className="mx-auto mt-12 max-w-[820px]">
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
