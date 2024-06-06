import { View, Text, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const Group = () => {
    return (

        <View style={styles.vw}>
            <TouchableOpacity style={styles.touch} onPress={() => Alert.alert('Touch')}>
                <Text>Press</Text>
            </TouchableOpacity>
            <Button
                title="SUBMIT"
                onPress={() => Alert.alert('Submitted')}
                color={'#E6BE29'}
            />
        </View>
    )
}

export default Group;

const styles = StyleSheet.create({
    vw: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    txt: {
        fontSize: 40,
    },
    touch: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    }
})