import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, Modal } from 'react-native';
import styles from './PerfilStyle.js';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Perfil = ({ navigation }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [Email, setEmail] = useState('');

  useEffect(() => {
      const storedNome = AsyncStorage.getItem('nome_usuario');
      if (storedNome) {
          setNomeUsuario(storedNome);
      }
  }, []); //Adicione o array de dependências vazio aqui

  useEffect(() => {
      const storedEmail = AsyncStorage.getItem('email');
      if (storedEmail) {
          setEmail(storedEmail);
      }
  }, []); //Adicione o array de dependências vazio aqui

  const handleOptionSelect = (option) => {
    setShowOptions(false);
    if (option === 'Excluir') {
      setModalVisible(true);
    } else {
      navigation.navigate(option);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>

      <View style={styles.containerPerfil}>
        <Image style={styles.foto} resizeMode='contain' source={require('../../assets/images/foto_perfil.jpg')} />
        <Text style={styles.text}>{nomeUsuario}</Text>
        <Text style={styles.text2}>{Email}</Text>
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Modificar Cadastro')}>
          <Text style={styles.botao}>Modificar Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ModifPag}
          onPress={() => setShowOptions(!showOptions)}
        >
          <Text style={styles.botao}>Modificar Pagamento</Text>
        </TouchableOpacity>

        {showOptions && (
          <View style={styles.optionsContainer}>
            <View style={styles.optionPag}>
              <TouchableOpacity
                onPress={() => handleOptionSelect('Planos')}
              >
                <Text style={styles.option}>Forma de pagamento</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.optionCart}>
              <TouchableOpacity
                onPress={() => handleOptionSelect('Modificar Cartão')}
              >
                <Text style={styles.option}>Dados do cartão</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Modificar escolha Plano')}>
          <Text style={styles.botao}>Modificar Plano</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonExclui} title="Excluir conta" onPress={() => handleOptionSelect('Excluir')}>
          <Text style={styles.botao}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerSair}>
        <TouchableOpacity style={styles.buttonSair} title="Sair" onPress={() => navigation.navigate('Login')} >
          <Text style={styles.botao}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerLogos}>
        <TouchableOpacity style={styles.containerMenu} onPress={() => navigation.navigate('MenuHSI')}>
          <Image style={styles.menu} resizeMode='contain' source={require('../../assets/images/menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerCalen} onPress={() => navigation.navigate('Calendario')}>
          <Image style={styles.iconeCalen} resizeMode='contain' source={require('../../assets/images/iconeCalen.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containericonePerfil} onPress={() => navigation.navigate('Perfil')}>
          <Image style={styles.perfil} resizeMode='contain' source={require('../../assets/images/foto_perfil.jpg')} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Tem certeza que deseja excluir a conta?</Text>
            <View style={styles.buttonsModal}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Perfil;
