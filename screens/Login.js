import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from "react-native"
import { useState } from "react"
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { sessionContext } from "../context/sessionContext";
import { useContext } from "react";
import useLogin from "../hooks/useLogin";

function Login() {
    const [loginData, setLoginData] = useState({ usuario: "", clave: "" });
    const { userInfo } = useContext(sessionContext);
    const { logIn } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        logIn({ usuario: loginData.usuario, clave: loginData.clave });
    };

    return (
        <>
            <View style={styles.container}>
                <Image
                    style={{ width: 200, height: 180 }}
                    source={require('../assets/logo.png')}
                />
                <View style={styles.inputContainer}>
                    <AntDesign name="user" size={24} color="black" style={styles.icon} />
                    <TextInput
                        onChangeText={(usuario) => setLoginData({ ...loginData, usuario })}
                        placeholder="Cedula"
                        style={styles.input}
                        value={loginData.usuario}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Foundation name="key" size={24} color="black" style={styles.icon} />
                    <TextInput
                        onChangeText={(clave) => setLoginData({ ...loginData, clave })}
                        placeholder="Contraseña"
                        style={styles.input}
                        value={loginData.clave}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>INICIAR SESION</Text>
                </TouchableOpacity>
                <Text style={styles.forgotPassword}>¿Tienes problemas para iniciar sesion?</Text>
            </View>
            <Image
                style={{ width: "100%", height: 180 }}
                source={require('../assets/fondo.png')}
            />
        </>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        // flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 5,
        margin: 10,
        width: 300,
        // height: 20,
    },
    input: {
        color: '#626262',
        width: 300,
    },
    icon: {
        color: '#626262',
        width: 24,
        height: 24,
        marginRight: 10,
        marginLeft: 5,
    },
    button: {
        backgroundColor: '#4D9749',
        padding: 10,
        margin: 10,
        width: 300,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    forgotPassword: {
        color: '#006bff',
        textAlign: 'center',
        marginTop: 10,
    }
});