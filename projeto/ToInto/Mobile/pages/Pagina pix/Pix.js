import React from 'react';
import { View, KeyboardAvoidingView, Image, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './PixStyle.js';

const Pix = ({ route, navigation }) => {
    // Verifica se o parâmetro code foi passado, se não gera um automaticamente
    const code = route.params?.code || Math.floor(1000 + Math.random() * 9000); // Gera número de 4 dígitos

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerPix}>
                <Text style={styles.textPix}>Escaneie o QR CODE</Text>
                <Text style={styles.textPix2}> para realizar o pagamento</Text>
                <Image style={styles.Pix} source={require('../../assets/images/QR_code.png')} />
                
                {/* Exibe o código gerado */}
                <Text style={styles.codeText}>Chave pix: {code}</Text>
            </View>

            <View style={styles.btnContPix}>
                <TouchableOpacity style={styles.btnSubSalPix} onPress={() => navigation.navigate('ConfPix')}>
                    <Text style={styles.subTxtSalvarPix}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Pix;
