import React, { useCallback, useState } from 'react';
import { Text, View, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useFocusEffect } from '@react-navigation/native';
import styles from './ToDoStyle.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDo = ({ route, navigation }) => {
    const selectedDate = route?.params?.selectedDate || new Date().toISOString().split('T')[0];
    const [tarefas, setTarefas] = useState([]); // Lista de tarefas
    const [checkedTasks, setCheckedTasks] = useState({}); // Estado para rastrear quais tarefas estão marcadas

    const fetchTarefas = async () => {
        try {
            const idCad = await AsyncStorage.getItem('ID'); // Obtém o ID do AsyncStorage
            if (!idCad) {
                throw new Error('ID do usuário não encontrado');
            }

            // Configura o corpo da requisição
            const response = await fetch('http://10.135.60.34:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    acao: 'recuperar_comp',
                    id_cad: idCad,
                    data_comp: selectedDate
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Resposta de erro:', errorText);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Dados recebidos:', data.mensagem);

            if (data && Array.isArray(data.mensagem)) {
                const trat_tarefas = data.mensagem.map(([id_comp, checkbox, titulo_comp, horario_comp, descricao, importante, lembrete]) => ({
                    id_comp, // Inclui o ID da tarefa
                    checkbox,
                    titulo: titulo_comp,
                    horario: horario_comp,
                    descricao,
                    importante,
                    lembrete
                }));
                setTarefas(trat_tarefas);
            }
            else {
                setTarefas([]);
            }
        } catch (error) {
            console.error('Erro ao buscar compromissos:', error);
        }
    };

    const deletarCompromisso = async (id_comp) => {
        if (!tarefas) return;
        id_cad = await AsyncStorage.getItem("ID")
        try {
            console.log('Tentando deletar compromisso com ID:', id_comp, 'e ID de cadastro:', id_cad); // Adicione um log para depuração
            const response = await fetch('http://10.135.60.34:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    acao: 'deletar_comp',
                    id_cad: id_cad,
                    id_comp: id_comp,
                    data_comp: tarefas[0].data_comp
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Resposta de erro:', errorText);
                throw new Error(`HTTP error! Status: ${response.status}`);

            }
            else {
                console.log('Esta deletando')
                fetchTarefas();
            }
        } catch (error) {
            console.error('Erro ao deletar compromisso:', error);
        }
    };


    useFocusEffect(
        useCallback(() => {
            fetchTarefas(); // Atualiza as tarefas quando a tela ganha foco
        }, [selectedDate, route.params?.refresh]) // Adiciona route.params?.refresh como dependência
    );

    const handleCheckBox = async (idComp) => {
        try {
          const novoEstadoCheckbox = !checkedTasks[idComp]; // Novo estado (inverte o atual)
      
          const response = await fetch('http://10.135.60.34:8085/receber-dados', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              acao: 'atualizar_checkbox',
              id_comp: idComp,
              estado_checkbox: novoEstadoCheckbox // Envia o estado do checkbox
            })
          });
      
          if (!response.ok) {
            throw new Error('Erro ao atualizar checkbox');
          } else {
            // Atualiza o estado local dos checkboxes
            setCheckedTasks(prevState => ({
                ...prevState,
                [idComp]: novoEstadoCheckbox // Atualiza apenas a tarefa específica com o id_comp
            }));
            console.log('Checkbox atualizado com sucesso no banco de dados.');
          }
      
        } catch (error) {
          console.error('Erro:', error);
        }
      };

    const formattedDate = format(parseISO(selectedDate), 'dd/MM', { locale: ptBR });
    const dayOfWeek = format(parseISO(selectedDate), 'EEEE', { locale: ptBR });

    return (
        <KeyboardAvoidingView style={styles.background}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.containerTarefas}>
                    <View style={styles.containerData}>
                        <Text style={styles.data}>{formattedDate}</Text>
                        <Text style={styles.dia}>{dayOfWeek}</Text>
                    </View>

                    <View style={styles.content}>
                        {tarefas.length > 0 ? (
                            tarefas.map((tarefa) => (
                                <View key={tarefa.id_comp} style={[styles.componentesTarefas, tarefa.importante ? styles.tarefaImportante : null]}>
                                    <View style={styles.containerComp}>
                                        <View style={styles.check_tarefa}>
                                            <CheckBox
                                                style={styles.check}
                                                checked={checkedTasks[tarefa.id_comp] || tarefa.checkbox}
                                                onPress={() => handleCheckBox(tarefa.id_comp)}
                                                checkedColor="white"
                                                uncheckedColor="white"
                                            />
                                            <View style={styles.containerHoraTitle}>
                                                <Text style={styles.horario}>{tarefa.horario}</Text>
                                                <Text style={styles.titulo}>{tarefa.titulo}</Text>
                                            </View>
                                        </View>

                                        <View style={styles.containerEditExcluir}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Modificar Compromissos', { selectedDate, tarefa })}>
                                                <Image style={styles.fotoEdit} resizeMode="contain" source={require('../../assets/images/lapisbranco.png')} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => deletarCompromisso(tarefa.id_comp)}>
                                                <Image style={styles.fotoEdit2} resizeMode="contain" source={require('../../assets/images/lixobrancodois.png')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={styles.descricao}>
                                        <Text style={styles.textDesc}>{tarefa.descricao || 'Nenhuma descrição disponível'}</Text>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.noTaskMessage}>Não possui tarefas</Text>
                        )}

                    </View>
                </View>

            </ScrollView>
            <View style={styles.adicionar}>
                <TouchableOpacity onPress={() => navigation.navigate('Compromissos', { selectedDate })}>
                    <Text style={styles.botaoMais}>+</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ToDo;