import './Dados_pix.css'


function Dados_pix() {
    return (
        <>

            <div className='container_pix'>

                <div className='pag_pix'>
                    <h3 id='titulo_pix'> Escaneie o QR CODE para <br></br> realizar o pagamento</h3>
                </div>

                <div>
                    <img src="image/QR_code.png" alt="QRCODpix" className='qrcode' />
                </div>

            </div>

        </>
    )
}

export default Dados_pix;