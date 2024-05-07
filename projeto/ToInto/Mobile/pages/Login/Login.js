import { StatusBar } from 'expo-status-bar';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated, Linking } from 'react-native';
import styles from './LogStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';


export default function Login({navigation}) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));

  useEffect(() => { Animated.spring(offset.y, { toValue: 0, speed: 4, bounciness: 20 }).start(); }, []);
  const handleFacebookPress = () => {
    const facebookURL = 'https://www.facebook.com/?locale=pt_BR'
    Linking.openURL(facebookURL)
      .catch(err => console.error('Erro ao abrir o link Facebook: ', err));
  };

  const handleInstagramPress = () => {
    const instagramURL = 'https://www.instagram.com/'
    Linking.openURL(instagramURL)
      .catch(err => console.error('Erro ao abrir o link Inatagram: ', err));
  };

  const handleWhatsPress = () => {
    const whatsappURL = 'https://www.whatsapp.com/?lang=pt_BR'
    Linking.openURL(whatsappURL)
      .catch(err => console.error('Erro ao abrir o link Whatsapp: ', err));
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <LinearGradient
        colors={['#AC72BF', '#6B29A4', '#570D70']}
        style={styles.background}
      >

        <View style={styles.containerLogoLogin}>
          <Image style={styles.logoLogin} resizeMode='contain' source={require('../../assets/images/logo.png')} />
        </View>

        <Animated.View style={[styles.container, { transform: [{ translateY: offset.y }] }]}>

          <Text style={styles.titleCampo}>E-mail</Text>
          <View style={styles.containerInput}>
            <TextInput style={styles.inputs}
              placeholder='Digite seu e-mail'
              autoCorrect={false}
              onChange={() => { }} />
          </View>

          <Text style={styles.titleCampo}>Senha</Text>
          <View style={styles.containerInput}>
            <TextInput style={styles.inputs}
              secureTextEntry={true}
              placeholder='Digite sua senha'
              autoCorrect={false}
              onChange={() => { }} />
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Calendario')}>
              <Text style={styles.submitTxt}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.titleNoCampo}>Não possui uma conta?</Text>
            <TouchableOpacity style={styles.btnRegistrar} onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.submitTxt}>Criar conta</Text>
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

