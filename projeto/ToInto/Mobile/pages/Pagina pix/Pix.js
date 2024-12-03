import React from 'react';
import { View, KeyboardAvoidingView, Image, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './PixStyle.js';

const Pix = ({ route, navigation }) => {
    // Verifica se o parâmetro code foi passado, se não gera um automaticamente
    const code = route.params?.code || Math.floor(1000 + Math.random() * 9000); // Gera número de 4 dígitos

    const handleSalvarPix = async () => {
        const id_cad = await AsyncStorage.getItem('ID');
        const opc_cad = await AsyncStorage.getItem('opc');
    
        const dadosSalvarPix = {
          acao: 'salvar_pix',
          id: id_cad,
          escolha_pag: '1',
          plano_esc: opc_cad,
          codigo: code
        };
    
        try {
          const response = await fetch('http://10.135.60.34:8085/receber-dados', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosSalvarPix)
          });
          const resultado = await response.json();
    
          if (resultado.erro) {
            setMensagensErro(resultado.mensagens);
            setShowErrorModal(true); // Exibir modal de erro
          } else {
            console.log('Dados criados com sucesso!');
            navigation.navigate('ConfPix');
          }
        } catch (error) {
          console.error('Erro ao receber ao enviar dados do pix:', error);
        }
      };

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerPix}>
                <Text style={styles.textPix}>Escaneie o QR CODE</Text>
                <Text style={styles.textPix2}> para realizar o pagamento</Text>
                <Image style={styles.Pix} source={require('../../assets/images/QR_code.png')} />
                
                {/* Exibe o código gerado */}
                <Text style={styles.codeText}>Chave pix: {code}</Text>
            </View>

            <View style={styles.btnContPix}>
                <TouchableOpacity style={styles.btnSubSalPix} onPress={() => handleSalvarPix()}>
                    <Text style={styles.subTxtSalvarPix}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Pix;
