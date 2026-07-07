import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { colors } from '@/theme/colors';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.searchWrap}>
        <View style={styles.searchIconCircle}>
          <Feather name="search" size={18} color={colors.white} />
        </View>
        <TextInput
          placeholder="Search ..."
          placeholderTextColor={colors.paragraph}
          style={styles.input}
        />
      </View>

      <Pressable style={styles.iconBtn} hitSlop={6}>
        <Feather name="user" size={16} color={colors.white} />
      </Pressable>
      <Pressable style={styles.iconBtn} hitSlop={6}>
        <Feather name="bell" size={16} color={colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 16,
  },
  searchWrap: {
    flex: 1,
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
  iconBtn: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: colors.surface,
  },
});
