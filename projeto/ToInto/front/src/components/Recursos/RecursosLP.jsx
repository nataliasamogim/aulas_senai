import './RecursosLP.css'

function RecursosLP() {
    return (
        <>
            <section className="recursos" id="utilizacao"> {/*section principal com todos recursos do site */}
                <span className="title">Recursos</span>

                <div className="classific"> {/*Recurso do relogio*/}
                    <article className="content_1">
                        <img className="imagem_1" src="image/classificação.png" alt=""/>
                            <p className="text_1">Utilize a ferramenta classificação para nomear aquilo que é mais importante para você.
                            </p>
                    </article>
                </div>

                <div className="calendario"> {/*Recurso do calendaio*/}
                    <article className="content_2">
                        <p className="text_2">Utilize a ferramenta calendário para manter a organização dos seus compromissos e
                            prazos.</p>
                        <img className="imagem_2" src="image/calendario.png" alt=""/>
                    </article>
                </div>

                <div className="checklist"> {/*Recurso do checklist*/}
                    <article className="content_3">
                        <img className="imagem_3" src="image/check.png" alt=""/>
                            <p className="text_3">Utilize a ferramenta checklist para manter a organização dos seus projetos passados e
                                futuros.</p>
                    </article>
                </div>

                <div className="sino"> {/*Recurso do sino*/}
                    <article className="content_4">
                        <p className="text_4">Utilize a ferramenta lembrete para que possamos te lembrar de seus compromissos e
                            evitar a procrastinação. </p>
                        <img className="imagem_4" src="image/sinonovo.png" alt=""/>
                    </article>
                </div>
            </section>
        </>
    );
}

export { RecursosLP };