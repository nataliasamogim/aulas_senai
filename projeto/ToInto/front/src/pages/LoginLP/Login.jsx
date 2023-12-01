import './Login.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [formValues, setFormValues] = useState({
    email_log: '',
    senha_log: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
      } else {
        console.error('Erro ao enviar dados.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

    return (
        <>
            <div className='body_log'>
                <form id="login" onSubmit={handleSubmit} /*Salva e grava os valores do formulário*/> {/*Formulário que contém h1 e as divs*/}
                    <h1 className="h1_login">Login</h1>

                    <div className="email_login"> {/*div que contém a label e o input do email*/}
                        <label className="label_email">Email</label>
                        <input className="input_email" type="email" name="email_log" id="email"  value={formValues.email_log} /*o input recebe o valor que estiver no campo email do login*/ onChange={handleChange} data-email-validate data-required />
                    </div>

                    <div className="senha_login">
                        <label className="label_senha">Senha</label>{/*div que contém a label e o input da senha*/}
                        <input className="input_senha" type="password" name="senha_log" id="senha"  value={formValues.senha_log} /*o input recebe o valor que estiver no campo senha do login*/ onChange={handleChange} data-password-validate data-required />
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

        </>
    );
}

export { Login };