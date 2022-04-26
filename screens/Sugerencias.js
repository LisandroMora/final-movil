import React from 'react'
import { Text, View } from 'react-native'
import Layout from '../Layouts/Layout'

function Sugerencias() {
    return (
        <Layout>
            <View>
                <Text style={{
            fontSize: 15,
            textAlign:"left",
            margingtop: 20,
            padding:10,
            color:"azure",
            }}> 
            Buzon Sugerencias
            </Text>
                
                <Text style={{
            fontSize: 15,
            textAlign:"left",
            margingtop: 20,
            padding:10,
            color:"azure",
            }} >Consejo de Vigilancia</Text>
                
                <Text style={{
            fontSize: 15,
            textAlign:"left",
            margingtop: 20,
            padding:10,
            color:"azure",
            }} >Por favor, completa esta ficha. Tu opinión es importante. La información suministrada será manejada de manera confidencial</Text>

                <Text style={{
            fontSize: 25,
            textAlign:"right",
            margingtop: 20,
            padding:10,
            color:"Black",
            }} >Guia de uso del Buzon Sugerencias</Text>

            <Text style={{
            fontSize: 15,
            textAlign:"right",
            margingtop: 20,
            padding:10,
            color:"Black",
            }} >La presente guía tiene como objetivo establecer los pasos generales para el uso correcto del Buzón sugerencia a fin de que puedas canalizar tus inquietudes, sugerencias y denuncias.</Text>

<Text style={{
            fontSize: 15,
            textAlign:"right",
            margingtop: 20,
            padding:10,
            color:"Black",
            }} >

            1- Las inquietudes, sugerencia y/o denuncias podrán ser remitidas de forma anónima.
            <br/>
            2- Las inquietudes, sugerencia y/o denuncias deben redactarse con la mayor cantidad de información posible.
            <br/>
            3- Al llenar la ficha Online, la misma llegará al correo electrónico del Consejo de Vigilancia
        
        </Text>

        <Text style={{
            fontSize: 15,
            textAlign:"right",
            margingtop: 20,
            padding:10,
            color:"Black",
            }} >

            Denuncia: es la notificación a la autoridad competente de violación o falta a una Ley, Política o Norma establecida.
            <br/>
            Sugerencia: petición, expresión o proposición de una idea.
            </Text>







            </View>
        </Layout>
    )
}

export default Sugerencias