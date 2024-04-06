import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const home = require('./../assets/icons/Home.png');
const business = require('./../assets/icons/location.png');

export default function NavFavorites() {
  const data = [
    {
      id: '1',
      icon: home,
      location: 'Home',
      destination: 'Code Street, London, UK',
    },
    {
      id: '2',
      icon: business,
      location: 'Work',
      destination: 'London Street, London, UK',
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity style={styles.button_Container}>
                <View style={styles.icon_Container}>
                  <Image source={item.icon} style={styles.icon} resizeMode="contain" />
                </View>
                <View style={styles.text_Container}>
                  <Text style={styles.location_Text}>{item.location}</Text>
                  <Text style={styles.destination_Text}>{item.destination}</Text>
                </View>
              </TouchableOpacity>
              <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', opacity: 0.2 }} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  icon: {
    height: 35,
    width: 35,
  },
  icon_Container: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
  },
  text_Container: {
    left: 20,
  },
  location_Text: {
    fontSize: 17,
    fontWeight: '600',
  },
  destination_Text: {
    fontSize: 14,
    fontWeight: '400',
  },
});
