import React, {Component} from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import styles from '../../assets/jammStyle';
import favicon from '../../assets/favicon.png';
import ButtonBeta from './ButtonBeta';

export default class ButtonAlpha extends Component {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.state = {
            buttonPress: false
        }
    }

    buttonPress() {
        this.setState({
            buttonPress: !this.state.buttonPress
        }, () => {
            console.log('buttonpress: ', this.state.buttonPress ? 'true' : 'false');
        });
    }

    render() {
        return (
            <View style={styles.buttonBox}>
                <TouchableOpacity onPress={this.buttonPress}
                                  style={styles.button}>
                    <Image source={favicon}
                           style={styles.buttonPic}
                    />
                    {this.state.buttonPress === false &&
                    <Text style={styles.buttonText}>Click here</Text>
                    }
                </TouchableOpacity>
                {this.state.buttonPress === true &&
                <ButtonBeta style={styles.buttonBox}/>
                }
            </View>
        )
    }
}
