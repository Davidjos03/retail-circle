import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { colors } from '@/theme/colors';

export type TabItem = {
  id: string;
  label: string;
  icon?: (props: { color: string; size: number }) => ReactNode;
};

type TabsProps = {
  items: TabItem[];
  active: string;
  onChange: (id: string) => void;
};

export default function Tabs({ items, active, onChange }: TabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}>
      {items.map(({ id, label, icon }) => {
        const isActive = id === active;
        const iconColor = isActive ? colors.brandIcon : colors.dim;
        const textColor = isActive ? colors.white : colors.muted;
        return (
          <Pressable
            key={id}
            onPress={() => onChange(id)}
            style={[styles.tab, isActive && styles.tabActive]}>
            {icon?.({ color: iconColor, size: 16 })}
            <Text style={[styles.label, { color: textColor }]}>{label}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 2,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  tabActive: {
    backgroundColor: colors.surface2,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
  },
});
