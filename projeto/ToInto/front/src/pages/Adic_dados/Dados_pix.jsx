{/* Nome da página: Dados_pix*/ }
{/* Autor(a): Laura */ }
{/* Data de criação: /alteração: 03-12-2024*/ }
{/* Descrição detalhada: Nesse componente, o código lida com a geração de um código Pix aleatório, 
exibe esse código e um QR Code para o pagamento. O componente também envia esses dados para um servidor através de uma requisição HTTP. 
Se os dados forem processados com sucesso, o usuário é redirecionado para uma página de confirmação; caso contrário, 
erros são exibidos e processados. O componente inclui feedback visual em caso de sucesso ou falha na operação. */ }

import React, { useState, useEffect } from 'react';
import './Dados_pix.css';
import { useNavigate } from 'react-router-dom';

{/* Nome da função: Dados_pix */}
{/* Autor(a): Laura */}
{/* Data de criação: /alteração: 03-12-2024 */}
{/* Retorno
Nome: Retorna a interface do código Pix gerado
Tipo: JSX
Finalidade: Gerar e exibir um código Pix para pagamento e enviar os dados para o servidor.
Descrição/Observação: O componente gera um código Pix aleatório, exibe o QR Code e o código gerado, 
e permite que o usuário prossiga com o pagamento. Envia os dados para o servidor e trata o sucesso ou erro da operação.*/}

function Dados_pix() {

    // Declarando o estado para armazenar o código Pix gerado
    const [codigoPix, setCodigoPix] = useState('');
    const navigate = useNavigate();

    // useEffect para gerar o código Pix assim que o componente for montado
    useEffect(() => {
        // Função para gerar um código Pix de 4 dígitos aleatórios
        const gerarCodigoPix = () => {
            return Math.floor(1000 + Math.random() * 9000); // Gera um número entre 1000 e 9999
        };

        setCodigoPix(gerarCodigoPix()); // Atualiza o estado com o código Pix gerado
    }, []);


    // Função assíncrona que trata a requisição para salvar os dados do Pix
    const handleConfPix = async () => {
        try {
            // Faz a requisição POST para o servidor, enviando os dados do Pix
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