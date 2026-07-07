import { Search, Bell, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex items-center gap-4">
      <div className="flex flex-1 items-center gap-2 rounded-full border border-line p-1">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-white">
          <Search size={18} />
        </span>
        <input
          type="search"
          placeholder="Search ..."
          className="min-w-0 flex-1 bg-transparent pr-3 text-xs text-white outline-none placeholder:text-paragraph"
        />
      </div>

      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-white transition-colors hover:bg-surface-2">
        <User size={16} />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-white transition-colors hover:bg-surface-2">
        <Bell size={16} />
      </button>
    </header>
  )
}
