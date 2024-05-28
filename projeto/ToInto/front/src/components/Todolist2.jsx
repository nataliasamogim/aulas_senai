{/*Nome do componente: Todolist_2
Autor: Laura
Data criação: /Alterações:01/12/2023
Descricação Detlahada: Ele usa o estado show para controlar a exibição de algo na interface.  
É uma lista de tarefas, onde cada tarefa tem um horário, descrição e ícones para edição e exclusão.
Além disso, inclui um componente chamado Compromissos no final da lista. Esse componente faz uso de estilos do
Bootstrap e do React Router para criar links. No geral, é uma representação visual de uma lista de tarefas.
Observação Pertinentes: Este componente é importado no App_todo*/}

import { useState } from 'react';
import Compromissos from './Compromissos';
import 'bootstrap/dist/css/bootstrap.min.css';
{/*Nome da função: Todolist_2
Autor: Laura
Data criação: /Alterações: 01/12/2023
Retorno
Nome: Retorna a estrutura do todo; Tipo: String; Finalidade: Fazer um exemplo de como ficara o To do quando utilizado.
Descrição/Observação: Depois da aplicação estar funcional os dados serão alterados pois o usuario que ira criar seu próprio*/}

function Todolist_2() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            {/*Início do  ToDolist*/}
            <section className="todolist" show={show} onHide={handleClose}>
                <header className='header-todo' closeButton  >
                    {/*div que contém a data fixa*/}
                    <div className="data" >
                        <h1 className='title_todo'>13/09</h1>
                        <p className='data_todo'>Quarta-feira</p>
                    </div>
                </header>

                {/*Início do corpo do todolist*/}
                <div className='corpo'>
                    {/*Início do form que contém todas as informções*/}
                    <form className="todo_form" controlId="exampleForm.ControlInput1">
                        {/*Início da div que contém o checklist, horário, título e os icones*/}
                        <div className="tarefa">
                            <input type="checkbox" name="Importante" id="importante" />
                            <label className="hora">08:00</label>
                            <label>Aniversário</label>
                            <div className="edit_excluir">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" color="white">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" color="white">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </div>
                        </div>
                        {/*Fim da div*/}

                        {/*Início da div que contém a descrição da tarefa*/}
                        <div className="descr">
                            <label>Aniversário de Alguém no mundo</label>
                        </div>
                        {/*Fim da div*/}

                        {/*Início da div que contém o checklist, horário, título e os icones*/}
                        <div className="tarefa">
                            <input type="checkbox" name="Importante" id="importante" />
                            <label className="hora">10:00</label>
                            <label>Supermercado</label>
                            <div className="edit_excluir">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" color="white">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" color="white">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </div>
                        </div>
                        {/*Fim da div*/}

                        {/*Início da div que contém a descrição da tarefa*/}
                        <div className="descr">
                            <label>Fazer a compra do mês</label>
                        </div>
                        {/*Fim da div*/}

                        {/*Início da div que contém o checklist, horário, título e os icones*/}
                        <div className="tarefa">
                            <input type="checkbox" name="Importante" id="importante" />
                            <label className="hora">18:00</label>
                            <label>Assistir filme</label>
                            <div className="edit_excluir">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" color="white">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" color="white">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </div>
                        </div>
                        {/*Fim da div*/}

                        {/*Início da div que contém a descrição da tarefa*/}
                        <div className="descr">
                            <label>Assistir Perdida</label>
                        </div>
                        {/*Fim da div*/}
                    </form>
                    {/*Fim do form que contém todas as informções*/}
                </div>
                {/*Fim do corpo do todolist*/}

                {/*Início do footer que contém o componente compromissos*/}
                <footer className='todo_footer' onHide={handleShow}>
                    <Compromissos />
                </footer>
                {/*Fim do footer*/}
            </section>
        </>
    );
}

export default Todolist_2;