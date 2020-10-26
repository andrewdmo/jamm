import React, {Component, useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import gql from 'graphql-tag';
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

        const mountData = new this.fetchInstruments;

        // const mountInstr = mountData.data.description;
        //
        // console.log('mount fetch: ', mountInstr.toString());


        // this.setState({
        //     instruments: [instruments]
        // });
    }

    async fetchInstruments() {

        console.log('async fetch');

        try {

            // const instrDataGQL = gql`
            //     query {
            //         __type(name: "InstrumentName") {
            //             name
            //             enumValues{
            //                 description
            //             }
            //         }
            //     }
            // `;
            // console.log('instrDataGQL: ', instrDataGQL);
            // const instrNames = instrDataGQL.data.description.map((description) => {
            //     this.setState({
            //         instruments: [instrNames]
            //     });
            // });

            const instrData = await API.graphql({
                    query: `{
                __type(name: "InstrumentName") {
                    name
                    enumValues{
                        description
                    }
                }l
            }`,

                // authMode: 'AWS_IAM'


                // () => {   // callback:
                //     console.log('instrData: ', instrData);
                //     // const [instrNames] = instrData.data.__type.enumValues.map('description', index );
                //     const instrNames = instrData.data;
                //
                //     // this.setState({
                //     //         instruments: [instrNames]
                //     //     }
                //     // );
                }
            );     // await API

            // .then(this.setState({instruments: {instruments}}
            // ));
            // const instData = await API.graphql({query: queries.listInstruments});


        } catch
            (err) {
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
        const instr = this.fetchInstruments.map;
        // const instruments = this.state.instruments.map(instruments, index);

        console.log('render state: ', instr);
        return (
            <View>
                <ScrollView>
                    <Text>{instr}</Text>
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
