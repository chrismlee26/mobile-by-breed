import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key !== 'breed')

  return (
    <View>
      <Text style={styles.title}>{index}: {breed}</Text>
      <View>
        {
          keys.map(key =>
            <View style={styles.itemContainer}>
              <Text key={keys.index} style={styles.itemText}>{key}</Text>
              <Text key={keys.index} style={styles.itemText}>{data[key]}</Text>
            </View>
          )
        }
      </View>
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
  itemContainer: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: "row",
  },
  itemText: {
    fontFamily: 'Helvetica',
    color: 'white',
  },
})





export default Item