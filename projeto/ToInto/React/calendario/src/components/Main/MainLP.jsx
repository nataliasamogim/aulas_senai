import './MainLP.css';

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

                <div className="img_lista"> {/*div da imagem da página do site como exemplo*/}
                    <img className="lista" src="image/lista.png" alt=""/>
                </div>
            </main>

        </>
    );
}

export { MainLP };