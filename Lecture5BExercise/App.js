import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Instructions
//    Stack Nav with 3 Screens
//    One screen must have expo component (Webview, Mapview, etc)
//    One Screen should change the default navigator
//    One screen should have the navigation.functions()
//    Drawer Nav with 3 Screens
//    1 screen must have header with a button that opens the drawer, and a button that calls a unique function
//    One screen should change the default navigator
//    You can do whatever you want to the other screen
//    Use Component Lifecycle and AsyncStorage to change the navigator

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>get started yall!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
