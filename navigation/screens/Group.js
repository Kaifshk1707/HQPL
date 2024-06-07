import { View, Text, StyleSheet, Alert, Button, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Group = () => {
    const [category, setCategory] = useState(null);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Group Type</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Touch')}>
                    <Text style={styles.buttonText}>Public</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Touch')}>
                    <Text style={styles.buttonText}>Private</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Touch')}>
                    <Text style={styles.buttonText}>Paid</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Group Name</Text>
            <TextInput style={styles.inputName} placeholder='Enter group name' />
            <Text style={styles.label}>Group Description</Text>
            <TextInput style={styles.inputDes} placeholder='Enter group description' />

            <View style={styles.VwCat}>
                <Text style={styles.label}>Group Category</Text>
                <RNPickerSelect
                    onValueChange={(value) => setCategory(value)}
                    items={[
                        { label: 'Technology', value: 'category1' },
                        { label: 'Company', value: 'category2' },
                        { label: 'Languages', value: 'category3' },
                        { label: 'Stocks', value: 'category4' },
                        { label: 'Education', value: 'category5' },
                        { label: 'News', value: 'category6' },
                        { label: 'Jobs', value: 'category7' },
                        { label: 'City', value: 'category8' },
                        { label: 'Politics', value: 'category9' },
                        { label: 'General', value: 'category10' },
                        { label: 'Music', value: 'category11' },
                        { label: 'Movies', value: 'category12' },
                        { label: 'Business', value: 'category13' },
                        { label: 'Science', value: 'category14' },
                        { label: 'Personalities', value: 'category15' },
                        { label: 'History', value: 'category16' },
                        { label: 'Currency', value: 'category17' },
                        { label: 'CryptoCurrency', value: 'category18' },
                        { label: 'BlockChain', value: 'category19' },
                        { label: 'Sports', value: 'category20' },
                        { label: 'NGO', value: 'category21' },
                        { label: 'Social', value: 'category22' },
                    ]}
                    style={SelectStyles}
                    placeholder={{ label: "Select" }}
                />
            </View>

            <View>
                <Text style={styles.label}>Group Photo</Text>
                {/* <TextInput style={styles.inputphoto} /> */}
                <TouchableOpacity style={styles.inputphoto} onPress={() => Alert.alert('Upload Photo')}>
                    <Image source={require('./../images/plus.png')} style={{ width: 20, height: 20, alignSelf: 'center' }} />
                </TouchableOpacity>

            </View>
            <View style={styles.buttonWrapper}>
                <Button
                    title="SUBMIT"
                    onPress={() => Alert.alert('Submitted')}
                    color={'#E6BE29'}
                />
            </View>

        </ScrollView>
    );
};

export default Group;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 5,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#000',
    },
    label: {
        fontSize: 20,
        color: 'black',
        marginBottom: 5,
        fontWeight: '500',
    },
    inputName: {
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    inputDes: {
        padding: 60,
        fontSize: 18,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    buttonWrapper: {
        marginBottom: 25,
        borderRadius: 5,
    },
    VwCat: {
        marginBottom: 10,
    },
    inputAndroid: {
        fontSize: 16,
        backgroundColor: '#DDDDDD',
    },
    inputphoto: {
        borderColor: '#000',
        padding: 50,
        width: 40,
        fontSize: 18,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    }
});

const SelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        backgroundColor: '#DDDDDD',
    },
});
