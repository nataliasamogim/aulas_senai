{/*Nome componente: Componente Recursos*/}
{/*Autor(a): Natália Aparecida Samogim*/}
{/*Data de criação:22/03/2023  e data de alteração: 01/12/2023*/}
{/*representa uma seção que apresenta na Landing Page a descrição dos recursos disponíveis do Tointo como:
-classificação;
-calendário;
-checklist;
-lembrete;
*/}

import './RecursosLP.css'

{/*Nome função: RecursosLP*/}
{/*Autor(a): Natália Aparecida Samogim*/}
{/*Data de criação:22/03/2023  e data de alteração: 01/12/2023*/}
{/*Parâmetros de entrada: Nulo*/}
{/*Retorno: retorna a descrição dos recursos disponíveis*/}
{/*Observação: Nas divs vão mudando as ordens da "img" e do "p" para na Landing Page as informações
 ficarem do lado esquerdo e direito, de forma intercalada*/}
function RecursosLP(){
    return(
        <>
        <section className="recursos" id="utilizacao">
        <span className="title">Recursos</span>

        {/*Essa div chamada "classificação" descreve a utilidade da ferramenta disponível no Tointo */}
        <div className="classific">
            <article className="content_1">
                <img className="imagem_1" src="image/classificação.png" alt=""/>{/*Imagem do ícone de "classificação"*/}
                <p className="text_1">Utilize a ferramenta classificação para nomear aquilo que é mais importante para você.
                </p>
            </article>
        </div>

        {/*Essa div chamada "calendário" descreve a utilidade da ferramenta disponível no Tointo */}
        <div className="calendario">
            <article className="content_2">
                <p className="text_2">Utilize a ferramenta calendário para manter a organização dos seus compromissos e
                    prazos.</p>
                <img className="imagem_2" src="image/calendario.png" alt=""/> {/*Imagem do ícone de "calendário"*/}
            </article>
        </div>

        {/*Essa div chamada "checklist" descreve a utilidade da ferramenta disponível no Tointo */}
        <div className="checklist">
            <article className="content_3">
                <img className="imagem_3" src="image/check.png" alt=""/> {/*Imagem do ícone de "checklist"*/}
                <p className="text_3">Utilize a ferramenta checklist para manter a organização dos seus projetos passados e
                    futuros.</p>
            </article>
        </div>

        {/*Essa div chamada "sino" descreve a utilidade da ferramenta disponível no Tointo */}
        <div className="sino">
            <article className="content_4">
                <p className="text_4">Utilize a ferramenta lembrete para que possamos te lembrar de seus compromissos e
                    evitar a procrastinação. </p>
                <img className="imagem_4" src="image/sinonovo.png" alt=""/> {/*Imagem do ícone de "sino*/}
            </article>
        </div>
    </section>
        </>
    );
}

export {RecursosLP};