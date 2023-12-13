{/* Nome: MainLP
    Autor(a): Luis Otávio
    Data criação/alteração: 22/03/2023 - 01/12/2023
    Descrição:
    MainLP é um componente React representando a seção principal de uma página.
    Inclui boas-vindas, significado do produto e uma descrição.
    Utiliza classe CSS (principal) para estilização.  
*/}

import './MainLP.css'

function MainLP() {
    return (
        <>

            {/* Nome: MainLP
        Autor(a): Luis Otávio
        Data criação/alteração: 22/03/2023 - 01/12/2023  
        Parametros de entrada: Nulo
        Retorno: Main
        Descrição/observação:
        Componente MainLP em React para a seção principal.
        Textos e classe CSS para estilização.
        Imagem de exemplo (lista.png).*/}
            <main className="principal" id="home"> {/*main que contém a descrição e boas vindas*/}
                <div className="texto">
                    <h1 className="frase">Bem-vindos ao Tointo</h1>
                    <h3 className="significado">Together in the Organization</h3>
                    <p className="descricao">Com nossa lista de tarefas você poderá se organizar de uma maneira mais fácil e
                        funcional. Ela te
                        auxiliará diariamente em sua rotina, com lembretes e calendário. Conosco não irá se esquecer de seus
                        compromissos e perder seus horários.
                    </p>
                </div>

                <div className="img_lista"> {/*div da imagem da página do site como exemplo*/}
                    <img className="lista" src="image/tointocalendario.png" alt="" />
                </div>
            </main>
        </>
    );
}

export { MainLP };