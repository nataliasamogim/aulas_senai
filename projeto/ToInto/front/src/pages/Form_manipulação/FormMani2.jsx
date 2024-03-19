import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import './FormMani.css';

const FormMani = () => {
    const [username, setUsername] = useState('');
    const [editingUsername, setEditingUsername] = useState(false);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        foto: '',
        nome_novo: '',
        email_novo: '',
        senha_nova: '',
    });

    // Recupera o nome de usuário do localStorage quando o componente for montado
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []); // O segundo argumento [] garante que este efeito só será executado uma vez, após a montagem do componente

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleInputBlur = () => {
        localStorage.setItem('username', username);
        setEditingUsername(false);
    };

    const [profilePicture, setProfilePicture] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('profilePicture', file);

        try {
            const response = await fetch('http://seu-backend.com/upload', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const imageUrl = await response.json();
                setProfilePicture(imageUrl);
            } else {
                console.error('Erro ao enviar imagem para o servidor.');
            }
        } catch (error) {
            console.error('Erro ao enviar imagem:', error);
        }
    };

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

            const resultado = await resposta.json();

            if (resultado.erro) {
                console.error('Erro no servidor:', resultado.mensagens);
            } else {
                console.log('Dados processados com sucesso!', resposta);
                navigate('/concluido');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <div className="form-container">
            <section className="form_cadastro">
                <form className="cadastro" id="cadastrar" action="" onSubmit={handleSubmit}>
                    <h1 className="h1_cadastro">Cadastro</h1>
                    <div className="form_grupo">
                        {profilePicture ? (
                            <img src={profilePicture} alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                        ) : (
                            <div>
                                <label htmlFor="upload-input">
                                    <span>Escolher Foto</span>
                                    <input type="file" id="upload-input" onChange={handleImageChange} style={{ display: 'none' }} accept="image/*" />
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="form_grupo">
                        <label className="nome">Nome</label>
                        <input className="input_2" type="text" name="nome_novo" id="nome_novo" value={formValues.nome_novo} onChange={handleChange} placeholder="Digite seu nome" data-min-length="3" data-max-length="100" data-only-letters />
                    </div>
                    <div className="form_grupo">
                        <label className="email">Email</label>
                        <input className="input_3" type="email" name="email_novo" id="email_novo" value={formValues.email_novo} onChange={handleChange} placeholder="Digite seu E-mail" data-email-validate data-min-length="10" data-max-length="40" />
                    </div>
                    <div className="form_grupo">
                        <label className="senha">Senha</label>
                        <input className="input_4" type="password" name="senha_nova" id="senha_nova" value={formValues.senha_nova} onChange={handleChange} placeholder="Digite sua senha" data-password-validate data-min-length="8" data-max-length="15" />
                    </div>
                    <div className="buttons">
                        <div className="salvar">
                            <input type="submit" className="submit_btn" id="btn_cadastrar" value="Salvar" />
                        </div>
                        <div className="can">
                            <input type="button" className="submit_btn" id="btn_cancelar" onClick={() => setProfilePicture(null)} value="Cancelar" />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default FormMani;



