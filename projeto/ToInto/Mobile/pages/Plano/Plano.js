import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Alert, Modal, TouchableHighlight } from "react-native";
import styles from './PlanoStyle.js';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const PlanoMensal = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogos}>
                <View style={styles.containerMenu}>
                    <Image style={styles.menu} resizeMode='contain' source={require('./assets/images/menu.png')} />
                </View>
                <View style={styles.containerPerfil}>
                    <Image style={styles.perfil} resizeMode='contain' source={require('./assets/images/foto_perfil.jpg')} />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.texto}>Plano Mensal</Text>
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
                    <TouchableOpacity style={styles.btnContinuar}>
                        <Text style={styles.submitTxt}>Continuar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnVoltar}>
                        <Text style={styles.submitTxt}>Voltar</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

export default PlanoMensal;
