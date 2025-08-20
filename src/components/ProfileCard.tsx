import React from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { Dimens } from '../constants/dimensions';
import { TextStyles } from '../constants/textStyles';
import { Icons } from '../constants/icons';

type ProfileCardProps = {
  name: string;
  email: string;
  avatar?: ImageSourcePropType;
  onEditPress?: () => void;
};

export const ProfileCard: React.FC<ProfileCardProps> = React.memo(({ name, email, avatar = Icons.avatar, onEditPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardBackground}>
        <View style={styles.cardContent}>
          <Text style={TextStyles.headingMedium}>{name}</Text>
          <View style={{ height: Dimens.spacingS }} />
          <Text style={TextStyles.bodySmall}>{email}</Text>
        </View>
        <Image source={Icons.leftVector} style={styles.leftVector} />
        <Image source={Icons.rightVectorSmall} style={styles.rightVector} />
      </View>

      <View style={styles.avatarWrapper}>
        <View style={styles.avatarBorder}>
          <Image source={avatar} style={styles.avatar} />
        </View>
        <Pressable onPress={onEditPress} style={styles.editButton} android_ripple={{ color: Colors.overlayLight + '4D' }}>
          <View style={styles.editButtonInner}>
            <Image source={Icons.edit} style={styles.editIcon} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const AVATAR_DIAMETER = Dimens.avatarRadius * 2;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardBackground: {
    alignSelf: 'stretch',
    marginTop: Dimens.profileCardTopMargin,
    backgroundColor: Colors.cardBackground,
    borderRadius: Dimens.borderRadiusXL,
    overflow: 'hidden',
    minHeight: Dimens.profileCardTopPadding + Dimens.profileCardBottomPadding + 20,
    justifyContent: 'center',
  },
  cardContent: {
    paddingTop: Dimens.profileCardTopPadding,
    paddingBottom: Dimens.profileCardBottomPadding,
    alignItems: 'center',
  },
  leftVector: {
    position: 'absolute',
    top: 0,
    left: 19,
  },
  rightVector: {
    position: 'absolute',
    bottom: 0,
    right: 17,
  },
  avatarWrapper: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarBorder: {
    borderWidth: Dimens.avatarBorderWidth,
    borderColor: Colors.cardBackground,
    borderRadius: AVATAR_DIAMETER / 2,
  },
  avatar: {
    width: AVATAR_DIAMETER,
    height: AVATAR_DIAMETER,
    borderRadius: AVATAR_DIAMETER / 2,
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderRadius: Dimens.borderRadiusXXL,
  },
  editButtonInner: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 999,
    padding: 1,
  },
  editIcon: {
    width: Dimens.iconSizeXL,
    height: Dimens.iconSizeXL,
  },
});

export default ProfileCard;
