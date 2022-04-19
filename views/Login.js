import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from "react-native"
import { useState } from "react"
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

function Login() {
    const [loginData, setLoginData] = useState({ cedula: "", password: "" });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);
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
                        name="cedula"
                        value={loginData.username}
                        onChange={handleChange}
                        placeholder="Cedula"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Foundation name="key" size={24} color="black" style={styles.icon} />
                    <TextInput
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        style={styles.input}
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
        flex: 1,
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