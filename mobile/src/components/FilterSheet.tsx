import { Feather } from '@expo/vector-icons';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { countActiveFilters, toggleFilterValue, type LeadFilters } from '@/data/leads';

type FilterOptions = {
  brands: string[];
  conditions: string[];
  years: string[];
};

type FilterSheetProps = {
  open: boolean;
  options: FilterOptions;
  value: LeadFilters;
  onChange: (value: LeadFilters) => void;
  onClose: () => void;
  onClear: () => void;
};

type GroupProps = {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
};

function FilterGroup({ title, options, selected, onToggle }: GroupProps) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupTitle}>{title}</Text>
      <View style={styles.chips}>
        {options.map((option) => {
          const isActive = selected.includes(option);
          return (
            <Pressable
              key={option}
              onPress={() => onToggle(option)}
              style={[styles.chip, isActive ? styles.chipActive : styles.chipInactive]}>
              <Text style={[styles.chipText, { color: isActive ? colors.white : colors.muted }]}>
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function FilterSheet({
  open,
  options,
  value,
  onChange,
  onClose,
  onClear,
}: FilterSheetProps) {
  const total = countActiveFilters(value);

  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
          <View style={styles.header}>
            <Text style={styles.title}>Filter By</Text>
            <Pressable onPress={onClose} style={styles.closeBtn} hitSlop={8}>
              <Feather name="x" size={18} color={colors.text} />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
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
          </ScrollView>

          <View style={styles.footer}>
            <Pressable
              onPress={onClear}
              disabled={total === 0}
              style={[styles.clearBtn, total === 0 && styles.disabled]}>
              <Text style={styles.clearText}>Clear all</Text>
            </Pressable>
            <Pressable onPress={onClose} style={styles.applyBtn}>
              <Text style={styles.applyText}>Show results</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  sheet: {
    maxHeight: '80%',
    backgroundColor: colors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 20,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
  closeBtn: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.surface2,
  },
  group: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 10,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipActive: {
    borderColor: 'rgba(124, 92, 255, 0.6)',
    backgroundColor: colors.brandSoft,
  },
  chipInactive: {
    borderColor: colors.line,
    backgroundColor: colors.surface,
  },
  chipText: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  clearBtn: {
    flex: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.line,
    paddingVertical: 12,
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
  clearText: {
    fontSize: 14,
    color: colors.muted,
  },
  applyBtn: {
    flex: 1,
    borderRadius: 999,
    backgroundColor: colors.brand,
    paddingVertical: 12,
    alignItems: 'center',
  },
  applyText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
});
