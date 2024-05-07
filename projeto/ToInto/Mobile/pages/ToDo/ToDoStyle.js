import { StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#6B29A4',
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-around",
        width: '150%',
        top: 38,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    FotoPerfil: {
        width: 60,
        height: 60,
        borderRadius: 35,
        bottom: 7,
    },
    containerData: {
        width: '90%',
        padding: 13,
        backgroundColor: '#AE80D6',
        marginTop: 50,
        alignItems: "center",
    },
    data: {
        color: 'white',
        fontSize: 40,
    },
    dia: {
        color: 'white',
        fontSize: 19.6,
    },
    ContainerTitulo: {
        display: "flex",
        flexDirection: 'row',
    },
    titulo: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 0
    },
    titulo2: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 0,
        marginLeft: 15
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#AE80D6',
        width: '90%',
        top: 30,
    },
    componentes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',   
    },
    containerComp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerEdit: {
        display: 'flex1',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 18
    },
    fotoEdit: {
        width: 30,
        height: 30,
        marginRight: 7
    },
    fotoEdit2: {
        width: 25,
        height: 25,
    },
    descricao: {
        display: 'flex',
        flexDirection: "column",
        padding: 15
    },
    desc: {
        color: 'white',
        fontSize: 18
    }


});