import React, {Component} from 'react';
import {View} from 'react-native';
import IndexTop from "./IndexTop";
import IndexMiddle from "./IndexMiddle";
import styles from "../assets/jammStyle";


export default class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <IndexTop style={styles.top}/>
                <IndexMiddle style={styles.middle}/>
            </View>
        );
    }
}
