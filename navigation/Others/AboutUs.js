import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AboutUs = () => {
    return (
        <View style={styles.vw}>
            <Text style={styles.txt}>Welcome to our app! We are dedicated to providing the best service possible.
                Our mission is to make your life easier with our innovative solutions.</Text>
        </View>
    )
}

export default AboutUs;

const styles = StyleSheet.create({
    vw: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'

    },
    txt: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black'

    }
})