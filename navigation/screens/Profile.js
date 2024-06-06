import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.vw}>
            <Image source={require('./../images/profile.png')} style={styles.profileImage} />
            <Text style={styles.name}>SHAIKH KAIF</Text>
            <Text style={styles.bio}>React-Native Intern</Text>
            <Text style={styles.bio}>Human Quotient Private Limited</Text>
            <Text style={styles.bio}>University Of Mumbai</Text>
            <Text style={styles.bio}>Thane, Maharashtra, India</Text>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    vw: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    bio: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
    },
});
