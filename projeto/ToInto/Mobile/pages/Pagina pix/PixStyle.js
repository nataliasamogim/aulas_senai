import { StyleSheet } from "react-native";
import { color } from "react-native-elements/dist/helpers";

export default styles = StyleSheet.create({
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
    Pix:{
        width: 340,
        height: 340,
        borderRadius: 5,
    },
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
})