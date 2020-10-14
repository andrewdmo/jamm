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
            musicianButtonPress: false,
            venueButtonPress: false
        }
    }

    musicianButtonPress() {
        this.setState({
            musicianButtonPress: !this.state.musicianButtonPress,
            venueButtonPress: false,
        }, () => {
            console.log('musicianButtonPress: ', this.state.musicianButtonPress ? 'true' : 'false');
        });
    }

    venueButtonPress() {
        this.setState({
            venueButtonPress: !this.state.venueButtonPress,
            musicianButtonPress: false,
        }, () => {
            console.log('venueButtonPress: ', this.state.venueButtonPress ? 'true' : 'false');
        });
    }

    render() {

        return (
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.buttonText}>Are you a...:</Text>
                <View style={styles.buttonBoxBeta}>
                    <TouchableOpacity onPress={this.musicianButtonPress}
                                      style={styles.button}>
                        <Image source={favicon}
                               style={styles.buttonPicBeta}
                        />
                        <Text style={styles.buttonText}>
                            Musician
                        </Text>
                    </TouchableOpacity>
                    {this.state.musicianButtonPress === true &&
                    <ButtonMusician/>
                    }

                    <TouchableOpacity onPress={this.venueButtonPress}
                                      style={styles.button}>
                        <Image source={favicon}
                               style={styles.buttonPicBeta}
                        />
                        <Text style={styles.buttonText}>
                            Venue
                        </Text>
                    </TouchableOpacity>
                    {this.state.venueButtonPress === true &&
                    // <ButtonVenue/>
                    <Text>[ButtonVenue]</Text>
                    }
                </View>
            </View>
        )
    }
}
