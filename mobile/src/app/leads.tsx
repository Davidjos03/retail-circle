import { Feather } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import FilterSheet from '@/components/FilterSheet';
import HeroSection from '@/components/HeroSection';
import LeadCard from '@/components/LeadCard';
import SearchBox from '@/components/SearchBox';
import Tabs, { type TabItem } from '@/components/Tabs';
import {
  countActiveFilters,
  emptyFilters,
  filterLeads,
  getFilterOptions,
  mockLeads,
  type LeadFilters,
} from '@/data/leads';
import { colors } from '@/theme/colors';

const tabs: TabItem[] = [
  {
    id: 'in-stock',
    label: 'In Stock',
    icon: ({ color, size }) => <Feather name="box" size={size} color={color} />,
  },
  {
    id: 'in-consignment',
    label: 'In Consignment',
    icon: ({ color, size }) => <Feather name="briefcase" size={size} color={color} />,
  },
  {
    id: 'all-leads',
    label: 'All Leads',
    icon: ({ color, size }) => <Feather name="check-square" size={size} color={color} />,
  },
];

const heroSubtitles: Record<string, string> = {
  'in-stock':
    'Leads that match your inventory (potential sale) / Auto-matched leads with your inventory.',
  'in-consignment': 'Leads for items you hold on consignment.',
  'all-leads': 'Every lead across your inventory and consignments.',
};

const filterOptions = getFilterOptions(mockLeads);

export default function LeadsScreen() {
  const [activeTab, setActiveTab] = useState('in-stock');
  const [query, setQuery] = useState('');
  const [smartMatch, setSmartMatch] = useState(false);
  const [filters, setFilters] = useState<LeadFilters>(emptyFilters);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(
    () => filterLeads(mockLeads, { tab: activeTab, search: query, smartMatch, filters }),
    [activeTab, query, smartMatch, filters],
  );

  const activeTabLabel = tabs.find((t) => t.id === activeTab)?.label ?? 'Leads';

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HeroSection title={activeTabLabel} subtitle={heroSubtitles[activeTab]} />

        <View style={styles.tabs}>
          <Tabs items={tabs} active={activeTab} onChange={setActiveTab} />
        </View>

        <View style={styles.search}>
          <SearchBox
            value={query}
            onChange={setQuery}
            smartMatch={smartMatch}
            onToggleSmartMatch={setSmartMatch}
            onFilter={() => setFilterOpen(true)}
            activeFilterCount={countActiveFilters(filters)}
          />
        </View>

        <Text style={styles.count}>{filtered.length} Listings found</Text>

        <View style={styles.grid}>
          {filtered.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </View>
      </ScrollView>

      <FilterSheet
        open={filterOpen}
        options={filterOptions}
        value={filters}
        onChange={setFilters}
        onClose={() => setFilterOpen(false)}
        onClear={() => setFilters(emptyFilters)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.base,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  tabs: {
    marginBottom: 20,
  },
  search: {
    marginBottom: 16,
  },
  count: {
    marginBottom: 16,
    fontSize: 14,
    color: colors.faint,
  },
  grid: {
    gap: 16,
  },
});
