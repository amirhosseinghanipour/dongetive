import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { Dimens } from '../constants/dimensions';
import { TextStyles } from '../constants/textStyles';
import { Icons } from '../constants/icons';

type Props = {
  currentIndex: number;
  onNavItemTapped: (index: number) => void;
};

export const CustomNavigationBar: React.FC<Props> = React.memo(({ currentIndex, onNavItemTapped }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <NavItem index={0} icon={Icons.profile} label="Profile" currentIndex={currentIndex} onPress={onNavItemTapped} />
        <NavItem index={1} icon={Icons.friends} label="Friends" currentIndex={currentIndex} onPress={onNavItemTapped} />
        <View style={styles.addItemCol}>
          <Text style={TextStyles.caption}>Add Item</Text>
        </View>
        <NavItem index={3} icon={Icons.search} label="Search" currentIndex={currentIndex} onPress={onNavItemTapped} />
        <NavItem index={4} icon={Icons.home} label="Home" currentIndex={currentIndex} onPress={onNavItemTapped} />
      </View>
    </View>
  );
});

const NavItem: React.FC<{
  index: number;
  icon: any;
  label: string;
  currentIndex: number;
  onPress: (index: number) => void;
}> = React.memo(({ index, icon, label, currentIndex, onPress }) => {
  const isActive = currentIndex === index;
  return (
    <Pressable
      android_ripple={{ color: isActive ? 'transparent' : Colors.overlayLight + '33' }}
      onPress={() => onPress(index)}
      style={styles.navItem}
    >
      <Image source={icon} style={[styles.navIcon, { tintColor: isActive ? Colors.textPrimary : Colors.textMuted }]} />
      <View style={{ height: Dimens.spacingXS }} />
      <Text style={isActive ? TextStyles.navLabelActive : TextStyles.navLabel}>{label}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
    height: Dimens.navBarHeight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: '100%',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Dimens.spacingS,
    paddingHorizontal: Dimens.spacingS,
  },
  addItemCol: {
    flex: 1,
    alignItems: 'center',
    marginTop: Dimens.addItemButtonTopSpacing,
  },
  navIcon: {
    width: Dimens.iconSizeM,
    height: Dimens.iconSizeM,
  },
});

export default CustomNavigationBar;
