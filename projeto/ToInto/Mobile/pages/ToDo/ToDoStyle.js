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
        backgroundColor: '#AE80D6',
        width: '90%',
        padding: 13,
        marginTop: 20,
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
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
        display: 'flex',
        flexDirection: 'row',
    },
    fotoEdit: {
        width: 24,
        height: 24,
        marginLeft: 10
    },
    fotoEdit2: {
        width: 18,
        height: 18,
    },
    descricao: {
        paddingLeft: 15,
    },
    textDesc: {
        color: 'white',
        fontSize: 18
    },
    adicionar: {
        position: 'absolute',
        bottom: 40,
        right: 20,
        backgroundColor: '#AE80D6',
        padding: 0,
        justifyContent: 'center',
        alignItems:'center',
        display: 'flex',
        borderRadius: 80,
        height: 60,
        width:60
    },
    botaoMais: {
        color: 'white',
        fontSize: 35,

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
    componentesTarefas: {
        marginBottom: 6, // Adiciona espaço entre as tarefas
        padding: 6,
        backgroundColor: '#AE80D6', // Cor de fundo para destacar cada tarefa
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1,
        //display: 'flex',
        //flexDirection: 'row'
    },
    noTaskMessage: {
        color: 'white',
        fontSize: 16,
        marginLeft: 130
    }
});

