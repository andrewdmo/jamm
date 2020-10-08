import React, {Component} from 'react';
import {Animated} from 'react-native';
import favicon from '../assets/favicon.png';
import {Easing} from "react-native-web";


export default class Logo extends Component {

    constructor(props) {
        super(props);
        this.animRotate = new Animated.Value(0);
    }

    componentDidMount() {
        this.animRotateClockwise();
    }

    animRotateClockwise() {
        this.animRotate.setValue(0);    // resets value (loops)
        Animated.timing(this.animRotate, {
            useNativeDriver: true,
            toValue: 1,
            duration: 4000,
            easing: Easing.elastic(),
        }).start(() => this.animRotateUnClockwise());
    }

    animRotateUnClockwise() {
        this.animRotate.setValue(1);    // resets value (loops)
        Animated.timing(this.animRotate, {
            useNativeDriver: true,
            toValue: 0,
            duration: 4000,
            easing: Easing.elastic(),
        }).start(() => this.animRotateClockwise());
    }

    onClick() {
        console.log('click');
    }

    render() {
        // const animRotate = useRef(new Animated.Value(0)).current;
        const animRotate = this.animRotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        return (
            <Animated.Image source={favicon}
                            style={{
                                flex: 1,
                                resizeMode: 'contain',
                                height: 125,
                                width: 125,
                                opacity: .8,
                                transform: [
                                    {rotate: animRotate},
                                    {perspective: 1000}     // for Android
                                ],
                                zIndex: 5,
                                overflow: 'visible'
                            }}

            />
        );
    }
}
