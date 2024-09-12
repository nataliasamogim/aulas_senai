import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#6B29A4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#AE80D6',
    height: 620,
    width: '90%',
    maxWidth: 400,
    borderRadius: 15,
    alignItems: 'center',
    padding: 20,
  },
  containerData: {
    width: 160,
    marginTop:20,
    marginBottom:0,
  },
  data: {
    backgroundColor: '#6B29A4',
    borderRadius: 5,
    fontSize: 45,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
  },
  dataSemana: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  titleInput: {
    fontSize: 17,
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: 6,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: 40,
    color: '#222',
    marginBottom: 15,
    fontSize: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  time: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#6B29A4',
  },
  btnHorario: {
    backgroundColor: '#fff',
    width: '100%',
    height: 40,
    marginBottom: 15,
    fontSize: 15,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center', // Centraliza o texto verticalmente
  },
  btnHorarioText: {
    color: 'black',
    fontSize: 16,
  },
  checkboxText: {
    flexDirection: 'row', // alinha os itens horizontalmente
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  containerTexto: {
    marginLeft: 10,
  },
  impText: {
    fontSize: 18,
    color: '#fff',
  },
  dropdown: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lembrete: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
  },
  botao: {
    width: '100%',
    marginTop: 20,
  },
  btn: {
    backgroundColor: '#6B29A4',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorContainer: {
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    color: '#f00',
    fontSize: 16,
  },
});
