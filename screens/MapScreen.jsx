import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Map from '../components/Map';
import NativeCard from '../components/NativeCard';
import RideOptionsCard from '../components/RideOptionsCard';

const Stack = createNativeStackNavigator();
export default function MapScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />
      <Map />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="NativeCard" component={NativeCard} />
        <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
