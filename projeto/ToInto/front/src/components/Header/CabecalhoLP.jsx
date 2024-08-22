{/*Nome componente: Componente HeaderLP*/ }
{/*Autor(a):Natália Aparecida Samogim*/ }
{/*Data de criação:22/03/2023 e data de alteração: 01/12/2023*/ }
{/*representa o início do projeto, sendo menu lateral fixo contendo:
-a logo do Tointo;
-o 'Home';
-o 'Recursos';
-o 'Planos';
-o botão 'Entrar';
-o botão de 'Cadastrar-se Grátis'*/}
{/*Observações pertinentes:
- O código importa o componente `Link` do pacote 'react-router-dom' que direciona à página de Cadastro ou Login*/}

import { Link } from 'react-router-dom';
import './CabecalhoLP.css';

{/*Nome função: HeaderLP*/ }
{/*Autor(a): Natália Aparecida Samogim*/ }
{/*Data de criação:22/03/2023  e data de alteração: 01/12/2023*/ }
{/*Parâmetros de entrada: Nulo*/ }
{/*Retorno: retorna o header*/ }
function CabecalhoLP() {
    return (
        <>
            <header className="container"> {/*Header com nome container que contém o logo e o menu*/}
                <div className="img_logo"> {/*div da logo*/}
                    <img className="logo" src="image/logo.png" alt="" /> {/*logo Tointo*/}
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
                        <Link to="/Login" className="entrar">Entrar</Link> {/*Direciona à página de Login*/}
                        <Link to="/cadastro" className='cadastrar'>Cadastre-se</Link> {/*Direciona à página de Cadastro*/}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export { CabecalhoLP };