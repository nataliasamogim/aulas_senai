/*Descrição: Esse código é responsável pela estilização da página Todo no mobile, o código estiliza a estrutura da página, 
como o fundo, containeres de tarefas, exibição de datas, horários, descrições e botões.*/

import { StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import { transpose } from "date-fns";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6B29A4',
    },
    containerTarefas: {
        alignItems: 'center',

    },
    containerComp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    componentesTarefas: {
        marginBottom: 10, // Adiciona espaço entre as tarefas
        padding: 7,
        backgroundColor: '#AE80D6', // Cor de fundo para destacar cada tarefa
        borderRadius: 5,
        //display: 'flex',
        //flexDirection: 'row'
    },
    /*Início da data*/
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
    /*Fim da data*/

    /*Início do hora, título e descrição*/
    containerHoraTitle: {
        display: "flex",
        flexDirection: 'row',
        marginLeft: -15,
        marginTop: -4
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
        marginLeft: 10,
       
    },
    descricao: {
        padding: 9,

    },
    textDesc: {
        color: 'white',
        fontSize: 18
    },
    /*Fim hora, título e descrição*/

    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        top: 25,
        marginBottom: 25
    },

    /*Início das tarefas com check*/
    check_tarefa: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: -10,
        marginRight: -20,
    },
    check: {
        marginLeft: 111
    },
    /*Fim das tarefas com check*/

    /*Início do editar e excluir*/
    containerEditExcluir: {
        display: 'flex',
        flexDirection: 'row',

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

    /*Fim do editar e excluir*/

    /*Início do botão de adicionar tarefas*/
    adicionar: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: '#6B39A9',
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
        textAlign: 'center',

    },

    /*Fim do botão de adicionar tarefas*/

    /*Início para quando não possui tarefas*/
    noTaskMessage: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    /*Fim para quando não possui tarefas*/
    
    /* Início das tarefas importantes*/
    tarefaImportante: {
        backgroundColor: '#628cbd', /* Azul para destaque */
        color: 'white', /* Texto branco para contraste */
    }
    /* Fim das tarefas importantes*/
});

