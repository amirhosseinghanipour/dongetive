import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { Colors } from '../constants/colors';
import { Dimens } from '../constants/dimensions';
import { TextStyles } from '../constants/textStyles';
import { Icons } from '../constants/icons';

type InfoCardsProps = {
  user: { uid: string; package: string; expiryDate: string };
};

export const InfoCards: React.FC<InfoCardsProps> = React.memo(({ user }) => {
  return (
    <View style={{ height: Dimens.infoCardHeight }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        <InfoCard backgroundColor={Colors.warning}>
          <View style={styles.cardColumn}
          >
            <Text style={TextStyles.infoCardLabel}>Packages</Text>
            <View style={styles.packageRow}>
              <View style={styles.packageDot} />
              <View style={{ width: Dimens.spacingSS }} />
              <Text style={TextStyles.infoCardValue}>{user.package}</Text>
            </View>
          </View>
        </InfoCard>

        <InfoCard backgroundColor={Colors.success}>
          <View style={styles.cardColumn}>
            <Text style={TextStyles.infoCardLabel}>Expires On</Text>
            <Text style={TextStyles.infoCardValue}>{user.expiryDate}</Text>
          </View>
        </InfoCard>

        <Pressable
          android_ripple={{ color: '#FFFFFF33' }}
          onPress={() => copyUid(user.uid)}
          style={styles.uidCard}
        >
          <View style={styles.uidInner}>
            <Text style={TextStyles.uidLabel}>UID (Referral Code)</Text>
            <View style={styles.uidRow}>
              <Image source={Icons.copy} style={styles.uidCopyIcon} />
              <View style={{ width: Dimens.spacingS }} />
              <Text style={TextStyles.uidValue}>{user.uid}</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
});

const copyUid = (uid: string) => {
  try {
    Clipboard.setString(uid);
    ToastAndroid.show(`UID copied to clipboard: ${uid}`, ToastAndroid.SHORT);
  } catch {
    // Fallback: no-op
  }
};

const InfoCard: React.FC<{ backgroundColor: string; children: React.ReactNode }> = React.memo(({ backgroundColor, children }) => {
  return (
    <View style={[styles.infoCard, { backgroundColor }]}> {children} </View>
  );
});

const styles = StyleSheet.create({
  row: {
    paddingRight: Dimens.spacingXL,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardColumn: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  infoCard: {
    marginRight: Dimens.spacingXL,
    borderRadius: Dimens.borderRadiusM,
    paddingHorizontal: Dimens.infoCardHorizontalPadding,
    height: Dimens.infoCardHeight,
    justifyContent: 'center',
  },
  packageRow: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  packageDot: {
    width: Dimens.iconSizeXS,
    height: Dimens.iconSizeXS,
    borderRadius: Dimens.iconSizeXS / 2,
    backgroundColor: '#2E354D',
  },
  uidCard: {
    borderRadius: Dimens.borderRadiusM,
    overflow: 'hidden',
    marginRight: Dimens.spacingXL,
  },
  uidInner: {
    backgroundColor: Colors.primary,
    height: Dimens.infoCardHeight,
    paddingHorizontal: Dimens.infoCardHorizontalPadding,
    justifyContent: 'center',
  },
  uidRow: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  uidCopyIcon: {
    width: Dimens.iconSizeS,
    height: Dimens.iconSizeS,
  },
});

export default InfoCards;
