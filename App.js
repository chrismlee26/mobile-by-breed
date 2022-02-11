import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import Item from './Item'

import { cats } from './breeds'

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >
        <StatusBar style="light" />
        <View style={styles.itemContainer}>
          <Text style={styles.title}>MittensList 🐈</Text>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
            placeholderTextColor={'white'}
            opacity={0.6}
          />
          <FlatList
            data={cats.filter(item => item.breed.includes(search))}
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
      </KeyboardAvoidingView>
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
  },
  searchBar: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  kav: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});
