import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';
import styles from './CompStyle.js';

const Compromissos = ({ navigation }) => {
  const [horario, setHorario] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [lembrete, setLembrete] = useState(0);
  const [checked, setChecked] = useState(false);

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

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">

      <View style={styles.container}>

        <View style={styles.containerData}>
          <Text style={styles.data}>04/04</Text>
        </View>

        <View style={styles.semana}>
          <Text style={styles.dataSemana}>Quinta-feira</Text>
        </View>

        <Text style={styles.titleInput}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite um título"
          value={titulo}
          onChangeText={(text) => setTitulo(text)}
        />

        <Text style={styles.titleInput}>Horário</Text>
        <TextInput
          style={styles.input}
          placeholder="Selecione um horário"
          value={horario}
          onChangeText={(text) => setHorario(text)}
          keyboardType="numeric"
        />

        <Text style={styles.titleInput}>Descrição</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Digite uma descrição"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
          multiline
        />

        <View style={styles.checkboxText}>
          <CheckBox
            checked={checked}
            onPress={handleCheckBox}
            checkedColor='white' // Define a cor do checkbox quando estiver marcado
            uncheckedColor='white' // Define a cor do checkbox quando estiver desmarcado
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

          {/* Checkbox */}
          <TouchableOpacity onPress={handleCheckBox}>
            <View style={[styles.checkbox, { backgroundColor: checked ? 'purple' : 'white' }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.botao}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
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