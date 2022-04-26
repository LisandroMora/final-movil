import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { sessionContext } from '../context/sessionContext';
import Layout from '../Layouts/Layout'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import getResume from '../services/getResume';

function Resumen() {
    const { userInfo } = useContext(sessionContext);
    const [resume, setResume] = useState({});

    useEffect(async () => {
        const resumeData = userInfo ? await getResume(userInfo.data.token) : {};
        console.log(resumeData);
        setResume(resumeData);
    }, [userInfo]);

    return (
        <ScrollView>
        <Layout>
             
           
            <View style={{ margin: 20 }}>
            
                {resume?.data?.cuentas &&
                    <View style={{ marginBottom: 20 }}>
                        <View style={styles.sectionHeader}>
                            <MaterialCommunityIcons name="piggy-bank" size={30} color="#4D9749" />
                            <Text style={styles.headerText}>Cuentas</Text>
                        </View>
                        {resume?.data?.cuentas?.map((cuenta, index) => (
                            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                                <View>
                                    <Text style={{ color: "#4D9749", maxWidth: 200 }}>{cuenta?.tipo}</Text>
                                    <Text>{cuenta?.idcuenta}</Text>
                                </View>
                                <View>
                                    <Text>Balance disponible</Text>
                                    <Text style={{ fontWeight: 'bold' }}>{cuenta?.balance_disponible}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                }
                {resume?.data?.inversiones &&
                    <View style={{ marginBottom: 20 }}>
                        <View style={styles.sectionHeader}>
                            <FontAwesome5 name="coins" size={30} color="#4D9749" />
                            <Text style={styles.headerText}>Inversion</Text>
                        </View>
                        {resume?.data?.inversiones?.map((inversion, index) => (
                            <View  key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                                <View>
                                    <Text style={{ color: "#4D9749", maxWidth: 200 }}>{inversion?.tipo}</Text>
                                    <Text>{inversion?.idinversion}</Text>
                                </View>
                                <View>
                                    <Text>Balance disponible</Text>
                                    <Text style={{ fontWeight: 'bold' }}>{inversion?.balance_disponible}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                }
                {resume?.data?.prestamos &&
                    <View style={{ marginBottom: 20 }}>
                        <View style={styles.sectionHeader}>
                            <MaterialIcons name="attach-money" size={30} color="#4D9749" />
                            <Text style={styles.headerText}>Prestamos</Text>
                        </View>
                        {resume?.data?.prestamos?.map((prestamo, index) => (
                            <View  key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                                <View>
                                    <Text style={{ color: "#4D9749", maxWidth: 200 }}>{prestamo?.descripcion}</Text>
                                    <Text>{prestamo?.idprestamo}</Text>
                                </View>
                                <View>
                                    <Text>Balance disponible</Text>
                                    <Text style={{ fontWeight: 'bold' }}>{prestamo?.balance_prestamo}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                 
                }
              
            </View>
            
            
        </Layout>
        </ScrollView>
    )
}

export default Resumen;

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#4D9749'
    }
})