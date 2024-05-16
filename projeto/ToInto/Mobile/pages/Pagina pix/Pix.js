import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image } from 'react-native';
import styles from './PixStyle.js';

const Pix = ({ navigation }) => {
   
    return (
        <KeyboardAvoidingView style={styles.background}>
           <View style={styles.containerPix}>
                <Image style={styles.Pix} source={require('../../assets/images/QR_code.png')}/>
           </View>
        </KeyboardAvoidingView>
    )
}

export default Pix;