import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

    imageContainer: {
        margin: 10,
        borderColor: 'rgb(247,247,247)',
        borderWidth: 1,
        alignContent: 'center'
    },
    
    image: {
        width: '100%',
        height: 200,
    },

    textContainer: {
        position: 'absolute',
        padding: 10,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(128,128,128,0.7)',
    },

    name: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(247,247,247)',
    },
})