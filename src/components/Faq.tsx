import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/faqs";

// Native <details> accordion: no client JS, fully server-rendered, and every
// answer stays in the DOM whether open or closed — exactly what crawlers and
// answer engines read.
export default function Faq({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-bold text-navy [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown className="size-5 shrink-0 text-gold-dark transition-transform group-open:rotate-180" />
          </summary>
          <p className="pb-5 text-sm leading-relaxed text-navy/70">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
