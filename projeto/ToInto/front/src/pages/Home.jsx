{/* Nome do componente: Home
 Autor(a): Laura
 Data de criação: /Alterações: 05/12/2024
 Descrição detalhada: Nesse componente, são importados todos os componentes da Landing, para que sejam chamados
todos em um mesmo componente.*/}

import { CabecalhoLP } from "../components/Header/CabecalhoLP";
import { MainLP } from "../components/Main/MainLP";
import { WhatsFixo } from "../components/Whatsapp/WhatsFixo";
import { RecursosLP } from "../components/Recursos/RecursosLP";
import { PlanosLP } from "../components/Planos/PlanosLP";
import { FooterLP } from "../components/Footer/FooterLP";

{/*Nome da função: Home
Autor(a): Laura
Data de criação: /Alterações: 05/12/2024
Parâmetros entrada: nulo
Descrição/observação: essa função retorna todos os componentes da Landing Page.*/ }

function Home() {
    return (
        <> {/*Importa o cabeçalho, main da LP, whatsapp, recursos, planos e o footer */}
            <div className="Home">
                <CabecalhoLP />
                <MainLP />
                <WhatsFixo />
                <RecursosLP />
                <PlanosLP />
                <FooterLP />
            </div>
        </>
    );
}

export { Home };

