import React from 'react';
import { View, KeyboardAvoidingView, Image, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './PixStyle.js';

const Pix = ({ route, navigation}) => {
    // Recebe o código da navegação
    const { code } = route.params;

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
