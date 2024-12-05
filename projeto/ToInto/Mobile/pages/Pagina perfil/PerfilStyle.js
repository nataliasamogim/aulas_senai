/*Descrição detalhada: Esse código é responsável pela estilização do Perfil do Tointo Mobile, que consiste em um modal,
por essa razão esse código inclui edição de sua posição, dos botões, dos textos */
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    /*Inicio do Perfil*/
    container: {
        flex: 1,
        backgroundColor: '#6B29A4',
    },

    containerPerfil: {
        top: 60,
        alignItems: 'center'
    },

    foto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },

    text: {
        fontSize: 20,
        color: 'white',
        marginBottom: 5,
        textAlign: 'center',
    },

    text2: {
        fontSize: 20,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },

    containerButtons: {
        marginTop: 50,
        borderRadius: 15,
        width: '70%',
        alignItems: 'center',
        marginLeft: 65
    },

    button: {
        padding: 5,
        borderRadius: 5,
        margin: 10,
        backgroundColor: '#AE80D6',
        width: '90%',
        marginBottom: 15
    },

    botao: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        padding: 4
    },

    ModifPag: {
        padding: 5,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: '#AE80D6',
        width: '90%'
    },

    optionsContainer: {
        marginTop: 5,
        padding: 10,
        borderRadius: 10,
        width: '95%'
    },

    optionPag: {
        backgroundColor: '#773AAB',
        marginBottom: 8,
        padding: 7,
        borderRadius: 5
    },

    option: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
    },

    optionCart: {
        backgroundColor: '#773AAB',
        padding: 7,
        borderRadius: 5
    },
    
    buttonAjuda: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#AE80D6',
        width: '90%',
        marginBottom: 15,
    },
    
    buttonExclui: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#AE80D6',
        width: '90%',
        marginBottom: 15,
    },

    containerSair: {
        alignItems: 'center'
    },

    buttonSair: {
        backgroundColor: '#AE80D6',
        padding: 5,
        borderRadius: 5,
        margin: 10,
        width: '20%',
        fontSize: 17,
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
        top: 93,
        paddingRight: 20,
        paddingLeft: 20
    },
    
    buttonText: {
        fontSize: 16,
    },

    menu: {
        width: 48,
        height: 48,
        top: 12
    },

    iconeCalen: {
        width: 50,
        height: 50,
        top: 10
    },
    
    perfil: {
        width: 55,
        height: 55,
        borderRadius: 50,
        top: 8,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalView: {
        margin: 20,
        backgroundColor: '#6B29A4',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },

    buttonsModal: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },

    closeButton: {
        backgroundColor: '#AE80D6',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        margin: 5,
    },

    confirmButton: {
        backgroundColor: '#AE80D6',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        margin: 5,
        marginLeft: 40,
    },
    
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    /*Fim do perfil*/

});