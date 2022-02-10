import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key !== 'breed')

  return (
    <View>
      <Text style={styles.title}>{index}: {breed}</Text>
      {
        keys.map(key =>
          <Text key={keys.index} style={styles.itemText}>{key} {data[key]}</Text>
        )
      }
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
  itemText: {
    fontFamily: 'Helvetica',
    color: 'white',
    paddingLeft: 10,
  }
})





export default Item