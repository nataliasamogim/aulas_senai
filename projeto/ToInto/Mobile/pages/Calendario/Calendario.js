import styles from "./CalenStyle";
import { View, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt';

const Calendario = ({ navigation }) => {
  const [tasks, setTasks] = useState({});

  const handleDayPress = (day) => {
    navigation.navigate('ToDoList', { selectedDate: day.dateString });
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <Calendar showSixWeeks={true}
          onDayPress={handleDayPress}
          markedDates={{
            ...Object.keys(tasks).reduce((acc, date) => {
              acc[date] = { marked: true, dotColor: 'yellow' };
              return acc;
            }, {})
          }}
          theme={{
            todayTextColor: '#fff',
            selectedDayBackgroundColor: '#852FCF',
            arrowColor: '#fff',
            calendarBackground: '#AE80D6',
            selectedDayTextColor: '#fff',
            dayTextColor: '#fff',
            monthTextColor: '#fff',
            textMonthFontWeight: 'bold',
            textMonthFontSize: 25,
            textDisabledColor: '#BBBBBB',
            textDayFontSize: 16,
            textDayHeaderFontSize: 16,
            'stylesheet.day.basic': {
              base: {
                width: 45,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#6B29A4', // Cor da borda tracejada
                borderStyle: 'dashed', // Estilo da borda tracejada
              },
              today: {
                backgroundColor: '#9E67CD',
                borderRadius: 2,
              },
            },
            'stylesheet.calendar.header': {
              dayHeader: {
                marginTop: 10,
                marginBottom: 10,
                width: 52,
                textAlign: 'center',
                backgroundColor: '#6B29A4', // Cor de fundo para os nomes dos dias
                color: '#fff', // Cor do texto dos nomes dos dias
                fontSize: 16,
                paddingVertical: 5,
                overflow: 'hidden',
              },
            },
          }}
        />
      </View>
      <View style={styles.containerLogos}>
        <TouchableOpacity style={styles.containerMenu} onPress={() => navigation.navigate('MenuHSI')}>
          <Image style={styles.menu} resizeMode='contain' source={require('../../assets/images/menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerCalen} onPress={() => navigation.navigate('Calendario')}>
          <Image style={styles.iconeCalen} resizeMode='contain' source={require('../../assets/images/iconeCalen.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerPerfil} onPress={() => navigation.navigate('Perfil')}>
          <Image style={styles.perfil} resizeMode='contain' source={require('../../assets/images/foto_perfil.jpg')} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Calendario;
