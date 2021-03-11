import React, { Component } from 'react'
import { View, ScrollView, KeyboardAvoidingView, StyleSheet, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Text, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('screen');

export default class login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isPasswordHidden: true
    }
  } 

  loginRequest = () => {
    // if((this.state.username == 'inglab') && (this.state.password == '123456'))  {
    //   AsyncStorage.setItem('@accessToken', 'asdfasdf')
    //   this.props.navigation.navigate('App')
    // } else {
    //   alert('Invalid username or password')
    // }
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView style={styles.keyboardContainer} behavior="position" enabled keyboardVerticalOffset={-100}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground source={require('../assets/images/background.png')} style={{width, height}}>
          {/* <StatusBar translucent backgroundColor="transparent" /> */}
          
            <View style={styles.main}>
              
              <View style={styles.logoContainer}>
              <Image source={require('../assets/images/app_logo.png')} style={styles.logo}/>
              </View>
              
              <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Inglab Assessment</Text>
                <View style={styles.fieldContainer}>
                  <Image source={require('../assets/icons/icon_user.png')}/>
                  <TextInput style={styles.fieldInput}
                    placeholder="Username"
                    value={this.state.username}
                    keyboardType='default'
                    autoCorrect={false}
                    maxLength={18}
                    onChangeText={text => this.setState({ username : text })}
                    underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.fieldContainer}>
                  <Image source={require('../assets/icons/icon_password.png')}/>
                  <TextInput style={styles.fieldInput}
                    placeholder="Password"
                    secureTextEntry={this.state.isPasswordHidden ? true : false}
                    autoCorrect={false}
                    maxLength={14}
                    value={this.state.password}
                    onChangeText={text => this.setState({ password : text })}
                    underlineColorAndroid="transparent"/>
                  <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => this.setState({isPasswordHidden: !this.state.isPasswordHidden})}>
                    {this.state.isPasswordHidden ? <Image source={require('../assets/icons/icon_eye_close.png')}/> : <Image source={require('../assets/icons/icon_eye_open.png')}/>}
                  </TouchableOpacity>
                </View> 
              </View>
              
              <View style={styles.buttonContainer}>
                <Button mode="contained" labelStyle={{color:'#fff', fontSize: 16}} color="#4cadc5" onPress={() => this.loginRequest()} style={{paddingVertical: 4}}>
                  LOGIN
                </Button>
              </View>
              
            </View>
          </ImageBackground>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
      
    )
  }
}

const styles = StyleSheet.create({ 
  keyboardContainer: { 
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container:{
    display: 'flex',
    flex: 1
  },
  main: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: width,
    height: height,
  },

  //logo
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
  },  
  logo: {
    width: 150,
    height: 150
  },

  //form
  formContainer: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
  },
  formTitle:{
    fontSize: 20,
    color: '#888b89',
    fontWeight: '400',
    marginVertical: 10
  }, 
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 5,
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: '#cfcfcf',
    width: '100%',
  },
  fieldInput:{
    fontSize: 20,
    flex: 1,
    paddingLeft: 10
  },

  //button
  buttonContainer: {
    flex: 1.5,
    width: '100%',
    justifyContent: 'flex-start',
  },
  
})