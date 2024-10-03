import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6B29A4',
    width: 395,
  },
  containerLogo: {
    flex: 0.17,
    position: 'relative',
  },
  logo: {
    width: 280,
    height: 100,
    position: 'absolute',
    top: 15
  },
  container: {
    flex: 1,
    width: '90%',
  },
  inputs: {
    backgroundColor: '#fff',
    width: 355,
    color: '#222',
    marginBottom: 15,
    fontSize: 15,
    borderRadius: 5,
    padding: 7,
  },

  // Exemplo de estilo para o ícone de olho
  eyeIcon: {
    position: 'absolute',
    right: 10,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
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
  selectableBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  box: {
    width: 90,
    height: 120,
    backgroundColor: '#AC72BF',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    paddingTop: 6,
    color: '#fff',
  },
  selected: {
    backgroundColor: '#570D70',
  },
  imagemcaixa: {
    width: 40,
    height: 40,
  },
  boxText: {
    color: '#fff',
    fontSize: 20,
  },
  boxSubtitle: {
    color: '#fff',
    fontSize: 12,
  },
  saibaMais: {
    paddingTop: 10,
    color: '#570D70',
    fontSize: 12,
  },
  selectedText: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#AC72BF',
    borderRadius: 20,
    width: '80%',
    padding: 20,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#570D70',
    marginTop: 20, // Espaçamento acima do título
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
    borderRadius: 15,
    width: 150,
    marginTop: 20, // Espaçamento acima do botão Fechar
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
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
});
