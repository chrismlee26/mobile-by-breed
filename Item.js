import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Item({ title }) {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AvenirNext-Bold',
    color: 'white',
    padding: 4,
    borderWidth: .5,
    borderColor: 'white',
    alignSelf: 'stretch',
    width: '100%',
    fontWeight: 'bold'


  }
})





export default Item