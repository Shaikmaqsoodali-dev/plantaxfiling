import Link from "next/link"
import { services, navItems, contact } from "@/lib/data"
import Reveal from "@/components/reveal"

const socials: { label: string; path: string }[] = [
  { label: "Facebook", path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.6v8h3.6z" },
  { label: "Instagram", path: "" },
  { label: "X", path: "M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L5 21H1.9l7.3-8.4L1.5 3h6.4l4.4 5.9L17.5 3zm-1.1 16.2h1.7L6.8 4.7H5l11.4 14.5z" },
  { label: "LinkedIn", path: "M6.5 9.5H4V20h2.5V9.5zM5.25 4A1.5 1.5 0 105.25 7a1.5 1.5 0 000-3zM20 13.7c0-2.7-1.4-4-3.4-4-1.6 0-2.3.9-2.7 1.5V9.5H11.5V20H14v-5.2c0-1.1.6-1.9 1.7-1.9s1.6.8 1.6 1.9V20H20v-6.3z" },
]

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="h-3 w-full bg-linear-to-r from-lime to-mint" />

      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.2fr] lg:px-8">
        <Reveal>
          <Link href="/" className="flex items-center gap-2.5" aria-label="Plantaxfiling home">
            <span className="flex size-10 items-center justify-center bg-lime">
              <svg viewBox="0 0 24 24" className="size-5 text-ink" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12.5 9.5 18 20 6.5" />
              </svg>
            </span>
            <span className="text-[19px] font-bold tracking-[-.02em] text-white">
              Plantax<span className="text-mint">filing</span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-white/60">
            Plantaxfiling is a U.S. based tax consultancy specializing in tax filing, audits, payroll, and tax planning
            services for individuals and businesses. With a focus on simplifying tax compliance and maximizing savings,
            we serve clients through experienced advisors and secure client support.
          </p>
          <div className="mt-7 flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex size-9 items-center justify-center border border-white/25 text-white transition-all duration-300 hover:border-lime hover:bg-lime hover:text-ink"
              >
                {s.label === "Instagram" ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                    <circle cx="12" cy="12" r="3.8" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h3 className="text-sm font-semibold uppercase tracking-[.16em] text-mint">Quick Links</h3>
          <ul className="mt-6 space-y-3.5 text-[15px] text-white/60">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="sweep transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <h3 className="text-sm font-semibold uppercase tracking-[.16em] text-mint">Services</h3>
          <ul className="mt-6 space-y-3.5 text-[15px] text-white/60">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className="sweep transition-colors hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <h3 className="text-sm font-semibold uppercase tracking-[.16em] text-mint">Contact</h3>
          <ul className="mt-6 space-y-3.5 text-[15px] text-white/60">
            <li>{contact.phone}</li>
            <li>
              <a href={`mailto:${contact.email}`} className="sweep transition-colors hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="leading-7">{contact.address}</li>
            <li>{contact.hours}</li>
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-white/45 sm:flex-row lg:px-8">
          <span>© 2026 Plantaxfiling. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/contact" className="transition-colors hover:text-mint">Privacy Policy</Link>
            <Link href="/contact" className="transition-colors hover:text-mint">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
