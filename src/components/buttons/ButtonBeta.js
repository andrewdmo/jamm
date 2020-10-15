import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from '../../assets/jammStyle';
import favicon from "../../assets/favicon.png";
import ButtonMusician from "./ButtonMusician";

export default class ButtonBeta extends Component {

    constructor(props) {
        super(props);
        this.musicianButtonPress = this.musicianButtonPress.bind(this);
        this.venueButtonPress = this.venueButtonPress.bind(this);
        this.state = {
            musicianButtonShow: true,
            venueButtonShow: true,
            musicianButtonPress: false,
            venueButtonPress: false
        }
    }

    musicianButtonPress() {
        this.setState({
            musicianButtonPress: true,
            venueButtonShow: false
        });


    }

    venueButtonPress() {
        this.setState({
            venueButtonPress: true,
            musicianButtonShow: false
        });


    }

    render() {

        return (
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.buttonText}>Are you a...:</Text>
                <View style={styles.buttonBoxBeta}>


                    {this.state.musicianButtonShow === true &&

                    <TouchableOpacity onPress={this.musicianButtonPress}
                                      style={styles.button}>
                        <Image source={favicon}
                               style={styles.buttonPicBeta}
                        />
                        <Text style={styles.buttonText}>
                            Musician
                        </Text>
                    </TouchableOpacity>}
                    {this.state.musicianButtonPress === true &&
                    <ButtonMusician/>
                    }


                    {this.state.venueButtonShow === true &&

                    <TouchableOpacity onPress={this.venueButtonPress}
                                      style={styles.button}>
                        <Image source={favicon}
                               style={styles.buttonPicBeta}
                        />
                        <Text style={styles.buttonText}>
                            Venue
                        </Text>
                    </TouchableOpacity>}
                    {this.state.venueButtonPress === true &&
                    // <ButtonVenue/>
                    <Text>[ButtonVenue]</Text>
                    }
                </View>
            </View>
        )
    }
}
