import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';
import styles from './CompStyle.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Compromissos = ({ route, navigation }) => {
  const selectedDate = route?.params?.selectedDate || new Date().toISOString().split('T')[0];
  const [horario, setHorario] = useState(new Date());
  const [lembrete, setLembrete] = useState(0);
  const [checked, setChecked] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false); // Estado para controlar a exibição do modal de erro

  useEffect(() => {
    if (new Date(selectedDate).toDateString() === new Date().toDateString()) {
      setHorario(new Date());
    }
  }, [selectedDate]);

  const [mensagensErro, setMensagensErro] = useState([]);

  const addTask = async () => {
    if (titulo.trim() !== '') {
      const formCompromisso = {
        acao: 'salvar_compromisso',
        id_cad: await AsyncStorage.getItem('ID'),
        date: selectedDate,
        titulo: titulo,
        time: horario.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        descricao: descricao,
        importante: checked,
        lembrete: lembrete, 
        plano_esc: await AsyncStorage.getItem('plano_escolhido')
      };
      try {
        const response = await fetch('http://10.135.60.42:8085/receber-dados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formCompromisso)
        });

        const resultado = await response.json();

        if (resultado.erro) {
          console.error('Erro no servidor:', resultado.mensagens);
          setMensagensErro(resultado.mensagens);
          setShowErrorModal(true); // Abre o modal de erro

        } else {
          setTitulo('');
          setDescricao('');
          setHorario(new Date());
          setLembrete('');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
      }
    }
  };

  
  const handleCheckBox = () => {
    setChecked(!checked);
  };

  const timeOptions = [
    { label: '0 minutos', value: 0 },
    { label: '15 minutos', value: 15 },
    { label: '30 minutos', value: 30 },
    { label: '1 hora', value: 60 },
    { label: '12 horas', value: 720 },
    { label: '24 horas', value: 1440 }
  ];

  const formattedDate = format(parseISO(selectedDate), 'dd/MM', { locale: ptBR });
  const dayOfWeek = format(parseISO(selectedDate), 'EEEE', { locale: ptBR });

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">
   {/*  {mensagensErro.length > 0 && (
        <View style={{ color: 'white' }}>
          <Text>Erro ao processar os dados:</Text>
          <View>
            {mensagensErro.map((mensagem, index) => (
              <Text key={index}>{mensagem.mensagem}</Text>
            ))}
          </View>
        </View>
      )}    */}
      <View style={styles.container}>
        <View style={styles.containerData}>
          <Text style={styles.data}>{formattedDate}</Text>
          <Text style={styles.dataSemana}>{dayOfWeek}</Text>
        </View>

        <Text style={styles.titleInput}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite um título"
          value={titulo}
          onChangeText={setTitulo}
        />

        <Text style={styles.titleInput}>Horário</Text>
        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.btnHorario}>

          <Text style={styles.btnHorarioText}>{horario.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>

        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={horario}
            mode="time"
            display="default"
            onChange={(event, selectedTime) => {
              setShowTimePicker(false);
              if (selectedTime) {
                setHorario(selectedTime);
              }
            }}
          />
        )}

        <Text style={styles.titleInput}>Descrição</Text>
        <TextInput
          style={[styles.input_descr]}
          placeholder="Digite uma descrição"
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />

        <View style={styles.checkboxText}>
          <CheckBox
            checked={checked}
            onPress={handleCheckBox}
            checkedColor='white'
            uncheckedColor='white'
          />
          <View style={styles.containerTexto}>
            <Text style={styles.impText}>Importante</Text>
          </View>
        </View>

        <View style={styles.dropdown}>
          <Text style={styles.label}>Lembre-me</Text>
          <Picker selectedValue={lembrete} onValueChange={(itemValue) => setLembrete(itemValue)} style={styles.lembrete}>
            {timeOptions.map((option) => (
              <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
          </Picker>

          <TouchableOpacity onPress={handleCheckBox}>
            <View style={[styles.checkbox, { backgroundColor: checked ? 'purple' : 'white' }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.botao}>
          <TouchableOpacity style={styles.btn} onPress={addTask}>
            <Text style={styles.btnTxt}>Criar</Text>
          </TouchableOpacity>
        </View>
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

      {/* Modal de Erro */}
      <Modal visible={showErrorModal} animationType="slide" transparent={true} onRequestClose={() => setShowErrorModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Erro ao processar os dados:</Text>
            <View style={styles.containerErro}>
        {mensagensErro.map((mensagem, index) => {
          // Verifique se 'mensagem' e 'mensagem.mensagem' existem
          const mensagemTitulo = mensagem?.mensagem?.titulo;
          const mensagemDescricao = mensagem?.mensagem?.descricao;
          const mensagemLimite = mensagem?.limite;

          // Exibe os erros, verificando a existência de cada chave
          return (
            <Text key={index} style={styles.textErro}>
              {/* Exibe o erro com base na disponibilidade das chaves */}
              {mensagemTitulo && <Text>{mensagemTitulo}</Text>}
              {mensagemDescricao && <Text>{mensagemDescricao}</Text>}
              {mensagemLimite && <Text>{mensagemLimite}</Text>}
            </Text>
          );
        })}
      </View>
    </View>
          <TouchableHighlight style={styles.closeButton} onPress={() => setShowErrorModal(false)}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Compromissos;
