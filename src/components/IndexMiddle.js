import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../assets/jammStyle';
import ButtonAlpha from "./buttons/ButtonAlpha";


export default class IndexMiddle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.buttonBox}>
                <ButtonAlpha/>
            </View>
        );
    }
}
