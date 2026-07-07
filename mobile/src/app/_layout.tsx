import { Image } from 'expo-image';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DrawerContent from '@/components/DrawerContent';
import { colors } from '@/theme/colors';

const screens: { name: string; title: string; icon: number }[] = [
  { name: 'index', title: 'Home', icon: require('../../assets/layout/home.png') },
  { name: 'sell', title: 'Sell', icon: require('../../assets/layout/sell.png') },
  { name: 'shop', title: 'Shop', icon: require('../../assets/layout/shop.png') },
  { name: 'wishlist', title: 'Wishlist', icon: require('../../assets/layout/wishlist.png') },
  { name: 'orders', title: 'Orders', icon: require('../../assets/layout/orders.png') },
  { name: 'leads', title: 'Leads', icon: require('../../assets/layout/leads.png') },
  { name: 'stock', title: 'Stock', icon: require('../../assets/layout/stock.png') },
  { name: 'listings', title: 'Listings', icon: require('../../assets/layout/litings.png') },
  { name: 'users', title: 'Users', icon: require('../../assets/layout/users.png') },
  { name: 'settings', title: 'Settings', icon: require('../../assets/layout/settings.png') },
];

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Drawer
          drawerContent={(props) => <DrawerContent {...props} />}
          screenOptions={{
            headerStyle: { backgroundColor: colors.base },
            headerTintColor: colors.white,
            headerTitleStyle: { fontWeight: '600' },
            headerShadowVisible: false,
            drawerType: 'front',
            drawerStyle: { backgroundColor: colors.base, width: 288 },
          }}>
          {screens.map(({ name, title, icon }) => (
            <Drawer.Screen
              key={name}
              name={name}
              options={{
                title,
                drawerIcon: ({ color, size }) => (
                  <Image
                    source={icon}
                    style={{ width: size, height: size }}
                    tintColor={color as string}
                    contentFit="contain"
                  />
                ),
              }}
            />
          ))}
        </Drawer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
