import Todolist2 from './Todolist2';
import '../App.css'
import MenuLateral from "./MenuLateral";
import Perfil from "./Perfil";


function App_todo() {
    return (
        <> {/*Chama o menu, o to do liste e o perfil*/}
            <div className="menu-todo-per">
                <MenuLateral />
                <Todolist2/>
                <Perfil />
            </div>
        </>
    )
}

export { App_todo };