import React from 'react';
import { View, StyleSheet, TextInput, Image, FlatList, Text } from 'react-native';
import { products } from './../Others/Products';

const Search = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.image} style={styles.Image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>₹{item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Search' />
            <FlatList
                data={products.category.flatMap(cat => cat.data)}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        borderColor: '#000',
        borderWidth: 0.8,
        width: '90%',
        paddingTop: 10,
        paddingLeft: 20,
        fontSize: 25,
        marginBottom: 10,
    },
    item: {
        alignItems: 'center',
        margin: 10,
    },
    Image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
    },
    Name: {
        fontSize: 16,
        marginTop: 5,
    },
    Price: {
        fontSize: 14,
        color: '#888',
    },
});

export default Search;
