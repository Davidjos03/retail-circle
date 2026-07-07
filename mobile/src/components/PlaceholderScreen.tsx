import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

export default function PlaceholderScreen({ title }: { title: string }) {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>This section is coming soon.</Text>
      </View>
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
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
  body: {
    fontSize: 14,
    color: colors.muted,
  },
});
