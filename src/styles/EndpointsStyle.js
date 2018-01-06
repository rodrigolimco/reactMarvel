import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

    textStyle: {
        color: 'rgb(247,247,247)',
        textAlign: 'center',
        fontSize: 20 ,
        fontWeight: '500', 
        padding: 10,
        paddingHorizontal: 5
    },

    textContainer: {
        position: 'absolute',
        padding: 1,
        right: 0,
        left: 0,
        top: (Dimensions.get('window').height / 2 - 50) / 2-30,
        backgroundColor: 'rgba(128,128,128,0.8)',
    },

    image: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: Dimensions.get('window').width / 2 - 20,
        height: Dimensions.get('window').height / 2 - 50,
    },

    sectionContainer: {
        margin: 10,
        width: Dimensions.get('window').width / 2 - 20,
        height: Dimensions.get('window').height / 2 - 20,
    },

    mainContainer: {
        flex: 1,
        backgroundColor: 'rgb(222,53,46)',
    },

    smallContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        marginBottom: 10,
    },

    spinner: {
        marginBottom: 50,
        alignItems: 'center',
        position: 'absolute',
        top: Dimensions.get('window').height / 2 - 80,
        //top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
})

