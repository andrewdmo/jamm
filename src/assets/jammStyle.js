import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        // borderColor: "#DDDDDD",
    },

    buttonBox: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: "#DDDDDD",
    },

    buttonBoxBeta: {
        flexDirection: 'row'
    },

    buttonPic: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },

    container: {
        flex: 1,
        // zIndex: 0,
        alignItems: 'stretch',
        backgroundColor: '#6699c2',
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
        flex: 1,
        // position: 'absolute',
        // zIndex: 2,
        // justifyContent: 'center',
        // alignItems: 'stretch',
        backgroundColor: '#194710'
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
        // zIndex: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: .8,
        backgroundColor: '#ffffff',
    },
});

export default styles;
