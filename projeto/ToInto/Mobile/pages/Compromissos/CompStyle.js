//Descrição: estilização da página de Compromissos (onde crias as tarefas), como a cor e tamanho dos textos 

import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    //Início
    background: {
        flex: 1,
        backgroundColor: '#6B29A4',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#AE80D6',
        height: 557,
        width: 350,
        borderRadius: 15,
        alignItems: 'center',
        marginLeft: 22
    },

    containerData: {
        width: 160,
        marginTop:20,
        marginBottom:0,
    },

    data: {
        backgroundColor: '#6B29A4',
        borderRadius: 5,
        fontSize: 45,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
    },
    dataSemana: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },

    titleInput: {
        fontSize: 17,
        color: '#fff',
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    input_descr: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        color: '#222',
        marginBottom: 7,
        fontSize: 15,
        borderRadius: 5,
        padding: 10,
    },

    input: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        color: '#222',
        marginBottom: 15,
        fontSize: 15,
        borderRadius: 5,
        padding: 10,
    },

    checkboxText: {
        flexDirection: 'row', // alinha os itens horizontalmente
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginBottom: 6
    },
    containerTexto: {
        alignItems: 'center',
    },

    impText: {
        fontSize: 18,
        color: '#fff',
        marginLeft: -12,
        marginTop: -2,
    },

    dropdown: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    label: {
        padding: 5,
        fontSize: 20,
        color: 'white',
    },

    lembrete: {
        width: 180,
        backgroundColor: '#6B29A4',
        color: '#fff',
    },

    btn: {
        paddingLeft: 30,
        paddingRight: 30,
        padding: 13,
        borderRadius: 7,
        backgroundColor:'#6B29A4',
        marginTop: 15

    },
    btnTxt: {
        color: '#fff',
        fontSize: 18
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
        top: 55,
        paddingRight: 20,
        paddingLeft: 20
    },
    perfil: {
        width: 55,
        height: 55, 
        borderRadius: 50,
        top: 10,
    },
    menu: {
        width: 48,
        height: 48, 
        top: 14
    },
    iconeCalen: {
        width: 50,
        height: 50, 
        top: 12
    },
    btnHorario: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        color: '#222',
        marginBottom: 15,
        fontSize: 15,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center', // Centraliza o texto verticalmente
    },
    btnHorarioText: {
        fontSize: 15,
    },
       // ** NOVO: Estilos para exibir mensagens de erro diárias em compromissos **
       modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#AC72BF', // Cor de fundo semelhante ao estilo principal
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
    },
    modalText: {
        marginBottom: 10, // Espaçamento entre as mensagens de erro
        fontSize: 18,
        textAlign: 'left', // Alinhamento do texto para a esquerda
        color: '#fff',
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
    // Estilo para a parte de compromissos com mensagens de erro**
    compromissoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
    },
    compromissoText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    compromissoBtnContainer: {
        marginTop: 15,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    compromissoBtn: {
        backgroundColor: '#570D70', // Cor do botão para manter o tema
        borderRadius: 5,
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    compromissoBtnText: {
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
    //Fim
});