import React, {Component} from 'react';
import {View} from 'react-native';
import IndexTop from "./IndexTop";
import IndexMiddle from "./IndexMiddle";


export default class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <IndexTop/>
                <IndexMiddle/>
            </View>
        );
    }
}
