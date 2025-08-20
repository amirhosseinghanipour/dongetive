import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';
import { Dimens } from '../constants/dimensions';
import { demoUser } from '../models/User';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import InfoCards from '../components/InfoCards';
import MenuItems from '../components/MenuItems';
import GaugeChart from '../components/GaugeChart';
import CustomFAB from '../components/CustomFAB';
import CustomNavigationBar from '../components/CustomNavigationBar';

export const ProfileScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavItemTapped = (index: number) => {
    setCurrentIndex(index);
  };

  const handleEditPress = () => {
    // TODO: Implement edit profile
    console.log('Edit profile pressed');
  };

  const handleSearchPress = () => {
    // TODO: Implement search
    console.log('Search pressed');
  };

  const handleFABPress = () => {
    // TODO: Implement FAB action
    console.log('FAB pressed');
  };

  const handleChangePassword = () => {
    // TODO: Implement change password
    console.log('Change password pressed');
  };

  const handleSignOut = () => {
    // TODO: Implement sign out
    console.log('Sign out pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onSearchPress={handleSearchPress} />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ProfileCard 
          name={demoUser.name}
          email={demoUser.email}
          onEditPress={handleEditPress}
        />
        
        <View style={{ height: Dimens.spacingL }} />
        
        <InfoCards user={demoUser} />
        
        <View style={{ height: Dimens.spacingXL }} />
        
        <MenuItems 
          onChangePassword={handleChangePassword}
          onSignOut={handleSignOut}
        />
        
        <View style={{ height: Dimens.spacingXL }} />
        
        <GaugeChart 
          defiPercentage={36.0}
          ethereumPercentage={64.0}
        />
        
        <View style={{ height: Dimens.spacingXXXL }} />
      </ScrollView>

      <CustomFAB onPress={handleFABPress} />
      <CustomNavigationBar 
        currentIndex={currentIndex}
        onNavItemTapped={handleNavItemTapped}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.scaffoldBackground,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: Dimens.spacingXL,
  },
});

export default ProfileScreen; 