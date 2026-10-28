export type NavChild = { label: string; href: string }
export type NavItem = { label: string; href: string; children?: NavChild[] }

export type Service = {
  number: string
  slug: string
  title: string
  short: string
  description: string
  image: string
  points: string[]
}

export const services: Service[] = [
  {
    number: "01",
    slug: "individual-tax-filing",
    title: "US Individual Tax Filing",
    short: "Federal and state returns prepared, reviewed and e-filed for maximum legal savings.",
    description: "Comprehensive tax filing services to ensure compliance and maximize deductions for individuals in the USA.",
    image: "/img/hero-person.jpg",
    points: ["Federal & multi-state returns", "Deduction and credit optimization", "E-file confirmation within 24 hours", "Free review of last year's return"],
  },
  {
    number: "02",
    slug: "tax-audit-representation",
    title: "Tax Audit Representation",
    short: "Expert representation to navigate audits and protect your financial interests with confidence.",
    description: "Expert representation to navigate tax audits and protect your financial interests with confidence.",
    image: "/img/results.jpg",
    points: ["IRS notice response & documentation", "Power of attorney filing", "In-person and correspondence audits", "Appeal and settlement support"],
  },
  {
    number: "03",
    slug: "amendment-filing",
    title: "Amendment Filing",
    short: "Correct previous returns and recover overpaid tax with accurate amendment filings.",
    description: "Correct previous tax returns and optimize your financial situation with accurate amendment filings.",
    image: "/img/about-2.jpg",
    points: ["Form 1040-X preparation", "Up to 3 years of prior returns", "Missed deduction recovery", "State amendment coordination"],
  },
  {
    number: "04",
    slug: "corporate-tax",
    title: "Corporate Tax",
    short: "Tailored corporate tax solutions that optimize liabilities and keep you compliant.",
    description: "Tailored corporate tax solutions designed to optimize your company's tax liabilities and ensure compliance.",
    image: "/img/about-1.jpg",
    points: ["S-Corp, C-Corp & partnership returns", "Quarterly estimated tax planning", "Entity structure advisory", "Multi-state nexus compliance"],
  },
  {
    number: "05",
    slug: "payroll-service",
    title: "Payroll Service",
    short: "Efficient payroll management that keeps your business compliant and your team paid on time.",
    description: "Efficient and accurate payroll management to keep your business compliant and employees satisfied.",
    image: "/img/faq.jpg",
    points: ["Automated payroll runs", "W-2 and 1099 filing", "Payroll tax deposits", "Benefits & garnishment handling"],
  },
]

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: `/services#${s.slug}` })),
  },
  {
    label: "Refund Status",
    href: "/refund-status",
    children: [
      { label: "Track your refund", href: "/refund-status" },
      { label: "Refund processing times", href: "/refund-status#timeline" },
      { label: "Refund FAQ", href: "/refund-status#faq" },
    ],
  },
  { label: "CPA", href: "/cpa" },
  { label: "Contact us", href: "/contact" },
]

export const steps = [
  { number: "01", title: "Initial Consultation & Financial Analysis", description: "We begin by thoroughly assessing your financial landscape to understand your unique tax needs." },
  { number: "02", title: "Custom Tax Strategy & Planning", description: "We craft a personalized tax plan designed to minimize liabilities and achieve your financial objectives." },
  { number: "03", title: "Accurate Filing & Compliance", description: "Our experts ensure timely and accurate tax filings for maximum benefits and compliance." },
  { number: "04", title: "Ongoing Consultation & Optimization", description: "We provide continuous support, with regular reviews to keep your tax strategy optimized year-round." },
]

export const stats = [
  { value: 30, suffix: "+", label: "Years of experience" },
  { value: 12, suffix: "k+", label: "Returns filed" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 50, suffix: "", label: "States served" },
]

export const testimonials = [
  { name: "Karina Stone", role: "Small business owner", quote: "Plantaxfiling turned a stressful audit into a manageable process. Their team answered every question before I even had to ask." },
  { name: "Marcus Lee", role: "Freelance developer", quote: "I switched from a big-box preparer and recovered almost $2,400 in deductions I never knew existed. The portal makes everything painless." },
  { name: "Anna Smith", role: "Startup CFO", quote: "Payroll, multi-state filings, quarterly estimates — all handled on time. It feels like having a full finance team without the overhead." },
]

export const faqs: [string, string][] = [
  ["What services does Plantaxfiling provide?", "Plantaxfiling offers U.S. tax filing, tax audit assistance, amendments, payroll services, and personalized tax planning for individuals and businesses."],
  ["Who can benefit from Plantaxfiling's services?", "Plantaxfiling is ideal for individuals, small businesses, freelancers, and anyone needing tax support in the U.S."],
  ["How do I schedule a consultation?", "You can book a consultation via our website, where we offer a free initial consultation."],
  ["Is there a secure way to submit documents?", "Yes, Plantaxfiling provides a secure client portal for document submissions and communications."],
  ["How experienced is the team?", "With over 30 years of experience, our consultants are well-versed in complex tax matters."],
]

export const contact = {
  phone: "+1 (800) 555-0147",
  email: "hello@plantaxfiling.com",
  address: "1200 Market Street, Suite 400, Wilmington, DE 19801",
  hours: "Mon – Fri, 9:00 AM – 6:00 PM ET",
}
