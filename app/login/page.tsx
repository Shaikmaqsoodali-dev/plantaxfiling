"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ email: "", password: "" })

  const field =
    "h-13 w-full border border-ink/20 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-all duration-300 placeholder:text-ink/35 focus:border-lime focus:shadow-[0_0_0_4px_rgba(8,126,252,.18)]"

  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto flex min-h-[calc(100dvh-88px)] max-w-[1240px] items-center justify-center px-5 py-12 lg:px-8 lg:py-20">
        <div className="grid w-full max-w-[980px] overflow-hidden border border-ink/10 bg-white shadow-[0_40px_90px_-60px_rgba(0,0,0,.5)] lg:grid-cols-[1fr_.9fr]">
          {/* Form side */}
          <div className="p-8 sm:p-12">
            <div className="animate-fade-up">
              <span className="section-label">Welcome back</span>
              <h1 className="mt-4 text-4xl font-medium leading-[1.08] tracking-[-.02em] text-ink">Log in</h1>
              <p className="mt-3 text-base leading-7 text-ink/60">Access your documents, filings and advisor messages.</p>

              {submitted ? (
                <div className="mt-8 border border-lime bg-lime/10 p-6">
                  <h2 className="text-lg font-medium text-ink">Signed in</h2>
                  <p className="mt-2 text-[15px] leading-7 text-ink/65">
                    This is a design demo — no real session was created. Explore the other pages to see the full flow.
                  </p>
                  <Link href="/" className="btn-dark mt-5">
                    Back to home <ArrowRight size={18} />
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
                    <span className="mb-2 flex items-center justify-between text-sm font-medium text-ink/70">
                      Password
                      <Link href="/contact" className="text-ink/50 transition-colors hover:text-lime-deep">
                        Forgot password?
                      </Link>
                    </span>
                    <span className="relative block">
                      <input
                        required
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        placeholder="••••••••"
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

                  <label className="flex cursor-pointer items-center gap-3 text-sm text-ink/60">
                    <input type="checkbox" defaultChecked className="size-4 shrink-0 accent-[#7bc400]" />
                    Remember me on this device
                  </label>

                  <button type="submit" className="btn-dark w-full">
                    Log in <ArrowRight size={18} className="nudge" />
                  </button>
                </form>
              )}

              <p className="mt-7 text-center text-[15px] text-ink/55">
                New to Plantaxfiling?{" "}
                <Link href="/signup" className="font-medium text-ink underline decoration-lime decoration-2 underline-offset-4">
                  Create an account
                </Link>
              </p>
            </div>
          </div>

          {/* Brand side */}
          <div className="relative hidden overflow-hidden bg-ink p-12 lg:flex lg:flex-col lg:justify-between">
            <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-lime/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-12 size-56 rounded-full bg-lime/15 blur-3xl" />

            <Link href="/" className="relative flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center bg-lime">
                <svg viewBox="0 0 24 24" className="size-5 text-ink" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12.5 9.5 18 20 6.5" />
                </svg>
              </span>
              <span className="text-[19px] font-bold tracking-[-.02em] text-white">
                Plantax<span className="text-lime">filing</span>
              </span>
            </Link>

            <div className="relative">
              <p className="font-display text-2xl leading-snug text-white/90">
                &ldquo;The portal made filing painless — I uploaded documents once and my advisor handled the rest.&rdquo;
              </p>
              <p className="mt-5 text-sm text-white/50">Marcus Lee — freelance developer</p>
            </div>

            <div className="relative border-t border-white/15 pt-6 text-sm text-white/45">
              SOC 2 compliant · 256-bit encryption
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
