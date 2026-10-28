import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/reveal"

type CtaBandProps = {
  title?: string
  text?: string
}

/** Closing call-to-action band shared by all pages. */
export default function CtaBand({ title = "Take the next step toward financial clarity", text = "Book a free consultation and get a clear, personalized plan from a team that has filed for 30+ years." }: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute -right-16 -top-20 size-80 rounded-full bg-mint/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-10 px-5 py-20 lg:flex-row lg:items-center lg:px-8 lg:py-24">
        <Reveal as="div">
          <span className="section-label text-mint">Get started</span>
          <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-.02em] text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/60">{text}</p>
        </Reveal>

        <Reveal delay={120} className="flex shrink-0 flex-wrap gap-3">
          <Link href="/contact" className="btn-brand">
            Free consultation <ArrowRight size={18} />
          </Link>
          <Link href="/signup" className="btn-outline">
            Create account
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
