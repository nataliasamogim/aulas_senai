/*Descrição detalhada: Esse código é responsável pela estilização do Modificar Compromisso do Tointo Mobile, 
que inclui, os botões, os inputs e os textos, o checkBox */

import { StyleSheet } from 'react-native';

/*Inicio do Modificar compromisso*/
export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6B29A4',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#AE80D6',
        height: 565,
        width: 400,
        borderRadius: 15,
        alignItems: 'center',
        marginLeft: 22
    },

    containerData: {
        width: 160,
        marginTop:20,
        marginBottom:0,
    },

    data: {
        backgroundColor: '#6B29A4',
        borderRadius: 5,
        fontSize: 45,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
    },
    dataSemana: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },

    titleInput: {
        fontSize: 17,
        color: '#fff',
        alignSelf: 'flex-start',
        marginLeft: 20,

    },
    input_descr: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        color: '#222',
        marginBottom: 7,
        fontSize: 15,
        borderRadius: 5,
        padding: 10,

    },

    input: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        color: '#222',
        marginBottom: 15,
        fontSize: 15,
        borderRadius: 5,
        padding: 10,

    },

    checkboxText: {
        flexDirection: 'row', // alinha os itens horizontalmente
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginBottom: 6
    },
    containerTexto: {
        alignItems: 'center',
    },

    impText: {
        fontSize: 18,
        color: '#fff',
        marginLeft: -12,
        marginTop: -2,
    },

    dropdown: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    label: {
        padding: 5,
        fontSize: 20,
        color: 'white',
    },

    lembrete: {
        width: 180,
        backgroundColor: '#6B29A4',
        color: '#fff',
    },

    btn: {
        paddingLeft: 30,
        paddingRight: 30,
        padding: 13,
        borderRadius: 7,
        backgroundColor:'#6B29A4',
        marginTop: 15

    },
    btnTxt: {
        color: '#fff',
        fontSize: 18
    },
    btnHorario: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        color: '#222',
        marginBottom: 15,
        fontSize: 15,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center', // Centraliza o texto verticalmente
    },
    btnHorarioText: {
        fontSize: 15,
    },
    
 /*Fim do modificar do compromisso */

});