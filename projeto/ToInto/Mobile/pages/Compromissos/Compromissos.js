import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
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
      };
      try {
        const response = await fetch('http://10.135.60.29:8085/receber-dados', {
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

  

  const handleSalvar = () => {
    // Lógica para salvar os compromissos
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
          <Image style={styles.perfil} resizeMode='contain' source={require('../../assets/images/foto_perfil.jpg')} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Compromissos;
