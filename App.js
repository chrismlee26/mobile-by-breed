import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';

import Item from './Item'

import { cats } from './breeds'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <StatusBar style="light" />
        <Text style={styles.title}>MittensList 🐈</Text>
        <FlatList
          data={cats}
          ItemSeparatorComponent={(props) => {
            return (
              <View style={styles.separator} />
            );
          }}
          keyExtractor={item => `${item.index}${item.breed}`}

          renderItem={({ item, index }) => {
            return <Item key={index} index={index} data={item} />
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    width: '100%',
  },
  separator: {
    height: 3,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  title: {
    fontFamily: 'AvenirNext-Bold',
    color: 'moccasin',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 30,
  }
});
