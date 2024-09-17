import React, { useState, useEffect } from "react";
import { View, TextInput, KeyboardAvoidingView, TouchableOpacity, Text, Alert, Modal, TouchableHighlight } from "react-native";
import styles from './ModificCartStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ModificarDadosCartao = ({ navigation }) => {
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
    setDataVenc(moment(date).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    // Função assíncrona para buscar dados do usuário
    const showDados = async () => {
      const id_cad = await AsyncStorage.getItem('ID')
      try {
        // Faz uma requisição para receber os dados do usuário do servidor
        const resposta = await fetch('http://192.168.137.1:8085/receber-dados', {
          method: 'POST', // Método da requisição
          headers: {
            'Content-Type': 'application/json', // Tipo de conteúdo da requisição
          },
          body: JSON.stringify({ acao: 'recuperar_cart', id_cadastro: id_cad }), // Corpo da requisição contendo os dados do formulário
        });

        // Verifica se a requisição foi bem-sucedida
        if (!resposta.ok) {
          throw new Error('Erro ao obter dados do cartão'); // Lança um erro se a requisição falhar
        }

        // Extrai os dados da resposta e os converte para JSON
        const dadosCart = await resposta.json();
        //console.log('Dados do usuário:', userData);
        console.log("Dados recebidos", dadosCart.mensagem);
        // Atualiza o estado do formulário com os dados do usuário recebidos
        setNomeTitular(dadosCart.mensagem[7]); // Define o novo valor para 'nome'
        setCpf(dadosCart.mensagem[2]);
        setNumCartao(dadosCart.mensagem[4]);
        setDataVenc(dadosCart.mensagem[6]);
        setCodSeguranca(dadosCart.mensagem[5].toString());
      } catch (error) {
        console.error('Erro ao buscar dados do cartão 2:', error); // Captura e exibe qualquer erro ocorrido durante a busca dos dados do usuário
      }
    };

    showDados(); // Chama a função para buscar os dados do usuário quando o componente é montado
  }, []); // Array de dependências vazio, indica que este efeito deve ser executado apenas uma vez

  const [mensagensErro, setMensagensErro] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const handleAtualizarCart = async () => {
    const id_cad = await AsyncStorage.getItem('ID');
    try {
      // Faz uma requisição para enviar os dados do formulário para o servidor
      const resposta = await fetch('http://192.168.137.1:8085/receber-dados', {
        method: 'POST', // Método da requisição
        headers: {
          'Content-Type': 'application/json', // Tipo de conteúdo da requisição
        },
        body: JSON.stringify({
          acao: 'atualizar_cart',
          id: id_cad,
          novo_Cpf: cpf,
          novo_numCartao: numCartao,
          novo_cvv: codSeguranca,
          nova_dataVenc: dataVenc,
          novo_nomeTitular: nomeTitular,
        }), // Corpo da requisição contendo os dados do formulário em formato JSON
      });
      // Extrai o resultado da resposta e o converte para JSON
      const resultado = await resposta.json();
      console.log('teste retorno do cartão', resultado);

      // Verifica se ocorreu algum erro no servidor
      if (resultado.erro) {
        // Exibe mensagens de erro no console ou em algum local visível
        console.error('Erro no servidor:', resultado.mensagens);

        // Atualiza o estado com as mensagens de erro para exibição no formulário
        setMensagensErro(resultado.mensagens);
        setShowErrorModal(true); // Exibir modal de erro
      } else {
        console.log('Dados de cartão atualizados com sucesso!', resultado);
        navigation.navigate('Calendario');
        setNomeTitular('');
        setCpf('');
        setNumCartao('');
        setDataVenc('');
        setCodSeguranca('');
      }
    } catch (error) {
      console.error('Erro ao enviar dados do cartão:', error); // Captura e exibe qualquer erro ocorrido durante o envio dos dados do formulário
    }
  };

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">
      <LinearGradient style={styles.background} colors={['#AC72BF', '#6B29A4', '#570D70']}>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>Modificar dados do cartão</Text>
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
            <TouchableOpacity style={styles.btnSubmit} onPress={handleAtualizarCart}>
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

export default ModificarDadosCartao;


