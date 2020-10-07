import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../assets/jammStyle';

export default class ButtonBetas extends Component {

    render() {
        return (
            <View style={
                styles.buttonBoxBeta
            }>
                <TouchableOpacity style={styles.button}>
                    <Text>
                        Find a jammer
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>
                        Find a jamm
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>
                        Find equipment
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>
                        Find a teacher
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
