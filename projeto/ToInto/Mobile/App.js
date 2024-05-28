import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import Calendario from './pages/Calendario/Calendario';
import CadastroForm from './pages/Cadastro/Cadastro';
import Compromissos from './pages/Compromissos/Compromissos';
import Planos from './pages/Plano/Planos';
import AdicionarDadosCartao from './pages/Dados Cartao/Cartao';
import ModificarDadosCartao from './pages/Modificar cartao/ModificCart';
import MenuHSI from './pages/Menu/MenuHSI';
import ModificPlano from './pages/Modificar plano/ModificPlano';
import Pix from './pages/Pagina pix/Pix';
import Perfil from './pages/Pagina perfil/Perfil';
import AtualizarCad from './pages/Modificar cadastro/AtualizarCad';
import ToDo from './pages/ToDo/ToDo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#AC72BF', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />
        <Stack.Screen name="Calendario" component={Calendario}
          options={{
            headerStyle: {
              backgroundColor: '#6B29A4', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />
        <Stack.Screen name="Cadastro" component={CadastroForm}
          options={{
            headerStyle: {
              backgroundColor: '#AC72BF', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />

        <Stack.Screen name="Compromissos" component={Compromissos}
          options={{
            headerStyle: {
              backgroundColor: '#6B29A4', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />

        <Stack.Screen name="ToDoList" component={ToDo}
          options={{
            headerStyle: {
              backgroundColor: '#6B29A4', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />

        <Stack.Screen name="Planos" component={Planos}
          options={{
            headerStyle: {
              backgroundColor: '#6B29A4', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />

        <Stack.Screen name="Cartão de Crédito" component={AdicionarDadosCartao}
          options={{
            headerStyle: {
              backgroundColor: '#AC72BF', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />

        <Stack.Screen name="Modificar Cartão" component={ModificarDadosCartao}
          options={{
            headerStyle: {
              backgroundColor: '#AC72BF', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />

        <Stack.Screen name="MenuHSI" component={MenuHSI}
          options={{
            headerStyle: {
              backgroundColor: '#6B29A4', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />

        <Stack.Screen name="Modificar escolha Plano" component={ModificPlano}
          options={{
            headerStyle: {
              backgroundColor: '#AC72BF', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />

        <Stack.Screen name="Pix" component={Pix}
          options={{
            headerStyle: {
              backgroundColor: '#6B29A4', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />

        <Stack.Screen name="Perfil" component={Perfil}
          options={{
            headerStyle: {
              backgroundColor: '#6B29A4', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />

        <Stack.Screen name="Modificar Cadastro" component={AtualizarCad}
          options={{
            headerStyle: {
              backgroundColor: '#AC72BF', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#fff', // Cor do texto do título
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do título
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
