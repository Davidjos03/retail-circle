import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from '@/components/Header';
import LeadCard from '@/components/LeadCard';
import { mockLeads } from '@/data/leads';
import { colors } from '@/theme/colors';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header />

        <Text style={styles.lead}>
          Latest matched leads. See all on the{' '}
          <Link href="/leads" style={styles.link}>
            Leads
          </Link>{' '}
          page.
        </Text>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.h2}>Recent Leads</Text>
            <Link href="/leads" style={styles.viewAll}>
              View all
            </Link>
          </View>

          <View style={styles.grid}>
            {mockLeads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </View>
        </View>
      </ScrollView>
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
    gap: 16,
  },
  lead: {
    fontSize: 14,
    color: colors.muted,
  },
  link: {
    color: colors.brand,
  },
  section: {
    gap: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h2: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
  viewAll: {
    fontSize: 14,
    color: colors.brand,
  },
  grid: {
    gap: 16,
  },
});
