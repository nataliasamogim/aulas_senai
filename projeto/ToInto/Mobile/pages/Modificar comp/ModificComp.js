import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';
import styles from './ModificCompStyle.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ModificarCompromissos = ({ route, navigation }) => {
  const selectedDate = route?.params?.selectedDate || new Date().toISOString().split('T')[0];
  const tarefa = route?.params?.tarefa || {}; // Recebe a tarefa

  const [horario, setHorario] = useState(new Date());
  const [lembrete, setLembrete] = useState(0);
  const [checked, setChecked] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [mensagensErro, setMensagensErro] = useState([]);

  useEffect(() => {
    if (tarefa) {
      setTitulo(tarefa.titulo);
      setDescricao(tarefa.descricao || '');
      const [hora, minuto] = tarefa.horario.split(':');
      const horarioComp = new Date();
      horarioComp.setHours(parseInt(hora, 10));
      horarioComp.setMinutes(parseInt(minuto, 10));
      horarioComp.setSeconds(0);
      setHorario(horarioComp);
      setLembrete(tarefa.lembrete || 0);
      setChecked(tarefa.importante || false);
    }
  }, [tarefa]);

  const adicionarTarefa = async () => {
    if (titulo.trim() !== '') {
      const formCompromisso = {
        acao: 'atualizar_comp', // Ação de atualização de tarefa
        id_cad: await AsyncStorage.getItem('ID'), // Pega o ID do usuário
        id_tarefa: tarefa.id_comp, // Certifique-se de ter o ID da tarefa aqui
        date: selectedDate, // A data selecionada
        titulo: titulo, // Título atualizado
        time: horario.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Horário
        descricao: descricao, // Descrição
        importante: checked ? 1 : 0, // Se a tarefa é importante ou não
        lembrete: lembrete, // Lembrete
      };

      console.log('Dados enviados:', formCompromisso);

      try {
        const response = await fetch('http://10.135.60.20:8085/receber-dados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formCompromisso) // Envia apenas a tarefa atualizada
        });

        const resultado = await response.json();
        if (resultado.erro) {
          console.error('Erro no servidor:', resultado.mensagens);
          setMensagensErro(resultado.mensagens);
        } else {
          // Limpa os campos e navega de volta para a lista de tarefas
          setTitulo('');
          setDescricao('');
          setHorario(new Date());
          setLembrete(0);
          setChecked(false);
          navigation.navigate('ToDoList', { selectedDate, refresh: true }); // Atualiza a tela ToDo
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
      {mensagensErro.length > 0 && (
        <View style={{ color: 'white' }}>
          <Text>Erro ao processar os dados:</Text>
          <View>
            {mensagensErro.map((mensagem, index) => (
              <Text key={index}>{mensagem.mensagem}</Text>
            ))}
          </View>
        </View>
      )}
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
          <Text style={styles.btnHorarioText}>
            {horario ? horario.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Horário não definido'}
          </Text>
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
          style={[styles.input]}
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
        </View>

        <View style={styles.botao}>
          <TouchableOpacity style={styles.btn} onPress={adicionarTarefa}>
            <Text style={styles.btnTxt}>Modificar</Text>
          </TouchableOpacity>
        </View>
      </View>

    </KeyboardAvoidingView>
  );
};

export default ModificarCompromissos;