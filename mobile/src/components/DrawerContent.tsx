import {
  DrawerContentScrollView,
  type DrawerContentComponentProps,
} from 'expo-router/drawer';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

export default function DrawerContent(props: DrawerContentComponentProps) {
  const { state, navigation, descriptors } = props;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.content}>
      <View style={styles.brand}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          contentFit="cover"
        />
        <View>
          <Text style={styles.brandTitle}>Retails Circle</Text>
          <Text style={styles.brandSub}>OS</Text>
        </View>
      </View>

      <View style={styles.items}>
        {state.routes.map((route, index) => {
          const focused = index === state.index;
          const { options } = descriptors[route.key];
          const label = options.title ?? route.name;
          const contentColor = focused ? colors.white : colors.muted;
          const icon = options.drawerIcon?.({ color: contentColor, size: 22, focused });

          const inner = (
            <>
              <View style={styles.iconSlot}>{icon}</View>
              <Text style={[styles.label, { color: contentColor }]}>{label}</Text>
            </>
          );

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={{ selected: focused }}
              onPress={() => {
                const event = navigation.emit({
                  type: 'drawerItemPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!focused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
              style={styles.itemWrap}>
              {focused ? (
                <LinearGradient
                  colors={['#7629f9', '#9333ea']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[styles.item, styles.itemActive]}>
                  {inner}
                </LinearGradient>
              ) : (
                <View style={styles.item}>{inner}</View>
              )}
            </Pressable>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 8,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  logo: {
    height: 44,
    width: 44,
    borderRadius: 12,
  },
  brandTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
  brandSub: {
    fontSize: 12,
    color: colors.faint,
    letterSpacing: 2,
  },
  items: {
    paddingHorizontal: 12,
    gap: 4,
  },
  itemWrap: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 14,
  },
  itemActive: {
    shadowColor: colors.brand,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  iconSlot: {
    width: 22,
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
});
