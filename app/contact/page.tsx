"use client"

import { useState } from "react"
import { Mail, MapPin, Clock, Phone, Check, ArrowRight } from "lucide-react"
import PageHero from "@/components/page-hero"
import Reveal from "@/components/reveal"
import CtaBand from "@/components/cta-band"
import { contact } from "@/lib/data"

const services = ["Individual Tax Filing", "Tax Audit Representation", "Amendment Filing", "Corporate Tax", "Payroll Service", "Something else"]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: services[0], message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const field =
    "h-13 w-full border border-ink/20 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-all duration-300 placeholder:text-ink/35 focus:border-lime focus:shadow-[0_0_0_4px_rgba(8,126,252,.18)]"

  return (
    <main className="min-h-screen bg-white text-ink">
      <PageHero
        label="Contact us"
        title="Let&apos;s talk about your taxes"
        description="Send us a message and an advisor will get back to you within one business day — or call us directly during office hours."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-8">
          {/* Form */}
          <Reveal>
            {submitted ? (
              <div className="flex h-full flex-col items-start justify-center border border-lime bg-lime/10 p-10">
                <span className="flex size-14 items-center justify-center rounded-full bg-lime text-ink">
                  <Check size={26} strokeWidth={3} />
                </span>
                <h2 className="mt-6 text-3xl font-medium tracking-tight text-ink">Message sent</h2>
                <p className="mt-3 max-w-md text-base leading-7 text-ink/65">
                  Thanks {form.name.split(" ")[0] || "there"} — an advisor will reply to {form.email || "your email"} within one
                  business day. For anything urgent, call {contact.phone}.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn-outline-dark mt-8">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-ink/15 bg-paper p-7 sm:p-10">
                <h2 className="text-2xl font-medium tracking-tight text-ink">Send us a message</h2>
                <p className="mt-2 text-sm text-ink/55">All fields marked with * are required.</p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-ink/70">Full name *</span>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={field}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-ink/70">Email *</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={field}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-ink/70">Phone</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className={field}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-ink/70">Service</span>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${field} cursor-pointer appearance-none`}
                    >
                      {services.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-ink/70">How can we help? *</span>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us a little about your situation…"
                      className={`${field} resize-none`}
                    />
                  </label>
                </div>

                <button type="submit" className="btn-dark mt-7">
                  Send message <ArrowRight size={18} className="nudge" />
                </button>
              </form>
            )}
          </Reveal>

          {/* Info cards */}
          <div className="space-y-5">
            {[
              { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, "")}` },
              { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
              { icon: MapPin, label: "Office", value: contact.address },
              { icon: Clock, label: "Hours", value: contact.hours },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 90} variant="right">
                <div className="group flex items-start gap-5 border border-ink/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_50px_-32px_rgba(0,0,0,.4)]">
                  <span className="flex size-12 shrink-0 items-center justify-center bg-ink text-lime transition-colors duration-500 group-hover:bg-lime group-hover:text-ink">
                    <item.icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[.16em] text-ink/45">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1.5 block text-[15px] font-medium leading-6 text-ink transition-colors hover:text-lime-deep">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-[15px] font-medium leading-6 text-ink">{item.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={360} variant="right">
              <div className="border border-ink/15 bg-ink p-6 text-white">
                <p className="text-sm font-medium uppercase tracking-[.16em] text-lime">Secure portal</p>
                <p className="mt-3 text-[15px] leading-7 text-white/65">
                  Prefer to share documents securely? Upload returns, W-2s and ID through the encrypted client portal.
                </p>
                <a href="#" className="btn-brand mt-5 w-full">
                  Open client portal
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to start online?"
        text="Create an account and upload your documents on your own schedule — we review everything before you file."
      />
    </main>
  )
}
