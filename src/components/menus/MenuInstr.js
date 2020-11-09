import React, {Component, useState, useEffect} from 'react';
import {View, ScrollView, Text, ActivityIndicator} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import gql from 'graphql-tag';
// import API, {graphqlOperation} from '@aws-amplify/api';
import {MenuInstrHook} from './MenuInstrHook';
import styles from '../../assets/jammStyle';
import favicon from '../../assets/favicon.png';
import {listInstruments} from '../../graphql/queries.js';
import {getEnumValues} from "../../graphql/queries";


export default class MenuInstr extends Component {
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

        console.log('mountData: ', mountData);

        // const instrNames = mountData.data.__type.enumValues.map((description = "", index) => {
        //
        //         // console.log('.map instraNames: ', instrNames);
        //
        //         console.log('.map index + description: ', index + 1, Object.values(description).toLocaleString());
        //
        //         const instrName = Object.values(description).toLocaleString();
        //
        //         this.setState({
        //             // instruments: instrNames
        //             instruments: [instrName]
        //         });
        //     }
        // );

        // const mountInstr = mountData.data.description;
        //
        // console.log('mount fetch: ', mountInstr.toString());

        // const instruments = MenuInstrHook();

        // this.setState({
        //     instruments: this.FetchInstruments(),
        //     // isLoading: false //todo
        // });
    }

    async fetchInstruments() {

        console.log('async fetch...');

        try {

            const instraData = await API.graphql({
                    query: `{
                   __type(name: "GenreName") {
                        name
                        enumValues{
                            description
                            }
                        }
            }`
                    // authMode: 'AWS_IAM'

                },
                {},
                //options
            );
            const instrNames = instraData.data.__type.enumValues.map((description, index) => {

                // console.log('.map instraNames: ', instrNames);

                const instrName = Object.values(description).toLocaleString();

                console.log('.map index + description: ', index + 1, instrName);

            });
            // this.setState({
            //     // instruments: instrNames
            //     instruments: instrNames
            // });


            console.log('instrNames: ', instrNames);
            // setInstruments(instrNames);


        } catch
            (err) {
            console.log('error fetching instruments', err);
            return err;
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
                {/*<MenuInstrHook/>*/}
                {this.state.instruments.map((instruments) => (
                    <Text>{instruments}</Text>
                ))}
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
