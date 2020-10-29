import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {API} from "aws-amplify";
import styles from "../../assets/jammStyle";

export function MenuInstrHook(props) {

    const [instruments, setInstruments] = useState([]);

    useEffect(() => {

            const a = new FetchInstruments;

        }, []
    );

    async function FetchInstruments() {


        // console.log('async fetch...');

        try {

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

                },
                {},
                //options
            );
            const instrNames = instrNameData.data.__type.enumValues;
            console.log('instrNames: ', instrNames);
            setInstruments(instrNames);

            return instrNames;


        } catch
            (err) {
            console.log('error fetching instruments', err);
            return err;
        }
    }
}

// Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
