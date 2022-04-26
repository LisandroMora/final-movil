import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'

function Contacto() {
    return (
        <ScrollView>
            <Text>Nuestros oficiales del área de Servicio</Text>
            <Text>Cuantos de ustedes han solicitado servicios en línea? </Text>


            <View style={styles.container}>
            <Image
                    style={{ width: 100, height: 150 }}
                    source={require('../assets/SuelinPimentel.jpg')}
                />
                <Text>Suelin Pimentel
                   
                    Encargada de Area de Servicio
                    
                    Nuestra área de servicio siempre innovando para mantener informado a todos socios.
                </Text>
                <Text>
                    Numero: 809-287-2386
                 
                   Correo: supimentel@dgii.gov.do
                </Text>
            </View>

            <View style={styles.container}>
            <Image
                    style={{ width: 100, height: 150 }}
                    source={require('../assets/MariaEscolastico.jpg')}
                />
                <Text>Maria Escolastico
                   
                    Oficial de Servicio
                 
                    Nuestra área de servicio siempre innovando para mantener informado a todos socios.
                </Text>
                <Text>
                    Numero: 809-287-2873
           
                   Correo: mescolastico@dgii.gov.do
                </Text>
            </View>

            <View style={styles.container}>
            <Image
                    style={{ width: 100, height: 150 }}
                    source={require('../assets/JohannyDuarte.jpg')}
                />
                <Text>Yohanny Duarte
                    
                    Oficial de Servicio
                    
                    Nuestra área de servicio siempre innovando para mantener informado a todos socios.
                </Text>
                <Text>
                    Numero: 809-287-2875
                    
                   Correo: yduarte@dgii.gov.do
                </Text>
            </View>

            <View style={styles.container}>
            <Image
                    style={{ width: 100, height: 150 }}
                    source={require('../assets/AnnyRodriguez.jpg')}
                />
                <Text>Anny Rodriguez
                   
                    Oficial de Servicio
                   
                    Nuestra área de servicio siempre innovando para mantener informado a todos socios.
                </Text>
                <Text>
                    Numero: 809-287-2833
                   
                   Correo: annrodrigu@dgii.gov.do
                </Text>
            </View>

            <View style={styles.container}>
            <Image
                    style={{ width: 100, height: 150 }}
                    source={require('../assets/YulitzaNunez.jpg')}
                />
                <Text>Yulitza Nuñez
                  
                    Oficial de Servicio
                   
                    Nuestra área de servicio siempre innovando para mantener informado a todos socios.
                </Text>
                <Text>
                    Numero: 809-287-2833
                   
                   Correo: ymnunezb@dgii.gov.do
                </Text>
            </View>

        </ScrollView>
        
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