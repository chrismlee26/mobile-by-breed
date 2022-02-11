import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feature from './Feature'

function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key !== 'breed')

  return (
    <View>
      <Text style={styles.title}>{index}: {breed}</Text>
      {keys.map(key => <Feature name={key} value={data[key]} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'AvenirNext-Bold',
    color: 'cornflowerblue',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    margin: 1,
  },
})





export default Item