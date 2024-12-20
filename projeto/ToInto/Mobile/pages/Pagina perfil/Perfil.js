/*Perfil.js
Autor: Marília
Data criação/Alterações: 03/12/2024
Descrição Detalhada: 
A página "Perfil" permite que o usuário visualize e edite suas informações, como nome, e-mail e foto de perfil. Ele pode alterar seu cadastro, 
plano de pagamento, ou excluir sua conta. A tela também possui uma função de modal para confirmar a exclusão da conta. As informações do usuário 
são carregadas e atualizadas periodicamente usando AsyncStorage. O layout é ajustado para evitar sobreposição com o teclado, e a navegação entre 
as telas é gerenciada com a biblioteca de navegação do React Native. O código também inclui um botão para acessar um vídeo de ajuda no YouTube.*/
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, Modal, Linking  } from 'react-native';
import styles from './PerfilStyle.js';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Perfil = ({ navigation }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [Email, setEmail] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState('')

  const handlePress = () => {
    Linking.openURL('https://youtu.be/M_2uMtru4Tg');
  };

  useEffect(() => {
    const fetchNomeUsuario = async () => {
      const storedNome = await AsyncStorage.getItem('nome_usuario');
      if (storedNome) {
        setNomeUsuario(storedNome);
      }
    };
    fetchNomeUsuario();
  }, []);

  useEffect(() => {
    const fetchEmail = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      if (storedEmail) {
        setEmail(storedEmail);
      }
    };
    fetchEmail();
  }, []);

  useEffect(() => {
    const fetchPerfil = async () => {
      const storedPerfil = await AsyncStorage.getItem('foto_perfil');
      if (storedPerfil) {
        setFotoPerfil(storedPerfil);
      }
    };
    fetchPerfil();
  }, []);

  // Função para buscar os dados do perfil
  const fetchPerfilData = async () => {
    const storedNome = await AsyncStorage.getItem('nome_usuario');
    const storedEmail = await AsyncStorage.getItem('email');
    const storedPerfil = await AsyncStorage.getItem('foto_perfil');
    if (storedNome) {
      setNomeUsuario(storedNome);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedPerfil) {
      setFotoPerfil(storedPerfil)
    }
  };

  // Atualiza o perfil a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      fetchPerfilData();
    }, 500); // 1 segundos
    return () => clearInterval(interval);
  }, []);

  const handleOptionSelect = (option) => {
    setShowOptions(false);
    if (option === 'Excluir') {
      setModalVisible(true);
    } else {
      navigation.navigate(option);
    }
  };

  const excluirConta = async () => {
    const id_cad = await AsyncStorage.getItem('ID');

    if (!id_cad) {
      console.error('ID não encontrado no AsyncStorage');
      return;
    }

    try {
      const response = await fetch('http://10.135.60.42:8085/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'funcao': 'del', 'id_cad': id_cad })
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir conta');
      }

      const data = await response.json();
      console.log(data);

      // Dados foram processados com sucesso
      await AsyncStorage.multiRemove(['ID', 'nome_usuario', 'email']);
      // Navega para a tela de cadastro
      navigation.navigate('LandingPage');
    } catch (error) {
      console.error('Erro ao excluir conta:', error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>

      <View style={styles.containerPerfil}>
        <Image style={styles.foto} resizeMode='contain' source={require('../../images_perfil/foto_perfil.jpg')} />
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

        <TouchableOpacity style={styles.buttonAjuda} onPress={handlePress}>
          <Text style={styles.botao}>Ajuda</Text>
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
          <Image style={styles.perfil} resizeMode='contain' source={require('../../images_perfil/foto_perfil.jpg')} />
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
                onPress={excluirConta}
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
