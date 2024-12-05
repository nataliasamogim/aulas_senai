/*Descrição: Esse código é responsável pela estilização da página recuperar senha no mobile, o código estiliza a estrutura da página, 
como o nome de usuário, email e botões.*/

import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B29A4',
        width: 395,
    },

    containerRec:{
        marginBottom: '8%',
    },

    /*Início da logo*/
    logoRec: {
        position: 'absolute',
        top: 80,
        width: 500,
        height: 200,
    },

    containerLogoRec: {
        flex: 1,
        position: 'relative',
        alignItems:'center',
    },
    /*Fim da logo*/

    /*Início dos textos e email*/
    titleRec:{
        marginBottom: '8%',
    },

    titleTextRec: {
        color: '#fff',
        fontSize: 26,
    },

    titleText2: {
        color: '#fff',
        fontSize: 18,
    },

    inputEmailrec:{
        backgroundColor: '#fff',
        width: 330,
        height: 45,
        color: '#222',
        fontSize: 15,
        borderRadius: 3,
        paddingLeft: 10,
    },

    /*Fim dos textos e email*/

    /*Início dos botões*/
    btnSubSalvarRec:{
        backgroundColor: '#AE80D6', 
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        padding: 10,
        borderRadius: 3, 
        marginBottom: '48%'
    },

    subTxtSalvarRec:{
        color: 'white',
        fontSize: 25,
    },

    btnSalvarRec:{
        alignItems: 'center',
       
    }

    /*Fim dos botões*/
});