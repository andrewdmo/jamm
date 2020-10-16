import React, {Component, useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import styles from '../../assets/jammStyle';
import favicon from '../../assets/favicon.png';
import {listInstruments} from "../../graphql/queries";

export default class ButtonAlpha extends Component {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.state = {
            buttonPress: false
        };

        // useEffect(() => {
        //     async function fetchInstruments() {
        //         try {
        //             const todoData = await API.graphql(graphqlOperation(listInstruments));
        //         } catch (err) {
        //             console.log('error fetching instruments');
        //         }
        //     }
        //
        // }, []);
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
            <ScrollView>
                <Text>Instrument Menu</Text>
                <Text>Instrument Menu</Text>
                <Text>Instrument Menu</Text>
                <Text>Instrument Menu</Text>
                <Text>Instrument Menu</Text>
            </ScrollView>
        )
    }
}
