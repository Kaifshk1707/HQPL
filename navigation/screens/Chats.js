import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import React from 'react';

const chats = [
    { id: '1', name: 'Trevor', message: 'Hey! How are you?', image: require('./../images/Trevor.jpg') },
    { id: '2', name: 'Dave', message: 'What’s up?', image: require('./../images/Dave.jpg') },
    { id: '3', name: 'Amanda', message: 'i will call later!', image: require('./../images/Amanda.jpg') },
    { id: '4', name: 'Franklin', message: 'Where are you brother', image: require('./../images/Franklin.jpg') },
    { id: '5', name: 'Michael', message: 'Ready for mission!', image: require('./../images/Michael.jpg') },
    { id: '6', name: 'Jimmy', message: 'Son, How are You!', image: require('./../images/Jimmy.jpg') },
    { id: '7', name: 'Devin', message: 'I am Devil!', image: require('./../images/Devin.jpg') },
    { id: '8', name: 'Ron', message: 'Call me, Now Ron!', image: require('./../images/Ron.jpg') },
    { id: '9', name: 'lester', message: 'Ready for mission, yes!', image: require('./../images/Lester.jpg') },
    { id: '10', name: 'Lamar', message: 'waiting for us!', image: require('./../images/Lamar.jpg') },
];

const ChatItem = ({ chat }) => (
    <View style={styles.chatItem}>
        <Image source={chat.image} style={styles.chatImage} />
        <View style={styles.chatTextContainer}>
            <Text style={styles.chatName}>{chat.name}</Text>
            <Text style={styles.chatMessage}>{chat.message}</Text>
        </View>
    </View>
);

const Chats = () => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <TextInput style={{
                    borderColor: '#000',
                    borderWidth: 0.8,
                    width: '90%',
                    paddingTop: 10,
                    paddingLeft: 20,
                    fontSize: 25,
                    marginBottom: 10,
                }} placeholder='Search' /></View>
            <FlatList
                data={chats}
                renderItem={({ item }) => <ChatItem chat={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Chats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#333',
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    chatImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    chatTextContainer: {
        flex: 1,
    },
    chatName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    chatMessage: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
});
