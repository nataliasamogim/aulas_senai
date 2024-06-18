import { StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    background: {
      flex: 1,
      color: '#AC72BF',
      alignItems: 'center',
      justifyContent: 'center',
      width: 450,
      height: 720,
    },
    containerLogoLogin:{
        flex: 0.8,
        justifyContent: 'center',
    },
    logoLogin:{
        width: 500,
        height: 200,
    }, 
    container:{
        flex: 1.2,
        width: '90%',
    },
    inputs:{
        backgroundColor: '#fff',
        width: '92%',
        color: '#222',
        marginBottom: 15,
        fontSize: 17,
        borderRadius: 5,
        padding: 10,
    },
    containerInput:{
        alignItems: 'center',
    },
    titleCampo:{
        color: '#fff',
        fontSize: 18,
        paddingLeft: 15

    },
    buttons:{
        alignItems: 'center',
    },
    btnSubmit:{
        backgroundColor: '#AE80D6',
        justifyContent: 'center',
        marginBottom: 15,
        alignItems: 'center',
        width: '60%',
        height: 45,
        borderRadius: 5,
    },
    btnRegistrar:{
        justifyContent: 'center',
        marginBottom: 15,
        alignItems: 'center',
        width: '90%',
        height: 45,
    },
    titleNoCampo:{
        color: '#fff', 
        fontSize: 16,
    },
    textNoConta:{
        justifyContent: 'center',
        marginBottom: 15,
        alignItems: 'center',
        width: '90%',
        height: 45,
    },
    submitTxt:{
        color: '#fff',
        fontSize: 20,
    },
    socialIcon: {
        width: 50,
        height:50,
    },
    socialContainer: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    
  });