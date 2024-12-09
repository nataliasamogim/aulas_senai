/*Plano.js
Autor: Marília
Data criação/Alterações: 03/12/2024
Descrição Detalhada: A página Planos permite ao usuário escolher entre duas formas de pagamento: Pix ou Cartão de Crédito. O layout é 
simples e apresenta duas opções de escolha, com botões de seleção (radio buttons) que indicam qual opção está ativada. Quando o usuário 
seleciona uma opção, o estado selectedOption é atualizado. O botão "Continuar" leva o usuário para a próxima tela, que depende da opção 
escolhida: se "Pix" for selecionado, navega para a página Pix; se "Cartão de Crédito" for selecionado, navega para a página Cartão de 
Crédito. A navegação entre telas é feita através do hook useNavigation do React Navigation. Há também um botão "Voltar" para retornar 
à tela anterior. O uso de KeyboardAvoidingView assegura que a interface permaneça ajustada quando o teclado estiver visível. O código 
é funcional e intuitivo, oferecendo uma navegação clara entre as opções de pagamento.*/
import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação
import styles from './PlanoStyle.js';

const Planos = () => {
    const navigation = useNavigation(); // Inicialize o hook de navegação
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleContinuar = () => {
        // Navegue para a página correspondente quando o botão "Continuar" for clicado
        if (selectedOption === 'option1') {
            navigation.navigate('Pix');
        } else if (selectedOption === 'option2') {
            navigation.navigate('Cartão de Crédito');
        }
    };

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.texto}>Planos</Text>
                </View>
                <View style={styles.containerSubtext}>
                    <Text style={styles.subtext}>Escolha sua forma de pagamento</Text>
                </View>

                <View style={styles.selectPlano}>
                    <TouchableOpacity
                        style={[styles.btnSelect1, selectedOption === 'option1' ? styles.btnSelected : null]}
                        onPress={() => handleOptionSelect('option1')}
                    >
                        <Ionicons name={selectedOption === 'option1' ? 'radio-button-on' : 'radio-button-off'} size={24} color="white" />
                        <Text style={styles.selectTxt}>Pix</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btnSelect2, selectedOption === 'option2' ? styles.btnSelected : null]}
                        onPress={() => handleOptionSelect('option2')}
                    >
                        <Ionicons name={selectedOption === 'option2' ? 'radio-button-on' : 'radio-button-off'} size={24} color="white" />
                        <Text style={styles.selectTxt}>Cartão de Crédito</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonsPlano}>
                    <TouchableOpacity style={styles.btnContinuar} onPress={handleContinuar}>
                        <Text style={styles.submitTxt}>Continuar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()} >
                        <Text style={styles.submitTxt}>Voltar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
}

export default Planos;
