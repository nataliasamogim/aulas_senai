/*RecSenha.js
Autor: Marília
Data criação/Alterações: 03/12/2024
Descrição Detalhada: A página Recuperar Senha permite que o usuário insira seu e-mail para solicitar a recuperação da senha. O layout é simples 
e contém um campo de entrada para o e-mail, que ao ser preenchido, envia uma solicitação para o servidor ao clicar no botão "Salvar". 
O código usa o estado email para gerenciar o valor inserido no campo de texto. Quando o botão é pressionado, uma requisição é feita para o 
servidor usando o método POST, e o e-mail inserido é enviado para o backend. Caso ocorra algum erro, a página exibe uma modal com a mensagem 
de erro correspondente, utilizando o estado mensagensErro para armazená-las. Se a requisição for bem-sucedida, os dados do usuário (ID, nome 
e e-mail) são armazenados no AsyncStorage e o campo de e-mail é limpo. Além disso, a interface é estilizada com um LinearGradient para criar 
um fundo degradê, e um KeyboardAvoidingView é usado para ajustar a interface quando o teclado é exibido. O código trata erros de rede, de 
preenchimento de campos e de resposta do servidor, garantindo uma experiência de usuário robusta. - Não foi possível finalizar*/
import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView, TouchableOpacity, Text, Modal, TextInput } from "react-native";
import styles from './RecSenhaStyle.js';
import { LinearGradient } from 'expo-linear-gradient';

const Lp = () => {
  const [mensagensErro, setMensagensErro] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleSalvar = async () => {
    if (email.trim() !== '' && senha.trim() !== '') {
      const formLogin = {
        acao: 'salvar_rec_email',
        email_log: email,
      };
      try {
        const response = await fetch('http://10.135.60.42:8085/receber-dados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formLogin)
        });

        if (!response.ok) {
          throw new Error('Erro na rede');
        }

        const resultado = await response.json();

        if (resultado.erro) {
          if (resultado.mensagens && resultado.mensagens.mensagem) {
            setMensagensErro([resultado.mensagens.mensagem]); // Define a mensagem de erro do backend
            console.error('Erro:', resultado.mensagens.mensagem);
          } else if (resultado.mensagens) {
            setMensagensErro(resultado.mensagens); // Define as mensagens de erro se forem múltiplas
            console.error('Erro 2:', resultado.mensagens);
          } else {
            setMensagensErro(['Erro desconhecido']); // Mensagem de erro genérica
          }
        } else {
          console.log('Dados do Login:', resultado.mensagem);
          await AsyncStorage.setItem('ID', JSON.stringify(resultado.mensagem[0])); // Salva o ID no AsyncStorage
          await AsyncStorage.setItem('nome_usuario', resultado.mensagem[1]);
          await AsyncStorage.setItem('email', resultado.mensagem[2]);
          setEmail('');
          setMensagensErro([]); // Limpa as mensagens de erro ao fazer login com sucesso
        }
      } catch (error) {
        console.error('Erro ao receber dados do Login:', error);
        setMensagensErro(['Erro ao conectar com o servidor. Por favor, tente novamente.']); // Define uma mensagem de erro de conexão
      }
    } else {
      setMensagensErro(['Por favor, preencha todos os campos.']); // Mensagem de erro se os campos não estiverem preenchidos
    }
  };


  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">
      <LinearGradient style={styles.background} colors={['#AC72BF', '#6B29A4', '#570D70']}>

        <View style={styles.containerLogoRec}>
          <Image style={styles.logoRec} resizeMode='contain' source={require('../../assets/images/logo.png')} />
        </View>

        <View style={styles.titleRec}>
            <Text style={styles.titleTextRec}>Recuperar Senha</Text>
        </View>

        <View keyboardShouldPersistTaps="handled" style={styles.containerRec}>
        <Text style={styles.titleText2}>Digite o e-mail para enviarmos o código:</Text>
            <TouchableOpacity style={styles.boxRec}>
            <TextInput style={styles.inputEmailrec}
              placeholder='Digite seu e-mail'
              autoCorrect={false}
              value={email}
              onChangeText={setEmail} />
            </TouchableOpacity>
        </View>

        <View style={styles.btnSalvarRec}>
            <TouchableOpacity style={styles.btnSubSalvarRec} onPress={handleSalvar}>
              <Text style={styles.subTxtSalvarRec}>Salvar</Text>
            </TouchableOpacity>
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
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Lp;
