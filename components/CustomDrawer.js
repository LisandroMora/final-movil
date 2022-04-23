import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { sessionContext } from '../context/sessionContext'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CustomDrawer = (props) => {
    const { userInfo, setLoginInfo } = useContext(sessionContext)
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Image
                    style={{ width: 150, height: 130, margin: "auto", marginVertical: 10 }}
                    source={require('../assets/logo.png')}
                />
                <Text style={{ fontSize: 20, margin: 10 }}>Hola! {userInfo?.data?.nombre || "Usuario"}</Text>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity onPress={() => setLoginInfo(null)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="ios-log-out" size={30} color="#4D9749" style={{ margin: 10 }} />
                    <Text style={{ fontSize: 15, marginLeft: 5 }}>Cerrar Sesion</Text>
                </View>
            </TouchableOpacity>
        </View >

    )
}

export default CustomDrawer