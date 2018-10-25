import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Page2 extends React.Component {


  render() {
    return (
      <View style={styles.container}>
      <Text> Pie > Cake </Text>
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
