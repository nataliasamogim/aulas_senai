import { StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6B29A4',
    },
    containerTarefas: {
        alignItems: 'center',

    },
    containerData: {
        width: '90%',
        padding: 13,
        backgroundColor: '#AE80D6',
        marginTop: 20,
        alignItems: 'center',
    },
    data: {
        color: 'white',
        fontSize: 40,
    },
    dia: {
        color: 'white',
        fontSize: 19.6,
    },
    containerHoraTitle: {
        display: "flex",
        flexDirection: 'row',
    },
    horario: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 0
    },
    titulo: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 0,
        marginLeft: 15
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#AE80D6',
        width: '90%',
        top: 25,
    },
    componentesTarefas: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerComp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerEditExcluir: {
        display: 'flex1',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 14
    },
    fotoEdit: {
        width: 30,
        height: 30,
        marginRight: 4
    },
    fotoEdit2: {
        width: 22,
        height: 22,
    },
    descricao: {
        paddingLeft: 15,
     
    },
    textDesc: {
        color: 'white',
        fontSize: 18
    },
    botaoMais: {
        color: 'white',
        fontSize: 48
    },
    adicionar: {
        alignItems: 'flex-end',
        paddingRight: 13
    },
    containerLogos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        borderTopWidth: 0.8,
        borderTopColor: '#fff',
        top: 375,
        paddingRight: 20,
        paddingLeft: 20
    },
    perfil: {
        width: 55,
        height: 55,
        borderRadius: 50,
        top: 10,
    },
    menu: {
        width: 48,
        height: 48,
        top: 12
    },
    iconeCalen: {
        width: 50,
        height: 50,
        top: 12
    },


});