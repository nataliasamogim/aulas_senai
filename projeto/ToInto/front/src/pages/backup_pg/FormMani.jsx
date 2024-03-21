import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormMani.css';

// Imagem padrão
const defaultPhoto = 'image/foto_perfil.jpg'; // Substitua 'url_da_imagem_padrao.jpg' pela URL da sua imagem padrão

const FormMani = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        foto: '',
        nome_novo: '',
        email_novo: '',
        senha_nova: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormValues(prevValues => ({
            ...prevValues,
            foto: URL.createObjectURL(file),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Definir cabeçalho Content-Type como JSON
                },
                body: JSON.stringify(formValues), // Enviar os dados do formulário como JSON
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar dados');
            }

            const resultado = await response.json();
            console.log('Dados processados com sucesso!', resultado);
            navigate('/cadatualizado');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <div className="form-container">
            <form className="cadastro" onSubmit={handleSubmit}>
                <h1 className="h1_cadastro">Modificar Cadastro</h1>
                <div className="form_grupo_foto">
                    {/* Foto padrão */}
                    {/* Exibir a foto selecionada ou a imagem padrão */}
                    <img src={formValues.foto || defaultPhoto} alt="Profile" className="profile-photo" style={{ width: '85px', height: '85px', borderRadius: '50%' }} />
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
                    <input className="input_2" type="text" name="nome_novo" value={formValues.nome_novo} onChange={handleChange} placeholder="Digite seu nome" />
                </div>
                <div className="form_grupo">
                    <label className="email">Email</label>
                    <input className="input_3" type="email" name="email_novo" value={formValues.email_novo} onChange={handleChange} placeholder="Digite seu E-mail" />
                </div>
                <div className="form_grupo">
                    <label className="senha">Senha</label>
                    <input className="input_4" type="password" name="senha_nova" value={formValues.senha_nova} onChange={handleChange} placeholder="Digite sua senha" />
                </div>
                <div className="buttons">
                    <div className="salvar">
                        <input type="submit" className="submit_btn" value="Salvar" />
                    </div>
                    <div className="can">
                        <input type="button" className="submit_btn" value="Cancelar" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormMani;


