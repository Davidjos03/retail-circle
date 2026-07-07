import { useMemo, useState } from 'react'
import { Boxes, Handshake, ListChecks } from 'lucide-react'
import HeroSection from '../components/leads/HeroSection'
import Tabs, { type TabItem } from '../components/leads/Tabs'
import SearchBox from '../components/leads/SearchBox'
import FilterPanel from '../components/leads/FilterPanel'
import LeadCard from '../components/leads/LeadCard'
import {
  countActiveFilters,
  emptyFilters,
  filterLeads,
  getFilterOptions,
  mockLeads,
  type LeadFilters,
} from '../data/leads'

const tabs: TabItem[] = [
  { id: 'in-stock', label: 'In Stock', icon: Boxes },
  { id: 'in-consignment', label: 'In Consignment', icon: Handshake },
  { id: 'all-leads', label: 'All Leads', icon: ListChecks },
]

const heroSubtitles: Record<string, string> = {
  'in-stock':
    'Leads that match your inventory (potential sale) / Auto-matched leads with your inventory.',
  'in-consignment': 'Leads for items you hold on consignment.',
  'all-leads': 'Every lead across your inventory and consignments.',
}

const filterOptions = getFilterOptions(mockLeads)

export default function Leads() {
  const [activeTab, setActiveTab] = useState('in-stock')
  const [query, setQuery] = useState('')
  const [smartMatch, setSmartMatch] = useState(false)
  const [filters, setFilters] = useState<LeadFilters>(emptyFilters)
  const [filterOpen, setFilterOpen] = useState(false)

  const filtered = useMemo(
    () => filterLeads(mockLeads, { tab: activeTab, search: query, smartMatch, filters }),
    [activeTab, query, smartMatch, filters],
  )

  const activeTabLabel = tabs.find((t) => t.id === activeTab)?.label ?? 'Leads'

  return (
    <div>
      <HeroSection
        title={activeTabLabel}
        subtitle={heroSubtitles[activeTab]}
        onBack={() => window.history.back()}
      />

      <div className="mb-5">
        <Tabs items={tabs} active={activeTab} onChange={setActiveTab} />
      </div>

      <div className="mb-4">
        <SearchBox
          value={query}
          onChange={setQuery}
          smartMatch={smartMatch}
          onToggleSmartMatch={setSmartMatch}
          onFilter={() => setFilterOpen(true)}
          activeFilterCount={countActiveFilters(filters)}
        />
      </div>

      <p className="mb-4 text-sm text-neutral-500">
        {filtered.length} Listings found
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
      </div>

      <FilterPanel
        open={filterOpen}
        options={filterOptions}
        value={filters}
        onChange={setFilters}
        onClose={() => setFilterOpen(false)}
        onClear={() => setFilters(emptyFilters)}
      />
    </div>
  )
}
