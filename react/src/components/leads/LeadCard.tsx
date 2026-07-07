import {
  ChevronRight,
  LineChart,
  MessageSquarePlus,
} from 'lucide-react'
import type { Lead, LeadSpec } from '../../data/leads'

export type { Lead, LeadSpec, LeadContact, LeadStatus } from '../../data/leads'

type LeadCardProps = {
  lead: Lead
  className?: string
  onOpen?: (lead: Lead) => void
  onAction?: (lead: Lead) => void
  onQuickMessage?: (lead: Lead) => void
  onViewTrends?: (lead: Lead) => void
}

function SpecRow({ label, value }: LeadSpec) {
  return (
    <div className="flex items-center justify-between text-xs font-medium">
      <span className="text-paragraph">{label}:</span>
      <span className="text-white">{value}</span>
    </div>
  )
}

export default function LeadCard({
  lead,
  className = '',
  onOpen,
  onAction,
  onQuickMessage,
  onViewTrends,
}: LeadCardProps) {
  const { reference, brand, modelYear, name, imageUrl, specs, contact } = lead

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-3xl border border-line-soft bg-surface ${className}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2.5 p-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-xs font-medium text-paragraph">
            <span>{brand}</span>
            <span className="h-1 w-1 rounded-full bg-paragraph" />
            <span>{reference}</span>
          </div>
          <h3 className="text-sm font-medium text-white">{name}</h3>
        </div>
        <span className="text-xs font-medium text-paragraph">{modelYear}</span>
      </div>

      {/* Image */}
      <div className="relative flex h-[196px] items-center justify-center overflow-hidden rounded-[18px] border border-line bg-[radial-gradient(130.26%_130.26%_at_7.16%_49.75%,rgba(5,8,16,0)_0%,rgba(255,255,255,0.1)_100%)]">
        {imageUrl ? (
          <img src={imageUrl} alt={name} loading="lazy" className="h-full w-full object-contain p-6" />
        ) : (
          <span className="text-sm text-paragraph">No image</span>
        )}

        <button
          onClick={() => onOpen?.(lead)}
          aria-label={`Open ${name}`}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-surface text-white transition-colors hover:bg-surface-2"
        >
          <ChevronRight size={12} />
        </button>

        <button
          onClick={() => onViewTrends?.(lead)}
          className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full border border-line bg-surface px-2.5 py-2 text-xs font-medium text-paragraph transition-colors hover:text-white"
        >
          <LineChart size={16} className="text-white" />
          View Trends
        </button>
      </div>

      {/* Specs */}
      {specs.length > 0 && (
        <div className="flex flex-col gap-6 p-[18px]">
          {specs.map((spec) => (
            <SpecRow key={spec.label} {...spec} />
          ))}
        </div>
      )}

      {/* Contact */}
      {contact && (
        <div className="flex items-center gap-2 rounded-[18px] border-t border-line bg-surface-2 py-2 pl-2 pr-1">
          {contact.avatarUrl ? (
            <img
              src={contact.avatarUrl}
              alt={contact.name}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
          ) : (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface">
              <img src="/flag-uk.png" alt="United Kingdom" className="h-4 w-4 object-cover" />
            </span>
          )}

          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <p className="truncate text-xs font-medium text-white">{contact.name}</p>
            <p className="flex min-w-0 items-center gap-1 text-xs font-medium text-paragraph">
              <button
                onClick={() => onQuickMessage?.(lead)}
                aria-label="New message"
                className="shrink-0 text-white"
              >
                <MessageSquarePlus size={12} />
              </button>
              <span className="truncate">{contact.message}</span>
              <span className="shrink-0 cursor-pointer text-white">Read more ...</span>
            </p>
          </div>

          <button
            onClick={() => onAction?.(lead)}
            aria-label="Message contact"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface transition-colors hover:bg-surface-2"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="h-4 w-4" />
          </button>
        </div>
      )}
    </article>
  )
}
