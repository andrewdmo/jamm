import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: 35.594722,
              longitude: -82.554167,
              latitudeDelta: 1,      // 1 deg lat ~ 70 mi
              longitudeDelta: 1
            }}
        />
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
