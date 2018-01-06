import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgb(222,53,46)',
    },

    image: {
        width: Dimensions.get('window').width,
        height: 200,
    },

    textStyle: {
        color: 'rgb(247,247,247)',
        fontSize: 20,
        fontWeight: '600'
    },

    textContainer: {
        padding: 20,
        flex: 1,
        alignItems: 'center'
    },

    descriptionContainer: {
        margin: 10,
    },

    description: {
        margin: 10,
        marginTop: 5
    },
});