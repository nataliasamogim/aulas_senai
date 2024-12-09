/*App.js
Autor: Marília
Data criação/Alterações: 03/122024
Descrição Detalhada: O código apresentado configura a navegação de um aplicativo React Native utilizando o React Navigation. A navegação é 
estruturada com createNativeStackNavigator, que define um conjunto de telas que o usuário pode acessar. Cada tela é mapeada para uma página 
do aplicativo, como Login, Cadastro, Calendário, Compromissos, Perfil, e outras. O código define estilos personalizados para a barra de 
navegação, com cores específicas para cada página, além de um título em negrito. A navegação entre as telas é feita por meio de Stack.Navigator 
e cada tela é configurada com opções como headerStyle, headerTintColor, e headerTitleStyle, para personalizar a aparência das barras de 
navegação. A estrutura permite a navegação fluida entre diferentes funcionalidades do app, incluindo a modificação de dados de usuário, 
compromissos, e informações de pagamento, proporcionando uma experiência de usuário completa.*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Compromissos from './pages/Compromissos/Compromissos';
import Login from './pages/Login/Login';
import Calendario from './pages/Calendario/Calendario';
import CadastroForm from './pages/Cadastro/Cadastro';
import Lp from './pages/Lp/Lp';
import Planos from './pages/Plano/Planos';
import AdicionarDadosCartao from './pages/Dados Cartao/Cartao';
import ModificarDadosCartao from './pages/Modificar cartao/ModificCart';
import ModificarCompromissos from './pages/Modificar comp/ModificComp';
import MenuHSI from './pages/Menu/MenuHSI';
import ModificPlano from './pages/Modificar plano/ModificPlano';
import Pix from './pages/Pagina pix/Pix';
import ConfPix from './pages/Conf_pix/ConfPix';
import Perfil from './pages/Pagina perfil/Perfil';
import AtualizarCad from './pages/Modificar cadastro/AtualizarCad';
import ToDo from './pages/ToDo/ToDo';
import RecuperarSenha from './pages/Recuperar senha/RecSenha';

const Stack = createNativeStackNavigator();

/*  Autor: Marília M bellini
Alterações: 05/12/2024
Tipo: Função: App é um componente funcional em React.
Parâmetros: Nenhum parâmetro explícito: A função App não recebe parâmetros diretamente.
Retorno: JSX: O retorno é um JSX que envolve um componente NavigationContainer e um Stack.Navigator contendo várias telas (Stack.Screen). Cada 
tela é configurada com um nome (name) e um componente (component), além de opções específicas de configuração para a aparência da barra de 
navegação de cada tela.
Descrição/Observações: 
A função App é um componente funcional React que usa o React Navigation para gerenciar a navegação entre várias telas, configuradas com opções de
personalização para a barra de navegação, como cor e estilo do título. Ela organiza as telas em uma navegação em pilha, permitindo transições
entre os diferentes componentes do aplicativo.*/

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={Lp}
          options={{
            headerStyle: {
              backgroundColor: '#AC72BF', // Cor de fundo da barra de navegação
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

        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}
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

        <Stack.Screen name="Modificar Compromissos" component={ModificarCompromissos}
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

        <Stack.Screen name="ConfPix" component={ConfPix}
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
