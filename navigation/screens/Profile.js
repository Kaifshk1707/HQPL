import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={require('./../images/profile.png')} style={styles.profileImage} />
                <Text style={styles.name}>SHAIKH KAIF</Text>
                <Text style={styles.role}>React-Native Intern</Text>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Company:</Text>
                    <Text style={styles.detailValue}>Human Quotient Private Limited</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Location:</Text>
                    <Text style={styles.detailValue}>Thane, Maharashtra, India</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>University:</Text>
                    <Text style={styles.detailValue}>University Of Mumbai</Text>
                </View>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    role: {
        fontSize: 18,
        color: '#555',
    },
    detailsContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 20,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    detailLabel: {
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold',
        marginRight: 10,
    },
    detailValue: {
        fontSize: 16,
        color: '#777',
    },
});
