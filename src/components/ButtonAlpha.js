import React, {Component} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-web';
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
                <View>
                    <TouchableOpacity onPress={this.buttonPress}
                                      style={styles.button}>
                        <View>
                            <Animated.Image source={favicon}
                                            style={styles.buttonPic}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {this.state.buttonpress === true &&
                    <ButtonBetas/>
                    }
                </View>
            </View>
        )
    }
}
