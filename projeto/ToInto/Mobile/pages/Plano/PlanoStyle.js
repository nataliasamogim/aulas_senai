import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6B29A4'
    },
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
    containerText: {
        marginTop: 120,
    },
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
    selectTxt: {
        fontSize: 20, 
        color: '#fff',
        paddingLeft: 10,
        alignItems: 'center'
    },
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
    submitTxt: {
        color: '#fff',
        fontSize: 20
    }

});