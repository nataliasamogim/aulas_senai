/*Descrição: Esse código é responsável pela estilização da página plano no mobile, o código estiliza a estrutura da página, 
para a escolher da forma de pagamento entre pix e cartão, além dos botões*/

import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6B29A4',
    },

    /*Início da logo*/
    containerLogos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10, 
        paddingRight: 10,
        borderBottomWidth: 0.8,
        borderBottomColor: '#fff',
        top: 35, 
        paddingBottom: 10
    },
    /*Fim da logo*/

    perfil: {
        width: 60,
        height: 60, 
        borderRadius: 50,
    },
    menu: {
        width: 50,
        height: 50, 
        top: 5
    },
    container: {
        marginTop: 150
    },
    
    /*Início dos textos*/
    texto: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 50,
        textDecorationLine: 'underline',
        textDecorationColor: '#fff', 
        textDecorationStyle: 'solid',
    },
    containerSubtext: {
        marginTop: 30, 
        padding: 3
    },
    subtext: {
        color: '#fff', 
        fontSize: 27, 
        textAlign: 'center'
    },
    selectTxt: {
        fontSize: 20, 
        color: '#fff',
        paddingLeft: 10,
        alignItems: 'center'
    },
    submitTxt: {
        color: '#fff',
        fontSize: 20
    },
    /*Fim dos textos*/

    /*Início do select da escolha entre pix e cartão*/
    selectPlano: {
        alignItems: 'center',
        marginTop: 30, 
        textAlign: 'center'
    }, 
    btnSelect1: {
        display: 'flex', 
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'none'
        
    },
    btnSelect2: {
        display: 'flex', 
        flexDirection: 'row',
    },
    /*Fim do select da escolha entre pix e cartão*/

    /*Início dos botões*/
    buttonsPlano: {
        display:'flex', 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 50,
    },
    btnContinuar: {
        backgroundColor: '#AE80D6', 
        padding: 15,
        paddingLeft: 25, 
        paddingRight: 25, 
        borderRadius: 5,
        textAlign: 'center'
    },
    btnVoltar: {
        backgroundColor: '#AE80D6', 
        padding: 15,
        paddingLeft: 25, 
        paddingRight: 25,  
        borderRadius: 5,
    },

    /*Fim dos botões*/

});