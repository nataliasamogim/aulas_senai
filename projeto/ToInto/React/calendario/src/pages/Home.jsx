import { CabecalhoLP } from "../components/Header/CabecalhoLP";
import {MainLP} from "../components/Main/MainLP";
import {WhatsFixo} from "../components/Whatsapp/WhatsFixo";
import {RecursosLP} from "../components/Recursos/RecursosLP";
import {PlanosLP} from "../components/Planos/PlanosLP";
import {FooterLP} from "../components/Footer/FooterLP";

function Home() {
    return (
        <> {/*Importa o cabeçalho, main da LP, whatsapp, recursos e o footer */}
            <div className="Home">
                <CabecalhoLP/>
                <MainLP/>
                <WhatsFixo/>
                <RecursosLP/>
                <PlanosLP/>
                <FooterLP/>
            </div>
        </>
    );
}

export { Home };
