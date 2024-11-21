import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        color: '#AC72BF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 720,
    },
    containerLogoLogin: {
        flex: 0.8,
        justifyContent: 'center',
    },
    logoLogin: {
        width: 500,
        height: 200,
    },
    container: {
        flex: 1.2,
        width: '90%',
    },
    inputs: {
        backgroundColor: '#fff',
        width: '92%',
        color: '#222',
        marginBottom: 15,
        fontSize: 17,
        borderRadius: 5,
        padding: 10,
        paddingRight: 40, 
    },
    containerInput: {
        alignItems: 'center', 
        position: 'relative', 
    },
    titleCampo: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: 15,
    },
    buttons: {
        alignItems: 'center',
    },
    btnSubmit: {
        backgroundColor: '#AE80D6',
        justifyContent: 'center',
        marginBottom: 15,
        alignItems: 'center',
        width: '60%',
        height: 45,
        borderRadius: 5,
    },
    btnRegistrar: {
        justifyContent: 'center',
        marginBottom: 15,
        alignItems: 'center',
        width: '90%',
        height: 45,
    },
    titleNoCampo: {
        color: '#fff',
        fontSize: 16,
    },
    textNoConta: {
        justifyContent: 'center',
        marginBottom: 15,
        alignItems: 'center',
        width: '90%',
        height: 45,
    },
    submitTxt: {
        color: '#fff',
        fontSize: 20,
    },
    socialIcon: {
        width: 50,
        height: 50,
    },
    socialContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    eyeIcon: {
        marginTop: -50, // Ajuste fino para alinhar
        marginLeft: 300,
        height: 25, // Defina a altura do ícone
        width: 25, // Defina a largura do ícone
    },
    recSenha: {
        color: 'white',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 17,
        marginBottom: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#AC72BF',
        borderRadius: 20,
        width: '80%',
        padding: 20,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff',
        marginTop: 20, // Espaçamento acima do título
    },
    modalText: {
        marginBottom: 10, // Espaçamento entre as mensagens de erro
        fontSize: 18,
        textAlign: 'left', // Alinhamento do texto para a esquerda
        color: '#fff',
    },
    containerConta: {
        alignItems: 'center',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    titleNoCampo: {
        color: '#fff',
        fontSize: 16,
        marginRight: 5,
    },
    Txtentrar: {
        color: '#fff',
        fontSize: 18,
    },
    closeButton: {
        backgroundColor: '#570D70',
        paddingVertical: 10,
        borderRadius: 15,
        width: 150,
        marginTop: 20, // Espaçamento acima do botão Fechar
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    containerErro: {
        marginBottom: 20,
    },
    textErro: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 18,
        color: '#fff',
    },
});
