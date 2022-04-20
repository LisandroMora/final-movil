import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SessionProvider } from './context/sessionContext';
import Login from './screens/Login';
import Resumen from './screens/Resumen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Cuentas from './screens/Cuentas';
import Prestamos from './screens/Prestamos';
import Solicitudes from './screens/Solicitudes';
import Descuentos from './screens/Descuentos';
import Noticias from './screens/Noticias';
import Sugerencias from './screens/Sugerencias';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SessionProvider>
      {/* <View style={styles.container}>
        <Resumen />
      </View> */}
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation initialRouteName="Resumen">
          <Drawer.Screen name="Resumen" component={Resumen} />
          <Drawer.Screen name="Cuentas" component={Cuentas} />
          <Drawer.Screen name="Prestamos" component={Prestamos} />
          <Drawer.Screen name="Solicitudes" component={Solicitudes} />
          <Drawer.Screen name="Descuentos" component={Descuentos} />
          <Drawer.Screen name="Noticias" component={Noticias} />
          <Drawer.Screen name="Sugerencias" component={Sugerencias} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SessionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
