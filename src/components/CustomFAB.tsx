import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/colors';
import { Dimens } from '../constants/dimensions';
import { Icons } from '../constants/icons';

type Props = {
  onPress?: () => void;
};

export const CustomFAB: React.FC<Props> = React.memo(({ onPress }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.outerCircle}>
        <Pressable onPress={onPress} android_ripple={{ color: Colors.overlaySuccess + '4D', borderless: true }} style={styles.innerCircle}>
          <Image source={Icons.navBarMainButton} style={styles.icon} resizeMode="contain" />
        </Pressable>
      </View>
          </View>
    );
  });

const styles = StyleSheet.create({
  wrapper: {
    transform: [{ translateY: Dimens.fabOffset }],
  },
  outerCircle: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 999,
    padding: Dimens.spacingS,
    overflow: 'hidden',
  },
  innerCircle: {
    width: Dimens.fabSize,
    height: Dimens.fabSize,
    backgroundColor: Colors.secondary,
    borderRadius: Dimens.fabSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: Dimens.fabSize,
    height: Dimens.fabSize,
  },
});

export default CustomFAB;
