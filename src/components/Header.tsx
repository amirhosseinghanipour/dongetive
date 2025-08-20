import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { Dimens } from '../constants/dimensions';
import { TextStyles } from '../constants/textStyles';
import { Icons } from '../constants/icons';

type HeaderProps = {
  title?: string;
  onSearchPress?: () => void;
};

export const Header: React.FC<HeaderProps> = React.memo(({ title = 'Profile', onSearchPress }) => {
  return (
    <View style={styles.container}>
      <Image source={Icons.logo} style={styles.logo} resizeMode="contain" />
      <Text style={TextStyles.headingLarge}>{title}</Text>
      <Pressable onPress={onSearchPress} style={styles.searchButton} android_ripple={{ color: Colors.overlayLight + '4D' }}>
        <Image source={Icons.magnifier} style={styles.searchIcon} />
      </Pressable>
          </View>
    );
  });

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.cardBackground,
    borderBottomLeftRadius: Dimens.borderRadiusXXL,
    borderBottomRightRadius: Dimens.borderRadiusXXL,
    paddingTop: 48,
    paddingLeft: Dimens.spacingXL,
    paddingRight: 18,
    paddingBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: Dimens.iconSizeXXL,
    height: Dimens.iconSizeXXL,
  },
  searchButton: {
    borderRadius: Dimens.borderRadiusL,
    padding: Dimens.spacingS,
  },
  searchIcon: {
    width: Dimens.iconSizeL,
    height: Dimens.iconSizeL,
  },
});

export default Header;
