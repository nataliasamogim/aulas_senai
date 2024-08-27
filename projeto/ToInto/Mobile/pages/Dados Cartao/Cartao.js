import React, { useState } from "react";
import { View, TextInput, KeyboardAvoidingView, TouchableOpacity, Text, Alert, Modal, TouchableHighlight } from "react-native";
import styles from './DadCartStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdicionarDadosCartao = () => {
  const [nomeTitular, setNomeTitular] = useState('');
  const [cpf, setCpf] = useState('');
  const [numCartao, setNumCartao] = useState('');
  const [dataVenc, setDataVenc] = useState('');
  const [codSeguranca, setCodSeguranca] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const navigation = useNavigation();

  const [mensagensErro, setMensagensErro] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setDataVenc(moment(date).format("YYYY-MM-DD"));
  };

  const handleAdicionarCart = async () => {
    const id_cad = await AsyncStorage.getItem('ID')
    const opc_cad = await AsyncStorage.getItem('opc')
    console.log(opc_cad)
      const formAdicionarCart = {
        acao: 'salvar_cart',
        id: id_cad,
        cpf: cpf,
        num_cartao: numCartao,
        cod_seguranca: codSeguranca,
        datavenc: dataVenc,
        nome_titular: nomeTitular,
        escolha_pag: '2',
        plano_esc: opc_cad
      };
      console.log(formAdicionarCart)
      try {
        const response = await fetch('http://10.135.60.17:8085/receber-dados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formAdicionarCart)
        });
        const resultado = await response.json();

        if (resultado.erro) {

          // Exibe mensagens de erro no console.log ou em algum local visível
          console.error('Erro no servidor:', resultado.mensagens);

          // Atualiza o estado com as mensagens de erro para exibição no formulário
          setMensagensErro(resultado.mensagens);
          setShowErrorModal(true); // Exibir modal de erro

        } else {
          console.log('Dados criados com sucesso!')
          setNomeTitular('');
          setCpf('');
          setNumCartao('');
          setDataVenc('');
          setCodSeguranca('');
          navigation.navigate('Login')
        }
      } catch (error) {
        console.error('Erro ao receber dados do Adicionar Cartão:', error);
      }
  };

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">

      <LinearGradient style={styles.background} colors={['#AC72BF', '#6B29A4', '#570D70']}>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>Adicionar dados do cartão</Text>
        </View>
        <View keyboardShouldPersistTaps="handled" style={styles.container}>
          <Text style={styles.label}>Nome Completo do Titular</Text>
          <TextInput style={styles.inputs} value={nomeTitular} onChangeText={setNomeTitular} placeholder="Digite o nome do titular" />
          <Text style={styles.label}>CPF</Text>
          <TextInput style={styles.inputs} value={cpf} onChangeText={setCpf} placeholder="___.___.___-__" />
          <Text style={styles.label}>Número do cartão</Text>
          <TextInput style={styles.inputs} value={numCartao} onChangeText={setNumCartao} placeholder="Digite o número do cartão" />
          <Text style={styles.label}>Data de vencimento</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <TextInput style={styles.inputs} value={dataVenc} placeholder="Selecione a data de vencimento" editable={false} />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text style={styles.label}>Código de segurança</Text>
          <TextInput style={styles.inputs} value={codSeguranca} onChangeText={setCodSeguranca} placeholder="Digite o código de segurança" />

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnSubmit} onPress={handleAdicionarCart}>
              <Text style={styles.submitTxt} >Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.submitTxt}>Cancelar</Text>
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
                    <Text key={index} style={styles.textErro}> - {mensagem.mensagem}</Text>
                  ))}
                </View>
            </View>
              <TouchableHighlight style={styles.closeButton} onPress={() => setShowErrorModal(false)}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableHighlight>
          </View>
        </Modal>
    </KeyboardAvoidingView>
  );
}

export default AdicionarDadosCartao;