import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

function Layout({ children }) {
    return (
        <View>
            <View style={styles.banner}>
                <Image
                    style={{ width: "100%", height: 180, position: "absolute" }}
                    source={require('../assets/fondo.png')}
                />
                <View style={{ marginTop: 30, textAlign: "center" }}>
                    <Text style={styles.username}>Hola usuario</Text>
                    <Text style={styles.lastConnection}>Ultima conexion: hoy</Text>
                </View>
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        width: "100%",
        height: 180,
        resizeMode: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        justifyContent: "center",
        alignItems: "center"
    },
    username: {
        color: "#4D9749",
        fontSize: 20,
        fontWeight: "bold",
    },
    lastConnection: {
        color: "#626262",
        fontSize: 12,
    }
})

export default Layout