"use client"

import { useState } from "react"
import { ArrowRight, Check, ChevronDown, Menu, X } from "lucide-react"

const services = [
  { number: "01", title: "US Individual Tax Filing", description: "Comprehensive tax filing services to ensure compliance and maximize deductions for individuals in the USA." },
  { number: "02", title: "Tax Audit Representation", description: "Expert representation to navigate tax audits and protect your financial interests with confidence." },
  { number: "03", title: "Amendment Filing", description: "Correct previous tax returns and optimize your financial situation with accurate amendment filings." },
  { number: "04", title: "Corporate Tax", description: "Tailored corporate tax solutions designed to optimize your company's tax liabilities and ensure compliance." },
  { number: "05", title: "Payroll Service", description: "Efficient and accurate payroll management to keep your business compliant and employees satisfied." },
]

const steps = [
  { number: "01", title: "Initial Consultation & Financial Analysis", description: "We begin by thoroughly assessing your financial landscape to understand your unique tax needs." },
  { number: "02", title: "Custom Tax Strategy & Planning", description: "We craft a personalized tax plan designed to minimize liabilities and achieve your financial objectives." },
  { number: "03", title: "Accurate Filing & Compliance", description: "Our experts ensure timely and accurate tax filings for maximum benefits and compliance." },
  { number: "04", title: "Ongoing Consultation & Optimization", description: "We provide continuous support, with regular reviews to keep your tax strategy optimized year-round." },
]

const faqs = [
  ["What services does Plantaxfiling provide?", "Plantaxfiling offers U.S. tax filing, tax audit assistance, amendments, payroll services, and personalized tax planning for individuals and businesses."],
  ["Who can benefit from Plantaxfiling's services?", "Plantaxfiling is ideal for individuals, small businesses, freelancers, and anyone needing tax support in the U.S."],
  ["How do I schedule a consultation?", "You can book a consultation via our website, where we offer a free initial consultation."],
  ["Is there a secure way to submit documents?", "Yes, Plantaxfiling provides a secure client portal for document submissions and communications."],
  ["How experienced is the team?", "With over 30 years of experience, our consultants are well-versed in complex tax matters."],
]

const navLinks = [["Home", "#top"], ["About us", "#about"], ["Services", "#services"], ["How it works", "#process"], ["FAQ", "#faq"], ["Contact us", "#contact"]]

