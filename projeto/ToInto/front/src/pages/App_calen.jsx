{/*Nome componente: Componente AppCalen*/ }
{/*Autor(a): Natália Aparecida Samogim*/ }
{/*Data de criação:25/10/2023 e data de alteração: 06/12/2023*/ }
{/*Tem o objetivo de juntar o Menu Lateral, o Calendário e o Perfil tudo na mesma página(é a página principal)*/ }

import Perfil from "../components/Perfil"
import Calendario from "../components/Calendario";
import "../App.css"
import MenuLateral from "../components/MenuLateral";
import React, { useEffect, useState } from 'react';


{/*Nome função: AppCalen*/ }
{/*Autor(a): Natália Aparecida Samogim*/ }
{/*Data de criação:25/10/2023 e data de alteração: 06/12/2023*/ }
{/*Parâmetros de entrada: Nulo*/ }
{/*Retorno: retorna o MenuLateral, Calendário e Perfil*/ }
function App_calen() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []); // O segundo argumento [] garante que este efeito só será executado uma vez, após a montagem do componente

    return (
        <>
            <div className="menu-cal-per"> {/*chama os componentes*/}
                <MenuLateral /> {/*Contém os botões de Hoje, Semana e Importantes */}
                <Calendario /> {/*Contém o componente Calendar(ele é a estrutura do Calendário) */}
                <Perfil parametro={username} /> {/*Contém a estrutura do ícone de perfil de usuário */}
            </div>
        </>
    )
}

export { App_calen };