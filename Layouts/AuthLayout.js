import React from 'react';
import { sessionContext } from '../context/sessionContext';
import { useContext } from 'react';
import Login from '../screens/Login';
import { View } from 'react-native';

function AuthLayout({ children }) {
    const { userInfo } = useContext(sessionContext);
    return (
        <View>
            {
                userInfo ? children : <Login />
            }
        </View>
    )
}

export default AuthLayout