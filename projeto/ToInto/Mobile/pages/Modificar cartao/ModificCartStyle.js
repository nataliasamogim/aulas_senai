//Descrição: estilizção do Modificar Cartão (onde o usuário modifica suas informações), como a cor e tamanho dos titulos e os inputs, além
//de todo o código

import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  //Inicio
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B29A4',
        width:450,
        height:800,
    },
    containerTitulo: {
        flex: 0.17,
        position: 'relative',
        padding: 10,
    },
    titulo: {
        fontSize: 30,
        color: '#570D70',
        marginTop: 20,
    },
    
    container: {
        flex: 1,
        width: '90%',
    },
    inputs: {
        backgroundColor: '#fff',
        width: 400,
        color: '#222',
        marginBottom: 15,
        fontSize: 17,
        borderRadius: 5,
        padding: 10,

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
    label: {
        fontSize: 18,
        color: '#fff',
    },
      modalText: {
        marginBottom: 10, 
        fontSize: 18,
        textAlign: 'left', 
        color: '#fff',
      },
      containerConta: {
        alignItems: 'center',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      titleNoCampo:{
        color: '#fff', 
        fontSize: 16,
        marginRight: 5,
      },
      Txtentrar: {
        color: '#fff',
        fontSize: 18,
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
        marginTop: 20, 
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
      closeButton: {
        backgroundColor: '#570D70',
        paddingVertical: 10,
        borderRadius: 15,
        width: 150,
        marginTop: 20, 
      },
      closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
      },
    //Fim
});