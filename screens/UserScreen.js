// screens/UserScreen.js

import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'

class UserScreen extends Component {

  constructor() {
    super();
    this.state = {
      userArr:[]
    };
  }

  async selectAll() {
    try {
      console.log('calling read all endpoint');

      this.exampleItems = [];
      const output = await fetch('http://10.0.2.2:5001/sever-apinode/us-central1/app/api/read');
      const outputJSON = await output.json();
      this.setState({userArr:outputJSON})
      console.log('Success');
      console.log(outputJSON);
    } catch (error) {
      console.log(error);
    }
  }


  //  readAll() {
  //   fetch('http://10.0.2.2:5001/sever-apinode/us-central1/app/api/read')
  //             .then(res => res.json())
  //             .then(res => {
  //                 this.setState({userArr: res }, () => {
  //                   console.log(res);
  //                    console.log(this.state.userArr);
  //                 })
  //             })
  //             .catch ((error) => {
  //                 console.log(error);
  //           });
  //         }
  render() {
    
        
    return (
      <ScrollView style={styles.container}>
          {
            this.state.userArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.name}
                  onPress={() => {
                    this.props.navigation.navigate('UserDetailScreen', {
                      userkey: item.key
                    });
                  }}>
                     { <View>
                       
                          <Text> {item.name} </Text>
                          </View>}
                      
                      </ListItem>
              );
            })
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
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

export default UserScreen;