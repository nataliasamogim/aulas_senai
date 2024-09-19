import React, { useState } from "react";
import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Alert, Modal, TouchableHighlight } from "react-native";
import styles from './ModificPlanoStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ModificarPlano = ({ navigation, handleSaibaMais }) => {

  const [selectedBox, setSelectedBox] = useState(null);

  const handleModifPlano = async (selectedBox) => {
    try {
      // Faz uma requisição para receber os dados do usuário do servidor
      const resposta = await fetch('http://10.135.60.29:8085/receber-dados', {
          method: 'POST', // Método da requisição
          headers: {
              'Content-Type': 'application/json', // Tipo de conteúdo da requisição
          },
          body: JSON.stringify({ acao: 'atualizar_plano', id_cad: await AsyncStorage.getItem("ID"), plano_modificado: selectedBox }), // Corpo da requisição contendo os dados do formulário
      });
      const resultado = await resposta.json();
      // Verifica se a requisição foi bem-sucedida
      if (selectedBox == '') {
          throw new Error('Precisa selecionar o plano que deseja'); // Lança um erro se a requisição falhar
      }
      else {
        if (selectedBox === 2) {
          navigation.navigate('Planos');
        } else if (selectedBox === 3) {
          navigation.navigate('Planos');
        } else if (selectedBox === 1) {
          navigation.navigate('Calendario');
        } else {
          navigation.navigate('Modificar escolha Plano')
        }
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error); // Captura e exibe qualquer erro ocorrido durante o envio dos dados do formulário
    }
  };  

  const handleBoxPress = (boxNumber) => {
    setSelectedBox(boxNumber === selectedBox ? null : boxNumber);
  };

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">
      <LinearGradient style={styles.background} colors={['#AC72BF', '#6B29A4', '#570D70']}>

        <View keyboardShouldPersistTaps="handled" style={styles.container}>

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

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnSubmit} onPress={() => handleModifPlano(selectedBox)}>
              <Text style={styles.submitTxt} >Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.submitTxt}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const ModificPlano = ({ navigation }) => {
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

  const handleSaibaMais = (plano) => {
    setModalContent(planos[plano]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ModificarPlano navigation={navigation} handleSaibaMais={handleSaibaMais} />
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

export default ModificPlano;