//Descrição: estilização da Landing Page (página inicial onde o usuário vai escolher se quer logar ou cadastrar), como o tamanho e cor
// dos inputs e do texto, além doresto da página

import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    //Início
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B29A4',
        width: '100%',
    },

    logo: {
        position: 'absolute',
        top: 160,
        width: 500,
        height: 200,
    },

    interrogacao: {
        marginTop: 100,
        marginLeft: 350,
        width: 43,
        height: 42,
    },

    containerLogo: {
        flex: 1,
        position: 'relative',
        alignItems:'center',
        marginTop: 60,
    },

    title: {
        marginBottom: 20,
        marginTop: '60%'
    },

    titleText: {
        color: '#fff',
        fontSize: 28,
        width: '100%'
    },

    subtitleText: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: 22,
    },

    box1: {
        marginTop: 18,
        width: 350,
        height: 50,
        backgroundColor: '#AC72BF',
        borderColor: 'black',
        alignItems: 'center',
        paddingTop: 6,
        color: '#fff',
        borderColor: '#AC72BF',
        borderRadius: 4
    },

    box2: {
        width: 350,
        height: 50,
        backgroundColor: '#AC72BF',
        borderColor: 'black',
        alignItems: 'center',
        marginTop: 20,
        textAlign: 'center',
        color: '#fff',
        borderColor: '#AC72BF',
        borderRadius: 4
    },

    boxTextL: {
        color: '#fff',
        fontSize: 20,
        marginTop: 3
    },

    boxTextC: {
        color: '#fff',
        fontSize: 20,
        marginTop: 6
    },

    selectedText: {
        color: '#fff',
        paddingTop: 5,
    },

    
    imagemcaixa: {
        width: 280,
        height: 100,
    },

    selectableBoxes: {
        flexDirection: 'column',
        flex: 0.5,
    },

    socialIcon: {
        width: 46,
        height: 46,
        marginHorizontal: 10
    },
    socialContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around', // Ajusta o espaçamento entre os ícones
        flex: 0.1,
        marginTop: '10%'
    }
    //Fim
});