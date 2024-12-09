/*Cadastro.js
Autor: Marília
Data criação/Alterações: 03/12
Descrição Detalhada: O CadastroForm é responsável pela criação de um formulário de cadastro de usuário no aplicativo TOINTO, 
com a funcionalidade de selecionar planos de pagamento. Ele utiliza o estado para controlar os dados do usuário, como nome, e-mail, 
senha e confirmação de senha, além de exibir mensagens de erro caso algo dê errado durante o processo de cadastro. O formulário inclui campos 
para os dados do usuário e botões para alternar a visibilidade das senhas, juntamente com opções de planos (Free, Mensal e Anual), que 
podem ser selecionadas através de toques. O componente utiliza AsyncStorage para armazenar dados do usuário após um cadastro bem-sucedido 
e navega entre as telas conforme a escolha do plano. Além disso, ao selecionar um plano, um modal é exibido com mais informações sobre o 
plano escolhido. Em caso de erro na tentativa de cadastro, um modal de erro exibe as mensagens retornadas pela API. O formulário também 
inclui opções para o usuário acessar a tela de login ou cancelar a ação.*/
import React, { useState } from "react";
import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Alert, Modal, TouchableHighlight } from "react-native";
import styles from './CadStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';


/*
Autor: Marília
Data criação/Alterações: 03/12/2024
Descrição/Observação:A função handleCadastrar é responsável por gerenciar o processo de cadastro de um usuário em um sistema. Ela coleta os 
dados do formulário de cadastro, como nome, e-mail, senha, confirmação de senha e o plano selecionado, e envia esses dados para um endpoint 
especificado via requisição POST. Após o envio, a função aguarda a resposta do servidor para determinar o próximo passo. Caso haja erros, as
 mensagens de erro retornadas são exibidas em um modal; caso contrário, os dados importantes, como ID e informações do usuário, são armazenados 
 localmente usando AsyncStorage, e o usuário é redirecionado para diferentes telas com base no plano selecionado. A função também inclui 
 verificações para evitar envios com campos obrigatórios em branco. */
const CadastroForm = ({ handleSaibaMais }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmsenha, setConfirmSenha] = useState('');
  const [selectedBox, setSelectedBox] = useState(null);
  const navigation = useNavigation();

  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);

  const [mensagensErro, setMensagensErro] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleCadastrar = async (selectedBox) => {
    if (nome.trim() !== '') {  // Verifica se ambos os campos estão preenchidos
      const formCadastro = {
        acao: 'salvar_cad',
        nome: nome,
        email: email,
        senha: senha,
        confirmsenha: confirmsenha,
        planos: selectedBox
      };

      try {
        const response = await fetch('http://10.135.60.42:8085/receber-dados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formCadastro)
        });
        const resultado = await response.json();

        if (resultado.erro) {
          setMensagensErro(resultado.mensagens);
          setShowErrorModal(true); // Exibir modal de erro
        } else {
          setNome('');
          setEmail('');
          setSenha('');
          setConfirmSenha('');
          console.log(resultado)
          await AsyncStorage.setItem('ID', JSON.stringify(resultado.mensagens.mensagem[0]));
          await AsyncStorage.setItem('nome_usuario', JSON.stringify(resultado.mensagens.mensagem[2]));
          await AsyncStorage.setItem('email', JSON.stringify(resultado.mensagens.mensagem[3]));
          await AsyncStorage.setItem('opc', JSON.stringify(resultado.mensagens.mensagem[1]));
         
          
          if (selectedBox == 2) {
            navigation.navigate('Planos');
          } else if (selectedBox == 3) {
            navigation.navigate('Planos');
          } else if (selectedBox == 1) {
            navigation.navigate('Login');
          } else {
            navigation.navigate('Cadastro');
          }
        }
      } catch (error) {
        console.error('Erro ao receber dados do Cadastro:', error);
      }
    }
  };

