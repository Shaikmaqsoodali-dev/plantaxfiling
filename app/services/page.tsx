import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import PageHero from "@/components/page-hero"
import Reveal from "@/components/reveal"
import CtaBand from "@/components/cta-band"
import { services, steps } from "@/lib/data"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <PageHero
        label="Services"
        title="Everything your taxes need, in one place"
        description="From individual returns to corporate filings and payroll — pick a service below or talk to us for a tailored plan."
      />

      {/* Detailed service blocks */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] space-y-20 px-5 lg:space-y-28 lg:px-8">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid items-center gap-10 scroll-mt-32 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal variant={i % 2 === 0 ? "left" : "right"} className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <div className="zoom-card relative aspect-[4/3] w-full overflow-hidden bg-paper">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  <span className="absolute left-0 top-0 bg-lime px-5 py-3 text-lg font-medium text-ink">
                    {service.number}
                  </span>
                </div>
              </Reveal>

              <Reveal
                delay={100}
                className={i % 2 === 0 ? "lg:order-2" : "lg:order-1"}
              >
                <span className="section-label">Service {service.number}</span>
                <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-.02em] text-ink sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-ink/65">{service.description}</p>

                <ul className="mt-7 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] text-ink/75">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-lime">
                        <Check size={12} strokeWidth={3} className="text-ink" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-dark">
                    Get a quote <ArrowRight size={18} className="nudge" />
                  </Link>
                  <Link href="/signup" className="btn-outline-dark">
                    Start online
                  </Link>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[600px] text-center">
            <Reveal as="div"><span className="section-label justify-center">How we work</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">Simplified tax solutions in 4 steps</Reveal>
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

      <CtaBand
        title="Not sure which service you need?"
        text="Tell us about your situation in a free 15-minute call — we will point you in the right direction."
      />
    </main>
  )
}
