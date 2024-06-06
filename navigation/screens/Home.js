import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
const Home = () => {
    return (
        <View style={styles.vw}>
            <Image source={require('./../images/HQPL.jpeg')} style={{ width: 580, height: 580 }} />
        </View>
    )
}
export default Home;
const styles = StyleSheet.create({
    vw: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vw1: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt: {
        fontSize: 40,
    }
})