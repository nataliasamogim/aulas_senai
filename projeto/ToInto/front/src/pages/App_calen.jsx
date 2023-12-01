import Todolist from "../components/Todolist";
import Calendario from "../components/Calendario"
import '../App.css'
import MenuLateral from "../components/MenuLateral";
import Perfil from "../components/Perfil";


function App_calen() {
    return (
        <> {/*Importação do menu, calendario e o perfil*/}
            <div className="menu-cal-per">
                <MenuLateral />
                <Calendario />
                <Perfil />
            </div>
        </>
    )
}

export { App_calen };