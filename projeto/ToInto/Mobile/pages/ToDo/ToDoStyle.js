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
        marginLeft: 15,
       
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        top: 25,
    },
    check_tarefa: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: -10,
    },
    containerComp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerEditExcluir: {
        display: 'flex',
        flexDirection: 'row',

    },
    fotoEdit: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    fotoEdit2: {
        width: 25,
        height: 25,
    },
    descricao: {
        padding: 9,

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
        alignItems: 'center',
        display: 'flex',
        borderRadius: 80,
        height: 60,
        width: 60
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
    componentesTarefas: {
        marginBottom: 15, // Adiciona espaço entre as tarefas
        padding: 7,
        backgroundColor: '#AE80D6', // Cor de fundo para destacar cada tarefa
        borderRadius: 5,
        //display: 'flex',
        //flexDirection: 'row'
    },
    noTaskMessage: {
        color: 'white',
        fontSize: 16,
        marginLeft: 130
    }
});

