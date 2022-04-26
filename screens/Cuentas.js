import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Layout from '../Layouts/Layout'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Cuentas() {
    return (
        <Layout>
            <View style={{ margin: 20 }}>
                <View style={{ marginBottom: 20 }}>
                    <View style={styles.sectionHeader}>
                        <MaterialCommunityIcons name="piggy-bank" size={30} color="#4D9749" />
                        <Text style={styles.headerText}>Cuentas</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                        <View>
                            <Text style={{ color: "#4D9749", maxWidth: 200 }}>APORTACIONES</Text>
                            <Text>1613</Text>
                        </View>
                        <View>
                            <Text>Balance disponible</Text>
                            <Text style={{ fontWeight: 'bold' }}>317,261.18</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                        <View>
                            <Text style={{ color: "#4D9749", maxWidth: 200 }}>DEPOSITO DE AHORROS RETIRABLES</Text>
                            <Text>0050772228</Text>
                        </View>
                        <View>
                            <Text>Balance disponible</Text>
                            <Text style={{ fontWeight: 'bold' }}>10.02</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Layout>
    )
}

export default Cuentas;

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