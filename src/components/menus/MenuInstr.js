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
        this.fetchState = this.fetchState.bind(this);
        this.state = {
            buttonPress: false,
            instruments: [],
            isLoading: true
        };
    }

    componentDidMount() {

        const mountData = this.fetchInstruments;
        const mountInstr = mountData().then((T) => {
                console.log('mountInstr: ', T);
                const instrData = T.data.__type.enumValues.map((mappedData) => {
                    const instr = Object.values(mappedData).toLocaleString();
                    console.log('.map : ', instr);
                    const instrState = this.state.instruments;
                    this.setState({
                        instruments: [...this.state.instruments, instr]
                    });
                });

            }
        )
        console.log('mountData: ', mountData);

        // const instrData = mountData.data.__type.enumValues.map((mountData) => {
        //     console.log('.map : ', mountData);
        //
        //     // this.setState({
        //     //     instruments: {mountData}
        //     // });
        // });


        // this.setState({
        //     instruments: this.FetchInstruments(),
        //     // isLoading: false //todo
        // });

    }   //didMount

    fetchState(T) {
        this.setState({
            // instruments: instrNames
            instruments: T
        });

    }

    async fetchInstruments() {

        console.log('async fetch...');

        try {
            const instrData = await API.graphql({
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
            ).then((T) => {

                // console.log('await.then T: ', T);
                return T;   //KEEP!!

            }); //await.then

            console.log('instrData: ', instrData);

            return instrData;
            // console.log('instrNames: ', instrNames);
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
        const time = new Date();
        console.log('render state: ', time.toTimeString(), this.state.instruments);
        return (
            <ScrollView>
                {this.state.isLoading === true &&
                <View style={styles.loadingWheel}>
                    <ActivityIndicator size="small"/>
                </View>
                }
                {this.state.instruments.map((instrRender) => {
                    return (
                        <Text>{instrRender}</Text>)
                })}
                {/*<MenuInstrHook/>*/}
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
