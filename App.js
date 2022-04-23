import { SessionProvider } from './context/sessionContext';
import Resumen from './screens/Resumen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Cuentas from './screens/Cuentas';
import Prestamos from './screens/Prestamos';
import Solicitudes from './screens/Solicitudes';
import Descuentos from './screens/Descuentos';
import Noticias from './screens/Noticias';
import Sugerencias from './screens/Sugerencias';
import CustomDrawer from './components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SessionProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} useLegacyImplementation initialRouteName="Inicio" screenOptions={{
          drawerLabelStyle: {
            marginLeft: -20,
            fontSize: 12,
            fontWeight: 'bold',
          }
        }}>
          <Drawer.Screen name="Inicio" component={Resumen} options={{
            drawerIcon: () => (
              <Ionicons name="home" size={20} color="#4D9749" />
            )
          }} />
          <Drawer.Screen name="Cuentas" component={Cuentas} options={{
            drawerIcon: () => (
              <MaterialCommunityIcons name="piggy-bank" size={20} color="#4D9749" />
            )
          }} />
          <Drawer.Screen name="Prestamos" component={Prestamos} options={{
            drawerIcon: () => (
              <MaterialIcons name="attach-money" size={20} color="#4D9749" />
            )
          }} />
          <Drawer.Screen name="Solicitudes" component={Solicitudes} options={{
            drawerIcon: () => (
              <Ionicons name="newspaper" size={20} color="#4D9749" />
            )
          }} />
          <Drawer.Screen name="Descuentos" component={Descuentos} options={{
            drawerIcon: () => (
              <Ionicons name="calculator" size={20} color="#4D9749" />
            )
          }} />
          <Drawer.Screen name="Noticias" component={Noticias} options={{
            drawerIcon: () => (
              <Entypo name="newsletter" size={20} color="#4D9749" />
            )
          }} />
          <Drawer.Screen name="Sugerencias" component={Sugerencias} options={{
            drawerIcon: () => (
              <Ionicons name="folder-sharp" size={20} color="#4D9749" />
            )
          }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SessionProvider>
  );
}