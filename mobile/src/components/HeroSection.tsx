import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
};

export default function HeroSection({ title, subtitle, onBack }: HeroSectionProps) {
  return (
    <View style={styles.container}>
      {onBack && (
        <Pressable
          onPress={onBack}
          accessibilityLabel="Go back"
          style={styles.backBtn}
          hitSlop={8}>
          <Feather name="chevron-left" size={18} color={colors.text} />
        </Pressable>
      )}
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  backBtn: {
    marginTop: 2,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: colors.surface,
  },
  textWrap: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: colors.paragraph,
  },
});
