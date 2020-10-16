import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    button: {
        justifyContent: 'space-around',
        alignItems: 'center',
        opacity: .9,
    },

    buttonBox: {
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: 50,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: "#be3b3b",
        opacity: .9
    },

    buttonBoxBeta: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 25,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: "#6699c2",
    },

    buttonBoxMusician: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
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

    buttonPicGamma: {
        height: 75,
        width: 75,
        resizeMode: 'contain',
        // position: 'absolute'
    },

    buttonPicNote: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
        position: 'absolute',
        ve: 'center'
    },


    buttonText: {
        backgroundColor: '#be3b3b',
        textAlign: 'center',
        color: 'beige',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'grey',
        marginTop: 10
    },

    container: {
        flex: 1,
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
        flex: 1,
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
