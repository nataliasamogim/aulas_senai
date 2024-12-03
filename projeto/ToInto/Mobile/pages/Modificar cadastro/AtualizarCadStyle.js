import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6B29A4',
    width: 450,
    height: 800,
  },
  containerfoto: {
    flex: 0.3
  },
  tittle: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 15,
    color: '#570D70',
  },
  formGrupoFoto: {
    alignItems: 'center',
    marginBottom: 20,
  },

  FotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 100,
    top: 20

  },
  container: {
    flex: 0.8,
    width: '90%',
  },
  inputs: {
    backgroundColor: '#fff',
    width: 400,
    color: '#222',
    marginBottom: 15,
    fontSize: 15,
    borderRadius: 5,
    padding: 7,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Escurece o fundo do modal para maior contraste
  },
  modalContent: {
    backgroundColor: '#AC72BF',
    borderRadius: 15,
    width: '85%',
    padding: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
    color: '#fff',
  },
  modalText: {
    marginBottom: 10, // Espaçamento entre as mensagens de erro
    fontSize: 18,
    textAlign: 'left', // Alinhamento do texto para a esquerda
    color: '#fff',
  },
  containerConta: {
    alignItems: 'center',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleNoCampo: {
    color: '#fff',
    fontSize: 16,
    marginRight: 5,
  },
  Txtentrar: {
    color: '#fff',
    fontSize: 18,
  },
  closeButton: {
    backgroundColor: '#570D70',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerErro: {
    marginBottom: 20,
  },
  textErro: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18,
    color: '#fff',
  },
  photoOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que as fotos ocupem várias linhas
    justifyContent: 'center',
    marginBottom: 15,
  },
  opcaoFotoPerfil: {
    width: 70, // Tamanho aumentado para 60px
    height: 70, // Tamanho aumentado para 60px
    margin: 10,
    borderRadius: 50, // Mantém o formato redondo
    borderWidth: 3,
    borderColor: '#570D70',
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedFoto: {
    borderWidth: 3,
    borderColor: '#113D63', // Dourado para indicar a foto selecionada
  },

});