import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function Feature({ name, value }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: "row",
  },
  itemText: {
    fontFamily: 'Helvetica',
    color: 'white',
  },
  valueText: {
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: 'bold',
  },
})





export default Feature;