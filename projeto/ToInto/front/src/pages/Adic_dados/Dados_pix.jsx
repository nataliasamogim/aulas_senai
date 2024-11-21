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

    const handleConfPix = () => {
        navigate('/ConfPix')
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
                    <input type='button' className="btnContPix" value='Continuar' onClick={handleConfPix}/>
                </div>
            </div>
        </>
    );
}

export default Dados_pix;