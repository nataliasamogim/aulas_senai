import React, { useState } from "react";
import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Alert, Modal, TouchableHighlight } from "react-native";
import styles from './CadStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";


const CadastroForm = ({ handleSaibaMais }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmsenha, setConfirmSenha] = useState('');
  const [selectedBox, setSelectedBox] = useState(null);
  const navigation = useNavigation();

  const [mensagensErro, setMensagensErro] = useState([]);

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
        const response = await fetch('http://10.135.60.24:8085/receber-dados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formCadastro)
        });
        const resultado = await response.json();

        if (resultado.erro) {

          // Exibe mensagens de erro no console.log ou em algum local visível
          console.error('Erro no servidor:', resultado.mensagens);

          // Atualiza o estado com as mensagens de erro para exibição no formulário
          setMensagensErro(resultado.mensagens);

        } else {
          setNome('');
          setEmail('');
          setSenha('');
          setConfirmSenha('');
          if (selectedBox === 2) {
            navigation.navigate('Planos');
          } else if (selectedBox === 3) {
            navigation.navigate('Planos');
          } else if (selectedBox === 1) {
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

  const handleBoxPress = (boxNumber) => {
    setSelectedBox(boxNumber === selectedBox ? null : boxNumber);
  };

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">

      {mensagensErro.length > 0 && (
        <View style={{ color: 'white' }}>
          <Text>Erro ao processar os dados:</Text>
          <View>
            {mensagensErro.map((mensagem, index) => (
              <Text key={index}>{mensagem.mensagem}</Text>
            ))}
          </View>
        </View>
      )}

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
          <TextInput secureTextEntry={true} style={styles.inputs} value={senha} onChangeText={setSenha} placeholder="Digite sua senha" />

          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput secureTextEntry={true} style={styles.inputs} value={confirmsenha} onChangeText={setConfirmSenha} placeholder="Digite novamente sua senha" />

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