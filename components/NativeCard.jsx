import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import NavFavorites from '../components/NavFavorites';

export default function NativeCard() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavFavorites />
      <View style={styles.button_Container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={styles.button_Riders}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome name="car" size={18} color="#fff" />

            <Text style={{ color: '#fff', left: 5 }}>Riders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_Eats}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons name="fast-food-outline" size={24} color="black" />
            <Text style={{ left: 5 }}>Eats</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  button_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 90,
  },
  riders_Button: {
    height: 50,
    width: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  eats_Eats: {},
  button_Eats: {
    height: 45,
    width: 85,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_Riders: {
    height: 45,
    width: 85,
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
