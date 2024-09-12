import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6B29A4'
    },
    container: {
        height: 565,
        marginTop: 30,
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
    containerImage:{
        alignItems: 'center',
        marginTop: 20
    },
    fotoCalen: {
        width: 550,
        height: 550,
    },
    buttonsCalen: {
        display:'flex', 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },
    btnMais: {
        backgroundColor: '#AE80D6', 
        padding: 10,
        paddingLeft: 25, 
        paddingRight: 25, 
        borderRadius: 5,
        textAlign: 'center'
    },
    submitTxt: {
        color: '#fff',
        fontSize: 20
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
        top: 29,
        paddingRight: 20,
        paddingLeft: 20,
        position: 'relative'
    },

});