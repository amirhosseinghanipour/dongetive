import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { Dimens } from '../constants/dimensions';
import { TextStyles } from '../constants/textStyles';
import { Icons } from '../constants/icons';

type MenuItemsProps = {
  onChangePassword?: () => void;
  onSignOut?: () => void;
};

export const MenuItems: React.FC<MenuItemsProps> = React.memo(({ onChangePassword, onSignOut }) => {
  return (
    <View>
      <MenuItem title="Change Password" icon={Icons.password} trailingArrow onPress={onChangePassword} />
      <View style={{ height: Dimens.spacingL }} />
      <MenuItem title="Sign Out" icon={Icons.signOut} trailingArrow onPress={onSignOut} />
    </View>
  );
});

const MenuItem: React.FC<{
  title: string;
  icon: any;
  trailingArrow?: boolean;
  onPress?: () => void;
}> = React.memo(({ title, icon, trailingArrow, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} android_ripple={{ color: Colors.overlayLight + '33' }} style={styles.pressable}>
        <View style={styles.row}>
          <Image source={icon} style={styles.leadingIcon} />
          <View style={{ width: Dimens.spacingL }} />
          <View style={styles.textContainer}>
            <Text style={TextStyles.bodyMedium}>{title}</Text>
          </View>
          {trailingArrow ? <Image source={Icons.arrowRight} style={styles.trailingIcon} /> : null}
        </View>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
    borderRadius: Dimens.borderRadiusXL,
    overflow: 'hidden',
  },
  pressable: {
    paddingLeft: Dimens.spacingM,
    paddingRight: Dimens.spacingXL,
    paddingTop: 7,
    paddingBottom: Dimens.spacingM,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leadingIcon: {
    width: Dimens.iconSizeXXXL,
    height: Dimens.iconSizeXXXL,
  },
  trailingIcon: {
    width: Dimens.iconSizeS,
    height: Dimens.iconSizeS,
  },
  textContainer: {
    flex: 1,
  },
});

export default MenuItems;
