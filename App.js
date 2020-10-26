import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';

import MapRN from './src/components/MapRN';
import Index from './src/components/Index';

import styles from './src/assets/jammStyle';
import TitleText from "./src/components/TitleText";
import Logo from "./src/components/Logo";
import ButtonAlpha from "./src/components/buttons/ButtonAlpha";

Amplify.configure(config);

// Amplify.configure({
//     API: {
//         graphql_endpoint: 'http://192.168.1.92:20002/graphql'
//     }
// });

export default function App() {
    return (
        <View style={styles.container}>
            <Index/>
            <StatusBar style="auto"/>
        </View>
    );
}
