import React, { Component } from 'react'
import { View, ScrollView, KeyboardAvoidingView, StyleSheet, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, ImageBackground, Dimensions, Image, Button } from 'react-native'
import { Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('screen');

export default class login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  } 

  loginRequest = () => {
    if((this.state.username == 'inglab') && (this.state.password == '123456'))  {
      AsyncStorage.setItem('@accessToken', 'asdfasdf')
      this.props.navigation.navigate('App')
    } else {
      alert('Invalid phone number or password')
    }
  }

  render() {
    return (
      
        <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={40}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          
            <View style={styles.container}>
              <ImageBackground source={require('../assets/images/background.png')} style={{width, height}}>
              {/* <StatusBar translucent backgroundColor="transparent" /> */}
              
              <View style={styles.main}>
                <View style={styles.formContainer}>
                  <Image source={require('../assets/images/app_logo.png')} style={styles.logo}/>
                </View>
                <View>
                  <Text>testtttttlooltt</Text>
                </View>
                
                
              </View>
              </ImageBackground>
            </View>
            
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      
    )
  }
}

const styles = StyleSheet.create({ 
  container:{
    flex: 1,
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 60,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150
  }
  
})