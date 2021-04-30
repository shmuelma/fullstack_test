// screens/UserDetailScreen.js

import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';

class DeleteUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      isLoading: true
    };
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  updateUser() {
  }
  async deleteUser() {
   
    try {
      const deleteResponse =
        await fetch('http://10.0.2.2:5001/sever-apinode/us-central1/app/api/delete' + item.id, {
          method: 'DELETE',
          headers:{
            'Content-Type': 'application/json'
          }
        });
      }
      catch (error) {
        console.log(error);
    }
  }
  openTwoButtonAlert=()=>{
    let rjx = /[a-zA-Z]+$/
    let isvalid=rjx.test(this.state.name)
    console.warn(isvalid)
    Alert.alert(
      'Delete User',
      'Are you sure?',
      [
        {text: 'Yes', onPress: () => this.deleteUser()},
        {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
    // if(!isvalid){
    //   alert('the name is not leagle!')
    //  }
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
              placeholder={'Email'}
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
    
         <View>
         <Button
            title='Update'
            onPress={() => this.updateUser()} 
            color="#19AC52"
          />
          <Button
            title='Delete'
            onPress={this.openTwoButtonAlert}
            color="#E37399"
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
  },
  button: {
    marginBottom: 7, 
  }
})

export default DeleteUser;