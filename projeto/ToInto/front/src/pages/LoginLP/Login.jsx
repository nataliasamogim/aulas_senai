{/* Nome do componente: Login*/} 
{/* Autor(a): Natália Ap. Samogim */} 
{/* Data de criação:25/10/2023 e data de alteração: 06/12/2023*/}
{/*Representa os campos de email e senha, além do recuperação de senha e botão de cadastrar e entrar do formulário do login*/}
{/*Observação pertinente: o estado local armazena as informações recebida do formulário e os handle cuidam da sua interação */}

import React, {useState} from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'; //recuperar a rota 

{/*Utiliza o useState para a criação de um estado local chamado formValues(vai armazenar as informações do campo de email e senha) */}
const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
        email_log: '',
        senha_log: '',
  });

  {/*handleChange é uma função que utiliza o estado conforme as informações dos campos do formulário é modificada */}
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
    }));
  };

      const [mensagensErro, setMensagensErro] = useState([]);

  {/*handleSubmit é chamada quando o formulário é enviado, ou seja, ela envia as informações do formulário para um endpoint 
  usando o fetch(é como uma porta de entrada para uma parte específica do sistema, na qual é utilizada para acessar uma funcionalidade
  específica) */}
  const handleSubmit = async (e) => {
        e.preventDefault();

      try {
      const resposta = await fetch('http://localhost:5000/receber-dados', {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(formValues),
      });

      const resultado = await resposta.json(); //mostra as mensagens de erro

      if (resultado.erro) {
        // Exibe mensagens de erro no console.log ou em algum local visível
        console.error('Erro no servidor:', resultado.mensagens);

      // Atualiza o estado com as mensagens de erro para exibição no formulário
      setMensagensErro(resultado.mensagens);
      } else {
        // Dados foram processados com sucesso
        console.log('Dados processados com sucesso!', resposta);

        //Navega para a tela de calendario
        navigate('/calendario')
      }
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
  };

    return (

      <div className="form-container">

        {mensagensErro.length > 0 && (
          <div style={{ color: 'white' }}>
            <p>Erro ao processar os dados:</p>
            <ul>
              {mensagensErro.map((mensagem, index) => (
                <li key={index}>{mensagem.mensagem}</li>
              ))}
            </ul>
          </div>
        )}

        <div className='body_log'>
          <form id="login" onSubmit={handleSubmit}> {/*Logir que possui o email e senha do usuario */}
            <h1 className="h1_login">Login</h1>

            <div className="email_login">
              <label className="label_email">Email</label>
              <input className="input_email" type="email" name="email_log" id="email" value={formValues.email_log} onChange={handleChange} data-email-validate data-required />
            </div>

            <div className="senha_login">
              <label className="label_senha">Senha</label>
              <input className="input_senha" type="password" name="senha_log" id="senha" value={formValues.senha_log} onChange={handleChange} data-password-validate data-required />
            </div>
            <p className="paragrafo">Esqueceu a senha?</p>

            <div className="button_log">
              <div className="log_entrar"> {/*Rota para o calendario */}
                {/*<Link to="/calendario" className="submit_btn-log" id="btn_logar">Entrar</Link>*/}
                <input type="submit" value="Entrar" className='submit_btn-log' id='btn_logar' />

              </div>
              <div className="log_cancel"> {/*Link para o botão cancelar */}
                {/*<Link className="submit_btn-log" id="btn_cancelar" onclick="limpaForm()">Cancelar</Link>*/}
                <input type="submit" value="Cancelar" className='submit_btn-log' id='btn_cancelar' onClick="limpaForm()" />
              </div>
            </div>
          </form>
          <p className="error-validation template"></p> {/*Validação com o java script */}
          <script src="js/validar.js"></script>
        </div>
      </div>
    );
};

export default Login;