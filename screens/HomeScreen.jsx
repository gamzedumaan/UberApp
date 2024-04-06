import React from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';

import NavOptions from '../components/NavOptions';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.image_Container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image_Container: {
    height: 300,
    width: '100%',
    padding: 10,
  },
  image: {
    height: 50,
    width: 100,
  },
});
