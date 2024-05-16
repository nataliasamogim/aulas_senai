import { View, Image, KeyboardAvoidingView, TouchableOpacity, Text, } from "react-native";
import styles from './PlanoStyle.js';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const Planos = ({navigation}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
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
                    <TouchableOpacity style={styles.btnContinuar} onPress={() => navigation.navigate('Calendario')}>
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
