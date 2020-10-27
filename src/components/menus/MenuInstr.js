import React, {Component, useState, useEffect} from 'react';
import {View, ScrollView, Text, ActivityIndicator} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import gql from 'graphql-tag';
// import API, {graphqlOperation} from '@aws-amplify/api';
import styles from '../../assets/jammStyle';
import favicon from '../../assets/favicon.png';
import {listInstruments} from '../../graphql/queries.js';
import {getEnumValues} from "../../graphql/queries";


export default class ButtonAlpha extends Component {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.fetchInstruments = this.fetchInstruments.bind(this);
        this.state = {
            buttonPress: false,
            instruments: [],
            isLoading: true
        };
    }

    componentDidMount() {

        const mountData = new this.fetchInstruments;

        // const mountInstr = mountData.data.description;
        //
        // console.log('mount fetch: ', mountInstr.toString());


        // this.setState({
        //     instruments: [instruments]
        // });
    }

    async fetchInstruments() {

        console.log('async fetch...');

        try {

            //     const instrDataGQL = gql`
            //         query {
            //             __type(name: "InstrumentName") {
            //                 enumValues{
            //                     description
            //                 }
            //             }
            //         }
            //     `;
            //     console.log('instrDataGQL: ', instrDataGQL.toString());
            // const instrNames = instrDataGQL.data.description.map((description) => {
            //     this.setState({
            //         instruments: [instrNames]
            //     });
            // });

            // const instrNameData = await API.graphql(graphqlOperation(getEnumValues));
            // console.log(instrNameData);


            const instrNameData = await API.graphql({
                    query: `{
                   __type(name: "InstrumentName") {
                        name
                        enumValues{
                            description
                            }
                        }
            }`
                    // authMode: 'AWS_IAM'

                } //options


            );    // await API

            if (instrNameData) {    // pseudo callback:
                console.log('instrNameData: ', instrNameData);
                // const [instrNames] = instrData.data.__type.enumValues.map('description', index );
                // const instrNames = instrNameData.__type.enumValues;
                const instrNames = instrNameData.data.__type.enumValues;
                console.log('instrNames: ', instrNames);
                // const [instrNames] = instrNameData.data.type.enumValues.map(index, description);
                this.setState({
                        instruments: instrNames,
                        isLoading: false
                    }
                );
            }

            // .then(this.setState({instruments: {instruments}}
            // ));
            // const instData = await API.graphql({query: queries.listInstruments});


        } catch
            (err) {
            console.log('error fetching instruments', err);
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
        // const instr = this.fetchInstruments.map;
        // const instruments = this.state.instruments.map(instruments, index);

        console.log('render state: ', this.state.instruments);
        return (
            <ScrollView>
                {this.state.isLoading === true &&
                <View style={styles.loadingWheel}>
                    <ActivityIndicator size="small"/>
                </View>
                }
                <Text>{this.state.instruments}</Text>
                {/*{this.state.instruments.map((instruments) => (*/}
                {/*    <Text>{instruments}</Text>*/}
                {/*))}*/}
            </ScrollView>
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
