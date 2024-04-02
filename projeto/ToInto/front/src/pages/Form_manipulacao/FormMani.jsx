import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormMani.css';

// Imagem padrão
const defaultPhoto = 'image/foto_perfil.jpg'; // Substitua 'url_da_imagem_padrao.jpg' pela URL da sua imagem padrão

const FormMani = () => {
    const [formAlter, setFormAlter] = useState({
        id: '',
        foto: '',
        nome_novo: '',
        email_novo: '',
        senha_nova: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormAlter(prevAlter => ({
            ...prevAlter,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormAlter(prevAlter => ({
            ...prevAlter,
            foto: URL.createObjectURL(file),
        }));
    };

    const [mensagensErro, setMensagensErro] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resposta = await fetch('http://localhost:5000/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Definir cabeçalho Content-Type como JSON
                },
                body: JSON.stringify(formAlter), // Enviar os dados do formulário como JSON
            });

            const resultado = await resposta.json();

            if (resultado.erro) {
                // Exibe mensagens de erro no console.log ou em algum local visível
                console.error('Erro no servidor:', resultado.mensagens);

                // Atualiza o estado com as mensagens de erro para exibição no formulário
                setMensagensErro(resultado.mensagens);
            } else {
                console.log('Dados atualizados com sucesso!', resposta);
                navigate('/cadatualizado');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    const limpaForm = () => {
        setFormAlter({
            foto: '',
            nome_novo: '',
            email_novo: '',
            senha_nova: '',
        });
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

            <form className="cadastro" onSubmit={handleSubmit}>
                <h1 className="h1_cadastro">Atualizar Cadastro</h1>
                <div className="form_grupo_foto">
                    {/* Foto padrão */}
                    {/* Exibir a foto selecionada ou a imagem padrão */}
                    <img src={formAlter.foto || defaultPhoto} alt="Profile" className="profile-photo" style={{ width: '85px', height: '85px', borderRadius: '50%' }} />
                    {/*{formValues.foto && (
                        <img src={formValues.foto} alt="Profile" style={{ width: '85px', height: '85px', borderRadius: '50%' }} />
                    )}*/}
                    <label htmlFor="upload-input">
                        <span>Escolher Foto</span>
                        <input type="file" id="upload-input" onChange={handleImageChange} style={{ display: 'none' }} accept="image/*" />
                    </label>
                </div>
                <div className="form_grupo">
                    <label className="nome">Nome</label>
                    <input className="input_2" type="text" name="nome_novo" id='nome_novo' value={formAlter.nome_novo} onChange={handleChange} placeholder="Digite seu nome" />
                </div>
                <div className="form_grupo">
                    <label className="email">Email</label>
                    <input className="input_3" type="email" name="email_novo" id='email_novo' value={formAlter.email_novo} onChange={handleChange} placeholder="Digite seu E-mail" />
                </div>
                <div className="form_grupo">
                    <label className="senha">Senha</label>
                    <input className="input_4" type="password" name="senha_nova" id='senha_nova' value={formAlter.senha_nova} onChange={handleChange} placeholder="Digite sua senha" />
                </div>
                <div className="buttons">
                    <div className="salvar">
                        <input type="submit" className="submit_btn" value="Salvar" />
                    </div>
                    <div className="can">
                        <input type="button" className="submit_btn" value="Cancelar" onClick={limpaForm} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormMani;


