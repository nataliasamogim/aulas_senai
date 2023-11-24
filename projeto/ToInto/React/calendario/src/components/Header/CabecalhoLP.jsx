import { Link } from 'react-router-dom';
import './CabecalhoLP.css';

function CabecalhoLP() {
    return (
        <>
            <header className="container"> {/*Header com nome container que contém o logo e o menu*/}
                <div className="img_logo"> {/*div da logo*/}
                    <img className="logo" src="image/logo do tointo.png" alt=""/> {/*logo Tointo*/}
                </div>
                <nav className="menu">
                    {/*nav com a class menu que contém o home, recursos e planos que o site possui, ele está no header*/}
                    <ul className="menu_1">
                        <a href="#home">
                            <li className="topico">Home</li>
                        </a> {/*li home com o link da parte da descrição do site (Bem vindo ao Tointo)*/} 
                        <a href="#utilizacao">
                            <li className="topico">Recursos</li>
                        </a> {/*li recursos com o link da parte com os recurso do site (id utilização)*/}
                        <a href="#plano">
                            <li className="topico">Planos</li>
                        </a> {/*li plano com o link da parte de plano do site, que mostrarar os planos que possui*/}
                    </ul>

                    <ul className="menu_2"> {/*rotas do botão entrar para o login e do botão cadastrar para o cadastro*/}
                        <Link to="/login" className="entrar">Entrar</Link> {/*entrar*/}

                        <Link to="/cadastro" className='cadastrar'>Cadastrar-se grátis</Link>
                        {/*cadastrar com o plano free*/}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export { CabecalhoLP };
