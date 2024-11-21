import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format, nextMonday, nextSaturday, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './MenuStyle.js'; // Importe os estilos adequados

const MenuHSI = ({ route, navigation }) => {
    const today = new Date().toISOString().split('T')[0];
    const [currentDate, setCurrentDate] = useState(today); // Sempre a data de hoje
    const [selectedDate, setSelectedDate] = useState(route?.params?.selectedDate || today);
    const [date, setDate] = useState(new Date());
    const [tarefas, setTarefas] = useState([]); // Lista de tarefas
    const [checkedTasks, setCheckedTasks] = useState({}); // Estado para rastrear quais tarefas estão marcadas
    const [tarefaData, setTarefaData] = useState([]);
    const [visualizarHoje, setVisualizarHoje] = useState(true);
    const [visualizarSemana, setVisualizarSemana] = useState(false);

    const formatodata = !isNaN(date.getTime())
        ? new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format(date)
        : 'Data inválida';

    const dataFormatada = visualizarHoje
        ? format(parseISO(selectedDate), 'dd/MM/yyyy', { locale: ptBR })
        : '';

    const fetchTarefas = async (data_comp) => {
        try {
            const idCad = await AsyncStorage.getItem('ID');
            const dataComp = await AsyncStorage.getItem('ID_COMP');

            if (!idCad) {
                throw new Error('ID do usuário não encontrado');
            }

            const response = await fetch('http://10.135.60.16:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    acao: 'recuperar_comp',
                    id_cad: idCad,
                    data_comp: data_comp, // Passa a data correta para a requisição
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Resposta de erro:', errorText);
                throw new Error(`Erro na resposta da API: ${response.status}`);
            }

            const data = await response.json();
            console.log('Dados recebidos:', data); // Verifique o que está sendo retornado

            if (data && Array.isArray(data.mensagem)) {
                const tratTarefas = data.mensagem.map(([id_comp, checkbox, titulo_comp, horario_comp, descricao, importante, lembrete]) => ({
                    id_comp,
                    checkbox,
                    titulo: titulo_comp,
                    horario: horario_comp,
                    descricao,
                    importante,
                    lembrete,
                    data_comp: selectedDate,  // Garante que a data da tarefa seja a correta
                }));
                console.log('Tarefas recebidas:', tratTarefas);

                setTarefas(tratTarefas);
                setTarefaData(tratTarefas);
            } else {
                setTarefas([]);
                setTarefaData([]);
            }
        } catch (error) {
            console.error('Erro ao buscar compromissos:', error);
        }
    };


    const fetchSemana = async (inicio, fim) => {
        try {
            const resposta = await fetch('http://10.135.60.16:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    acao: 'recuperar_semana',
                    id_cad: await AsyncStorage.getItem("ID"),
                    data_comp: await AsyncStorage.getItem("ID_COMP"),
                    data_in: inicio.toISOString().split('T')[0],
                    data_fim: fim.toISOString().split('T')[0]
                })
            });
            const dados = await resposta.json();

            if (dados && Array.isArray(dados.mensagem)) {
                const trat_semana = dados.mensagem.map(([id_comp, checkbox, titulo_comp, horario_comp, data_comp, descricao, importante, lembrete]) => ({
                    id_comp,
                    checkbox,
                    titulo: titulo_comp,
                    horario: horario_comp,
                    data_comp,
                    descricao,
                    importante,
                    lembrete,
                    data_in: inicio.toISOString().split('T')[0],
                    data_fim: fim.toISOString().split('T')[0]
                }));
                console.log('semana: ', trat_semana)
                setTarefas(trat_semana);
                setTarefaData(trat_semana);

            } else {
                setTarefas([]);
                setTarefaData([]);
            }
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
        }
    };

    const fetchImportante = async () => {
        try {
            const resposta = await fetch('http://10.135.60.16:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    acao: 'recuperar_importante',
                    id_cad: await AsyncStorage.getItem("ID"),
                    data_comp: await AsyncStorage.getItem("ID_COMP"),
                })
            });
            const dados = await resposta.json();

            if (dados && Array.isArray(dados.mensagem)) {
                const trat_importante = dados.mensagem.map(([id_comp, checkbox, titulo_comp, horario_comp, descricao, importante, lembrete, data_comp]) => ({
                    id_comp,
                    checkbox,
                    titulo: titulo_comp,
                    horario: horario_comp,
                    descricao,
                    importante,
                    lembrete,
                    data_comp,

                }));
                setTarefas(trat_importante);
                setTarefaData(trat_importante);
            } else {
                setTarefas([]);
                setTarefaData([]);
            }
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
        }
    };

    // Alteração na função deletarCompromisso para aceitar idComp como argumento
    const deletarCompromisso = async (idComp) => {
        const id_cad = await AsyncStorage.getItem("ID");
        try {
            const tarefa = tarefas.find(tarefa => tarefa.id_comp === idComp);
            const dataComp = tarefa?.data_comp;
            if (!dataComp) throw new Error('Data da tarefa não encontrada');

            const response = await fetch('http://10.135.60.16:8085/receber-dados', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ acao: 'deletar_comp', id_cad, id_comp: idComp, data_comp: dataComp })
            });
            if (!response.ok) throw new Error('Erro ao deletar tarefa');

            // Atualiza o estado local removendo a tarefa excluída
            setTarefas(prevTarefas => prevTarefas.filter(tarefa => tarefa.id_comp !== idComp));
            setTarefaData(prevTarefaData => prevTarefaData.filter(tarefa => tarefa.id_comp !== idComp));

        } catch (error) {
            console.error('Erro ao deletar compromisso:', error);
        }
    };

    // Defina handleClickHoje fora do useEffect para que possa ser utilizada em outros lugares
    useEffect(() => {
        handleClickHoje();
    }, []);


    useEffect(() => {
        if (visualizarHoje) {
            // Filtra apenas as tarefas do dia atual
            const tarefasHoje = tarefas.filter(tarefa => tarefa.data_comp === selectedDate);
            setTarefaData(tarefasHoje);
            console.log('INICIA_HOJE:', tarefasHoje)
        } else if (visualizarSemana) {
            // Mostra todas as tarefas semanais
            setTarefaData(tarefas);
        } else {
            // Para a opção "Importante"
            const tarefasImportantes = tarefas.filter(tarefa => tarefa.importante);
            setTarefaData(tarefasImportantes);
        }
    }, [tarefas, selectedDate, visualizarHoje, visualizarSemana]);


    const handleClickHoje = () => {
        setVisualizarSemana(false);
        setVisualizarHoje(true);

        const today = new Date().toISOString().split('T')[0];
        setSelectedDate(today);
        setCurrentDate(today);
        fetchTarefas(today);
    };


    const handleClickSemana = () => {
        setVisualizarSemana(true);
        setVisualizarHoje(false);

        const today = new Date();
        const nextSaturday = calculoProximoSabado(today);
        const tarefasSemana = tarefas.filter(tarefas => {
            const tarefaDate = new Date(tarefas.data_comp);
            return tarefaDate >= today && tarefaDate <= nextSaturday;
        });
        setTarefaData(tarefasSemana);
        setDate(today);
        setCurrentDate(today.toISOString().split('T')[0]);
        fetchSemana(today, nextSaturday);
    };

    const handleClickImportante = () => {
        setVisualizarSemana(false);
        setVisualizarHoje(false);
        const tarefasImportantes = tarefas.filter(tarefas => tarefas.importante); // Filtra as tarefas marcadas como importantes
        setTarefaData(tarefasImportantes);  // Define a lista de tarefas a ser exibida
        fetchImportante();
    };


    const handleCheckBox = async (idComp, trf) => {
        console.log('IDCOMP - tarefa:', idComp, !Boolean(trf))
        console.log('ESTADO:', checkedTasks[idComp])
        const novoEstadoCheckbox = !Boolean(trf);
        setCheckedTasks((prevState) => ({ ...prevState, [idComp]: novoEstadoCheckbox }));
        console.log('ESTADO_INV:', novoEstadoCheckbox)

        try {
            // Atualize o estado no servidor
            await fetch('http://10.135.60.16:8085/receber-dados', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ acao: 'atualizar_checkbox', id_comp: idComp, estado_checkbox: novoEstadoCheckbox }),
            });

            // Verificar qual contexto está ativo para buscar as tarefas novamente
            if (visualizarHoje) {
                console.log('Marcando tarefa no hoje');
                await fetchTarefas(currentDate);
            }

            else if (visualizarSemana) {
                console.log('Marcando tarefa no semana');
                const hoje = new Date();
                const proxSabado = calculoProximoSabado(hoje);
                await fetchSemana(hoje, proxSabado);
            }


            else if (!visualizarHoje && !visualizarSemana) {
                console.log('Marcando tarefa no importante');
                await fetchImportante();
            }


        } catch (error) {
            console.error('Erro ao atualizar checkbox:', error);
            // Reverter o estado local caso ocorra erro
            setCheckedTasks((prevState) => ({ ...prevState, [idComp]: !novoEstadoCheckbox }));
        }
    };

    const calculoProximoSabado = (data) => {
        const diaDaSemana = data.getDay(); // 0 (Domingo) a 6 (Sábado)
        const diasParaSábado = (6 - diaDaSemana + 7) % 7; // Quantidade de dias até o próximo sábado
        const proximoSabado = new Date(data);
        proximoSabado.setDate(data.getDate() + diasParaSábado);
        return proximoSabado;
    };

    // MenuHSI
    const [sectionOffsets, setSectionOffsets] = useState({});
    const scrollRef = useRef(null);

    useEffect(() => {
        if (tarefas.length > 0 && visualizarHoje) {
            const tarefasHoje = tarefas.filter(tarefa => tarefa.data_comp === selectedDate);
            console.log("Tarefas de hoje: ", tarefasHoje);

            if (tarefasHoje.length > 0) {
                setTarefaData(tarefasHoje);
            } else {
                setTarefaData([]); // Se não houver tarefas, limpa as tarefas
            }
        }
    }, [tarefas, selectedDate, visualizarHoje]);


    useEffect(() => {
        const calculateSectionOffsets = () => {
            const newOffsets = {};
            ['hoje', 'semana', 'importante'].forEach(section => {
                if (sectionRefs[section] && sectionRefs[section].current) {
                    sectionRefs[section].current.measureLayout(
                        scrollRef.current.getInnerViewNode(),
                        (x, y) => {
                            newOffsets[section] = y;
                            setSectionOffsets({ ...newOffsets });
                        }
                    );
                }
            });
        };

        calculateSectionOffsets();
    }, []);

    const sectionRefs = {
        hoje: useRef(null),
        semana: useRef(null),
        importante: useRef(null),
    };

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerHSI}>
                <TouchableOpacity onPress={handleClickHoje}>
                    <View style={styles.containerHoje}>
                        <Text style={styles.textMenu}>Hoje</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleClickSemana}>
                    <View style={styles.containerSemana}>
                        <Text style={styles.textMenu}>Semana</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleClickImportante}>
                    <View style={styles.containerImport}>
                        <Text style={styles.textMenu}>Importante</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View id='DataTodo'>
                    <Text style={styles.tituloMenu}>
                        {visualizarSemana ? "Semana" : visualizarHoje ? dataFormatada : "Importante"}
                    </Text>
                </View>

                <View style={styles.containerTarefas}>
                    {console.log("chegadaaa", tarefas)}
                    {tarefaData.length > 0 ? (
                        tarefaData.map((tarefas) => (

                            <View key={tarefas.id_comp} style={[styles.componentesTarefas, tarefas.importante ? styles.tarefaImportante : null]}>
                                <View style={styles.containerComp}>
                                    <View style={styles.check_tarefa}>
                                        <CheckBox
                                            style={styles.check}
                                            checked={checkedTasks[tarefas.id_comp] || tarefas.checkbox}
                                            onPress={() => handleCheckBox(tarefas.id_comp, tarefas.checkbox)}
                                            checkedColor="white"
                                            uncheckedColor="white"
                                        />
                                        <View style={styles.conteinerdata1}>
                                            <Text style={styles.data1}>{tarefas.data_comp}</Text>
                                            <View style={styles.containerHoraTitle}>
                                                <Text style={styles.horario}>{tarefas.horario} -</Text>
                                                <Text style={styles.titulo}>{tarefas.titulo}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.containerEditExcluir}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Modificar Compromissos',  {
                                            tarefa: tarefas,  // Aqui você passa o compromisso para a tela de edição
                                            selectedDate: tarefas.data_comp,  // Data do compromisso
                                        })}>
                                            <Image style={styles.fotoEdit} resizeMode="contain" source={require('../../assets/images/lapisbranco.png')} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => deletarCompromisso(tarefas.id_comp)}>
                                            <Image style={styles.fotoEdit2} resizeMode="contain" source={require('../../assets/images/lixobrancodois.png')} />
                                        </TouchableOpacity>

                                    </View>
                                </View>

                                <View style={styles.descricao}>
                                    <Text style={styles.textDesc}>{tarefas.descricao || 'Nenhuma descrição disponível'}</Text>
                                </View>


                            </View>
                        ))
                    ) : (
                        <Text style={styles.noTaskMessage}>Não possui tarefas</Text>
                    )}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default MenuHSI;