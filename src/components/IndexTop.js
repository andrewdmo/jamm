import React, {Component} from 'react';
import {useWindowDimensions, View} from 'react-native';
import Logo from './Logo';
import TitleText from './TitleText';

import styles from '../assets/jammStyle';


export default class IndexTop extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // const windowHeight = useWindowDimensions.height;
        // const logoHeight = windowHeight * .125

        return (
            <View style={styles.title}>
                <TitleText/>
                <Logo style={styles.logo}/>
            </View>
        );
    }
}
