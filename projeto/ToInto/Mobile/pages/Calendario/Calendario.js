import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Alert, Modal, TouchableHighlight } from "react-native";
import styles from "./CalenStyle";
const Calendario = ({ navigation }) => {

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogos}>
                <View style={styles.containerMenu}>
                    <Image style={styles.menu} resizeMode='contain' source={require('../../assets/images/menu.png')} />
                </View>
                <View style={styles.containerPerfil}>
                    <Image style={styles.perfil} resizeMode='contain' source={require('../../assets/images/foto_perfil.jpg')} />
                </View>
            </View>

            <View style={styles.containerImage}>
                <Image style={styles.fotoCalen} resizeMode='contain' source={require('../../assets/images/Calendario.png')} />
            </View>

            <View style={styles.buttonsCalen}>
                <TouchableOpacity style={styles.btnMais} onPress={() => navigation.navigate('ToDoList')}>
                    <Text style={styles.submitTxt}>+</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}
export default Calendario;