import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

function Contacto() {
    return (
        <View>
            <Text>Nuestros oficiales del área de Servicio</Text>
            <Text>Cuantos de ustedes han solicitado servicios en línea? </Text>


            <View style={styles.container}>
            <Image
                    style={{ width: 100, height: 150 }}
                    source={require('../assets/SuelinPimentel.jpg')}
                />
                <Text>Suelin Pimentel
                    <br/>
                    Encargada de Area de Servicio
                    <br/>
                    Nuestra área de servicio siempre innovando para mantener informado a todos socios.
                </Text>
                <Text>
                    Numero: 809-287-2386
                    <br/>
                   Correo: supimentel@dgii.gov.do
                </Text>
            </View>

            <View style={styles.container}>
            <Image
                    style={{ width: 100, height: 150 }}
                    source={require('../assets/MariaEscolastico.jpg')}
                />
                <Text>Maria Escolastico
                    <br/>
                    Oficial de Servicio
                    <br/>
                    Nuestra área de servicio siempre innovando para mantener informado a todos socios.
                </Text>
                <Text>
                    Numero: 809-287-2873
                    <br/>
                   Correo: mescolastico@dgii.gov.do
                </Text>
            </View>

            <View style={styles.container}>
            <Image
                    style={{ width: 100, height: 150 }}
                    source={require('../assets/JohannyDuarte.jpg')}
                />
                <Text>Yohanny Duarte
                    <br/>
                    Oficial de Servicio
                    <br/>
                    Nuestra área de servicio siempre innovando para mantener informado a todos socios.
                </Text>
                <Text>
                    Numero: 809-287-2875
                    <br/>
                   Correo: yduarte@dgii.gov.do
                </Text>
            </View>

            <View style={styles.container}>
            <Image
                    style={{ width: 100, height: 150 }}
                    source={require('../assets/AnnyRodriguez.jpg')}
                />
                <Text>Anny Rodriguez
                    <br/>
                    Oficial de Servicio
                    <br/>
                    Nuestra área de servicio siempre innovando para mantener informado a todos socios.
                </Text>
                <Text>
                    Numero: 809-287-2833
                    <br/>
                   Correo: annrodrigu@dgii.gov.do
                </Text>
            </View>

            <View style={styles.container}>
            <Image
                    style={{ width: 100, height: 150 }}
                    source={require('../assets/YulitzaNunez.jpg')}
                />
                <Text>Yulitza Nuñez
                    <br/>
                    Oficial de Servicio
                    <br/>
                    Nuestra área de servicio siempre innovando para mantener informado a todos socios.
                </Text>
                <Text>
                    Numero: 809-287-2833
                    <br/>
                   Correo: ymnunezb@dgii.gov.do
                </Text>
            </View>

        </View>
        
    )
}

export default Contacto
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },})