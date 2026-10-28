"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { navItems } from "@/lib/data"

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpen(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,.18)]" : ""}`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between gap-8 px-5 lg:px-8">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label="Plantaxfiling home">
            <img src="/logo-icon.png" alt="" width={40} height={40} className="size-10 object-contain" />
            <span className="text-[19px] font-bold tracking-[-.02em] text-ink">
              Plantax<span className="text-lime-deep">filing</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.children ? item.label : null)}
                onMouseLeave={() => setOpen((prev) => (prev === item.label ? null : prev))}
              >
                {item.children ? (
                  <button
                    type="button"
                    aria-expanded={open === item.label}
                    onClick={() => setOpen(open === item.label ? null : item.label)}
                    className={`sweep flex items-center gap-1 py-2 text-[15px] font-medium transition-colors ${
                      isActive(item.href) ? "text-ink" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${open === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`sweep block py-2 text-[15px] font-medium transition-colors ${
                      isActive(item.href) ? "text-ink" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && (
                  <div
                    className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 transition-all duration-300 ${
                      open === item.label ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden border border-ink/10 bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,.25)]">
                      {item.children.map((child, i) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          style={{ transitionDelay: `${i * 30}ms` }}
                          className="block border-b border-ink/5 px-5 py-3.5 text-sm text-ink/70 transition-all duration-200 last:border-0 hover:bg-lime/15 hover:text-ink hover:pl-7"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Link href="/signup" className="btn-dark btn-sm">Signup</Link>
            <Link href="/login" className="btn-dark btn-sm">Login</Link>
          </div>

          <button
            type="button"
            className="flex size-11 items-center justify-center border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-ink/10 bg-white lg:hidden">
            <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
              {navItems.map((item, i) => (
                <div key={item.label} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <Link
                    href={item.href}
                    className={`block border-b border-ink/5 py-3.5 text-base font-medium ${
                      isActive(item.href) ? "text-lime-deep" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mb-2 ml-3 border-l-2 border-lime/40 pl-4">
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="block py-2 text-sm text-ink/65">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link href="/signup" className="btn-dark btn-sm">Signup</Link>
                <Link href="/login" className="btn-dark btn-sm">Login</Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Signature accent bar from the reference design */}
      <div className="h-3 w-full bg-linear-to-r from-lime to-mint" />
    </header>
  )
}
