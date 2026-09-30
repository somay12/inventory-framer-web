import { faqs } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Accordion } from '@/components/ui/Accordion'

export function Faq() {
  return (
    <section id="faqs" className="py-24 md:py-32 section-scroll-margin bg-subtle/50">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={faqs.eyebrow}
          title={faqs.title}
          className="mb-12"
        />
        <Accordion items={faqs.items} />
      </div>
    </section>
  )
}
