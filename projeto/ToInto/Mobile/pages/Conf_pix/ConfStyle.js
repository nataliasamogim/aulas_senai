//Descrição: Estilização da mensagem de confirmação do pagamento do Pix, como a cor e temanho dos textos, além do fundo o resto da página

import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    //Início
    background:{
        flex: 1,
        backgroundColor: '#6B29A4',
        alignItems: 'center',
        justifyContent: 'center',

    },
    fundopix:{
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        padding: 13,
        borderRadius: 5,
        marginTop: 15,
        backgroundColor: '#AE80D6',
    },
    titleText1:{
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'//para deixar em negrito
    },
    titleText2:{
        marginBottom: 10,
        fontSize: 18,
        color: 'white',
    },
    btnContPix:{
        color: 'white',
        fontSize: 20,
        marginTop: 14,
        paddingLeft: 30,
        paddingRight: 30,
        padding: 13,
        borderRadius: 5,
        borderWidth: 2,   
        borderColor: 'white',  
    }
    //Fim
})