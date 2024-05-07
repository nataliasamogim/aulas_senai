import React, { useState } from "react";
import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Alert, Modal, TouchableHighlight } from "react-native";
import styles from './CadStyle.js';
import { LinearGradient } from 'expo-linear-gradient';


const CadastroForm = ({ navigation, handleSaibaMais }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [selectedBox, setSelectedBox] = useState(null);

  const handleCadastro = () => {

    if (senha !== confirmarSenha) {
      Alert.alert("Erro: As senhas não coincidem")
      return;
    }
    console.log("Nome Completo: ", nome);
    console.log("Email: ", email);
    console.log("Senha: ", senha);
    console.log("Confirmar Senha: ", confirmarSenha);

    console.log('Cadastro bem sucedido!');
    navigation.navigate('PlanoMensal');

    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    // Por enquanto, apenas limpamos os campos do formulário
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
  }

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
          <TextInput style={styles.inputs} value={nome} onChangeText={setNome} placeholder="Nome Completo" />
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.inputs} value={email} onChangeText={setEmail} placeholder="E-mail" />
          <Text style={styles.label}>Senha</Text>
          <TextInput secureTextEntry={true} style={styles.inputs} value={senha} onChangeText={setSenha} placeholder="Senha" />
          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput secureTextEntry={true} style={styles.inputs} value={confirmarSenha} onChangeText={setConfirmarSenha} placeholder="Confirmar senha" />

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
            <TouchableOpacity style={styles.btnSubmit} onPress={handleCadastro}>
              <Text style={styles.submitTxt} >Cadastrar</Text>
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
