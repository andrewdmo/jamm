import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {Dimensions, StyleSheet} from "react-native";

export default class MapRN extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 35.594722,
                longitude: -82.554167,
                latitudeDelta: 1,      // 1 deg lat ~ 70 mi
                longitudeDelta: 1
            },
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }


    onRegionChange(region) {
        this.setState({region});
    }

    render() {
        return (
            <MapView
                style={mapStyles.map}
                region={this.state.region}
            />
        );
    }
}

const mapStyles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute'
    }
});
