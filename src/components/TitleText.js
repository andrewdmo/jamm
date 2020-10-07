import React, {Component} from 'react';
import {Animated, Dimensions} from 'react-native';

import styles from '../assets/jammStyle';
import View, {Button, Easing} from "react-native-web";


export default class TitleText extends Component {

    constructor(props) {
        super(props);
        this.animBounce = new Animated.Value(0);
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
            // delay: 1000
            // }).start(() => this.startAnimBounce());
        }).start();

    }

    render() {
        const windowWidth = Dimensions.get('window').width;
        const animBounce = this.animBounce.interpolate({
            inputRange: [0, 1],
            outputRange: [windowWidth, 0],
        });
        return (
            <Animated.Text
                style={{
                    flex: 1,
                    transform: [
                        {translateX: animBounce},
                        {perspective: 1000} // without this line this Animation will not render on Android while working fine on iOS
                    ],
                    overflow: 'visible'
                }}
            >[Jamm Banner]</Animated.Text>

        );
    }
}
