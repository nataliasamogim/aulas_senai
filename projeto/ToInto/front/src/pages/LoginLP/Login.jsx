{/*Utiliza o useState para a criação de um estado local chamado formValues(vai armazenar as informações do campo de email e senha) */ }
{/* Nome do componente: Login*/ }
{/* Autor(a): Maria Luiza, Laura e Marília */ }
{/* Data de criação:25/10/2023 e data de alteração: 01/10/2024*/ }
{/*Representa os campos de email e senha, além do recuperação de senha e botão de cadastrar e entrar do formulário do login*/ }
{/*Observação pertinente: o estado local armazena as informações recebida do formulário e os handle cuidam da sua interação */ }

import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'; //recuperar a rota 
import { Modal, Button } from 'react-bootstrap';


{/*Utiliza o useState para a criação de um estado local chamado formValues(vai armazenar as informações do campo de email e senha) */ }
const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email_log: '',
    senha_log: '',
  });

  {/*handleChange é uma função que utiliza o estado conforme as informações dos campos do formulário é modificada */ }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [mensagensErro, setMensagensErro] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  {/*handleSubmit é chamada quando o formulário é enviado, ou seja, ela envia as informações do formulário para um endpoint 
  usando o fetch(é como uma porta de entrada para uma parte específica do sistema, na qual é utilizada para acessar uma funcionalidade
  específica) */}
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação do campo vazio
    if (!formValues.email_log || !formValues.senha_log) {
      setMensagensErro([{ mensagem: 'Por favor, preencha os campos' }]);
      setIsOpen(true);
      return; // Impede o envio do formulário se o campo estiver vazio
    }

    try {
      const resposta = await fetch('http://10.135.60.57:8085/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const resultado = await resposta.json(); //mostra as mensagens de erro

      if (resultado.erro) {
        console.error('Erro no servidor:', resultado.mensagens.mensagem); // Acessa a mensagem de erro corretamente

        // Atualiza o estado com a mensagem de erro para exibição no formulário
        setMensagensErro([{ mensagem: resultado.mensagens.mensagem }]);
        setIsOpen(true); // Alterado: Abre o modal se houver erro

      } else {
        // Dados foram processados com sucesso
        console.log('Dados processados com sucesso!', resultado);
        localStorage.setItem('ID', resultado.mensagem[0]);
        localStorage.setItem('nome_usuario', resultado.mensagem[1]);
        localStorage.setItem('email', resultado.mensagem[2]);
        localStorage.setItem('plano_escolhido', resultado.mensagem[3]);
        //onLogin(resultado.username); // Chama a função onLogin com o nome de usuário retornado
        //Navega para a tela de calendario
        navigate('/calendario')
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  const closeModal = () => {
    setIsOpen(false); // Alterado: Função para fechar o modal
    setMensagensErro([]); // Limpa as mensagens de erro
  };

  const limpaForm = () => {
    setFormValues({
      email_log: '',
      senha_log: '',
    });
  };

  const handleForgotPassword = () => {
    navigate('/esq_senha');
  };

  return (

    <div className="form-container">

      <div className='modalerros-log'>

        <Modal show={modalIsOpen} onHide={closeModal} centered className="modcad">
          <Modal.Header>
            <button
              onClick={closeModal} // Chama a função para fechar o modal
              className="modal-close-button"
              aria-label="Fechar"
            >
              &times;
            </button>
            <Modal.Title>Erro ao processar os dados</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {mensagensErro.length > 0 && (
              <div style={{ color: 'white' }}>
                <ul>
                  {mensagensErro.map((mensagem, index) => (
                    <li key={index}>{mensagem.mensagem}</li>
                  ))}
                </ul>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className='footererromodal'>
            <Button style={{ backgroundColor: '#570D70', border: 'none' }} className='errofechar' onClick={closeModal}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

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

          {/* Botão "Esqueceu a senha?" com navegação usando useNavigate */}
          <p className="paragrafo" id='btn_esq_senha' onClick={handleForgotPassword}>
            Esqueceu a senha
          </p>

          <div className="button_log">
            <div className="log_entrar"> {/*Rota para o calendario */}
              {/*<Link to="/calendario" className="submit_btn-log" id="btn_logar">Entrar</Link>*/}
              <input type="submit" value="Entrar" className='submit_btn-log' id='btn_logar' />
            </div>
            <div className="log_cancel"> {/*Link para o botão cancelar */}
              {/*<Link className="submit_btn-log" id="btn_cancelar" onclick="limpaForm()">Cancelar</Link>*/}
              <input type="button" value="Cancelar" className='submit_btn-log' id='btn_cancelar' onClick={limpaForm} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;