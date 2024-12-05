{/* Nome do componente: MainLP
    Autora: Júlia
    Data criação/alteração: 22/03/2023 - 05/12/2024
    Descrição: MainLP é um componente React representando a seção principal de uma página,
    inclui boas-vindas, significado do produto e uma descrição, utilizando classe CSS (principal) para estilização.  
*/}

import './MainLP.css'

{/*
    Nome da função: MainLP
    Autora: Júlia
    Data criação/alteração: 22/03/2023 - 05/12/2024  
    Parâmetros de entrada: Nulo
    Retorno: Main
    Descrição/observação: Componente MainLP em React para a seção principal, com textos e classe CSS para estilização.
*/}
function MainLP() {
    return (
        <>
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

                <div className="img_lista"> {/*div da imagem da página do calendário TOINTO*/}
                    <img className="lista" src="image/tointocalendario.png" alt="" />
                </div>
            </main>
        </>
    );
}

export { MainLP };