import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    button: {
        justifyContent: 'space-around',
        alignItems: 'center',
        opacity: .9,
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: "#DDDDDD",
        // backgroundColor: "tomato"
        // backgroundColor: '#6699c2'

    },

    buttonBox: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: "#DDDDDD",
    },

    buttonBoxBeta: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 25,
    },

    buttonPic: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },

    buttonPicBeta: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },

    buttonText: {
        justifyContent: 'center',
        backgroundColor: '#be3b3b',
        textAlign: 'center',
        color: 'beige',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'grey',
    },

    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: 'beige',
    },

    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    map: {
        flex: 1,
    },

    mapBox: {
        // flex: 1,
    },

    middle: {
        // flex: 4,
        // zIndex: 1,
        // backgroundColor: '#6699c2'
        // backgroundColor: "#f5f5f5"
    },

    middleText: {   // don't define flex
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    title: {
        flex: 2
    },

    titleText: {
        color: '#333333',
    },

    top: {
        // flex: 1,
        // position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: .8,
        // backgroundColor: '#ffffff',
        backgroundColor: '#6699c2'
    },
});

export default styles;
