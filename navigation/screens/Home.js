import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome to our App</Text>
            </View>

            <View style={styles.features}>
                <TouchableOpacity style={styles.feature}>
                    <Image
                        source={require('./../images/Franklin.jpg')}
                        style={styles.featureImage}
                    />
                    <Text style={styles.featureText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.feature}>
                    <Image
                        source={require('./../images/Trevor.jpg')}
                        style={styles.featureImage}
                    />
                    <Text style={styles.featureText}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.feature}>
                    <Image
                        source={require('./../images/Michael.jpg')}
                        style={styles.featureImage}
                    />
                    <Text style={styles.featureText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        paddingVertical: 20,
        backgroundColor: '#6200ea',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    features: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    feature: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 5,
        elevation: 5,
    },
    featureImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    featureText: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});