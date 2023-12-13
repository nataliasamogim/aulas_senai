{/* Componente Calendar*/}
{/* Autor: Júlia Dias Lara */}
{/* 13/09/2023-01/12/2023*/}
{/* Descrição detalhada: o calendar apresenta o mês, ano e eventos associados aos dias, possui funcionalidades de navegação*/}
{/* entre os meses, inclui a associação dos eventos aos dias, com cada dia oferecendo um link para o To Do List, representado por um "+".*/}
{/* Observações pertinentes: O código importa o Link do pacote React-router-dom que o leva para o To Do List */}

import React, { useState } from 'react';
import Event from '../Eventos/Event';
import { Link } from 'react-router-dom';
import './Calendar.css';

{/* Uma lista dos meses do ano que é atribuído a uma constante  */}
const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

{/* Uma lista dos dias da semana que é atribuído a uma constante */}
const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [events, setEvents] = useState([]);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  {/*É chamada no código para navegar para o mês anterior no calendário */}
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  {/*É chamada no código para navegar para o próximo mês no calendário */}
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
 

  return (
    <div className="calendar">
      {/* Início do cabeçalho do calendário */}
      <div className="calendar-header">
        {/* Botão com uma seta que levará ao mês anterior */}
        <button onClick={handlePrevMonth}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16" color="white">
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
            </svg>
        </button>

        {/*Div para o mês e ano atuais */}
        <div className="mes_ano">
            <h2>{months[currentMonth]} </h2>
            <h4>{currentYear}</h4>
        </div>
       
        {/*Botão com uma seta que levará ao próximo mês */}
        <button onClick={handleNextMonth}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16" color="white">
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
        </button>

      </div>
      {/* Fim do cabeçalho do calendário */}

      <div className="calendar-grid">
        {/*Bloco que mapeia a lista days of week */}
        {daysOfWeek.map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
        {/* Bloco que cria divs vazias representando os dias do mês anterior até o primeiro dia do mês atual. */}
        {[...Array(firstDayOfMonth).fill(null)].map((_, index) => (
          <div key={`empty-${index}`} className="empty-day"></div>
        ))}
        {/* Bloco que cria divs representando os dias do mês atual */}
        {[...Array(daysInMonth).keys()].map((day) => (

          <div key={day} className="day" onClick={() => handleAddEvent(day)}> {/* Para cada dia do mês, cria uma div com a classe "day". A chave é definida como o número do dia.*/}
            <span className="day-number">{day + 1}</span>
            <div className="todoplus">
                <Link to="/Todolist" className="todo_button">+</Link> {/*Link para redirecionar ao To Do List */}
            </div>
            {/* Mapeia os eventos associados a cada dia. */}
            {events.map((event, index) => {
              {/*Se houver um evento naquele dia específico, renderiza um componente Event com as informações desse evento. */}
              if (event.date === day + 1) {
                return <Event key={index} title={event.title} />;
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );



};

export default Calendar;
