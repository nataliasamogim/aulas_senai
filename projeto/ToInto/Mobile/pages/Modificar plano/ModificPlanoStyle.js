//Descrição: estilização do Modificar Plano, como a cor e tamanho dos botões e dos textos, além do resto d página

import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    //Início
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B29A4',
        width:450,
        height:800,
    },
    btnSubmit: {
        backgroundColor: '#570D70',
        justifyContent: 'center',
        marginBottom: 15,
        alignItems: 'center',
        width: '43%',
        height: 45,
        borderRadius: 5,
        margin: 10,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
    },
    submitTxt: {
        color: '#fff',
        fontSize: 18,
    },
    selectableBoxes: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        top: 30,
    },
    box: {
        width: 400,
        height: 180,
        backgroundColor: '#AC72BF',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        paddingTop: 6,
        marginBottom:20,
        color: '#fff',
        marginLeft:15,
    },
    selected: {
        backgroundColor: '#570D70',
    },
    imagemcaixa: {
        width: 80,
        height: 80,
    },
    boxText: {
        color: '#fff',
        fontSize: 25,
    },
    boxSubtitle: {
        color: '#fff',
        fontSize: 15,
    },
    saibaMais: {
        paddingTop: 10,
        color: '#570D70',
        fontSize: 15,
    },
    selectedText: {
        color: '#fff',
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
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#570D70',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
    },
    closeButton: {
        backgroundColor: '#570D70',
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 0,
        width: 150,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    //Fim
});