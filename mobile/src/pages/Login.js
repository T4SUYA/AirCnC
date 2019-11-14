import React from  'react';
import { StyleSheet,KeyboardAvoidingView, Platform, Text,TextInput, View, Image, TouchableOpacity } from 'react-native';

import Logo from '../assets/logo.png';
import api from '../services/api';

export default function Login () {
    return <KeyboardAvoidingView enabled =  {Platform === 'ios'} behavior ='padding' style = {styles.container}>
            <Image source = {Logo}/>
            <View style = {styles.form}>
                <Text style = {styles.label}>SEU E-MAIL *</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = 'Tecnologias de interesse'
                    placeholderTextColor = '#999'
                    keyboardType ='email-address'
                    autoCapitalize="words"
                    autoCorrect = {false}
                />
                <Text style = {styles.label}>TECNOLOGIAS *</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = 'Seu e-mail'
                    placeholderTextColor = '#999'
                    keyboardType ='email-address'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                />
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>
                        Encontrar spots
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems: "center",
    },

    form: {
        alignSelf: "stretch",
        paddingHorizontal: 30,
        marginTop:  30,
    },
    label: {
        fontWeight : 'bold',
        color: '#444',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight:"bold",
        fontSize: 16,
    },
});