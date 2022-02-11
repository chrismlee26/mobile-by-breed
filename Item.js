import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feature from './Feature'

function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key !== 'breed')
  const average = (keys.reduce((acc, key) => {
    return acc + data[key]
  }, 0) / keys.length).toFixed(1)

  return (
    <View>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{index}: {breed}</Text>
        <Text style={styles.title}>{average}</Text>
      </View>
      {keys.map(key => <Feature name={key} value={data[key]} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'AvenirNext-Bold',
    color: 'cornflowerblue',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    margin: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})





export default Item