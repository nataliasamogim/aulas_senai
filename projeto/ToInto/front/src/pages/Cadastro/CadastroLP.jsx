import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CadastroLP.css';

const CadastroLP = () => {
    /*Nomes dos campos que temos no cadastro*/
  const [formValues, setFormValues] = useState({
    nome: '', 
    email: '',
    senha: '',
    confirmsenha: '',
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
            <section className="form_cadastro">
                <form className="cadastro" id="cadastrar" action="" onSubmit={handleSubmit}> {/*form do cadastro*/}
                    <h1 className="h1_cadastro">Cadastro</h1>

                    <div className="form_grupo"> {/*div para parte do nome*/}
                        <label className="nome">Nome</label>
                        <input className="input_1" type="text" name="nome" id="nome" value={formValues.nome} /*o input recebe o valor que estiver no campo nome*/ onChange={handleChange} /*confere se houve mudança de volor nos inputs*/ placeholder="Digite seu nome" data-min-length="3" data-max-length="100" data-only-letters/>
                    </div>

                    <div className="form_grupo"> {/*div para parte do e-mail*/}
                        <label className="email">Email</label>
                        <input className="input_2" type="email" name="email" id="email" value={formValues.email} /*o input recebe o valor que estiver no campo email*/ onChange={handleChange} placeholder="Digite seu E-mail" data-email-validate data-min-length="10" data-max-length="40"/>
                    </div>

                    <div className="form_grupo"> {/*div para parte da senha*/}
                        <label className="senha">Senha</label>
                        <input className="input_3" type="password" name="senha" id="senha" value={formValues.senha} /*o input recebe o valor que estiver no campo senha*/ onChange={handleChange} placeholder="Digite sua senha" data-password-validate data-min-length="8" data-max-length="15"/>
                    </div>

                    <div className="form_grupo"> {/*div para a parte de confirmar senha*/}
                        <label className="confirmar">Confirmar senha </label>
                        <input className="input_4" type="password" name="confirmsenha" id="password" value={formValues.confirmsenha} /*o input recebe o valor que estiver no campo confirmsenha*/ onChange={handleChange} placeholder="Digite novamente sua senha" data-equal="senha"/>
                    </div>

                    <div className="buttons">
                        <div className="cad"> {/*botão cadastrar do footer */}
                            <input type='submit' className="submit_btn" id="btn_cadastrar" value="Cadastrar"/>
                        </div>
                        <div className="can"> {/*botão cancelar do footer */}
                            <input type='submit' className="submit_btn" id="btn_cancelar" onClick="limpaForm()" value="Cancelar"/>
                        </div>
                    </div>
                </form>

                <p className="error-validation template"></p> {/*implementação do java script */}
                <script src="JavaScript/validar.js"></script>

            </section>
        </>
    );
};

export default CadastroLP;