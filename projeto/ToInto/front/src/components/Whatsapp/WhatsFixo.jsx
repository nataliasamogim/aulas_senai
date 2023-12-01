import './WhatsFixo.css';

function WhatsFixo() {
    return (
        <>
            <div className="fixed"> {/*div da imagem do whatsapp que fica fixed na tela*/}
                <a href="https://www.whatsapp.com/?lang=pt_br"><img className="whatsapp_fixed" src="image/whatsapp.png"
                    alt="whatsapp"/></a>

            </div>
        </>
    );
}

export { WhatsFixo };