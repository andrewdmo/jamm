import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import IndexTop from './src/components/IndexTop';
import IndexMiddle from './src/components/IndexMiddle';
import MapRN from './src/components/MapRN';

import styles from './src/assets/jammStyle';

Amplify.configure(config);

export default function App() {
    return (
        <View style={styles.container}>
            <MapRN/>
            <IndexTop/>
            <IndexMiddle/>
            <StatusBar style="auto"/>
        </View>
    );
}
