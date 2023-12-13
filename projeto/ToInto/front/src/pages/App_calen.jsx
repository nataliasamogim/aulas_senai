{/*Nome componente: Componente AppCalen*/ }
{/*Autor(a): Natália Aparecida Samogim*/ }
{/*Data de criação:25/10/2023 e data de alteração: 06/12/2023*/ }
{/*Tem o objetivo de juntar o Menu Lateral, o Calendário e o Perfil tudo na mesma página(é a página principal)*/ }

import Perfil from "../components/Perfil"
import Calendario from "../components/Calendario";
import "../App.css"
import MenuLateral from "../components/MenuLateral";

{/*Nome função: AppCalen*/ }
{/*Autor(a): Natália Aparecida Samogim*/ }
{/*Data de criação:25/10/2023 e data de alteração: 06/12/2023*/ }
{/*Parâmetros de entrada: Nulo*/ }
{/*Retorno: retorna o MenuLateral, Calendário e Perfil*/ }
function App_calen() {
    return (
        <>
            <div className="menu-cal-per"> {/*chama os componentes*/}
                <MenuLateral /> {/*Contém os botões de Hoje, Semana e Importantes */}
                <Calendario /> {/*Contém o componente Calendar(ele é a estrutura do Calendário) */}
                <Perfil /> {/*Contém a estrutura do ícone de perfil de usuário */}
            </div>
        </>
    )
}

export { App_calen };