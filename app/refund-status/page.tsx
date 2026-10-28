"use client"

import { useState } from "react"
import { Search, Check, Clock, FileText, Banknote } from "lucide-react"
import PageHero from "@/components/page-hero"
import Reveal from "@/components/reveal"
import FaqAccordion from "@/components/faq-accordion"
import CtaBand from "@/components/cta-band"

const stages = [
  { icon: FileText, title: "Return received", text: "We have received and reviewed your return documents." },
  { icon: Check, title: "E-filed with IRS", text: "Your return was transmitted and accepted by the IRS." },
  { icon: Clock, title: "IRS processing", text: "The IRS is verifying your information — typically 21 days." },
  { icon: Banknote, title: "Refund issued", text: "Your refund was released via direct deposit or check." },
]

const refundFaqs: [string, string][] = [
  ["How long does a tax refund take?", "Most refunds are issued within 21 days of e-filing. Returns claiming certain credits, or filed on paper, can take longer — sometimes up to 6 weeks."],
  ["Where is my refund?", "Track it with the reference number from your Plantaxfiling confirmation email above, or check the IRS 'Where's My Refund' tool 24 hours after e-filing."],
  ["Why is my refund smaller than expected?", "The IRS may have applied all or part of your refund to outstanding tax, penalties or other federal debts. We can review your notice and explain the adjustment."],
  ["Can I change my bank account after filing?", "Not after the return has been accepted. If your direct deposit is rejected, the IRS will mail a check to the address on your return — usually within 4–6 weeks."],
  ["What if I never received my refund?", "Contact us and we will check the status with the IRS on your behalf. There is a specific procedure for refunds lost in the mail."],
]

export default function RefundStatusPage() {
  const [reference, setReference] = useState("")
  const [status, setStatus] = useState<"idle" | "error" | "found">("idle")
  const [submittedRef, setSubmittedRef] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (reference.trim().length < 4) {
      setStatus("error")
      return
    }
    setSubmittedRef(reference.trim().toUpperCase())
    setStatus("found")
  }

  return (
    <main className="min-h-screen bg-white text-ink">
      <PageHero
        label="Refund status"
        title="Track your refund, step by step"
        description="Enter the reference number from your filing confirmation to see exactly where your refund stands."
      />

      {/* Tracker */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <Reveal className="mx-auto max-w-[720px]">
            <form onSubmit={handleSubmit} className="border border-ink/15 bg-paper p-7 sm:p-9">
              <label htmlFor="reference" className="block text-sm font-medium uppercase tracking-[.14em] text-ink/60">
                Filing reference number
              </label>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  id="reference"
                  type="text"
                  value={reference}
                  onChange={(e) => {
                    setReference(e.target.value)
                    if (status === "error") setStatus("idle")
                  }}
                  placeholder="e.g. PTF-84920"
                  className={`h-14 flex-1 border bg-white px-4 text-base text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-lime ${
                    status === "error" ? "border-red-500" : "border-ink/20"
                  }`}
                />
                <button type="submit" className="btn-dark h-14 shrink-0">
                  <Search size={17} /> Track refund
                </button>
              </div>
              <p className={`mt-3 text-sm ${status === "error" ? "text-red-600" : "text-ink/50"}`}>
                {status === "error"
                  ? "Please enter a valid reference number (at least 4 characters)."
                  : "You will find this number in your confirmation email."}
              </p>
            </form>
          </Reveal>

          {/* Result */}
          {status === "found" && (
            <Reveal className="mx-auto mt-10 max-w-[720px]">
              <div className="border border-ink/15 bg-white p-7 shadow-[0_28px_60px_-40px_rgba(0,0,0,.4)] sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-5">
                  <span className="text-sm text-ink/50">Reference {submittedRef}</span>
                  <span className="inline-flex items-center gap-2 bg-lime px-3 py-1.5 text-sm font-medium text-ink">
                    <span className="size-2 animate-pulse rounded-full bg-ink" /> Processing
                  </span>
                </div>

                <ol className="mt-7 space-y-0">
                  {stages.map((stage, i) => {
                    const done = i < 2
                    const current = i === 2
                    return (
                      <li key={stage.title} className="relative flex gap-5 pb-8 last:pb-0">
                        {i < stages.length - 1 && (
                          <span className={`absolute left-[21px] top-11 h-[calc(100%-2.75rem)] w-0.5 ${done ? "bg-lime" : "bg-ink/10"}`} />
                        )}
                        <span
                          className={`relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            done
                              ? "border-lime bg-lime text-ink"
                              : current
                                ? "border-lime bg-white text-lime-deep"
                                : "border-ink/15 bg-white text-ink/35"
                          } ${current ? "animate-pulse" : ""}`}
                        >
                          <stage.icon size={18} />
                        </span>
                        <div className="pt-1.5">
                          <p className={`text-[15px] font-medium ${done || current ? "text-ink" : "text-ink/40"}`}>{stage.title}</p>
                          <p className="mt-1 text-sm leading-6 text-ink/55">{stage.text}</p>
                          {current && (
                            <p className="mt-2 inline-block bg-lime/30 px-2 py-0.5 text-xs font-medium text-ink">
                              Estimated: within 10 business days
                            </p>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="scroll-mt-32 bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[600px] text-center">
            <Reveal as="div"><span className="section-label justify-center">Processing times</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">What to expect, and when</Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { t: "21 days", l: "E-filed with direct deposit", d: "The fastest route — most refunds land within three weeks of acceptance." },
              { t: "4–6 weeks", l: "Paper return or mailed check", d: "Paper filings and paper checks take longer to move through the IRS." },
              { t: "Up to 6 weeks", l: "Errors, audits or offsets", d: "If the IRS needs to verify income or you owe federal debt, add extra time." },
            ].map((item, i) => (
              <Reveal key={item.l} delay={i * 100}>
                <div className="h-full border border-ink/10 bg-white p-8">
                  <p className="text-4xl font-medium tracking-tight text-lime-deep">{item.t}</p>
                  <p className="mt-4 text-[15px] font-medium text-ink">{item.l}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-32 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[640px] text-center">
            <Reveal as="div"><span className="section-label justify-center">Refund FAQ</span></Reveal>
            <Reveal as="h2" delay={80} className="section-title">Common refund questions</Reveal>
          </div>
          <Reveal delay={140} className="mx-auto mt-12 max-w-[820px]">
            <FaqAccordion items={refundFaqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Questions about your refund?"
        text="Our advisors can check your status with the IRS and explain any notice you have received."
      />
    </main>
  )
}
