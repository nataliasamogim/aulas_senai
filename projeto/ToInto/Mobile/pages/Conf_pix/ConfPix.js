import React, { useState } from "react";
import { View, KeyboardAvoidingView, TouchableOpacity, Text } from "react-native";
import styles from './ConfStyle.js'

const ConfPix = ({ navigation }) => {
return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">

        <View style={styles.fundopix}>
            <View style={styles.titleRec}>
                <Text style={styles.titleText1}>Pagamento realizado com sucesso!!!</Text>
            </View>

            <View keyboardShouldPersistTaps="handled" style={styles.containerRec}>
                <Text style={styles.titleText2}>Aproveie sua jornada no TOINTO</Text>
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