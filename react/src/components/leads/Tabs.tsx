import type { LucideIcon } from 'lucide-react'

export type TabItem = {
  id: string
  label: string
  icon?: LucideIcon
}

type TabsProps = {
  items: TabItem[]
  active: string
  onChange: (id: string) => void
}

export default function Tabs({ items, active, onChange }: TabsProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-2xl bg-surface p-0.5">
      {items.map(({ id, label, icon: Icon }) => {
        const isActive = id === active
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`flex h-10 items-center gap-2.5 rounded-[14px] px-3 text-xs font-medium transition-all duration-300 ${
              isActive
                ? 'bg-surface-2 text-white shadow-[inset_0px_0px_14px_#121416]'
                : 'text-nav hover:text-neutral-200'
            }`}
          >
            {Icon && (
              <Icon size={16} className={isActive ? 'text-brand-icon' : 'text-[#595959]'} />
            )}
            {isActive ? (
              <span className="bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">
                {label}
              </span>
            ) : (
              label
            )}
          </button>
        )
      })}
    </div>
  )
}
