  export type LeadSpec = {
    label: string
    value: string
  }

  export type LeadContact = {
    name: string
    message: string
    flag?: string
    avatarUrl?: string
  }

  export type LeadStatus = 'in-stock' | 'in-consignment'

  export type Lead = {
    id: string
    reference: string
    brand: string
    modelYear: string
    name: string
    imageUrl?: string
    status: LeadStatus
    smartMatch: boolean
    year: string
    condition: string
    specs: LeadSpec[]
    contact?: LeadContact
  }

  const images = {
    dayDate: '/products/day-date-40.png',
    datejustBlack: '/products/datejust-41-black.png',
    datejustChoc: '/products/datejust-41-chocolate.png',
  }

  const baseContact: LeadContact = {
    flag: '🇬🇧',
    name: 'John Pederson',
    message: 'WTB 2018+ TRUE UNWORN HULK...',
  }

  function buildSpecs(year: string, condition: string, listingDate: string): LeadSpec[] {
    return [
      { label: 'Year', value: year },
      { label: 'Condition', value: condition },
      { label: 'Listing Date', value: listingDate },
    ]
  }

  type LeadSeed = Omit<Lead, 'specs'> & { listingDate: string }

  const seeds: LeadSeed[] = [
    {
      id: '1',
      reference: '115234-0002',
      brand: 'Rolex',
      modelYear: '2025',
      name: 'Cosmograph Daytona',
      imageUrl: images.dayDate,
      status: 'in-stock',
      smartMatch: true,
      year: '2024',
      condition: 'Mint',
      listingDate: '2025/03/30 11:32',
      contact: baseContact,
    },
    {
      id: '2',
      reference: '126334-0011',
      brand: 'Rolex',
      modelYear: '2025',
      name: 'Datejust 41',
      imageUrl: images.datejustBlack,
      status: 'in-stock',
      smartMatch: false,
      year: '2023',
      condition: 'Excellent',
      listingDate: '2025/03/28 09:10',
      contact: baseContact,
    },
    {
      id: '3',
      reference: '126334-0042',
      brand: 'Rolex',
      modelYear: '2025',
      name: 'Cosmograph Daytona1',
      imageUrl: images.datejustChoc,
      status: 'in-consignment',
      smartMatch: true,
      year: '2025',
      condition: 'Mint',
      listingDate: '2025/03/25 14:05',
      contact: baseContact,
    },
  ]

  export const mockLeads: Lead[] = seeds.map(({ listingDate, ...lead }) => ({
    ...lead,
    specs: buildSpecs(lead.year, lead.condition, listingDate),
  }))

  export type LeadFilters = {
    brands: string[]
    conditions: string[]
    years: string[]
  }

  export const emptyFilters: LeadFilters = { brands: [], conditions: [], years: [] }

  export function countActiveFilters(filters: LeadFilters): number {
    return filters.brands.length + filters.conditions.length + filters.years.length
  }

  export function toggleFilterValue(list: string[], value: string): string[] {
    return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
  }

  export function getFilterOptions(leads: Lead[]) {
    const unique = (values: string[]) => Array.from(new Set(values))
    return {
      brands: unique(leads.map((l) => l.brand)).sort(),
      conditions: unique(leads.map((l) => l.condition)),
      years: unique(leads.map((l) => l.year)).sort((a, b) => b.localeCompare(a)),
    }
  }

  export type LeadQuery = {
    tab: string
    search: string
    smartMatch: boolean
    filters: LeadFilters
  }

  export function filterLeads(leads: Lead[], q: LeadQuery): Lead[] {
    const search = q.search.trim().toLowerCase()

    return leads.filter((lead) => {
      if (q.tab === 'in-stock' && lead.status !== 'in-stock') return false
      if (q.tab === 'in-consignment' && lead.status !== 'in-consignment') return false
      if (q.smartMatch && !lead.smartMatch) return false
      if (search && !`${lead.name} ${lead.brand}`.toLowerCase().includes(search)) return false
      if (q.filters.brands.length && !q.filters.brands.includes(lead.brand)) return false
      if (q.filters.conditions.length && !q.filters.conditions.includes(lead.condition)) return false
      if (q.filters.years.length && !q.filters.years.includes(lead.year)) return false
      return true
    })
  }
