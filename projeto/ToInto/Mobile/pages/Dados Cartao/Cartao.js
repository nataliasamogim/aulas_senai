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

  // Função para formatar o CPF
  const formatarCpf = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (apenasNumeros.length <= 11) {
      return apenasNumeros.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o primeiro ponto
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o traço
    }
    return valor; // Retorna o valor original se exceder 11 caracteres
  };

  // Função para formatar o número do cartão
  const formatarNumeroCartao = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, ''); // Remove caracteres não numéricos
    return apenasNumeros.replace(/(.{4})/g, '$1 ').trim(); // Adiciona um espaço a cada quatro dígitos
  };

  // Função para formatar a data de vencimento como MM/AA
  const formatarData = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (apenasNumeros.length > 2) {
      return `${apenasNumeros.slice(0, 2)}/${apenasNumeros.slice(2, 4)}`;
    }
    return apenasNumeros;
  };

  // Função para lidar com a mudança no campo CPF
  const handleChangeCpf = (valor) => {
    const valorFormatado = formatarCpf(valor);
    setCpf(valorFormatado); // Atualiza o estado com o CPF formatado
  };

  // Função para lidar com a mudança no campo Número do Cartão
  const handleChangeNumCartao = (valor) => {
    const valorFormatado = formatarNumeroCartao(valor);
    setNumCartao(valorFormatado); // Atualiza o estado com o número do cartão formatado
  };

  // Função para lidar com a mudança no campo Data de Vencimento
  const handleChangeDataVenc = (valor) => {
    const valorFormatado = formatarData(valor);
    setDataVenc(valorFormatado); // Atualiza o estado com a data formatada
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setDataVenc(moment(date).format("MM/YY"));
  };

  const handleAdicionarCart = async () => {
    const id_cad = await AsyncStorage.getItem('ID');
    const opc_cad = await AsyncStorage.getItem('opc');

    const formAdicionarCart = {
      acao: 'salvar_cart',
      id: id_cad,
      cpf: cpf, // Mantém a formatação do CPF
      num_cartao: numCartao, // Mantém a formatação do número do cartão
      cod_seguranca: codSeguranca,
      datavenc: dataVenc, // Mantém a formatação MM/AA
      nome_titular: nomeTitular,
      escolha_pag: '2',
      plano_esc: opc_cad
    };

    try {
      const response = await fetch('http://10.135.60.14:8085/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formAdicionarCart)
      });
      const resultado = await response.json();

      if (resultado.erro) {
        setMensagensErro(resultado.mensagens);
        setShowErrorModal(true); // Exibir modal de erro
      } else {
        console.log('Dados criados com sucesso!');
        setNomeTitular('');
        setCpf('');
        setNumCartao('');
        setDataVenc('');
        setCodSeguranca('');
        navigation.navigate('Login');
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
          <TextInput style={styles.inputs} value={cpf} onChangeText={handleChangeCpf} placeholder="___.___.___-__" />
          <Text style={styles.label}>Número do cartão</Text>
          <TextInput style={styles.inputs} value={numCartao} onChangeText={handleChangeNumCartao} placeholder="Digite o número do cartão" />
          <Text style={styles.label}>Data de vencimento</Text>
          <TextInput style={styles.inputs} value={dataVenc} onChangeText={handleChangeDataVenc} placeholder="MM/AA" maxLength={5} />
          <Text style={styles.label}>Código de segurança</Text>
          <TextInput style={styles.inputs} value={codSeguranca} onChangeText={setCodSeguranca} placeholder="Digite o código de segurança" />

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnSubmit} onPress={handleAdicionarCart}>
              <Text style={styles.submitTxt}>Salvar</Text>
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
