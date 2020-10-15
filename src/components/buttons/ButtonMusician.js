import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from '../../assets/jammStyle';
import favicon from "../../assets/favicon.png";

export default class ButtonMusician extends Component {

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress() {

    }

    render() {

        return (
            <View style={styles.buttonBoxBeta}>
                <TouchableOpacity onPress={this.buttonPress}
                                  style={styles.button}>
                    <Image source={favicon}
                           style={styles.buttonPicBeta}
                    />
                    <Text>
                        [instrument]
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
