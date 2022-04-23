import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { sessionContext } from '../context/sessionContext';
import Layout from '../Layouts/Layout'

function Resumen() {
    const { userInfo } = useContext(sessionContext);
    return (
        <Layout>
            <View>
                {userInfo?.data?.nombre}
            </View>
        </Layout>
    )
}

export default Resumen