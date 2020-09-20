import React from 'react';
import { Text, StyleSheet, View, Image, Alert } from 'react-native';
import Header from '../../components/Header';

const CreateRecord = () => {
    return (
        <>
            <Header />

            <Text>Hello CreateRecord</Text>

        </>
    )
}
const styles = StyleSheet.create({
    text: {
        color: '#fff'
    }
});

export default CreateRecord;