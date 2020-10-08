import React, {Component} from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import styles from '../assets/jammStyle';
import favicon from '../assets/favicon.png';
import ButtonBetas from './ButtonBetas';

export default class ButtonAlpha extends Component {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.state = {
            buttonpress: false
        }
    }

    buttonPress() {
        this.setState({
            buttonpress: !this.state.buttonpress
        }, () => {
            console.log('buttonpress: ', this.state.buttonpress ? 'true' : 'false');
        });
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.buttonPress}
                                  style={styles.button}>
                    <Image source={favicon}
                           style={styles.buttonPic}
                    />
                    <Text>Click here</Text>
                </TouchableOpacity>
                {this.state.buttonpress === true &&
                <ButtonBetas/>
                }
            </View>
        )
    }
}
