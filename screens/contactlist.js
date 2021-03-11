import React, { Component } from 'react'
import { View, ScrollView, KeyboardAvoidingView, StyleSheet, Alert, TextInput, TouchableWithoutFeedback, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper';
const { height, width } = Dimensions.get('screen');
const CONTACTS_API = 'https://api.jsonbin.io/b/604995aa7ffeba41c075719b/3';

export default class contactlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: '',
      contactsData: [],
      searchedData: null
    };
  }

  componentDidMount(){
    // doc: https://jsonbin.io/api-reference/v3/bins/read
    fetch(CONTACTS_API, {
      method: 'GET',
      headers: {
        'secret-key' : '$2b$10$3Aq.4Azn1N0TabIDsP/rdull0968IeB.uovC5c/kIuLhaqS8YnGpm',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result => {
      this.setState({contactsData: result})
      console.log(this.state.contactsData)
    })
    .catch(error => {
      Alert.alert("error:" + error);
    });
  }


  renderList = () => {
    const { contactsData, searchedData } = this.state
    let data = (searchedData == null ? contactsData : searchedData)
    let renderContactsList = [].concat(data)
      .sort((a, b) => a.index > b.index ? 1: -1) //sorted by ‘index’
      .map((data, key) => {
      
      return(
        (data.isActive) ? //display only the records with ‘isActive’ as true
        <TouchableWithoutFeedback key={key} onPress={()=> this.props.navigation.navigate('ContactInfo', {userData: data}) }>
          <View style={styles.itemContainer}>
            <Image style={{width: 100, height: 100}} source={{uri: data.avatar}}></Image>
            <View style={styles.itemInfo}>
              <Text style={{color: '#888b89', fontSize: 18, fontWeight: 'bold'}}>{data.name}</Text>
              <Text style={{color: '#b8b6b6', fontSize: 16}}>{data.phone}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        : null
      );
    })

    return(
      <View style={styles.listContainer}>
        {renderContactsList}
      </View>
    )
  }

  filterData = () => {
    const { searchtext, contactsData } = this.state
    let data = contactsData
    //matching the name or contact number upon clicking the ‘Magnifying glass’ button.
    data = data.filter((item) => (item.name || item.phone) == searchtext).map(({avatar, name, phone, isActive, index}) => ({avatar, name, phone, isActive, index}));
    console.log(data);
    (searchtext == '') ? this.setState({searchedData: null}) : this.setState({searchedData: data})
  }


  render() {
    return (
      <ImageBackground source={require('../assets/images/background.png')} style={{width, height}}>
      <View style={styles.main}>
        <Text style={styles.formTitle}>Inglab Assessment</Text>
        <View style={styles.fieldContainer}>
          <TextInput style={styles.fieldInput}
            placeholder='Search'
            value={this.state.searchtext}
            keyboardType='default'
            autoCorrect={false}
            maxLength={18}
            onChangeText={text => this.setState({ searchtext : text })}
            underlineColorAndroid="transparent"/>
          <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => this.filterData()}>
            <Image style={{marginLeft: 'auto'}} source={require('../assets/icons/icon_search.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, width: '100%', marginBottom: 20}}>
          <ScrollView style={styles.scrollContainer} contentContainerStyle={{ flexGrow: 1 }} >
            {this.renderList()}
          </ScrollView>
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
    paddingBottom: 40
  },

  formTitle:{
    fontSize: 22,
    color: '#888b89',
    fontWeight: '400',
    marginBottom: 10
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

  scrollContainer:{
    marginTop: 20,
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: '#cfcfcf',
    width: '100%',
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10
  },
  itemContainer:{
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#cfcfcf',
    paddingBottom: 10,
  },
  itemInfo: {
    marginLeft: 20,
    justifyContent: 'center'
  }
})