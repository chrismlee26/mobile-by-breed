import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data)

  return (
    <View>
      <Text style={styles.text}>{index}: {breed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AvenirNext-Bold',
    color: 'white',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    margin: 1,


  }
})





export default Item