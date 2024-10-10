import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Recuperacao.css';

function Recuperacao() {
    const [formValues, setFormValues] = useState({ 
        email: '' 
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const [mensagensErro, setMensagensErro] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resposta = await fetch('http://10.135.60.29:8085/receber-dados', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValues),
            });

            const resultado = await resposta.json();

            if (resultado.erro) {
                console.error('Erro ao enviar e-mail de recuperação:', resultado.mensagens);
                setMensagensErro(resultado.mensagens);
            } else {
                console.log('E-mail de recuperação enviado', resposta);
                
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    const limpaForm = () => {
        setFormValues({ 
            email: '' 
        });
    };

    return (
        <div className="esqueceu-container">
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

            <section className="form_recuperarsenha">
                <form className="recuperar_senha" onSubmit={handleSubmit}>
                    <h1 className="h1_rec_senha">Recuperação de senha:</h1>
                    <div className="form_grupo">
                        <p>Digite o e-mail para enviarmos o código:</p>
                        <input className="input_email" id="rec_senha_email" type="email" name="email" placeholder="E-mail" value={formValues.rec_email} onChange={handleChange} data-email-validate data-required/>
                    </div>

                    <div className="btn_rec_senha">
                        <div className="salvar_rec_senha">
                            <input type='submit' className="btn_recsenha" id="salvar_rec_senha" value="Salvar" />
                        </div>
                        <div className="can_rec_senha">
                            <input type='button' className="btn_recsenha" id="cancel_rec_senha" onClick={limpaForm} value="Cancelar" />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Recuperacao;