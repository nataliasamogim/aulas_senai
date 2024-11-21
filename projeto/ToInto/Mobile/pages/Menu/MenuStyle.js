import { StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import { transpose } from "date-fns";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6B29A4',
    },
    containerTarefas: {
        padding: 13,
        marginTop: 20,
    },
    containerHSI: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 16,
        alignItems: 'center',
        backgroundColor: '#AE80D6'
    },
    containerHoraTitle: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    textMenu: {
        color:'white',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor:'white'
    },
    tituloMenu: {
        color:'white',
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 10,
    },
    textAtivHoje:{
        color: 'white',
        fontSize: 22,
        paddingTop: 16,
        paddingLeft: 12
    },
    data1: {
        color: 'white',
        fontSize: 20,
        display: 'flex',
        paddingTop: 12,
    },
    dia: {
        color: 'white',
        fontSize: 19.6,
    },
    horario: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 0,
    },
    titulo: {
        color: 'white',
        fontSize: 20,
       
    },
    check_tarefa: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: -10,
        marginRight: -20,
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
        paddingTop: 32,
        paddingRight: 12
    },
    fotoEdit: {
        width: 30,
        height: 30,
        marginRight: 0,
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

    componentesTarefas: {
        marginBottom: 10, // Adiciona espaço entre as tarefas
        padding: 7,
        backgroundColor: '#AE80D6', // Cor de fundo para destacar cada tarefa
        borderRadius: 5,
        //display: 'flex',
        //flexDirection: 'row'
    },
    noTaskMessage: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    check: {
        marginLeft: 111
    },
    tarefaImportante: {
        backgroundColor: '#628cbd', /* Azul para destaque */
        color: 'white', /* Texto branco para contraste */
    }
});

