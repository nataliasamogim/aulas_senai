import { StatusBar } from 'expo-status-bar';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated, Linking } from 'react-native';
import styles from './LogStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagensErro, setMensagensErro] = useState([]);

  const handleEntrar = async () => {
    if (email.trim() !== '' && senha.trim() !== '') {
      const formLogin = {
        acao: 'salvar_log',
        email_log: email,
        senha_log: senha,
      };
      try {
        const response = await fetch('http://10.135.60.20:8085/receber-dados', {
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
          setSenha('');
          setMensagensErro([]); // Limpa as mensagens de erro ao fazer login com sucesso
          navigation.navigate('Calendario');
        }
      } catch (error) {
        console.error('Erro ao receber dados do Login:', error);
        setMensagensErro(['Erro ao conectar com o servidor. Por favor, tente novamente.']); // Define uma mensagem de erro de conexão
      }
    } else {
      setMensagensErro(['Por favor, preencha todos os campos.']); // Mensagem de erro se os campos não estiverem preenchidos
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

  const handleFacebookPress = () => {
    const facebookURL = 'https://www.facebook.com/?locale=pt_BR'
    Linking.openURL(facebookURL)
      .catch(err => console.error('Erro ao abrir o link Facebook: ', err));
  };

  const handleInstagramPress = () => {
    const instagramURL = 'https://www.instagram.com/'
    Linking.openURL(instagramURL)
      .catch(err => console.error('Erro ao abrir o link Instagram: ', err));
  };

  const handleWhatsPress = () => {
    const whatsappURL = 'https://www.whatsapp.com/?lang=pt_BR'
    Linking.openURL(whatsappURL)
      .catch(err => console.error('Erro ao abrir o link Whatsapp: ', err));
  };

  const handleForgotPassword = () => {
    navigation.navigate('RecuperarSenha'); 
  };

  return (



    <KeyboardAvoidingView style={styles.background}>
      {mensagensErro.length > 0 && (
        <View style={{ backgroundColor: '#AC72BF', padding: 10, borderRadius: 5, margin: 10 }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Erro ao processar os dados:</Text>
          <View>
            {mensagensErro.map((mensagem, index) => (
              <Text key={index} style={{ color: 'black' }}>{mensagem.erro ? mensagem.mensagem : mensagem}</Text>
            ))}
          </View>

        </View>
      )}
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
            <TouchableOpacity onPress={handleFacebookPress}>
              <Image source={require('../../assets/images/facebook.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleInstagramPress}>
              <Image source={require('../../assets/images/Instagram2.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleWhatsPress}>
              <Image source={require('../../assets/images/whatsapp.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <StatusBar style="auto" />
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
