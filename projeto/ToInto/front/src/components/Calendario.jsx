{/* Nome: Calendario
    Autor(a): Luis Otávio
    Data criação/alteração: 22/03/2023 - 01/12/2023
    Descrição detalhada: Está importando o calendario e servindo para ser importado
*/}

import React from 'react';
import Calendar from '../components/Calendar/Calendar';

{/* Nome da função: Calendario
    Autor(a): Luis Otávio
    Data criação/alteração: 22/03/2023 - 01/12/2023
    Parametros entrada: Nulo
    Descrição: Está retornando o componente Calendar
*/}

function Calendario(){
    return(
        <>{/*Chama apenas o calendar*/}
            <Calendar/>
        </>
    )
}

export default Calendario;