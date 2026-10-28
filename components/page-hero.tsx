import Reveal from "@/components/reveal"

type PageHeroProps = {
  label: string
  title: string
  description?: string
}

/** Hero used on every interior page. */
export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-lime/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 size-64 rounded-full bg-lime/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-5 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
        <Reveal as="div">
          <span className="section-label">{label}</span>
        </Reveal>
        <Reveal as="h1" delay={90} className="mt-5 max-w-4xl text-5xl font-medium leading-[1.05] tracking-[-.025em] text-ink sm:text-6xl lg:text-7xl">
          <span className="line-mask"><span>{title}</span></span>
        </Reveal>
        {description && (
          <Reveal as="p" delay={180} className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
            {description}
          </Reveal>
        )}
      </div>

      <div className="h-1.5 w-full bg-linear-to-r from-lime to-mint" />
    </section>
  )
}
