import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';

import MapRN from './src/components/MapRN';
import Index from './src/components/Index';

import styles from './src/assets/jammStyle';

Amplify.configure(config);

export default function App() {
    return (
        <View style={styles.container}>
            <MapRN style={styles.map}/>
            <Index style={{flex: 1}}/>
            <StatusBar style="auto"/>
        </View>
    );
}
