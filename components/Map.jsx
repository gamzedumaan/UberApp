import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map() {
  const [draggablemarker, setDraggableMarker] = useState({
    latitude: 148.11,
    longitude: -26.85,
  });
  const origin = (region) => {
    console.log(region);
  };

  const locationsOfInterest = [
    {
      title: 'First Marker',
      location: {
        latitude: -29.2,
        longitude: 150,
      },
    },
    {
      title: 'Second Marker',
      location: {
        latitude: -29.2,
        longitude: 150,
      },
    },
  ];
  const showLocation = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <MapView
        style={styles.mapView}
        onRegionChange={origin}
        initialRegion={{
          latitude: 39.03459499999999,
          latitudeDelta: 13.589116623444287,
          longitude: 35.244270000000085,
          longitudeDelta: 19.717060810810782,
        }}>
        {showLocation()}
        <Marker
          pinColor="pink"
          draggable="true"
          coordinate={draggablemarker}
          onDragEnd={(e) => setDraggableMarker(e.nativeEvent.coordinate)}
        />
        <Marker
          coordinate={{
            latitude: 39.03459499999999,
            latitudeDelta: 13.589116623444287,
            longitude: 35.244270000000085,
            longitudeDelta: 19.717060810810782,
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapView: {
    height: '100%',
    width: '100%',
  },
});
