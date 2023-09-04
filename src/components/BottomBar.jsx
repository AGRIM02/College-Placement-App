import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {Appbar, BottomNavigation, Text } from 'react-native-paper';
import OTP from '../screens/OTP';
import StudentDetails from '../screens/StudentDetails';
import SettingsScreen from '../screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import ProfileScreen from '../screens/ProfileScreen';

// const ProfileRoute = () => navigation.navigate('profile');
const ProfileRoute = () => <ProfileScreen/>;
const NotificationsRoute = () => <Text>Notifications</Text>;
const HomeRoute = () => <Text>Home</Text>;
const SettingsRoute = () => <SettingsScreen/>;

const BottomBar = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Jobs', focusedIcon: 'briefcase', unfocusedIcon: 'briefcase-variant' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline'},
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    { key: 'setting', title: 'Setting', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    profile: ProfileRoute,
    notifications: NotificationsRoute,
    setting: SettingsRoute,
    
  });

  return (
    <BottomNavigation style={styles.conatiner}
      activeColor='#068FFF'
      compact='True'
      barStyle={styles.bar}
      sceneAnimationType='shifting'
      sceneAnimationEnabled='True'
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor:'white',
    marginBottom:-12,
  },
  appbar: {
    marginTop:-25,
    backfaceVisibility:'visible',
    alignItems:'flex-end',
    backgroundColor:'white'
  },
  txt: {
    fontWeight:'bold',
    fontSize:22,
    paddingBottom:10
  }

})

export default BottomBar;
