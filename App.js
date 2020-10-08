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
import ButtonAlpha from "./src/components/ButtonAlpha";

Amplify.configure(config);

export default function App() {
    return (
        <View style={styles.container}>
            {/*<MapRN style={styles.map}/>*/}
            {/*<Index/>*/}
            <View style={styles.top}>
                <TitleText style={styles.title}/>
                <Logo style={styles.logo}/>
            </View>
            <View styles={styles.middle}>
                <View style={styles.buttonBox}>
                    <ButtonAlpha/>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}
