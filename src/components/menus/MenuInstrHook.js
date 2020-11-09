import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {API} from "aws-amplify";
import styles from "../../assets/jammStyle";

const MenuInstrHook = (props) => {

    const [instruments, setInstruments] = useState([]);

    useEffect(() => {

            const a = new FetchInstruments;

        }, []
    );

    async function FetchInstruments() {

        console.log('async fetch...');

        try {

            const instrNameData = await API.graphql({
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
            setInstruments(instrNames);

            return (
                <Text>
                    {useState(instrNames)}
                </Text>
            );


        } catch
            (err) {
            console.log('error fetching instruments', err);
            return err;
        }
    }
}

export default MenuInstrHook;

// Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
