import React, { useState } from "react";
import { View, TextInput, KeyboardAvoidingView, TouchableOpacity, Text, Alert } from "react-native";
import styles from './DadCartStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const AdicionarDadosCartao = ({ navigation }) => {
  const [nomeTitular, setNomeTitular] = useState('');
  const [cpf, setCpf] = useState('');
  const [numCartao, setNumCartao] = useState('');
  const [dataVenc, setDataVenc] = useState('');
  const [codSeguranca, setCodSeguranca] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setDataVenc(moment(date).format("DD/MM/YYYY"));
  };

  const handleDadosCartao = () => {
    console.log("Nome Titular: ", nomeTitular);
    console.log("Cpf: ", cpf);
    console.log("Número Cartão: ", numCartao);
    console.log("Data Vencimento: ", dataVenc);
    console.log("Código de segurança: ", codSeguranca);

    navigation.navigate('Modificar Cartão');

    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    // Por enquanto, apenas limpamos os campos do formulário
    setNomeTitular('');
    setCpf('');
    setNumCartao('');
    setDataVenc('');
    setCodSeguranca('');
  }

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
          <TextInput  style={styles.inputs} value={codSeguranca} onChangeText={setCodSeguranca} placeholder="Digite o código de segurança" />

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnSubmit} onPress={handleDadosCartao}>
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

export default AdicionarDadosCartao;