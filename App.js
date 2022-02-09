import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';

import Item from './Item'

import { cats } from './breeds'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        ItemSeparatorComponent={(props) => {
          return (
            <View style={{ height: 1, backgroundColor: 'gray' }} />
          );
        }}
        data={cats}
        key={cats.index}
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
    flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },
});
