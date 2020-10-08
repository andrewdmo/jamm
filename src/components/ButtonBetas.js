import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from '../assets/jammStyle';
import favicon from "../assets/favicon.png";

export default class ButtonBetas extends Component {

    render() {

        return (
            <View style={styles.buttonBoxBeta}>
                <TouchableOpacity onPress={this.buttonPress}
                                  style={styles.button}>
                    <Image source={favicon}
                           style={styles.buttonPicBeta}
                    />
                    <Text>
                        Find a jammer
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.buttonPress}
                                  style={styles.button}>
                    <Image source={favicon}
                           style={styles.buttonPicBeta}
                    />
                    <Text>
                        Find a jamm
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.buttonPress}
                                  style={styles.button}>
                    <Image source={favicon}
                           style={styles.buttonPicBeta}
                    />
                    <Text>
                        Find equipment
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.buttonPress}
                                  style={styles.button}>
                    <Image source={favicon}
                           style={styles.buttonPicBeta}
                    />
                    <Text>
                        Find a teacher
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
