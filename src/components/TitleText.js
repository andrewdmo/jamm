import React, {Component} from 'react';
import {View, Animated, Dimensions, TouchableOpacity} from 'react-native';

import styles from '../assets/jammStyle';


export default class TitleText extends Component {

    constructor(props) {
        super(props);
        this.animBounce = new Animated.Value(0);
        this.startAnimBounce = this.startAnimBounce.bind(this);
    }

    componentDidMount() {
        this.startAnimBounce();
    }

    startAnimBounce() {
        this.animBounce.setValue(0);     // restarts

        // Animated.timing(this.animBounce, {
        //     toValue: 1,
        //     duration: 5000,
        // }).start();

        Animated.spring(this.animBounce, {
            toValue: 1,
            speed: .01,
            // mass: 2,
            // velocity: 3,
            // friction: 2,
            // delay: 1000,
            // }).start(() => this.startAnimBounce());
            useNativeDriver: true
        }).start();

    }

    render() {
        const windowWidth = Dimensions.get('window').width;
        const animBounce = this.animBounce.interpolate({
            inputRange: [0, 1],
            outputRange: [windowWidth, 0],
        });
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity
                    onPress={this.startAnimBounce}
                >
                    <Animated.Text
                        style={{
                            transform: [
                                {translateX: animBounce},
                                {perspective: 1000} // without this line this Animation will not render on Android while working fine on iOS
                            ],
                            overflow: 'visible'
                        }}
                    >[Jamm Banner]</Animated.Text>
                </TouchableOpacity>
            </View>
        );
    }
}
