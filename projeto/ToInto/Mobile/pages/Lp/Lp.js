/*Lp.js
Autor: Marília
Data criação/Alterações: 03/12/2024
Descrição Detalhada: O componente Lp exibe a tela inicial do aplicativo com opções para o usuário escolher entre fazer login ou cadastro.
 Ele apresenta um logo, dois botões de seleção (Logar e Cadastrar), e um ícone de ajuda que redireciona para um vídeo no YouTube. Além disso, 
 inclui ícones de redes sociais como Facebook, Instagram e WhatsApp, prontos para receber eventos de clique. Quando ocorre um erro, um modal 
 é exibido com as mensagens de erro. A navegação entre as telas é feita através do React Navigation, e o estado dos elementos é gerenciado 
 com useState, incluindo a seleção do box e a visibilidade do modal de erro.*/
import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView, TouchableOpacity, Text, Modal, Linking} from "react-native";
import styles from './LpStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

const Lp = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const navigation = useNavigation();
  const [mensagensErro, setMensagensErro] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleBoxPress = (boxNumber) => {
    setSelectedBox(boxNumber);
    if (boxNumber === 1) {
      navigation.navigate('Login');
    } else if (boxNumber === 2) {
      navigation.navigate('Cadastro');
    }
  };

  const handlePress = () => {
    Linking.openURL('https://youtu.be/TKOBUaWbj1Q');
  };

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">
      <LinearGradient style={styles.background} colors={['#AC72BF', '#6B29A4', '#570D70']}>

        <View style={styles.containerLogo}>
          <Image style={styles.logo} resizeMode='contain' source={require('../../assets/images/logo.png')} />
        </View>

        <TouchableOpacity style={styles.buttonAjuda} onPress={handlePress}>
          <Image source={require('../../assets/images/interrogacao.png')} style={styles.interrogacao} />
        </TouchableOpacity>

        <View style={styles.title}>
            <Text style={styles.titleText}>Bem-vindos ao TOINTO</Text>
            <Text style={styles.subtitleText}>Together in the Organization</Text>
        </View>

        <View keyboardShouldPersistTaps="handled" style={styles.container}>

          <View style={styles.selectableBoxes}>
            <TouchableOpacity style={[styles.box1, selectedBox === 1 && styles.selected]} onPress={() => handleBoxPress(1)}>
              <Text style={[styles.boxTextL, selectedBox === 1 && styles.selectedText]}>Logar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.box2, selectedBox === 2 && styles.selected]} onPress={() => handleBoxPress(2)}>
              <Text style={[styles.boxTextC, selectedBox === 2 && styles.selectedText]}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => { /* Adicione aqui o evento de clique para Facebook */ }}>
              <Image source={require('../../assets/images/facebook.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Adicione aqui o evento de clique para Instagram */ }}>
              <Image source={require('../../assets/images/Instagram2.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Adicione aqui o evento de clique para WhatsApp */ }}>
              <Image source={require('../../assets/images/whatsapp.png')} style={styles.socialIcon} />
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
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Lp;
