{/* Nome componente: Calendario
    Autora: Júlia
    Data criação/alteração: 22/03/2023 - 05/12/2024
    Descrição detalhada: Está importando o componente Calendar
*/}

import React from 'react';
import Calendar from '../components/Calendar/Calendar';

{/* Nome da função: Calendario
    Autora: Júlia
    Data criação/alteração: 22/03/2023 - 05/12/2024
    Parametros entrada: Nulo
    Retorno: retorna o componente Calendar
*/}

function Calendario(){
    return(
        <>{/*Chama o componente Calendar*/}
            <Calendar/>
        </>
    )
}

export default Calendario;