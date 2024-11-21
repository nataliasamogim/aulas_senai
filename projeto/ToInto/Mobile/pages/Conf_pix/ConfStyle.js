import { StyleSheet } from "react-native";
import { color } from "react-native-elements/dist/helpers";

export default styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#6B29A4',
        alignItems: 'center',
        justifyContent: 'center',

    },
    fundopix:{
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        padding: 13,
        borderRadius: 5,
        marginTop: 15,
        backgroundColor: '#AE80D6',
    },
    titleText1:{
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    titleText2:{
        marginBottom: 10,
        fontSize: 18,
        color: 'white',
    },
    btnContPix:{
        color: 'white',
        fontSize: 20,
        marginTop: 14,
        paddingLeft: 30,
        paddingRight: 30,
        padding: 13,
        borderRadius: 5,
        borderWidth: 2,   // Define a largura da borda
        borderColor: 'white',  // Define a cor da borda
    }
})