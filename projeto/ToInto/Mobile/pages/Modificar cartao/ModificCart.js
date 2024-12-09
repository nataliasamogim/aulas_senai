/*ModificCart.js
Autor: Marília
Data criação/Alterações: 03/12/2024
Descrição Detalhada: O ModificarDadosCartao permite ao usuário atualizar as informações de seu cartão de crédito, como nome do titular, CPF, 
número do cartão, data de vencimento e código de segurança. Ao carregar a tela, os dados atuais são carregados do servidor e preenchidos nos 
campos. O usuário pode editar esses campos, e ao salvar, as informações atualizadas são enviadas para o servidor. O código inclui funções para 
formatar o CPF, o número do cartão e a data de vencimento de acordo com os padrões, e exibe um modal de erro caso algo dê errado durante o 
processo de atualização. A tela também possui botões para salvar ou cancelar as modificações.*/

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
    setDataVenc(moment(date).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    // Função assíncrona para buscar dados do usuário
    const showDados = async () => {
      const id_cad = await AsyncStorage.getItem('ID')
      try {
        // Faz uma requisição para receber os dados do usuário do servidor
        const resposta = await fetch('http://10.135.60.34:8085/receber-dados', {
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
      const resposta = await fetch('http://10.135.60.34:8085/receber-dados', {
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
          escolha_pag: '2'
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
        <View style={styles.container}>
          <Text style={styles.label}>Nome Completo do Titular</Text>
          <TextInput style={styles.inputs} value={nomeTitular} onChangeText={setNomeTitular} placeholder="Digite o nome do titular" />
          <Text style={styles.label}>CPF</Text>
          <TextInput style={styles.inputs} value={cpf} onChangeText={handleChangeCpf} placeholder="___.___.___-__" />
          <Text style={styles.label}>Número do cartão</Text>
          <TextInput style={styles.inputs} value={numCartao} onChangeText={handleChangeNumCartao} placeholder="Digite o número do cartão" />
          <Text style={styles.label}>Data de vencimento</Text>
          <TextInput style={styles.inputs} value={dataVenc} onChangeText={handleChangeDataVenc} placeholder="MM/AA" maxLength={5} />
          <Text style={styles.label}>Código de segurança</Text>
          <TextInput style={styles.inputs} value={codSeguranca} onChangeText={setCodSeguranca} placeholder="Digite o código de segurança" maxLength={4} />

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnSubmit} onPress={handleAtualizarCart}>
              <Text style={styles.submitTxt}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.submitTxt}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

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


