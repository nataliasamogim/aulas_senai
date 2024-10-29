{/*Nome componente: App_todo
Autor: Laura
Data criação: /Alteração:01/12/2023
Descrição Detalhada: É o To Do principal em que chama os componentes que complementam o to do list, menu, to do list, e o perfil
Observação Pertinentes: Responsavel por juntar todos componentes do To Do*/}

import '../App.css'
import Todolist_2 from './Todolist2';
import Perfil from './Perfil';

function App_todo(){
    return(
        <> {/*Chama o menu, o to do liste e o perfil*/}
            <div className="menu-todo-per">
                <Todolist_2/>
                <Perfil/>
            </div>
        </>
    )

}

export {App_todo};