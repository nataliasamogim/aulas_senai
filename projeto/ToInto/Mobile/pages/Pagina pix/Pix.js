import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, Text } from 'react-native';
import styles from './PixStyle.js';

const Pix = ({ navigation }) => {

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerPix}>
                <Text style={styles.textPix}>Escaneie o QR CODE</Text>
                <Text style={styles.textPix2}> para realizar o pagamento</Text>
                <Image style={styles.Pix} source={require('../../assets/images/QR_code.png')} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Pix;