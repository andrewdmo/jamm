import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    button: {
        // justifyContent: 'space-around',
        alignItems: 'center'
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: "#DDDDDD",
        // backgroundColor: "tomato"
        // backgroundColor: '#6699c2'

    },

    buttonBox: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: "#DDDDDD",
    },

    buttonBoxBeta: {
        flexDirection: 'row'
    },

    buttonPic: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },

    buttonPicBeta: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },

    container: {
        flex: 1,
        // zIndex: 0,
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
        // position: 'absolute',
        // zIndex: 1
    },

    mapBox: {
        flex: 2,
        borderWidth: 1,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },

    middle: {
        flex: 2,
        // backgroundColor: '#6699c2'
        backgroundColor: "#f5f5f5"
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
        flex: 1,
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
