import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import Calendario from './pages/Calendario/Calendario';
import CadastroForm from './pages/Cadastro/Cadastro';
import Compromissos from './pages/Compromissos/Compromissos';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Calendario" component={Calendario} />
        <Stack.Screen name="Cadastro" component={CadastroForm} />
        <Stack.Screen name="Compromissos" component={Compromissos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
