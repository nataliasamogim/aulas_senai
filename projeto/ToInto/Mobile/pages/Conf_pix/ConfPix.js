/*ConfPix.js
Autor: Marília
Data criação/Alterações: 03/122024
Descrição Detalhada: O componente ConfPix exibe uma mensagem de sucesso após a realização de um pagamento via Pix. Ele apresenta um título 
indicando que o pagamento foi concluído com sucesso, seguido por uma mensagem convidando o usuário a aproveitar a experiência no aplicativo 
TOINTO. O layout é configurado com o uso de KeyboardAvoidingView e estilos personalizados. O usuário pode clicar no botão "Continuar", que o 
redireciona para a tela do calendário. A navegação é feita utilizando a biblioteca react-navigation. O componente é simples, com o foco em 
informar o usuário sobre o sucesso do pagamento e guiá-lo para a próxima tela.*/
import React, { useState } from "react";
import { View, KeyboardAvoidingView, TouchableOpacity, Text } from "react-native";
import styles from './ConfStyle.js'

const ConfPix = ({ navigation }) => {
return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">

        <View style={styles.fundopix}>
            <View style={styles.titleRec}>
                <Text style={styles.titleText1}>Pagamento realizado com sucesso!</Text>
            </View>

            <View keyboardShouldPersistTaps="handled" style={styles.containerRec}>
                <Text style={styles.titleText2}>Aproveite sua experiência no TOINTO</Text>
            </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Calendario')} >
            <Text style={styles.btnContPix}>Continuar</Text>
          </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  );
}

export default ConfPix