import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import React from 'react';
import LoginScreen from '../screens/login';
import AuthLoadingScreen from '../screens/authloading';
import ContactListScreen from '../screens/contactlist';
import ContactInfoScreen from '../screens/contactinfo';


export const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOption: {
      title: "Login",
    }
  },
}, {
  headerMode: 'none',
});

export const MainStack = createStackNavigator({
  ContactList: {
    screen: ContactListScreen,
  },
  ContactInfo: {
    screen: ContactInfoScreen,
  },
}, {
  headerMode: 'none',
});


export default createAppContainer(
  createSwitchNavigator(
    {
      App: MainStack, 
      Auth: AuthStack,
      // AuthLoading: AuthLoadingScreen
    }, {
      initialRouteName: 'Auth'
    }
  )
)