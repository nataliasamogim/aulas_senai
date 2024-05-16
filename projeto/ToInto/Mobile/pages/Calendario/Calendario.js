import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Alert, Modal, TouchableHighlight, TouchableOpacityBase } from "react-native";
import styles from "./CalenStyle";
const Calendario = ({ navigation }) => {

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerImage}>
                <Image style={styles.fotoCalen} resizeMode='contain' source={require('../../assets/images/Calendario.png')} />
            </View>

            <View style={styles.buttonsCalen}>
                <TouchableOpacity style={styles.btnMais} onPress={() => navigation.navigate('ToDoList')}>
                    <Text style={styles.submitTxt}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerLogos}>
                <TouchableOpacity style={styles.containerMenu} onPress={() => navigation.navigate('MenuHSI')}>
                    <Image style={styles.menu} resizeMode='contain' source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerCalen} onPress={() => navigation.navigate('Calendario')}>
                    <Image style={styles.iconeCalen} resizeMode='contain' source={require('../../assets/images/iconeCalen.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerPerfil} onPress={() => navigation.navigate('Perfil')}>
                    <Image style={styles.perfil} resizeMode='contain' source={require('../../assets/images/foto_perfil.jpg')} />
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}
export default Calendario;