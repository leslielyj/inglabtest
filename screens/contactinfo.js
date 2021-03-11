import React, { Component } from 'react'
import { View, StyleSheet, TextInput, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper';
const { height, width } = Dimensions.get('screen');

export default class contactinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
  }

  render() {
    const data = this.props.navigation.getParam("userData"); 
    return (
      <ImageBackground source={require('../assets/images/background.png')} style={{width, height}}>
      <View style={styles.main}>
        <View style={styles.userTitle}>
          <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../assets/icons/icon_back.png')}/>
          </TouchableOpacity>
          <Text style={styles.title}>{data.name}</Text>
        </View>
        <Image style={styles.infoImage} source={{uri: data.avatar}}></Image>
        <View style={styles.userInfo}>
          <Image style={styles.infoIcon} source={require('../assets/icons/icon_call.png')}/>
          <Text style={styles.infoText}>{data.phone}</Text>
        </View>
        <View style={styles.userInfo}>
          <Image style={styles.infoIcon} source={require('../assets/icons/icon_email.png')}/>
          <Text style={styles.infoText}>{data.name}@mail.com</Text>
        </View>
        <View style={styles.textArea}>
          <TextInput style={styles.fieldInput}
            placeholder="Description..."
            autoCorrect={false}
            maxLength={14}
            value={this.state.description}
            onChangeText={text => this.setState({ description : text })}
            underlineColorAndroid="transparent"/>
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({ 
  main: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 40,
    paddingBottom: 60
  },

  title:{
    fontSize: 18,
    color: '#888b89',
    fontWeight: 'bold',
    marginBottom: 10
  }, 
  backIcon: {
    position: 'absolute',
    left: 0,
    bottom: 10
  },

  userTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },

  userInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderColor: 'cyan',
    width: '100%',
  },
  infoIcon: {
    position: 'absolute',
    left: 20
  }, 
  infoText: {
    fontSize: 18, 
    color: '#888b89', 
    fontWeight: 'bold', 
    textAlign: 'center'
  },
  infoImage: {
    width: 150, 
    height: 150, 
    borderColor: 'lightgrey', 
    borderWidth: 2
  },

  textArea:{
    flex: 1,
    paddingHorizontal: 5,
    marginTop: 15,
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: '#cfcfcf',
    width: '100%',
    justifyContent: 'flex-start'
  },
  fieldInput:{
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'top'
  },
  
})