import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('screen').width;

export default function NavOptions() {
  const navigation = useNavigation();
  const Data = [
    {
      id: 1,
      item: 'Get a ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
    },
    {
      id: 2,
      item: 'Order Food',
      image: 'https://links.papareact.com/28w',
      screen: 'EatsScreen',
    },
  ];

  return (
    <FlatList
      horizontal
      data={Data}
      key={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <Pressable style={styles.container}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image resizeMode="contain" style={styles.image} source={{ uri: item.image }} />
              <Text style={styles.item_Text}>{item.item}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                activeOpacity={0.4}
                style={styles.item}>
                <Icon size="18" name="arrowright" type="antdesign" color="#fff" />
              </TouchableOpacity>
            </View>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight / 2,
    width: deviceWidth / 2.3,
    backgroundColor: '#DDDDDD',
    margin: 5,
    top: 10,
  },
  button: { 
    justifyContent: 'space-between',
    flexDirection: 'row ',
    backgroundColor: 'black',
  },
  image: {
    height: 120,
    width: 120,
  },
  item: {
    height: 40,
    width: 40,
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
  item_Text: {
    fontSize: 17,
    fontWeight: '500',
  },
});
