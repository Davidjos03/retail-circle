import { Search, SlidersHorizontal } from 'lucide-react'

type SearchBoxProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  smartMatch: boolean
  onToggleSmartMatch: (value: boolean) => void
  onFilter?: () => void
  activeFilterCount?: number
}

export default function SearchBox({
  value,
  onChange,
  placeholder = 'Quick search for products ...',
  smartMatch,
  onToggleSmartMatch,
  onFilter,
  activeFilterCount = 0,
}: SearchBoxProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <div className="flex flex-1 items-center gap-2 rounded-full border border-line p-1">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-white">
          <Search size={18} />
        </span>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent pr-3 text-xs text-white outline-none placeholder:text-paragraph"
        />
      </div>

      <button
        onClick={onFilter}
        className="flex h-10 items-center gap-2 rounded-full border border-line bg-base px-3 text-xs font-medium text-white transition-colors hover:border-brand/60"
      >
        <SlidersHorizontal size={16} />
        Filter By
        {activeFilterCount > 0 && (
          <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand px-1.5 text-[11px] font-semibold text-white">
            {activeFilterCount}
          </span>
        )}
      </button>

      <button
        type="button"
        role="switch"
        aria-checked={smartMatch}
        onClick={() => onToggleSmartMatch(!smartMatch)}
        className="flex h-10 items-center gap-2 rounded-full border border-line bg-base px-3 text-xs font-medium text-white"
      >
        <span
          className={`relative h-[18px] w-8 rounded-full shadow-[inset_0px_0px_14px_#121416] transition-colors ${
            smartMatch
              ? 'bg-brand'
              : 'bg-[linear-gradient(90deg,rgba(5,8,16,0)_0%,rgba(255,255,255,0.1)_100%)]'
          }`}
        >
          <span
            className={`absolute top-0.5 h-3.5 w-3.5 rounded-full bg-white transition-all ${
              smartMatch ? 'left-[16px]' : 'left-0.5'
            }`}
          />
        </span>
        Smart Match
      </button>
    </div>
  )
}
