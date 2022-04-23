import { sessionContext } from '../context/sessionContext';
import { useContext } from 'react';
import Login from '../screens/Login';
import { View } from 'react-native';

function AuthLayout({ children }) {
    const { userInfo } = useContext(sessionContext);
    return (
        <View>
            {
                userInfo?.success ? children : <Login />
            }
        </View>
    )
}

export default AuthLayout