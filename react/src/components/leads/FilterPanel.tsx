import { X } from 'lucide-react'
import {
  countActiveFilters,
  toggleFilterValue,
  type LeadFilters,
} from '../../data/leads'

type FilterOptions = {
  brands: string[]
  conditions: string[]
  years: string[]
}

type FilterPanelProps = {
  open: boolean
  options: FilterOptions
  value: LeadFilters
  onChange: (value: LeadFilters) => void
  onClose: () => void
  onClear: () => void
}

type GroupProps = {
  title: string
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
}

function FilterGroup({ title, options, selected, onToggle }: GroupProps) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-medium text-neutral-300">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = selected.includes(option)
          return (
            <button
              key={option}
              onClick={() => onToggle(option)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                isActive
                  ? 'border-brand/60 bg-brand-soft text-white'
                  : 'border-line bg-surface text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function FilterPanel({
  open,
  options,
  value,
  onChange,
  onClose,
  onClear,
}: FilterPanelProps) {
  if (!open) return null

  const total = countActiveFilters(value)

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-2xl border border-line bg-surface p-5 shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Filter By</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface-2 text-neutral-300 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-5">
          <FilterGroup
            title="Brand"
            options={options.brands}
            selected={value.brands}
            onToggle={(v) => onChange({ ...value, brands: toggleFilterValue(value.brands, v) })}
          />
          <FilterGroup
            title="Condition"
            options={options.conditions}
            selected={value.conditions}
            onToggle={(v) =>
              onChange({ ...value, conditions: toggleFilterValue(value.conditions, v) })
            }
          />
          <FilterGroup
            title="Year"
            options={options.years}
            selected={value.years}
            onToggle={(v) => onChange({ ...value, years: toggleFilterValue(value.years, v) })}
          />
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={onClear}
            disabled={total === 0}
            className="flex-1 rounded-full border border-line py-2.5 text-sm text-neutral-300 transition-colors hover:text-white disabled:opacity-40 disabled:hover:text-neutral-300"
          >
            Clear all
          </button>
          <button
            onClick={onClose}
            className="flex-1 rounded-full bg-brand py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand/90"
          >
            Show results
          </button>
        </div>
      </div>
    </div>
  )
}
