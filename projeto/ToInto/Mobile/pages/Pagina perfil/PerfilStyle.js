import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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

    botao: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        padding: 4
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
    buttonExclui: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#AE80D6',
        width: '90%',
        marginBottom: 15,
    },
    buttonSair: {
        backgroundColor: '#AE80D6',
        padding: 5,
        borderRadius: 5,
        margin: 10,
        width: '20%',
        fontSize: 17,

    },
    containerSair: {
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
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
    optionCart: {
        backgroundColor: '#773AAB',
        padding: 7,
        borderRadius: 5
    },

    option: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
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
        top: 106,
        paddingRight: 20,
        paddingLeft: 20
    },
    perfil: {
        width: 55,
        height: 55,
        borderRadius: 50,
        top: 8,
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

});