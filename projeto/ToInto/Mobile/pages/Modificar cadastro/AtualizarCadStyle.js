import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B29A4',
        width: 450,
        height: 800,
    },
    containerfoto:{
        flex: 0.3
    },
    tittle: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 15,
        color: '#570D70',
        borderBottomWidth: 0.8,
        borderBottomColor: '#570D70',
    },
    formGrupoFoto: {
        alignItems: 'center',
        marginBottom: 20,
      },

      FotoPerfil:{
        width: 150,
        height: 150,
        borderRadius: 100,
        top: 20
       
      },
    container: {
        flex: 0.8,
        width: '90%',
    },
    inputs: {
        backgroundColor: '#fff',
        width: 400,
        color: '#222',
        marginBottom: 15,
        fontSize: 15,
        borderRadius: 5,
        padding: 7,
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



});