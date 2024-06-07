import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select';


const Announcements = () => {
    const [category, setCategory] = useState(null);
    const [category1, setCategory1] = useState(null);
    const [category2, setCategory2] = useState(null);
    const [category3, setCategory3] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.VwCat}>

                <TouchableOpacity onPress={() => Alert.alert('Feeds')}>
                    <Text style={styles.label}>Feeds</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Alert.alert('Announcements')}>
                    <Text style={styles.label} >Announcements</Text>
                </TouchableOpacity>

                <RNPickerSelect
                    onValueChange={(value) => setCategory(value)}
                    items={[
                        { label: '#Guides', value: 'category1' },
                    ]}
                    style={SelectStyles}
                    placeholder={{ label: "Travels" }}
                />
                <RNPickerSelect
                    onValueChange={(value) => setCategory1(value)}
                    items={[
                        { label: '#News', value: 'category1' },
                        { label: '#Jobs', value: 'category2' },
                    ]}
                    style={SelectStyles}
                    placeholder={{ label: "Books & Literature" }}
                />
                <RNPickerSelect
                    onValueChange={(value) => setCategory2(value)}
                    items={[
                        { label: '#Educations', value: 'category1' },
                    ]}
                    style={SelectStyles}
                    placeholder={{ label: "Business" }}
                />
                <RNPickerSelect
                    onValueChange={(value) => setCategory3(value)}
                    items={[
                        { label: 'No Channels created', value: 'category1' },
                    ]}
                    style={SelectStyles}
                    placeholder={{ label: "Lifestyle" }}
                />
            </View>
        </View>
    )
}

export default Announcements;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f5f5f5',
    },
    label: {
        fontSize: 25,
        color: 'black',
        fontWeight: '330',
        borderWidth: 0.5,
        paddingLeft: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    VwCat: {
        marginBottom: 10,
    }
});

const SelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        // backgroundColor: '#DDDDDD',
    },
});