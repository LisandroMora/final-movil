import React from 'react'
import { Text, View, ScrollView} from 'react-native'
import Layout from '../Layouts/Layout'

function Sugerencias() {
    return (
        <ScrollView>
        <Layout>
            
                <Text style={{
            fontSize: 15,
            textAlign:"left",
            marginTop: 20,
            padding:10,
            
            }}> 
            Buzon Sugerencias
            </Text>
                
                <Text style={{
            fontSize: 15,
            textAlign:"left",
            marginTop: 20,
            padding:10,
            
            }} >Consejo de Vigilancia</Text>
                
                <Text style={{
            fontSize: 15,
            textAlign:"left",
            marginTop: 20,
            padding:10,
            
            }} >Por favor, completa esta ficha. Tu opinión es importante. La información suministrada será manejada de manera confidencial</Text>

                <Text style={{
            fontSize: 25,
            textAlign:"right",
            marginTop: 20,
            padding:10,
            color:"black",
            }} >Guia de uso del Buzon Sugerencias</Text>

            <Text style={{
            fontSize: 15,
            textAlign:"right",
            marginTop: 20,
            padding:10,
            color:"black",
            }} >La presente guía tiene como objetivo establecer los pasos generales para el uso correcto del Buzón sugerencia a fin de que puedas canalizar tus inquietudes, sugerencias y denuncias.</Text>

<Text style={{
            fontSize: 15,
            textAlign:"right",
            marginTop: 20,
            padding:10,
            color:"black",
            }} >

            1- Las inquietudes, sugerencia y/o denuncias podrán ser remitidas de forma anónima.
           
            2- Las inquietudes, sugerencia y/o denuncias deben redactarse con la mayor cantidad de información posible.
            
            3- Al llenar la ficha Online, la misma llegará al correo electrónico del Consejo de Vigilancia
        
        </Text>

        <Text style={{
            fontSize: 15,
            textAlign:"right",
            marginTop: 20,
            padding:10,
            color:"black",
            }} >

            Denuncia: es la notificación a la autoridad competente de violación o falta a una Ley, Política o Norma establecida.
      
            Sugerencia: petición, expresión o proposición de una idea.
            </Text>







            
        </Layout>
        </ScrollView>
    )
}

export default Sugerencias