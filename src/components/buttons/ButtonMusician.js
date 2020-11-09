import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../assets/jammStyle';
import favicon from '../../assets/favicon.png';
import musicNote from '../../assets/music-note-md.png';

// import MenuInstrument from '../menus/MenuInstr';
import MenuInstrHook from '../menus/MenuInstrHook';
import MenuInstr from "../menus/MenuInstr";



export default class ButtonMusician extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vocalButtonPress: false,
            guitarButtonPress: false,
            bassButtonPress: false,
            drumsButtonPress: false,
            otherButtonPress: false
        }
        this.vocalButtonPress = this.vocalButtonPress.bind(this);
        this.guitarButtonPress = this.guitarButtonPress.bind(this);
        this.bassButtonPress = this.bassButtonPress.bind(this);
        this.drumsButtonPress = this.drumsButtonPress.bind(this);
        this.otherButtonPress = this.otherButtonPress.bind(this);

    }

    vocalButtonPress() {
        this.setState({vocalButtonPress: !this.state.vocalButtonPress});
        // call GraphQL API
    }

    guitarButtonPress() {
        this.setState({guitarButtonPress: !this.state.guitarButtonPress});
    }

    bassButtonPress() {
        this.setState({bassButtonPress: !this.state.bassButtonPress});
    }

    drumsButtonPress() {
        this.setState({drumsButtonPress: !this.state.drumsButtonPress});
    }

    otherButtonPress() {

        this.setState({otherButtonPress: !this.state.otherButtonPress});
    }

    render() {
        // const InstrumentList = new MenuInstrHook();
        return (
            <View>
                <Text style={styles.buttonText}>Do you play...:</Text>
                <View style={styles.buttonBoxBeta}>
                    <TouchableOpacity onPress={this.vocalButtonPress}
                                      style={styles.button}>
                        <Image source={favicon}
                               style={styles.buttonPicGamma}
                        />
                        {this.state.vocalButtonPress === true &&
                        <Image source={musicNote}
                               style={styles.buttonPicNote}/>
                        }
                        <Text style={styles.buttonText}>
                            Vocalist
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.guitarButtonPress}
                                      style={styles.button}>
                        <Image source={favicon}
                               style={styles.buttonPicGamma}
                        />
                        {this.state.guitarButtonPress === true &&
                        <Image source={musicNote}
                               style={styles.buttonPicNote}/>
                        }
                        <Text style={styles.buttonText}>
                            Guitar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.bassButtonPress}
                                      style={styles.button}>
                        <Image source={favicon}
                               style={styles.buttonPicGamma}
                        />
                        {this.state.bassButtonPress === true &&
                        <Image source={musicNote}
                               style={styles.buttonPicNote}/>
                        }
                        <Text style={styles.buttonText}>
                            Bass
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.drumsButtonPress}
                                      style={styles.button}>
                        <Image source={favicon}
                               style={styles.buttonPicGamma}
                        />
                        {this.state.drumsButtonPress === true &&
                        <Image source={musicNote}
                               style={styles.buttonPicNote}/>
                        }
                        <Text style={styles.buttonText}>
                            Drums
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.otherButtonPress}
                                      style={styles.button}>
                        <Image source={favicon}
                               style={styles.buttonPicGamma}
                        />
                        <Text style={styles.buttonText}>
                            Other >>
                        </Text>
                        {this.state.otherButtonPress === true &&
                        <View>
                            <MenuInstr/>
                        </View>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
