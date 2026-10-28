"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Eye, EyeOff } from "lucide-react"

const perks = [
  "Free initial consultation",
  "Secure document portal",
  "Dedicated tax advisor",
  "Year-round filing support",
]

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  const field =
    "h-13 w-full border border-ink/20 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-all duration-300 placeholder:text-ink/35 focus:border-lime focus:shadow-[0_0_0_4px_rgba(8,126,252,.18)]"

  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto grid min-h-[calc(100dvh-88px)] max-w-[1240px] items-stretch gap-0 px-5 py-12 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        {/* Form side */}
        <div className="flex flex-col justify-center">
          <div className="animate-fade-up w-full max-w-[460px]">
            <span className="section-label">Create account</span>
            <h1 className="mt-4 text-4xl font-medium leading-[1.08] tracking-[-.02em] text-ink sm:text-5xl">
              Start filing smarter
            </h1>
            <p className="mt-4 text-base leading-7 text-ink/60">
              Set up your secure account in under two minutes. No card required.
            </p>

            {submitted ? (
              <div className="mt-8 border border-lime bg-white p-7">
                <span className="flex size-12 items-center justify-center rounded-full bg-lime text-ink">
                  <Check size={22} strokeWidth={3} />
                </span>
                <h2 className="mt-5 text-xl font-medium text-ink">Check your inbox</h2>
                <p className="mt-2 text-[15px] leading-7 text-ink/60">
                  We sent a confirmation link to <span className="font-medium text-ink">{form.email}</span>. Click it to
                  activate your account.
                </p>
                <Link href="/login" className="btn-dark mt-6">
                  Continue to login <ArrowRight size={18} />
                </Link>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="mt-8 space-y-5"
              >
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink/70">Full name</span>
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
                  <span className="mb-2 block text-sm font-medium text-ink/70">Email address</span>
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
                  <span className="mb-2 block text-sm font-medium text-ink/70">Password</span>
                  <span className="relative block">
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      minLength={8}
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="At least 8 characters"
                      className={`${field} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-ink/40 transition-colors hover:text-ink"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink/60">
                  <input type="checkbox" required className="mt-0.5 size-4 shrink-0 accent-[#7bc400]" />
                  <span>
                    I agree to the <Link href="/contact" className="text-ink underline decoration-lime underline-offset-4">Terms of Service</Link> and{" "}
                    <Link href="/contact" className="text-ink underline decoration-lime underline-offset-4">Privacy Policy</Link>.
                  </span>
                </label>

                <button type="submit" className="btn-dark w-full">
                  Create account <ArrowRight size={18} className="nudge" />
                </button>
              </form>
            )}

            {!submitted && (
              <p className="mt-7 text-center text-[15px] text-ink/55">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-ink underline decoration-lime decoration-2 underline-offset-4">
                  Log in
                </Link>
              </p>
            )}
          </div>
        </div>

        {/* Brand side */}
        <div className="relative mt-10 hidden overflow-hidden bg-ink lg:mt-0 lg:flex lg:flex-col lg:justify-between lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-lime/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-lime/15 blur-3xl" />

          <div className="relative">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center bg-lime">
                <svg viewBox="0 0 24 24" className="size-5 text-ink" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12.5 9.5 18 20 6.5" />
                </svg>
              </span>
              <span className="text-[19px] font-bold tracking-[-.02em] text-white">
                Plantax<span className="text-lime">filing</span>
              </span>
            </Link>

            <h2 className="mt-14 text-3xl font-medium leading-snug tracking-tight text-white sm:text-4xl">
              Join 12,000+ taxpayers who filed with confidence this year.
            </h2>
          </div>

          <ul className="relative mt-10 space-y-4">
            {perks.map((perk, i) => (
              <li key={perk} className="animate-fade-up flex items-center gap-4 text-[15px] text-white/75" style={{ animationDelay: `${200 + i * 90}ms` }}>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                  <Check size={14} strokeWidth={3} />
                </span>
                {perk}
              </li>
            ))}
          </ul>

          <div className="relative mt-12 border-t border-white/15 pt-6 text-sm text-white/45">
            Rated 4.9/5 across 2,400+ verified reviews
          </div>
        </div>
      </div>
    </main>
  )
}
