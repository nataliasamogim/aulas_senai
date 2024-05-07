import { StatusBar } from 'expo-status-bar';
import { Text, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import styles from './Style_todo';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';


export default function App() {
    const [checked, setChecked] = useState(false);
    const handleCheckBox = () => {
        setChecked(!checked);
    };

    return (

        <KeyboardAvoidingView style={styles.background}>

            <View style={styles.header}>
            <TouchableOpacity>
                <Image style={styles.Menu} resizeMode='contain' source={require('./assets/images/menubranco.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.FotoPerfil} resizeMode='contain' source={require('./assets/images/foto_perfil.jpg')} />
            </TouchableOpacity>
            </View>

            <View style={styles.containerData}>
                <Text style={styles.data}> 28/04 </Text>
                <Text style={styles.dia}> Quinta-Feira </Text>
            </View>

            <View style={styles.content}>
                <View style={styles.componentes}>
                    <View style={styles.containerComp}>
                        <CheckBox
                            checked={checked}
                            onPress={handleCheckBox}
                            checkedColor='white'
                            uncheckedColor='white'
                        />
                        <View style={styles.ContainerTitulo}>
                            <Text style={styles.titulo}>10:00</Text>
                            <Text style={styles.titulo2}>Dentista</Text>
                        </View>
                    </View>

                    <View style={styles.containerEdit}>
                    <TouchableOpacity>
                        <Image style={styles.fotoEdit} resizeMode='contain' source={require('./assets/images/lapisbranco.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.fotoEdit2} resizeMode='contain' source={require('./assets/images/lixobrancodois.png')} />
                    </TouchableOpacity>
                    </View>
                    

                </View>

                <View style={styles.descricao}>
                    <Text style={styles.desc}> Descrição................. </Text>
                </View>

                <StatusBar style="auto" />
            </View>

        </KeyboardAvoidingView>


    );
}