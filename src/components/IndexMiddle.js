import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../assets/jammStyle';
import ButtonAlpha from "./ButtonAlpha";


export default class IndexMiddle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.buttonBox}>
                    <ButtonAlpha/>
                </View>
            </View>
        );
    }
}
