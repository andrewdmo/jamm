import React, {Component} from 'react';
import {View} from 'react-native';
import IndexTop from "./IndexTop";
import IndexMiddle from "./IndexMiddle";
import styles from "../assets/jammStyle";
import TitleText from "./TitleText";
import Logo from "./Logo";
import ButtonAlpha from "./ButtonAlpha";


export default class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.top}>
                    <TitleText style={styles.title}/>
                    <Logo style={styles.logo}/>
                </View>
                <View style={styles.middle}>
                    <View style={styles.buttonBox}>
                        <ButtonAlpha style={styles.button}/>

                    </View>
                    {/*<Mapview/>*/}
                </View>
            </View>
        );
    }
}
