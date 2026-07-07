import { ChevronLeft } from 'lucide-react'

type HeroSectionProps = {
  title: string
  subtitle?: string
  onBack?: () => void
}

export default function HeroSection({ title, subtitle, onBack }: HeroSectionProps) {
  return (
    <section className="mb-6 flex items-center gap-4">
      {onBack && (
        <button
          onClick={onBack}
          aria-label="Go back"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-white transition-colors hover:bg-surface-2"
        >
          <ChevronLeft size={16} />
        </button>
      )}
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-medium leading-none text-white">{title}</h1>
        {subtitle && (
          <p className="max-w-2xl text-xs font-medium text-paragraph">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