// Função para lidar com o clique em uma caixa específica
// Se a caixa clicada já estiver selecionada (boxNumber === selectedBox), desmarca-a definindo `null`.
// Caso contrário, seleciona a caixa clicada (define o número da caixa como `selectedBox`).
  const handleBoxPress = (boxNumber) => {
    setSelectedBox(boxNumber === selectedBox ? null : boxNumber);
  };

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">

      <LinearGradient style={styles.background} colors={['#AC72BF', '#6B29A4', '#570D70']}>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} resizeMode='contain' source={require('../../assets/images/logo.png')} />
        </View>
        <View keyboardShouldPersistTaps="handled" style={styles.container}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput style={styles.inputs} value={nome} onChangeText={setNome} placeholder="Digite seu nome completo" />

          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.inputs} value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.containerInput}>
            <TextInput secureTextEntry={!senhaVisivel} style={styles.inputs} value={senha} onChangeText={setSenha} placeholder="Digite sua senha" />
            <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)} style={styles.eyeIcon}>
              <Icon name={senhaVisivel ? "eye" : "eye-slash"} size={20} color="#222" />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Confirmar Senha</Text>
          <View style={styles.containerInput}>
            <TextInput secureTextEntry={!confirmaSenhaVisivel} style={styles.inputs} value={confirmsenha} onChangeText={setConfirmSenha} placeholder="Digite novamente sua senha" />
            <TouchableOpacity onPress={() => setConfirmaSenhaVisivel(!confirmaSenhaVisivel)} style={styles.eyeIcon}>
              <Icon name={confirmaSenhaVisivel ? "eye" : "eye-slash"} size={20} color="#222" />
            </TouchableOpacity>
          </View>

          <View style={styles.selectableBoxes}>
            <TouchableOpacity style={[styles.box, selectedBox === 1 && styles.selected]} onPress={() => handleBoxPress(1)}>
              <Image source={require('../../assets/images/free.png')} style={styles.imagemcaixa} />
              <Text style={[styles.boxText, selectedBox === 1 && styles.selectedText]}>Free</Text>
              <Text style={[styles.boxSubtitle, selectedBox === 1 && styles.selectedText]}>R$00,00</Text>
              <Text style={[styles.saibaMais, selectedBox === 1 && styles.selectedText]} onPress={() => handleSaibaMais("free")}>Saiba Mais</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.box, selectedBox === 2 && styles.selected]} onPress={() => handleBoxPress(2)}>
              <Image source={require('../../assets/images/oi.png')} style={styles.imagemcaixa} />
              <Text style={[styles.boxText, selectedBox === 2 && styles.selectedText]}>Mensal</Text>
              <Text style={[styles.boxSubtitle, selectedBox === 2 && styles.selectedText]}>R$7,90/mês</Text>
              <Text style={[styles.saibaMais, selectedBox === 2 && styles.selectedText]} onPress={() => handleSaibaMais("mensal")}>Saiba Mais</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.box, selectedBox === 3 && styles.selected]} onPress={() => handleBoxPress(3)}>
              <Image source={require('../../assets/images/anual.png')} style={styles.imagemcaixa} />
              <Text style={[styles.boxText, selectedBox === 3 && styles.selectedText]}>Anual</Text>
              <Text style={[styles.boxSubtitle, selectedBox === 3 && styles.selectedText]}>R$109,90/ano</Text>
              <Text style={[styles.saibaMais, selectedBox === 3 && styles.selectedText]} onPress={() => handleSaibaMais("anual")}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerConta}>
            <Text style={styles.titleNoCampo}>Já possui uma conta?</Text>
            <TouchableOpacity style={styles.btnRegistrar} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.Txtentrar}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnSubmit} onPress={() => handleCadastrar(selectedBox)}>
              <Text style={styles.submitTxt}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.submitTxt}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      {/* Modal de Erro */}
      <Modal visible={showErrorModal} animationType="slide" transparent={true} onRequestClose={() => setShowErrorModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Erro ao processar os dados:</Text>
            <View style={styles.containerErro}>
              {mensagensErro.map((mensagem, index) => (
                <Text key={index} style={styles.textErro}>
                  {mensagem.mensagem}
                </Text>
              ))}
            </View>
            <TouchableHighlight style={styles.closeButton} onPress={() => setShowErrorModal(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const Cadastro = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);


  // Definição do objeto planos
  const planos = {
    free: {
      nome: "Plano Free",
      descricao: "Sem acesso aos itens do menu, somente acesso ao calendário e com um limite de 50 compromissos a adicionar no dia.",
      preco: "Grátis"
    },
    mensal: {
      nome: "Plano Mensal",
      descricao: "Acesso ao item Hoje e Semana do menu e com um limite de 200 compromissos ao dia.",
      preco: "R$7,90/mês"
    },
    anual: {
      nome: "Plano Anual",
      descricao: "Acesso a todos itens do menu e compromissos ilimitados.",
      preco: "R$109,90/ano"
    }
  };

// Função para exibir mais informações sobre um plano específico
// Recebe o identificador do plano como argumento (`plano`),
// obtém os detalhes do plano no objeto `planos` e os define como conteúdo do modal (`setModalContent`).
// Em seguida, exibe o modal configurando `setShowModal` para `true`.
  const handleSaibaMais = (plano) => {
    setModalContent(planos[plano]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <CadastroForm navigation={navigation} handleSaibaMais={handleSaibaMais} />
      {modalContent && (
        <Modal visible={showModal} animationType="slide" transparent={true} onRequestClose={handleCloseModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Detalhes do Plano</Text>
              <Text style={styles.modalText}>{modalContent.nome}</Text>
              <Text style={styles.modalText}>{modalContent.descricao}</Text>
              <Text style={styles.modalText}>{modalContent.preco}</Text>
              <TouchableHighlight style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

export default Cadastro;