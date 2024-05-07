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
        top: 5, 
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
    }

});