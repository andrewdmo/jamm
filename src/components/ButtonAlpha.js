import React, {Component} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
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
                            <Image source={favicon}
                                            style={styles.buttonPic}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                {this.state.buttonpress === true &&
                <ButtonBetas/>
                }
            </View>
        )
    }
}
