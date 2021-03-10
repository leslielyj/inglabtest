import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.checkToken();
  }
  
  checkToken = async () => {
    const userToken = await AsyncStorage.getItem('@accessToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
}