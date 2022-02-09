import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';

import Item from './Item'

import { cats } from './breeds'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#5E8D48"
        barStyle="light-content"
      />
      <FlatList
        data={cats}
        ItemSeparatorComponent={(props) => {
          return (
            <View style={styles.separator} />
          );
        }}
        keyExtractor={(item) => `${item.breed}${item.index}`}

        renderItem={({ item, index }) => {
          return <Item name={item.breed} index={index} key={index} />
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 3,
    backgroundColor: 'gray',
  },
});
