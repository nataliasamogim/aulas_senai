import React, { useState, useEffect } from "react";
import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Alert, Modal, TouchableHighlight } from "react-native";
import styles from './AtualizarCadStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AtualizarCad = ({ navigation }) => {
    const PlaceholderImage = require('../../assets/images/foto_perfil.jpg');
    const [selectedImage, setSelectedImage] = useState(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagensErro, setMensagensErro] = useState([]);
    const [showErrorModal, setShowErrorModal] = useState(false);

    useEffect(() => {
        // Função assíncrona para buscar dados do usuário
        const showDados = async () => {
            try {
                // Faz uma requisição para receber os dados do usuário do servidor
                const resposta = await fetch('http://10.135.60.20:8085/receber-dados', {
                    method: 'POST', // Método da requisição
                    headers: {
                        'Content-Type': 'application/json', // Tipo de conteúdo da requisição
                    },
                    body: JSON.stringify({ id: await AsyncStorage.getItem("ID") }), // Corpo da requisição contendo os dados do formulário
                });

                // Verifica se a requisição foi bem-sucedida
                if (!resposta.ok) {
                    throw new Error('Erro ao obter dados do usuário'); // Lança um erro se a requisição falhar
                }

                // Extrai os dados da resposta e os converte para JSON
                const userData = await resposta.json();
                //console.log('Dados do usuário:', userData);

                // Atualiza o estado do formulário com os dados do usuário recebidos
                setNome(userData.mensagem[1]); // Define o novo valor para 'nome'
                setEmail(userData.mensagem[2]); // Define o novo valor para 'email'
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error); // Captura e exibe qualquer erro ocorrido durante a busca dos dados do usuário
            }
        };

        showDados(); // Chama a função para buscar os dados do usuário quando o componente é montado
    }, []); // Array de dependências vazio, indica que este efeito deve ser executado apenas uma vez

    const handleAtualizar = async () => {
        const id_str = await AsyncStorage.getItem('ID');
        const nome_str = nome;
        try {
            // Faz uma requisição para enviar os dados do formulário para o servidor
            const resposta = await fetch('http://10.135.60.17:8085/receber-dados', {
                method: 'POST', // Método da requisição
                headers: {
                    'Content-Type': 'application/json', // Tipo de conteúdo da requisição
                },
                body: JSON.stringify({
                    acao: 'atualizar_cad',
                    id: id_str,
                    nome_novo: nome,
                    email_novo: email,
                    senha_nova: senha,
                    foto: selectedImage,
                }), // Corpo da requisição contendo os dados do formulário em formato JSON
            });
            // Extrai o resultado da resposta e o converte para JSON
            const resultado = await resposta.json();
            console.log('teste retorno', resultado);

            // Verifica se ocorreu algum erro no servidor
            if (resultado.erro) {
                // Exibe mensagens de erro no console ou em algum local visível
                console.error('Erro no servidor:', resultado.mensagens);

                // Atualiza o estado com as mensagens de erro para exibição no formulário
                setMensagensErro(resultado.mensagens);
                setShowErrorModal(true); // Exibir modal de erro
            } else {
                console.log('Dados atualizados com sucesso upd!', resultado);
                navigation.goBack();
                await AsyncStorage.setItem('ID', id_str); // Salva o ID no AsyncStorage
                await AsyncStorage.setItem('nome_usuario', nome_str);
                await AsyncStorage.setItem('email', email);
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error); // Captura e exibe qualquer erro ocorrido durante o envio dos dados do formulário
        }
    };

    const pickImageAsync = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert('Permissão para acessar a galeria é necessária!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        // Adicione este console.log para depurar a resposta
        console.log(result.assets[0].uri);
        if (!result.cancelled) {
            setSelectedImage(result.assets[0].uri); // Definir a imagem selecionada
        } else {
            Alert.alert("Você não selecionou nenhuma imagem.");
        }
    };

    return (
        <KeyboardAvoidingView style={styles.background} behavior="padding">
            <LinearGradient style={styles.background} colors={['#AC72BF', '#6B29A4', '#570D70']}>
                <View style={styles.containercad}>
                    <Text style={styles.tittle}>Modificar Cadastro</Text>
                    <View style={styles.containerfoto}>
                        <TouchableOpacity style={styles.formGrupoFoto} onPress={pickImageAsync}>
                            <Image source={selectedImage ? { uri: selectedImage } : PlaceholderImage} style={styles.FotoPerfil} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View keyboardShouldPersistTaps="handled" style={styles.container}>
                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput style={styles.inputs} value={nome} onChangeText={setNome} placeholder="Digite seu nome completo" />
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.inputs} value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput secureTextEntry={true} style={styles.inputs} value={senha} onChangeText={setSenha} placeholder="Digite sua senha" />
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.btnSubmit} onPress={handleAtualizar}>
                            <Text style={styles.submitTxt}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.goBack()}>
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
                                <Text key={index} style={styles.textErro}>{mensagem.mensagem}</Text>
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

export default AtualizarCad;
