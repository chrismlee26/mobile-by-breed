import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Item(props) {
  const { name, index } = props
  return (
    <View>
      <Text style={styles.text}>{index}: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AvenirNext-Bold',
    color: 'white',
    width: '100%',
    fontWeight: 'bold'


  }
})





export default Item