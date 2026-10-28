type MarqueeProps = {
  items: string[]
  /** seconds for one full loop */
  duration?: number
  className?: string
}

/** Infinite horizontal ticker. Duplicate content guarantees a seamless loop. */
export default function Marquee({ items, duration = 34, className = "" }: MarqueeProps) {
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden={false}>
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-6 text-sm font-medium uppercase tracking-[.2em]">{item}</span>
          <svg viewBox="0 0 24 24" className="size-3.5 shrink-0 text-mint" fill="currentColor" aria-hidden="true">
            <path d="M12 2l2.9 7.1L22 12l-7.1 2.9L12 22l-2.9-7.1L2 12l7.1-2.9z" />
          </svg>
        </span>
      ))}
    </div>
  )

  return (
    <div className={`marquee-pause overflow-hidden ${className}`} style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}>
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  )
}
