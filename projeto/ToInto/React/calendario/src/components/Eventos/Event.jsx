import React from 'react';
import '../Eventos/Event.css';

const Event = ({ title }) => {
  return <div className="event">{title}</div>;
};

export default Event;