function Logo() {
  return (
    <span className="flex items-center gap-3">
      <img src="/logo-mark.png" alt="" width={40} height={40} className="size-10 shrink-0" />
      <span className="whitespace-nowrap text-[17px] font-bold tracking-[-.02em] text-[#021648]">Plan Tax Filing</span>
    </span>
  )
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a href="#contact" aria-label={label} className="flex size-9 items-center justify-center border border-[#021648]/30 text-[#021648] transition-colors hover:bg-[#021648] hover:text-white">
      {children}
    </a>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white text-[#111112]">
      <header className="sticky top-0 z-50 border-b border-[#e7e7e7] bg-white">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <a href="#top" aria-label="Plantaxfiling home"><Logo /></a>
          <nav className="hidden items-center gap-7 text-[15px] font-medium text-[#111112]/80 lg:flex" aria-label="Primary navigation">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition-colors hover:text-[#0E68FD]">{label}</a>
            ))}
          </nav>
          <a href="#contact" className="btn-dark btn-sm hidden lg:inline-flex">Free consultation</a>
          <button className="border border-[#e7e7e7] p-2.5 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-[#e7e7e7] bg-white px-5 py-3 text-[15px] font-medium lg:hidden" aria-label="Mobile navigation">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="border-b border-[#f0eeee] py-3 last:border-0">{label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-dark mt-3">Free consultation</a>
          </nav>
        )}
      </header>

      <section id="top" className="relative overflow-hidden border-b border-[#e7e7e7] bg-white">
        <div className="pointer-events-none absolute left-5 top-24 hidden h-28 w-56 opacity-70 [background-image:radial-gradient(#cfcbc7_2px,transparent_2px)] [background-size:18px_18px] xl:block" />
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 pb-20 pt-14 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="animate-fade-up">
            <h1 className="text-5xl font-medium leading-[1.06] tracking-[-.02em] text-[#111112] sm:text-6xl">
              Your Trusted Partner in
              <br />
              <span className="mt-3 inline-block bg-[#f5f2f0] px-3 py-1">Tax Solutions</span>
            </h1>
            <p className="mt-7 max-w-[350px] text-[17px] leading-7 text-black/70">Simplifying Taxes for Individuals and Businesses Across the USA.</p>
            <div className="mt-9">
              <a href="#contact" className="btn-dark">Start the process! <ArrowRight size={18} /></a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-[#555]">
              {["Proven Results", "Expert Trust", "Ongoing Support"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex size-5 items-center justify-center rounded-full border border-[#1689FE]"><Check className="size-3 text-[#1689FE]" /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative animate-fade-in">
            <div className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden bg-[#f5f2f0]">
              <img src="/img/hero-person.jpg" alt="Tax professional working on a laptop" className="h-full w-full object-cover" />
            </div>
            <div className="absolute left-2 top-10 hidden items-center gap-3 border border-[#e7e7e7] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(17,17,18,.08)] sm:flex">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#1689FE] text-xs font-bold text-white">KS</span>
              <span className="text-sm font-medium">Karina Stone</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-[#1689FE]"><Check className="size-3 text-white" /></span>
            </div>
            <div className="absolute left-10 top-44 hidden items-center gap-3 border border-[#e7e7e7] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(17,17,18,.08)] lg:flex">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#111112] text-xs font-bold text-white">AS</span>
              <span className="text-sm font-medium">Anna Smith</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-[#1689FE]"><Check className="size-3 text-white" /></span>
            </div>
            <div className="absolute -bottom-7 right-0 border border-[#e7e7e7] bg-white px-6 py-5 shadow-[0_12px_30px_rgba(17,17,18,.08)] sm:right-4 lg:-right-6">
              <p className="inline-block bg-[linear-gradient(180deg,transparent_67%,#1689FE_0)] text-[15px] italic">Consult, file, and manage your taxes from anywhere</p>
              <h2 className="mt-2 text-lg font-medium">Seamless Online Tax Filing Made Easy</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="overflow-hidden bg-[#f5f2f0] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="section-label">Why choose us</span>
            <h2 className="section-title">Building trust through results and integrity</h2>
            <p className="mt-6 max-w-xl text-[17px] leading-8 text-black/70">
              At Plantaxfiling, we are a passionate team of accounting professionals dedicated to providing comprehensive and reliable tax consulting and accounting services. With a diverse group of experts located around the globe, we bring together a wealth of knowledge and experience to help our clients navigate the complexities of tax regulations and financial management.
            </p>
            <p className="mt-4 max-w-xl text-[17px] leading-8 text-black/70">
              Our tax advisors provide consultations and handle legal matters through phone, email, and our secure client portal, ensuring convenient and confidential service.
            </p>
            <a href="#contact" className="btn-brand mt-9">Free consultation</a>
          </div>
          <div className="relative">
            <img src="/img/about-1.jpg" alt="Tax advisory team in a meeting" className="h-[300px] w-full object-cover lg:h-[380px]" />
            <img src="/img/about-2.jpg" alt="Advisors reviewing documents with a client" className="mt-6 h-[220px] w-[85%] object-cover lg:absolute lg:-bottom-16 lg:-left-16 lg:mt-0 lg:h-[240px] lg:w-[62%] lg:border-[10px] lg:border-[#f5f2f0]" />
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[560px] text-center">
            <span className="section-label">Personalized tax help</span>
            <h2 className="section-title">Tax services tailored for you</h2>
            <p className="mt-5 text-[17px] leading-8 text-black/70">
              Whether you&apos;re optimizing your tax liabilities or ensuring compliance, our expert advisors are your trusted partners in financial success.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3">
            {services.map((service) => (
              <a key={service.number} href="#contact" className="group flex min-h-[320px] flex-col border-b border-r border-[#e7e7e7] p-8 transition-colors hover:bg-[#f5f2f0]">
                <div className="border-b border-[#111112] pb-3 text-sm font-medium">{service.number}</div>
                <h3 className="mt-8 text-xl font-medium leading-snug">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-black/70">{service.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium transition-colors group-hover:text-[#0E68FD]">
                  Learn more <ArrowRight size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[560px] text-center">
            <span className="section-label">How we work</span>
            <h2 className="section-title">Simplified tax solutions in 4 steps</h2>
            <p className="mt-5 text-[17px] leading-8 text-black/70">
              Taxes are complicated. But here, we&apos;re on a mission to make them simpler for people who aren&apos;t tax professionals.
            </p>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-[#111112] pt-6">
                <span className="text-sm font-medium">{step.number}</span>
                <h3 className="mt-6 text-lg font-medium leading-snug">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-black/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="grid lg:grid-cols-[55%_45%]">
        <div className="flex flex-col justify-center bg-[linear-gradient(135deg,#169AFE_0%,#1172FD_100%)] px-5 py-16 text-white lg:px-16 lg:py-24 xl:pl-[max(2rem,calc((100vw-1240px)/2+2rem))]">
          <span className="text-[17px] font-medium text-white/90">Proven results</span>
          <h2 className="mt-4 max-w-md text-4xl font-medium leading-[1.08] tracking-[-.02em] sm:text-5xl">Expertise You Can Trust</h2>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/90">
            Plantaxfiling prides itself on having a team of experienced professionals who prepare and review tax returns with meticulous attention to detail. Our expertise spans across various tax regulations, ensuring compliance while maximizing your tax benefits. Whether you&apos;re an individual looking to file your taxes or a business seeking comprehensive tax planning strategies, we are here to assist you every step of the way.
          </p>
          <div className="mt-9">
            <a href="#contact" className="btn-white">Free consultation</a>
          </div>
        </div>
        <img src="/img/results.jpg" alt="Accountant calculating figures at a desk" className="h-full min-h-[380px] w-full object-cover" />
      </section>

      <section id="faq" className="bg-[#f5f2f0] py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mx-auto max-w-[640px] text-center">
            <span className="section-label">Your questions answered</span>
            <h2 className="section-title">Get informed now. Answers to your common questions</h2>
          </div>
          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[42%_58%]">
            <img src="/img/faq.jpg" alt="Support agent wearing a headset" className="h-[380px] w-full object-cover lg:h-[520px]" />
            <div>
              <h3 className="text-2xl font-medium">Frequently asked questions</h3>
              <p className="mt-3 max-w-lg text-[15px] leading-7 text-black/70">
                Can&apos;t find what you&apos;re looking for? Get in touch with our team and we will gladly help out.
              </p>
              <div className="mt-8 space-y-3">
                {faqs.map(([question, answer], index) => (
                  <details key={question} className="group border border-[#e7e7e7] bg-white">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-medium">
                      <span>{index + 1}. {question}</span>
                      <ChevronDown className="shrink-0 transition-transform group-open:rotate-180" size={18} />
                    </summary>
                    <p className="border-t border-[#f0eeee] px-6 py-5 text-[15px] leading-7 text-black/70">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[linear-gradient(135deg,#169AFE_0%,#1172FD_100%)]">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-5 py-16 text-white lg:flex-row lg:items-center lg:px-8 lg:py-20">
          <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-.02em] sm:text-5xl">Take the next step toward financial clarity</h2>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:hello@plantaxfiling.com" className="btn-white">Let&apos;s get in touch</a>
            <a href="mailto:hello@plantaxfiling.com" className="btn-outline">Free consultation</a>
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:grid-cols-[1.6fr_1fr_1fr] lg:px-8">
          <div>
            <a href="#top" aria-label="Plantaxfiling home"><Logo /></a>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-black/70">
              Plantaxfiling is a U.S. based tax consultancy specializing in tax filing, audits, payroll, and tax planning services for individuals and businesses. With a focus on simplifying tax compliance and maximizing savings, we serve clients through experienced advisors and secure client support.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-black/70">
              {[["Home", "#top"], ["About Us", "#about"], ["Services", "#services"], ["FAQ", "#faq"], ["Contact Us", "#contact"]].map(([label, href]) => (
                <li key={label}><a href={href} className="transition-colors hover:text-[#0E68FD]">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold">Services</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-black/70">
              {services.map((service) => (
                <li key={service.title}><a href="#services" className="transition-colors hover:text-[#0E68FD]">{service.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#1689FE]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-5 py-5 text-[15px] font-medium text-[#021648] sm:flex-row lg:px-8">
            <span>© 2026 Plantaxfiling. All rights reserved. Helping you navigate your tax journey with confidence.</span>
            <div className="flex gap-2.5">
              <SocialIcon label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.6v8h3.6z" /></svg>
              </SocialIcon>
              <SocialIcon label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>
              </SocialIcon>
              <SocialIcon label="X">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L5 21H1.9l7.3-8.4L1.5 3h6.4l4.4 5.9L17.5 3zm-1.1 16.2h1.7L6.8 4.7H5l11.4 14.5z" /></svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 9.5H4V20h2.5V9.5zM5.25 4A1.5 1.5 0 105.25 7a1.5 1.5 0 000-3zM20 13.7c0-2.7-1.4-4-3.4-4-1.6 0-2.3.9-2.7 1.5V9.5H11.5V20H14v-5.2c0-1.1.6-1.9 1.7-1.9s1.6.8 1.6 1.9V20H20v-6.3z" /></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
