import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    background: {
        backgroundColor: '#6B29A4',
        height: 720,
    },
    containerHSI: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 16,
        alignItems: 'center',
        backgroundColor: '#AE80D6'
    },
    textMenu: {
        color:'white',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor:'white'
    },
    textAtivHoje: {
        color:'white',
        fontSize: 20,
        paddingTop: 20,
        paddingLeft:15,
    },
    textAtivSemana: {
        color:'white',
        fontSize: 20,
        paddingTop: 7,
        paddingLeft:15,
    },
    textAtivImport: {
        color:'white',
        fontSize: 20,
        paddingTop: 7,
        paddingLeft:15,
    },
    containerTarefa: {
        backgroundColor:'#AE80D6',
        margin: 15,
        borderRadius:5,
        padding: 5,
    },
    containerTarefa3: {
        backgroundColor:'#779ECB',
        margin: 15,
        borderRadius:5,
        padding: 5,
    },
    containerData: {
        flexDirection:'row',
        paddingLeft: 15,
        paddingTop: 10,
    },
    data: {
        color:'white',
        fontSize:18,
    },
    componentes: {
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    containerComp: {
        flexDirection:'row',
    },
    containerEdit: {
        flexDirection: 'row',
    },
    containerTitulo: {
        flexDirection:'row',
        alignItems:'center'
    },
    titulo: {
        color:'white',
        fontSize:17,
        marginLeft: -15
    },
    titulo2: {
        color:'white',
        fontSize:17,
        paddingLeft: 8,
        paddingRight:20,
    },
    fotoEdit: {
        width:30,
        height: 30,
    },
    fotoEdit2: {
        width:20,
        height: 30,
    },
    desc: {
        color:'white',
        fontSize: 17,
        paddingLeft:15,
        paddingBottom:10,
    },
    editButton: {
        marginRight: 10, 
    },
    containerLogos: {
        backgroundColor: '#E0',
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10, 
        paddingRight: 10,
        borderTopWidth: 0.8,
        borderTopColor: '#fff',
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
        top: 12
    },
    iconeCalen: {
        width: 50,
        height: 50, 
        top: 12
    },
    
});
