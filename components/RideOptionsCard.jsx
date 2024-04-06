import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('screen').width;

const data = [
  {
    id: 'Uber-123',
    title: 'Uber X',
    image: require('./../assets/image/carX.png'),
  },
  {
    id: 'Uber-456',
    title: 'Uber XL',
    image: require('./../assets/image/carXL.png'),
  },
];
export default function RideOptionsCard() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.tab_Container}>
        <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()} />
        <Text style={styles.title_Text}>Select a Ride</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: deviceHeight / 7,
                  width: deviceWidth / 1.1,
                  backgroundColor: selected ? 'white' : '#F8F6F4',
                  padding: 5,
                  margin: 5,
                }}
                onPress={() => setSelected(!item)}>
                <Image style={styles.image} source={item.image} />
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.travel_Text}>Travel Time</Text>
                </View>
                <Text style={styles.price}>£88</Text>
              </TouchableOpacity>
            );
          }}
        />

        <TouchableOpacity  style={{ alignItems: 'center' }}>
          <View style={styles.button}>
            <Text style={styles.button_Text}>Choose Uber XL</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  tab_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    left: 15,
  },
  title_Text: {
    fontSize: 20,
    left: 90,
    fontWeight: '600',
  },
  button_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  travel_Text: {},
  price: {
    fontSize: 15,
    fontWeight: '600',
  },
  button: {
    height: 40,
    width: deviceWidth / 1.1,
    backgroundColor: 'black',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button_Text: {
    color: 'white',
    fontSize: 17,
  },
});
