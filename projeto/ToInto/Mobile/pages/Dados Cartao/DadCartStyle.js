import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B29A4',
        width:450,
        height:800,
    },
    containerTitulo: {
        flex: 0.17,
        position: 'relative',
        padding: 10,
    },
    titulo: {
        fontSize: 30,
        color: '#570D70',
        marginTop: 20,
    },
    
    container: {
        flex: 1,
        width: '90%',
    },
    inputs: {
        backgroundColor: '#fff',
        width: 400,
        color: '#222',
        marginBottom: 15,
        fontSize: 17,
        borderRadius: 5,
        padding: 10,

    },
    btnSubmit: {
        backgroundColor: '#570D70',
        justifyContent: 'center',
        marginBottom: 15,
        alignItems: 'center',
        width: '43%',
        height: 45,
        borderRadius: 5,
        margin: 10,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
    },
    submitTxt: {
        color: '#fff',
        fontSize: 18,
    },
    label: {
        fontSize: 18,
        color: '#fff',
    },
    
});