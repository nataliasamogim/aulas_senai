import React, { useState } from "react";
import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Alert } from "react-native";
import styles from './AtualizarCadStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';


const AtualizarCad = () => {
    const PlaceholderImage = require('../../assets/images/foto_perfil.jpg');
    const [selectedImage, setSelectedImage] = useState(null);
    const [refreshImage, setRefreshImage] = useState(false);

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
            setRefreshImage(prevState => !prevState); // Forçar a atualização da imagem
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
                            <Image key={refreshImage} source={selectedImage ? { uri: selectedImage } : PlaceholderImage} style={styles.FotoPerfil} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View keyboardShouldPersistTaps="handled" style={styles.container}>
                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput style={styles.inputs} placeholder="Digite seu nome completo" />
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.inputs} placeholder="Digite seu e-mail" />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput secureTextEntry={true} style={styles.inputs} placeholder="Digite sua senha" />
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.btnSubmit}>
                            <Text style={styles.submitTxt}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSubmit}>
                            <Text style={styles.submitTxt}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

export default AtualizarCad;