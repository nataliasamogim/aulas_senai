//Descrição: estilização da página de Pix (onde o usuário vai realizar o pagamento), como a cor e tamanho do fundo, texto e imagem. além do
//resto d página

import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    //Início
    background:{
        flex: 1,
        backgroundColor: '#6B29A4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerPix:{
        alignItems: 'center'
    },
    textPix: {
        fontSize: 30,
        color: 'white'
    },
    textPix2: {
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
        color: 'white' 
    },
    //Foto do QR Code
    Pix:{
        width: 340,
        height: 340,
        borderRadius: 5,
    },
    //Código aleatório simbolizando a Chave Pix
    codeText:{
        color: 'white',
        fontSize: 20,
        marginTop: 10
    },
    btnSubSalPix:{
        backgroundColor: '#AE80D6',
        paddingLeft: 30,
        paddingRight: 30,
        padding: 13,
        borderRadius: 5,
        marginTop: 15
    },
    subTxtSalvarPix:{
        color: 'white',
        fontSize: 20,
    }
    //Fim
})