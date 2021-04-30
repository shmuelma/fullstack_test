// screens/AddUserScreen.js

import React, { Component } from 'react';
import { Alert,Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import axios from 'axios';

class AddUserScreen extends Component {
  constructor(prpops) {
    super(prpops);
    this.state = {
      name: '',
      lastname: '',
    };
  }
 

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  } 
 
  async saveItem() {
    let rjx = /[a-zA-Z]+$/
    let isvalid=rjx.test(this.state.name)
    console.warn(isvalid)
    if(!isvalid){
      alert('the name is not leagle!')
     }
     else{
    try {
        const requestBody = {
        item:this.state.name
     };
      const createResponse =
        await fetch('http://10.0.2.2:5001/sever-apinode/us-central1/app/api/create', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
           body: JSON.stringify(requestBody)

        });
      alert('Success Add');
        
      // call select all to update the table
    } 
    catch (error) {
      console.log(error);
    }
  }
  }

  // really this is create but the flow is that
  // click the "create item" button which appends a blank value to the array, then click save to actually create it permanently
  
        
  //         fetch('http://10.0.2.2:5001/sever-apinode/us-central1/app/api/read')
  //            .then(res => res.json())
  //            .then(res => {
  //                this.setState({sightings: res }, () => {
  //                   console.log(this.state.sightings);
  //                })
  //            })
  //            .catch ((error) => {
  //                console.log(error);
  //          });
       


  storeUser() {
    if(this.state.name === ''){
     alert('Fill at your name!')
    } else {
      this.setState({
        isLoading: true,
      });      
      
      
    }
  }

  render() {
    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Name'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Lastname'}
              value={this.state.lastname}
              onChangeText={(val) => this.inputValueUpdate(val, 'lastname')}
          />
        </View>
        
        <View style={styles.button}>
          <Button
            title='Add User'
            onPress={() => this.saveItem()} 
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddUserScreen;