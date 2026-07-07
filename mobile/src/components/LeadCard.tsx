import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import type { Lead, LeadSpec } from '@/data/leads';

const flagUk = require('../../assets/images/flag-uk.png');

type LeadCardProps = {
  lead: Lead;
  onOpen?: (lead: Lead) => void;
  onAction?: (lead: Lead) => void;
  onQuickMessage?: (lead: Lead) => void;
  onViewTrends?: (lead: Lead) => void;
};

function SpecRow({ label, value }: LeadSpec) {
  return (
    <View style={styles.specRow}>
      <Text style={styles.specLabel}>{label}:</Text>
      <Text style={styles.specValue}>{value}</Text>
    </View>
  );
}

export default function LeadCard({
  lead,
  onOpen,
  onAction,
  onQuickMessage,
  onViewTrends,
}: LeadCardProps) {
  const { reference, brand, modelYear, name, imageUrl, specs, contact } = lead;
  const imageSource = typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl;

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.refRow}>
            <Text style={styles.meta}>{brand}</Text>
            <View style={styles.dot} />
            <Text style={styles.meta}>{reference}</Text>
          </View>
          <Text style={styles.title}>{name}</Text>
        </View>
        <Text style={styles.meta}>{modelYear}</Text>
      </View>

      {/* Image */}
      <LinearGradient
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.08)']}
        start={{ x: 0.07, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.imageWrap}>
        {imageSource ? (
          <Image
            source={imageSource}
            style={styles.image}
            contentFit="contain"
            transition={200}
          />
        ) : (
          <Text style={styles.noImage}>No image</Text>
        )}

        <Pressable
          onPress={() => onOpen?.(lead)}
          accessibilityLabel={`Open ${name}`}
          style={styles.openBtn}
          hitSlop={8}>
          <Feather name="chevron-right" size={12} color={colors.white} />
        </Pressable>

        <Pressable
          onPress={() => onViewTrends?.(lead)}
          style={styles.trendsBtn}
          hitSlop={6}>
          <Feather name="trending-up" size={16} color={colors.white} />
          <Text style={styles.trendsText}>View Trends</Text>
        </Pressable>
      </LinearGradient>

      {/* Specs */}
      {specs.length > 0 && (
        <View style={styles.specs}>
          {specs.map((spec) => (
            <SpecRow key={spec.label} {...spec} />
          ))}
        </View>
      )}

      {/* Contact */}
      {contact && (
        <View style={styles.contact}>
          {contact.avatarUrl ? (
            <Image source={{ uri: contact.avatarUrl }} style={styles.avatar} />
          ) : (
            <View style={styles.flagWrap}>
              <Image source={flagUk} style={styles.flag} contentFit="cover" />
            </View>
          )}

          <View style={styles.contactText}>
            <Text style={styles.contactName} numberOfLines={1}>
              {contact.name}
            </Text>
            <View style={styles.messageRow}>
              <Pressable onPress={() => onQuickMessage?.(lead)} hitSlop={6}>
                <MaterialCommunityIcons name="message-plus-outline" size={12} color={colors.white} />
              </Pressable>
              <Text style={styles.contactMessage} numberOfLines={1}>
                {contact.message}
              </Text>
              <Text style={styles.readMore}>Read more ...</Text>
            </View>
          </View>

          <Pressable
            onPress={() => onAction?.(lead)}
            accessibilityLabel="Message contact"
            style={styles.actionBtn}
            hitSlop={8}>
            <Image
              source={require('../../assets/images/whatsapp.png')}
              style={styles.whatsapp}
              contentFit="contain"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerLeft: {
    gap: 4,
  },
  refRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  meta: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.paragraph,
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 999,
    backgroundColor: colors.paragraph,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  imageWrap: {
    height: 196,
    marginHorizontal: 0, // Removed horizontal margin to eliminate side margin/box
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 0, // Removed border radius to make the image edge-to-edge
    backgroundColor: colors.surface2,
    borderWidth: 0, // Removed border for flush edges
    borderColor: 'transparent',
  },
  image: {
    height: '100%',
    width: '100%',
    padding: 0, // Remove padding for edge-to-edge
  },
  noImage: {
    fontSize: 13,
    color: colors.paragraph,
  },
  openBtn: {
    position: 'absolute',
    right: 8,
    top: 8,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: colors.surface,
  },
  trendsBtn: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.surface,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  trendsText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.paragraph,
  },
  specs: {
    padding: 18,
    gap: 24,
  },
  specRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  specLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.paragraph,
  },
  specValue: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.white,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    backgroundColor: colors.surface2,
    borderRadius: 18,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 4,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 999,
  },
  flagWrap: {
    height: 40,
    width: 40,
    borderRadius: 999,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  flag: {
    height: 22,
    width: 22,
    borderRadius: 999,
  },
  contactText: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },
  contactName: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contactMessage: {
    flexShrink: 1,
    fontSize: 12,
    fontWeight: '500',
    color: colors.paragraph,
  },
  readMore: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.white,
  },
  actionBtn: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: colors.surface,
  },
  whatsapp: {
    height: 24,
    width: 24,
  },
});
