import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '@/theme/colors';

type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  smartMatch: boolean;
  onToggleSmartMatch: (value: boolean) => void;
  onFilter?: () => void;
  activeFilterCount?: number;
};

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
    <View style={styles.container}>
      <View style={styles.searchPill}>
        <View style={styles.searchIconCircle}>
          <Feather name="search" size={18} color={colors.white} />
        </View>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={colors.paragraph}
          style={styles.input}
        />
      </View>

      <View style={styles.controlsRow}>
        <Pressable onPress={onFilter} style={styles.filterBtn}>
          <Feather name="sliders" size={16} color={colors.white} />
          <Text style={styles.filterText}>Filter By</Text>
          {activeFilterCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{activeFilterCount}</Text>
            </View>
          )}
        </Pressable>

        <Pressable
          onPress={() => onToggleSmartMatch(!smartMatch)}
          style={styles.smartBtn}
          accessibilityRole="switch"
          accessibilityState={{ checked: smartMatch }}>
          <View style={[styles.track, { backgroundColor: smartMatch ? colors.brand : colors.surface2 }]}>
            <View style={[styles.thumb, { left: smartMatch ? 16 : 2 }]} />
          </View>
          <Text style={styles.smartLabel}>Smart Match</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  searchPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 4,
  },
  searchIconCircle: {
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: colors.surface2,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: colors.white,
    paddingRight: 12,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.base,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  filterText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.white,
  },
  badge: {
    minWidth: 20,
    height: 20,
    paddingHorizontal: 6,
    borderRadius: 999,
    backgroundColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.white,
  },
  smartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.base,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  track: {
    height: 18,
    width: 32,
    borderRadius: 999,
    justifyContent: 'center',
  },
  thumb: {
    position: 'absolute',
    height: 14,
    width: 14,
    borderRadius: 999,
    backgroundColor: colors.white,
  },
  smartLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.white,
  },
});
