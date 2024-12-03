import React, { useState, useEffect } from 'react';
import './Dados_pix.css';
import { useNavigate } from 'react-router-dom'; //recuperar a rota 

function Dados_pix() {
    const [codigoPix, setCodigoPix] = useState('');
    const navigate = useNavigate();

    // Gera um código de 4 dígitos ao carregar o componente
    useEffect(() => {
        const gerarCodigoPix = () => {
            return Math.floor(1000 + Math.random() * 9000); // Gera um número entre 1000 e 9999
        };

        setCodigoPix(gerarCodigoPix());
    }, []);


    const handleConfPix = async () => {
        try {
            const resposta = await fetch('http://10.135.60.34:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({acao: 'salvar_pix', escolha_pag: '1', id: localStorage.getItem("ID"), codigo: codigoPix, plano_esc: localStorage.getItem("plano_esc")}),
            });

            const resultado = await resposta.json();

            if (resultado.erro) {
                // Exibe mensagens de erro no console.log ou em algum local visível
                console.error('Erro no servidor:', resultado.mensagens);

                // Atualiza o estado com as mensagens de erro para exibição no formulário
                const novoResponse = transformarMensagens(resultado);
                console.log(novoResponse);
                setMensagensErro(novoResponse.mensagens);
                setIsOpen(true);
            } else {
                // Dados foram processados com sucesso
                console.log('Dados processados com sucesso!', resposta);
                // É direcionado para a página de acordo com o plano escolhido
                navigate('/ConfPix')

            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <>
            <div className='container_pix'>
                <div className='pag_pix'>
                    <h3 id='titulo_pix'>Escaneie o QR CODE para <br /> realizar o pagamento</h3>
                </div>

                <div>
                    <img src="image/QR_code.png" alt="QRCODpix" className='qrcode' />
                </div>

                <div className='divCodigo'>
                    <p className='pCode'>Seu código de pagamento é:</p>
                    <h2 className='codigoGerado'>{codigoPix}</h2>
                </div>

                <div className="btnCont">
                    <input type='button' className="btnContPix" value='Continuar' onClick={handleConfPix} />
                </div>
            </div>
        </>
    );
}

export default Dados_pix;