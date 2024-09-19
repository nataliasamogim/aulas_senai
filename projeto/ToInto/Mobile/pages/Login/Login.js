import { StatusBar } from 'expo-status-bar';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated, Linking, Modal, TouchableHighlight } from 'react-native';
import styles from './LogStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagensErro, setMensagensErro] = useState([]); // Estado para armazenar mensagens de erro
  const [showErrorModal, setShowErrorModal] = useState(false); // Estado para controlar a exibição do modal de erro

  const handleEntrar = async () => {
    if (email.trim() !== '' && senha.trim() !== '') {
      const formLogin = {
        acao: 'salvar_log',
        email_log: email,
        senha_log: senha,
      };
      try {
        const response = await fetch('http://10.135.60.17:8085/receber-dados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formLogin)
        });

        const resultado = await response.json();

        if (resultado.erro) {
          console.error('Erro no servidor:', resultado.mensagens);

          // Corrigido para garantir que as mensagens de erro sejam exibidas corretamente
          if (Array.isArray(resultado.mensagens)) {
            setMensagensErro(resultado.mensagens);
          } else {
            setMensagensErro([{ mensagem: 'Erro desconhecido' }]); // Mensagem de erro padrão
          }

          setShowErrorModal(true); // Exibir modal de erro
        } else {
          console.log('Dados do Login:', resultado.mensagem);
          await AsyncStorage.setItem('ID', JSON.stringify(resultado.mensagem[0])); // Salva o ID no AsyncStorage
          await AsyncStorage.setItem('nome_usuario', resultado.mensagem[1]);
          await AsyncStorage.setItem('email', resultado.mensagem[2]);
          setEmail('');
          setSenha('');
          setMensagensErro([]); // Limpa as mensagens de erro ao fazer login com sucesso
          setShowErrorModal(false); // Esconder modal de erro
          navigation.navigate('Calendario');
        }
      } catch (error) {
        console.error('Erro ao receber dados do Login:', error);

        // Mensagem de erro em caso de falha na conexão ou outro problema
        setMensagensErro([{ mensagem: 'Erro de conexão. Tente novamente mais tarde.' }]);
        setShowErrorModal(true); // Exibir modal de erro
      }
    } else {
      setMensagensErro([{ mensagem: 'Por favor, preencha todos os campos.' }]);
      setShowErrorModal(true); // Exibir modal de erro
    }
  };

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20
    }).start();
  }, []);

  const handleForgotPassword = () => {
    navigation.navigate('RecuperarSenha');
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <LinearGradient colors={['#AC72BF', '#6B29A4', '#570D70']} style={styles.background}>
        <View style={styles.containerLogoLogin}>
          <Image style={styles.logoLogin} resizeMode='contain' source={require('../../assets/images/logo.png')} />
        </View>

        <Animated.View style={[styles.container, { transform: [{ translateY: offset.y }] }]}>
          <Text style={styles.titleCampo}>E-mail</Text>
          <View style={styles.containerInput}>
            <TextInput style={styles.inputs}
              placeholder='Digite seu e-mail'
              autoCorrect={false}
              value={email}
              onChangeText={setEmail} />
          </View>

          <Text style={styles.titleCampo}>Senha</Text>
          <View style={styles.containerInput}>
            <TextInput style={styles.inputs}
              secureTextEntry={true}
              placeholder='Digite sua senha'
              autoCorrect={false}
              value={senha}
              onChangeText={setSenha} />
          </View>

          <View>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.recSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnSubmit} onPress={handleEntrar}>
              <Text style={styles.submitTxt}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/facebook.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/Instagram2.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/whatsapp.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <StatusBar style="auto" />
      </LinearGradient>

      {/* Modal de Erro */}
      <Modal visible={showErrorModal} animationType="slide" transparent={true} onRequestClose={() => setShowErrorModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Erro ao processar os dados:</Text>
            <View style={styles.containerErro}>
              {mensagensErro.map((mensagem, index) => (
                <Text key={index} style={styles.textErro}>{mensagem.mensagem}</Text>
              ))}
            </View>
          </View>
          <TouchableHighlight style={styles.closeButton} onPress={() => setShowErrorModal(false)}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};
