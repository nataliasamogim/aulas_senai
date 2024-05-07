import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#773AAB',
        justifyContent: 'center',
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingLeft: 10, 
        paddingRight: 10,
        borderBottomColor: '#fff',
        paddingBottom: 10
    },

    perfil: {
        height: 55,
        width: 55,
        borderRadius: 50,
    },

    menu: {
        height: 40,
        width: 40,
        top: 7,
    },

    container: {
        backgroundColor: '#AE80D6',
        height: 550,
        width: 350,
        borderRadius: 15,
        marginTop: 30,
        marginLeft: 50,
        alignItems: 'center',
        
    },

    containerTitle: {
        borderRadius: 15,
        backgroundColor: '#6B29A4',
        margin: 15,
        width: '90%',
    },

    containerData: {
        backgroundColor: '#6B29A4',
        borderRadius: 5,
        width: 160,
        marginTop:20,
        marginBottom:0,
    },

    data: {
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

    input: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        color: '#222',
        marginBottom: 15,
        fontSize: 17,
        borderRadius: 5,
        padding: 10,

    },

    checkbox: {
        flexDirection: 'row', // alinha os itens horizontalmente
        alignItems: 'center',
        alignSelf: 'flex-start'
    },

    impText: {
        fontSize: 18,
        color: '#fff'
    },

    dropdown: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    label: {
        padding: 5,
        fontSize: 20,
        color: 'white',
        marginRight: 10
    },

    lembrete: {
        height: 5,
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
        fontSize: 19
    }


});