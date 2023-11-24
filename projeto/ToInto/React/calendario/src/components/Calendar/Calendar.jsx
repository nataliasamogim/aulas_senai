import React, { useState } from 'react';
import Event from '../Eventos/Event';
import './Calendar.css';
import { Link } from 'react-router-dom';

const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [events, setEvents] = useState([]);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

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


    return (
        <div className="calendar">

            <div className="calendar-header">
                <button onClick={handlePrevMonth}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16" color="white">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                    </svg>
                </button>
                <div className='mes-ano'>
                    <h2>{months[currentMonth]}</h2>
                    <h4>{currentYear}</h4>
                </div>
                <button onClick={handleNextMonth}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16" color="white">
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
                    <div key={day} className="day" onClick={() => handleAddEvent(day)}>
                        <span className="day-number">{day + 1}</span>
                        <div className='todoplus'>
                            <Link to="/Todolist" className='todo_button'>+</Link>
                        </div>
                        {events.map((event, index) => {
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
