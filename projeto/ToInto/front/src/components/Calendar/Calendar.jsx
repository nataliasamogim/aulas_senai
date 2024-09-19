import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Calendar.css';
import Compromissos from './../../pages/Compromissos/Compromissos';
import { useParams } from 'react-router-dom';

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

const Calendar = () => {
  const { selectedDate } = useParams();
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefaData, setTarefaData] = useState([]);
  const [selecionarTarefa, setSelecionarTarefa] = useState(null);
  const [currentDate, setCurrentDate] = useState(selectedDate || new Date().toISOString().split('T')[0]);
  const [checkedTarefas, setCheckedTarefas] = useState({});

  const formatodata = !isNaN(date.getTime())
    ? new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format(date)
    : 'Data inválida';

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const receberTarefas = async () => {
    try {
      const resposta = await fetch('http://10.135.60.29:8085/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ acao: 'recuperar_comp', id_cad: localStorage.getItem("ID"), data_comp: currentDate })
      });
      const dados = await resposta.json();
      console.log('Tarefas recuperadas:', dados);

      if (dados && Array.isArray(dados.mensagem)) {
        const trat_tarefas = dados.mensagem.map(([id_comp, titulo_comp, horario_comp, descricao, importante, lembrete]) => ({
          id_comp,
          titulo: titulo_comp,
          horario: horario_comp,
          descricao,
          importante,
          lembrete,
          data_comp: currentDate // Adiciona a data da tarefa
        }));
        setTarefas(trat_tarefas);
        setTarefaData(trat_tarefas);
      }
      else {
        setTarefas([]);
        setTarefaData([]);
      }
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  useEffect(() => {
    receberTarefas();
  }, [currentDate]);

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day + 1);

    if (isNaN(clickedDate.getTime())) {
      console.error("Data inválida:", clickedDate);
      return;
    }

    setDate(clickedDate);
    const selectDate = clickedDate.toISOString().split('T')[0];
    setCurrentDate(selectDate);

    const tarefasSelecionarData = tarefas.filter(
      (tarefa) => tarefa.data_comp === selectDate
    );

    setTarefaData(tarefasSelecionarData);
  };

  const handleAddTarefas = () => {
    setSelecionarTarefa(null);
    setModal(true);
  };

  const handleEditTarefa = (tarefa) => {
    setSelecionarTarefa(tarefa);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelecionarTarefa(null);
    receberTarefas();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleCheckBox = (idComp) => {
    setCheckedTarefas(prevState => ({
      ...prevState,
      [idComp]: !prevState[idComp] //Atualiza apenas a tarefa específica com o id_comp
    }))
  }

  const handleDelete = async (idComp) => {
    if (!tarefaData) return;

    try {
      console.log("tarefaData ", idComp)
      const response = await fetch('http://10.135.60.29:8085/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          acao: 'deletar_comp',
          id_comp: idComp
        })
      });
      console.log('id de compromisso:', tarefaData[0].id_comp)

      if (!response.ok) {
        throw new Error('Erro ao deletar tarefa');
      }
      else {
        console.log('Tarefa deletada com sucesso')
        receberTarefas();
      }

    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className="calendar">
      <div className="calendarioTotal">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16" color="white">
              <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
            </svg>
          </button>
          <div className="mes_ano">
            <h2>{months[currentMonth]}</h2>
            <h4>{currentYear}</h4>
          </div>
          <button onClick={handleNextMonth}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16" color="white">
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </button>
        </div>
        <div className="calendar-grid">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-of-week">
              {day}
            </div>
          ))}
          {[...Array(firstDayOfMonth).fill(null)].map((_, index) => (
            <div key={`empty-${index}`} className="empty-day"></div>
          ))}
          {[...Array(daysInMonth).keys()].map((day) => (
            <div key={day} className="day" onClick={() => handleDateClick(day)}>
              <span className="day-number">{day + 1}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='toDoList'>
        <p id='DataTodo'>{formatodata}</p>
        <ul>
          {tarefaData.length > 0 ? (
            tarefaData.map((tarefa) => (
              <li className='licalendar' key={tarefa.id_comp}>
                <div className='tarefa_edit_lixo'>
                  <div className='check_tarefa'>
                    <div className='container-check'>
                      <input
                        checked={checkedTarefas[tarefa.id_comp] || false}
                        onClick={() => handleCheckBox(tarefa.id_comp)}
                        type="checkbox"
                        name="check"
                        id="check" />
                    </div>
                    <div className='hora-titulo'>
                      <span className='horario_tarefa'>{tarefa.horario} - </span>
                      <span className='titulo_tarefa'>{tarefa.titulo}</span>
                    </div>

                  </div>

                  <div id='botoes'>

                    <button className='buttonEditar' onClick={() => handleEditTarefa(tarefa)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" color="white">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="buttonExcluir"
                      onClick={() => handleDelete(tarefa.id_comp)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" color="white">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <span className='descricaoTarefa'>{tarefa.descricao || 'Nenhuma descrição disponível'}</span>

              </li>
            ))
          ) : (
            <li id='nenhuma-task'>Nenhuma tarefa para este dia</li>
          )}
        </ul>
        <button className='butTodo' onClick={handleAddTarefas}>
          +
        </button>

      </div>
      <Compromissos
        isOpen={modal}
        onRequestClose={handleCloseModal}
        tarefasData={selecionarTarefa}
        receberTarefas={receberTarefas}
        dataEscolhida={currentDate} // A data fixa que você quer passar
      />
    </div>
  );
};

export default Calendar;