import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './PerfilStyle.js';

const Perfil = ({ navigation }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionSelect = (option) => {
    setShowOptions(false);
    navigation.navigate(option);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>

      <View style={styles.containerPerfil}>
        <Image style={styles.foto} resizeMode='contain' source={require('../../assets/images/foto_perfil.jpg')} />
        <Text style={styles.text}>Nome</Text>
        <Text style={styles.text2}>tointo@gmail.com</Text>
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

        <TouchableOpacity style={styles.buttonExclui} title="Excluir conta" onPress={() => navigation.navigate('Login')}>
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

    </KeyboardAvoidingView>
  );

};

export default Perfil;