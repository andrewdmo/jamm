import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import styles from '../../assets/jammStyle';
import favicon from '../../assets/favicon.png';

export default class ButtonInstr extends Component {
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
            <ScrollView style={{height: 50}}>
                <Text>Instrument Menu</Text>
                <Text>Instrument Menu</Text>
                <Text>Instrument Menu</Text>
                <Text>Instrument Menu</Text>
                <Text>Instrument Menu</Text>
            </ScrollView>
        )
    }
}
