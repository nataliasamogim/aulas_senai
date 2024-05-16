import { StatusBar } from 'expo-status-bar';
import { Text, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import styles from './ToDoStyle.js';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';


export default function ToDo({ navigation }) {
    const [checked, setChecked] = useState(false);
    const handleCheckBox = () => {
        setChecked(!checked);
    };

    return (

        <KeyboardAvoidingView style={styles.background}>

            <View style={styles.containerTarefas}>
                <View style={styles.containerData}>
                    <Text style={styles.data}> 09/05 </Text>
                    <Text style={styles.dia}> Quinta-Feira </Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.componentesTarefas}>
                        <View style={styles.containerComp}>
                            <CheckBox
                                checked={checked}
                                onPress={handleCheckBox}
                                checkedColor='white'
                                uncheckedColor='white'
                            />
                            <View style={styles.containerHoraTitle}>
                                <Text style={styles.horario}>08:00</Text>
                                <Text style={styles.titulo}>Apresentação SENAI</Text>
                            </View>
                        </View>

                        <View style={styles.containerEditExcluir}>
                            <TouchableOpacity>
                                <Image style={styles.fotoEdit} resizeMode='contain' source={require('../../assets/images/lapisbranco.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.fotoEdit2} resizeMode='contain' source={require('../../assets/images/lixobrancodois.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.descricao}>
                        <Text style={styles.textDesc}> Descrição................. </Text>
                    </View>

                    <View style={styles.adicionar}>
                        <TouchableOpacity onPress={() => navigation.navigate('Compromissos')}>
                            <Text style={styles.botaoMais}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            <View style={styles.containerLogos}>
                <TouchableOpacity style={styles.containerMenu} onPress={() => navigation.navigate('MenuHSI')}>
                    <Image style={styles.menu} resizeMode='contain' source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerCalen} onPress={() => navigation.navigate('Calendario')}>
                    <Image style={styles.iconeCalen} resizeMode='contain' source={require('../../assets/images/iconeCalen.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containericonePerfil} onPress={() => navigation.navigate('Perfil')}>
                    <Image style={styles.perfil} resizeMode='contain' source={require('../../assets/images/foto_perfil.jpg')} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >


    );
}