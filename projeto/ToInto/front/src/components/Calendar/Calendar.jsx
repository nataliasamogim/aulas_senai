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
  const [today, setToday] = useState(new Date());
  const [selecionada, setSelecionada] = useState(selectedDate || new Date().toISOString().split('T')[0]);
  const [nextSaturday, setNextSaturday] = useState(new Date());
  const [visualizarSemana, setVisualizarSemana] = useState(false);
  const [visualizarHoje, setVisualizarHoje] = useState(true);
  const [checkedTarefas, setCheckedTarefas] = useState({});
  const [isSemanaOuImportante, setIsSemanaOuImportante] = useState(false);
  const [tarefasPorData, setTarefasPorData] = useState({});
  const [visualizarDia, setVisualizarDia] = useState(false);

  const formatodata = !isNaN(date.getTime())
    ? new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format(date)
    : 'Data inválida';

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const formatarDataSemana = (inicio, fim) => {
    const inicioFormatado = new Intl.DateTimeFormat('pt-BR').format(inicio);
    const fimFormatado = new Intl.DateTimeFormat('pt-BR').format(fim);
    return `${inicioFormatado} - ${fimFormatado}`;
  };

  const calculoProximoSabado = (data) => {
    const proximoSabado = new Date(data);
    proximoSabado.setDate(data.getDate() + (6 - data.getDay())); // Calcula o próximo sábado
    return proximoSabado;
  };

  const receberTarefas = async () => {
    try {
      const resposta = await fetch('http://10.135.60.43:8085/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ acao: 'recuperar_comp', id_cad: localStorage.getItem("ID"), data_comp: currentDate })
      });
      const dados = await resposta.json();
      console.log('Tarefas recuperadas:', dados);

      if (dados && Array.isArray(dados.mensagem)) {
        const trat_tarefas = dados.mensagem.map(([id_comp, checkbox, titulo_comp, horario_comp, descricao, importante, lembrete]) => ({
          id_comp,
          checkbox,
          titulo: titulo_comp,
          horario: horario_comp,
          descricao,
          importante,
          lembrete,
          data_comp: currentDate, // Adiciona a data da tarefa

        }));
        setTarefas(trat_tarefas);
        setTarefaData(trat_tarefas);

        const datasComTarefas = trat_tarefas.reduce((acc, tarefa) => {
          const data = new Date(tarefa.data_comp).toISOString().split('T')[0]; // Formata como YYYY-MM-DD
          acc[data] = true; // A chave deve estar no formato YYYY-MM-DD
          return acc;
        }, {});

        setTarefasPorData(prev => ({ ...prev, ...datasComTarefas })); // Mantenha as tarefas anteriores
      }
      else {
        setTarefas([]);
        setTarefaData([]);
      }
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  const receberSemana = async (inicio, fim) => {
    try {
      const resposta = await fetch('http://10.135.60.43:8085/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ acao: 'recuperar_semana', id_cad: localStorage.getItem("ID"), data_in: inicio.toISOString().split('T')[0], data_fim: fim.toISOString().split('T')[0] })
      });
      const dados = await resposta.json();

      if (dados && Array.isArray(dados.mensagem)) {
        const trat_semana = dados.mensagem.map(([id_comp, checkbox, titulo_comp, horario_comp, data_comp, descricao, importante, lembrete]) => ({
          id_comp,
          checkbox,
          titulo: titulo_comp,
          horario: horario_comp,
          data_comp,
          descricao,
          importante,
          lembrete,
          data_in: inicio.toISOString().split('T')[0],
          data_fim: fim.toISOString().split('T')[0]
        }));
        console.log('semana: ', trat_semana)
        setTarefas(trat_semana);
        setTarefaData(trat_semana);
      } else {
        setTarefas([]);
        setTarefaData([]);
      }
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  const receberImportante = async () => {
    try {
      const resposta = await fetch('http://10.135.60.43:8085/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ acao: 'recuperar_importante', id_cad: localStorage.getItem("ID"), data_comp: currentDate })
      });
      const dados = await resposta.json();

      if (dados && Array.isArray(dados.mensagem)) {
        const trat_importante = dados.mensagem.map(([id_comp, checkbox, titulo_comp, horario_comp, descricao, importante, lembrete, data_comp]) => ({
          id_comp,
          checkbox,
          titulo: titulo_comp,
          horario: horario_comp,
          descricao,
          importante,
          lembrete,
          data_comp,

        }));
        setTarefas(trat_importante);
        setTarefaData(trat_importante);
      } else {
        setTarefas([]);
        setTarefaData([]);
      }
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  useEffect(() => {
    receberTarefas();
    const todayDate = new Date();
    setToday(todayDate);
    setNextSaturday(calculoProximoSabado(todayDate)); // Calcula o próximo sábado ao montar o componente
  }, [currentDate]);

  useEffect(() => {
    const consultaData = async () => {
      try {
        const resposta = await fetch('http://10.135.60.43:8085/receber-dados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ acao: 'consulta_data', user_id: localStorage.getItem("ID") })
        });

        const dados = await resposta.json();
        console.log('Datas das tarefas:', dados);

        if (dados && !dados.erro) {
          const tarefas = dados.dados || [];

          // Formata as datas para 'YYYY-MM-DD' e armazena no estado
          const newMarkedDates = tarefas.reduce((acc, taskDate) => {
            try {
              const formattedDate = new Date(taskDate).toISOString().split('T')[0]; // Converte datetime.date para 'YYYY-MM-DD'
              acc[formattedDate] = true; // Marca a data como true
            } catch (error) {
              console.error(`Erro ao converter a data ${taskDate}:`, error);
            }
            return acc;
          }, {});

          setTarefasPorData(newMarkedDates); // Agora usa o novo conjunto de datas marcadas
        }
      } catch (error) {
        console.error('Erro ao buscar datas das tarefas:', error);
      }
    };

    consultaData();  // Chama ao montar o componente

  }, []);

  const handleDateClick = (day) => {
    setVisualizarSemana(false);
    setVisualizarHoje(false);
    setIsSemanaOuImportante(false);
    setVisualizarDia(true);
    const clickedDate = new Date(currentYear, currentMonth, day + 1);

    if (isNaN(clickedDate.getTime())) {
      console.error("Data inválida:", clickedDate);
      return;
    }

    setDate(clickedDate);
    const selectDate = clickedDate.toISOString().split('T')[0];
    setCurrentDate(selectDate);
    const clicada = new Intl.DateTimeFormat('pt-BR').format(clickedDate)
    console.log('data clicada:', clicada)
    setSelecionada(clicada)

    const tarefasSelecionarData = tarefas.filter(
      (tarefa) => tarefa.data_comp === selectDate
    );

    setTarefaData(tarefasSelecionarData);
  };
  
  const handleTodayClick = () => {
    setVisualizarSemana(false);
    setIsSemanaOuImportante(false);
    setVisualizarDia(false);
    setVisualizarHoje(true);
    const today = new Date();
    const todayDate = today.toISOString().split('T')[0];
    setCurrentDate(todayDate);
    setDate(today);

    receberTarefas();

    const tarefasHoje = tarefas.filter(tarefa => tarefa.data_comp === todayDate);
    setTarefaData(tarefasHoje);
  };

  const handleWeekClick = () => {
    setVisualizarSemana(true);
    setIsSemanaOuImportante(true);
    setVisualizarHoje(false);
    setVisualizarDia(false);
    const today = new Date();
    const nextSaturday = calculoProximoSabado(today);
    const tarefasSemana = tarefas.filter(tarefa => {
      const tarefaDate = new Date(tarefa.data_comp);
      return tarefaDate >= today && tarefaDate <= nextSaturday;
    });

    setTarefaData(tarefasSemana);
    setDate(today);
    setCurrentDate(today.toISOString().split('T')[0]);
    receberSemana(today, nextSaturday);
  };

  const handleImportantClick = () => {
    setVisualizarSemana(false);  // Para garantir que não esteja em modo de visualização de semana
    setIsSemanaOuImportante(true);
    setVisualizarHoje(false);
    setVisualizarDia(false);
    const tarefasImportantes = tarefas.filter(tarefa => tarefa.importante); // Filtra as tarefas marcadas como importantes
    setTarefaData(tarefasImportantes);  // Define a lista de tarefas a ser exibida
    receberImportante()
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

  const handleCheckBox = async (idComp, trf) => {
    const novoEstadoCheckbox = !Boolean(trf);
    setCheckedTarefas((prevState) => ({ ...prevState, [idComp]: novoEstadoCheckbox }));
  
    try {
      await fetch('http://10.135.60.43:8085/receber-dados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ acao: 'atualizar_checkbox', id_comp: idComp, estado_checkbox: novoEstadoCheckbox }),
      });
  
      if (visualizarHoje) {
        await receberTarefas();
      } else if (visualizarSemana) {
        const hoje = new Date();
        const proxSabado = calculoProximoSabado(hoje);
        await receberSemana(hoje, proxSabado);
      } else if (visualizarDia) {
        await receberTarefas();  // Ou algo que só atualize as tarefas desse dia específico
      } else {
        await receberImportante();
      }
    } catch (error) {
      console.error('Erro ao atualizar checkbox:', error);
      setCheckedTarefas((prevState) => ({ ...prevState, [idComp]: !novoEstadoCheckbox }));  // Reverte o estado em caso de erro
    }
  };
  
  const handleDelete = async (idComp) => {
    if (!tarefaData) return;
  
    try {
      console.log("Deletando tarefa: ", idComp);
      const response = await fetch('http://10.135.60.43:8085/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          acao: 'deletar_comp',
          id_comp: idComp
        })
      });
  
      if (!response.ok) {
        throw new Error('Erro ao deletar tarefa');
      } else {
        console.log('Tarefa deletada com sucesso');
        // Atualizar as tarefas com base na página atual
        if (visualizarHoje) {
          await receberTarefas();
        } else if (visualizarSemana) {
          const hoje = new Date();
          const proxSabado = calculoProximoSabado(hoje);
          await receberSemana(hoje, proxSabado);
        } else if (visualizarDia) {
          await receberTarefas();  // Atualiza as tarefas desse dia específico
        } else {
          await receberImportante();
        }
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className="calendar">
      <div className="calendarioTotal">
        <div className="calendar-header">
          <button onClick={handlePrevMonth} id='btnMesesEsquerdo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16" color="white">
              <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
            </svg>
          </button>
          <div className="mes_ano">
            <h2>{months[currentMonth]}</h2>
            <h4>{currentYear}</h4>
          </div>
          <button onClick={handleNextMonth} id='btnMesesDireito'>
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

          {[...Array(daysInMonth).keys()].map((day) => {
            const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day + 1).padStart(2, '0')}`;
            const isToday = formattedDate === new Date().toISOString().split('T')[0];

            return (
              <div key={day} className={`day ${isToday ? 'day-today' : ''}`} id='dias' onClick={() => handleDateClick(day)}>
                <span className="day-number">{day + 1}</span>
                {/* Verifica se a data formatada está presente em tarefasPorData */}
                {tarefasPorData[formattedDate] && <span className="bolinha"></span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className='menu_todo'>
        <div className='menu'>
          <a className='menu_hoje' href="#" onClick={(e) => { e.preventDefault(); handleTodayClick(); }}>Hoje</a>
          <a className='menu_hoje' href="#" onClick={(e) => { e.preventDefault(); handleWeekClick(); }}>Semana</a>
          <a className='menu_hoje' href="#" onClick={(e) => { e.preventDefault(); handleImportantClick(); }}>Importante</a>
        </div>

        <div className='toDoList'>
          <p id='DataTodo'>
            {visualizarSemana
              ? formatarDataSemana(today, nextSaturday)
              : visualizarHoje
                ? formatodata
                : visualizarDia
                  ? selecionada
                  : 'Importante'}
          </p>
          <ul>
            {tarefaData.length > 0 ? (
              tarefaData.map((tarefa) => (
                <li className={`licalendar ${tarefa.importante ? 'tarefa-importante' : ''}`} key={tarefa.id_comp}>
                  <div className='container_datacomp'>
                    <div className='data_comp'>
                      {/* Verifica se é semana ou importante para mostrar a data */}
                      {isSemanaOuImportante && (
                        <span className='data_tarefa'>
                          {new Date(tarefa.data_comp + 'T00:00:00').toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='tarefa_edit_lixo'>
                    <div className='check_tarefa'>
                      <div className='container-check'>
                        <input
                          checked={checkedTarefas[tarefa.id_comp] || tarefa.checkbox}
                          onClick={() => handleCheckBox(tarefa.id_comp, tarefa.checkbox)}
                          type="checkbox"
                          name="check"
                          id="check" />
                      </div>
                      <div className='quebra_div'>
                        <div className='hora-titulo'>
                          <span className='horario_tarefa'>{tarefa.horario} - </span>
                          <span className='titulo_tarefa'>{tarefa.titulo}</span>
                        </div>
                      </div>
                    </div>

                    <div id='botoes'>
                      <button className='buttonEditar' id='editarTarefa' onClick={() => handleEditTarefa(tarefa)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" color="white">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        className="buttonExcluir"
                        onClick={() => handleDelete(tarefa.id_comp)}
                        id='excluirTarefa'
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
          <button className='butTodo' id='AddTarefa' onClick={handleAddTarefas}>
            +
          </button>
        </div>
      </div>
      {modal && (
        <Compromissos
          isOpen={modal}
          onRequestClose={handleCloseModal}
          tarefasData={selecionarTarefa}
          receberTarefas={receberTarefas}
          dataEscolhida={currentDate} // A data fixa que você quer passar
        />
      )}
    </div>
  );
};

export default Calendar;