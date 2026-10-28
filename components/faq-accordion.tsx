"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FaqAccordionProps = {
  items: [string, string][]
}

/** Animated accordion: smooth grid-template-rows height transition. */
export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map(([question, answer], index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={question}
            className={`border bg-white transition-colors duration-300 ${isOpen ? "border-ink/30" : "border-ink/10 hover:border-ink/25"}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left text-[15px] font-medium text-ink"
            >
              <span className="flex gap-3">
                <span className="text-lime-deep">{String(index + 1).padStart(2, "0")}</span>
                {question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-ink/50 transition-transform duration-300 ${isOpen ? "rotate-180 text-lime-deep" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-ink/10 px-6 py-5 text-[15px] leading-7 text-ink/65">{answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
