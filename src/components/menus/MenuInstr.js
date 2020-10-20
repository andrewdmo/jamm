import React, {Component, useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import API, {graphqlOperation} from 'aws-amplify';
// import API, {graphqlOperation} from '@aws-amplify/api';
import styles from '../../assets/jammStyle';
import favicon from '../../assets/favicon.png';
import {listInstruments} from '../../graphql/queries.js';


export default class ButtonAlpha extends Component {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.fetchInstruments = this.fetchInstruments.bind(this);
        this.state = {
            buttonPress: false,
            instruments: []
        };

    }

    componentDidMount() {
        // const initialState = {name: '', description: ''};
        //
        // const [formState] = useState(initialState);
        // const [instruments] = useState([]);

        const fetch = this.fetchInstruments;

        // this.setState({
        //     instruments: [instruments]
        // });
    }

    async fetchInstruments() {
        try {
            const instrData = await API.graphql(graphqlOperation(listInstruments));
            // .then(this.setState({instruments: {instruments}}
            // ));
            // const instData = await API.graphql({query: queries.listInstruments});
            console.log(instrData);
            const instrNames = instrData.data.instruments.map((name) => {
                this.setState({
                    instruments: instrNames
                });
            });

        } catch (err) {
            console.log('error fetching instruments');
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
        // const instr = this.fetchInstruments().map;
        // const instruments = this.state.instruments.map(instruments, index);
        return (
            <View>
                <ScrollView>
                    <Text>{this.state.instruments}</Text>
                    {/*{this.state.instruments.map((instruments) => (*/}
                    {/*    <Text>{instruments}</Text>*/}
                    {/*))}*/}
                </ScrollView>
            </View>
        )
    }
}

// {
//     instruments.map((instr, index) => (
//         <View key={instruments.id ? instruments.id : index}>
//             <Text style={styles.buttonText}>{instruments.name}</Text>
//         </View>
//     ))
// }
