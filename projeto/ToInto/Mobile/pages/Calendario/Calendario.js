import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./CalenStyle";

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

  // Função para converter a data para o formato YYYY-MM-DD
  // Função para converter a data para o formato YYYY-MM-DD usando UTC
  const formatDateToYYYYMMDD = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = (`0${date.getUTCMonth() + 1}`).slice(-2); // Adiciona zero à esquerda, se necessário
    const day = (`0${date.getUTCDate()}`).slice(-2);
    return `${year}-${month}-${day}`; // Retorna no formato YYYY-MM-DD
  };


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userId = await AsyncStorage.getItem('ID');
        console.log('ID--- envio', userId);
        if (userId) {
          const response = await fetch('http://192.168.137.1:8085/receber-dados', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_id: userId,
              acao: 'consulta_data' // Enviando a ação 'consulta_data'
            }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          console.log('data--:', data);

          if (!data.erro) {
            const tarefas = data.dados || [];  // Alterado para acessar "dados"
            console.log('tarefas--:', tarefas);

            // Verificação adicional de tarefas não vazias
            if (tarefas.length > 0) {
              // Converta as datas para o formato YYYY-MM-DD
              const newMarkedDates = tarefas.reduce((acc, taskDate) => {
                // Tente converter a string da data para Date
                try {
                  const formattedDate = formatDateToYYYYMMDD(taskDate); // Converte a data para o formato correto
                  acc[formattedDate] = { marked: true, dotColor: 'yellow' };
                } catch (error) {
                  console.error(`Erro ao converter a data ${taskDate}:`, error);
                }
                return acc;
              }, {});

              setTasks(newMarkedDates); // Atualiza o estado com as datas marcadas
            } else {
              console.log('Nenhuma tarefa retornada.');
            }
          } else {
            console.error('Erro na resposta da API:', data.mensagem);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', () => {
      // Executa o fetchTasks quando a tela volta a ficar visível
      fetchTasks();
    });
    return unsubscribe;
  }, [navigation]);



  const handleDayPress = (day) => {
    navigation.navigate('ToDoList', { selectedDate: day.dateString });
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <Calendar
          showSixWeeks={true}
          onDayPress={handleDayPress}
          markedDates={tasks} // Use o estado "tasks" para as datas marcadas
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
