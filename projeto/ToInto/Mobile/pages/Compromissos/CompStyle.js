import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6B29A4',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#AE80D6',
        height: 550,
        width: 350,
        borderRadius: 15,
        alignItems: 'center',
        marginLeft: 50
    },
    containerTitle: {
        borderRadius: 15,
        backgroundColor: '#6B29A4',
        margin: 15,
        width: '90%',
    },

    containerData: {
        backgroundColor: '#6B29A4',
        borderRadius: 5,
        width: 160,
        marginTop:20,
        marginBottom:0,
    },

    data: {
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
        justifyContent: 'center'
    },
    containerTexto: {
        alignItems: 'center',
    },

    impText: {
        fontSize: 18,
        color: '#fff',
    },

    dropdown: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
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
    containerLogos: {
        backgroundColor: '#E0',
        height: 83,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10, 
        paddingRight: 10,
        borderTopWidth: 0.8,
        borderTopColor: '#fff',
        top: 52,
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


});