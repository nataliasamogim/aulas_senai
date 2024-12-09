/* AtualizarCad
Autor: Marília
Data criação/Alterações: 03/12/2024
Descrição Detalhada: O componente Login é responsável pela autenticação do usuário, permitindo o login com e-mail e senha. Ele valida os campos 
antes de enviar uma requisição ao servidor, e, em caso de sucesso, armazena os dados do usuário no AsyncStorage e navega para a tela "Calendário". 
O componente também oferece uma funcionalidade para alternar a visibilidade da senha, um link para recuperação de senha, e exibe um modal com 
mensagens de erro caso haja falhas no login. Além disso, inclui botões para login via redes sociais (Facebook, Instagram e WhatsApp) e uma animação
para suavizar a transição da tela.*/ 

import React, { useState, useEffect } from "react";
import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Modal, TouchableHighlight, FlatList } from "react-native";
import styles from './AtualizarCadStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AtualizarCad = ({ navigation }) => {
    const PlaceholderImage = require('../../images_perfil/foto_perfil.jpg');
    const [selectedImage, setSelectedImage] = useState(PlaceholderImage);  // Inicializa com a imagem padrão
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagensErro, setMensagensErro] = useState([]);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showProfileOptionsModal, setShowProfileOptionsModal] = useState(false);
    const [selectedImagePath, setSelectedImagePath] = useState('images_perfil/foto_perfil.jpg'); // Caminho padrão


    // No array fotoOpcoes, adicione o caminho de cada imagem como string junto ao objeto
    const fotoOpcoes = [
        { img: require('../../images_perfil/foto_perfil.jpg'), path: 'images_perfil/foto_perfil.jpg' },
        { img: require('../../images_perfil/perfil_2.jpg'), path: 'images_perfil/perfil_2.jpg' },
        { img: require('../../images_perfil/perfil_3.jpg'), path: 'images_perfil/perfil_3.jpg' },
        { img: require('../../images_perfil/perfil_4.jpg'), path: 'images_perfil/perfil_4.jpg' },
        { img: require('../../images_perfil/minions.jpg'), path: 'images_perfil/minions.jpg' },
        { img: require('../../images_perfil/toy_story.jpg'), path: 'images_perfil/toy_story.jpg' },
        { img: require('../../images_perfil/papagaio.jpg'), path: 'images_perfil/papagaio.jpg' },
        { img: require('../../images_perfil/lirios.webp'), path: 'images_perfil/lirios.webp' },
        { img: require('../../images_perfil/dog1.jpg'), path: 'images_perfil/dog1.jpg' },
        { img: require('../../images_perfil/dog2.jpg'), path: 'images_perfil/dog2.jpg' },
        { img: require('../../images_perfil/rato.webp'), path: 'images_perfil/rato.webp' },
        { img: require('../../images_perfil/tigre_foto.png'), path: 'images_perfil/tigre_foto.png' },
        { img: require('../../images_perfil/calopsita.jpg'), path: 'images_perfil/calopsita.jpg' },
        { img: require('../../images_perfil/pintinho.jpg'), path: 'images_perfil/pintinho.jpg' },
        { img: require('../../images_perfil/jabuti.webp'), path: 'images_perfil/jabuti.webp' },
        { img: require('../../images_perfil/tigre_foto.png'), path: 'images_perfil/tigre_foto.png' },
        // Adicione os outros da mesma forma
    ];

    useEffect(() => {
        const showDados = async () => {
            try {
                const resposta = await fetch('http://10.135.60.34:8085/receber-dados', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ acao: 'selecionar_cad_mob', id: await AsyncStorage.getItem("ID") }),
                });

                if (!resposta.ok) {
                    throw new Error('Erro ao obter dados do usuário');
                }

                const userData = await resposta.json();
                console.log('Dados do usuário:', userData);
                 // Atualiza o estado com o nome e o e-mail do usuário
                setNome(userData.mensagem[1]);
                setEmail(userData.mensagem[2]);

                 // Verifica se existe uma imagem salva no AsyncStorage e seleciona a imagem correspondente
                const savedImagePath = await AsyncStorage.getItem('foto_perfil');
                if (savedImagePath) {
                    const selected = fotoOpcoes.find((img) => img.uri === savedImagePath) || PlaceholderImage;
                    setSelectedImage(selected);
                }
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
            }
        };
    // Chama a função para buscar os dados assim que o componente for montado
        showDados();
    }, []);

    const handleAtualizar = async () => {
        const id_str = await AsyncStorage.getItem('ID');
        try {
            const resposta = await fetch('http://10.135.60.34:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    acao: 'atualizar_cad',
                    id: id_str,
                    nome_novo: nome,
                    email_novo: email,
                    senha_nova: senha,
                    foto: selectedImagePath,  // Salva a imagem selecionada
                }),
            });

            const resultado = await resposta.json();
            console.log('teste retorno', resultado);

            if (resultado.erro) {
                console.error('Erro no servidor:', resultado.mensagens);
                setMensagensErro(resultado.mensagens);
                setShowErrorModal(true);
            } else {
                console.log('Dados atualizados com sucesso upd!', resultado);
                navigation.goBack();
                await AsyncStorage.setItem('ID', id_str);
                await AsyncStorage.setItem('nome_usuario', nome);
                await AsyncStorage.setItem('email', email);
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    const openProfileOptionsModal = () => {
        setShowProfileOptionsModal(true);
    };

    const selectProfileImage = async (image, imagePath) => {
        setSelectedImage(image); // Mantenha o visual da imagem
        setSelectedImagePath(imagePath); // Salve o caminho da imagem como string
        setShowProfileOptionsModal(false);
        await AsyncStorage.setItem('foto_perfil', imagePath);
    };

    return (
        <KeyboardAvoidingView style={styles.background} behavior="padding">
            <LinearGradient style={styles.background} colors={['#AC72BF', '#6B29A4', '#570D70']}>
                <View style={styles.containercad}>
                    <Text style={styles.tittle}>Modificar Cadastro</Text>
                    <View style={styles.containerfoto}>
                        <TouchableOpacity style={styles.formGrupoFoto} onPress={openProfileOptionsModal}>
                            <Image source={selectedImage} style={styles.FotoPerfil} />
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

            {/* Modal de Seleção de Foto */}
            <Modal visible={showProfileOptionsModal} animationType="slide" transparent={true} onRequestClose={() => setShowProfileOptionsModal(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Escolha uma foto de perfil</Text>
                        <FlatList
                            data={fotoOpcoes}
                            horizontal
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => selectProfileImage(item.img, item.path)}>
                                    <Image source={item.img} style={[styles.opcaoFotoPerfil, selectedImage === item.img ? styles.selectedFoto : null]} />
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <TouchableHighlight style={styles.closeButton} onPress={() => setShowProfileOptionsModal(false)}>
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableHighlight>
                </View>
            </Modal>

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
};

export default AtualizarCad;
