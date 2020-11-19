import React, {Component} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {API} from 'aws-amplify';
import styles from '../../assets/jammStyle';


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

        const mountData = this.fetchInstruments;    // just (uncalled) function
        const mountInstr = mountData().then((T) => {
            console.log('mountInstr: ', T);
            // const instrData = T.data.__type.enumValues.map((mappedData) => {
            //     const instr = Object.values(mappedData).toLocaleString();
            //     console.log('.map : ', instr);
            //     this.setState({
            //         instruments: [...this.state.instruments, instr]
            //     });
            // });
        })
        // console.log('mountData: ', mountData);
    }   //didMount

    async fetchInstruments() {
        console.log('async fetch...');
        try {
            // console.log('instrData: ', instrData);
            return await API.graphql({
                    query: `{
                   __type(name: "GenreName") {
                        name
                        enumValues{
                            description
                            }
                        }
            }`,
                    authMode: 'AWS_IAM'
                },  //await options
                {},
            )
                .then((T) => {
                    const instrData = T.data.__type.enumValues.map((mappedData) => {
                        const instr = Object.values(mappedData).toLocaleString();
                        console.log('.map : ', instr);
                        this.setState({
                            instruments: [...this.state.instruments, instr]
                        });
                    });
                    // console.log('await.then T: ', T);
                    return T;   //KEEP!!
                });     //await.then


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
                {this.state.instruments.map((instrRender, index) => {
                    return (
                        <Text>{instrRender}</Text>)
                })}
            </ScrollView>
        )
    }
}
