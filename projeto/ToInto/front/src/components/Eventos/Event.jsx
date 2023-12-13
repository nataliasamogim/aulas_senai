{/*Nome componente: Event
Autor: Laura
Data criação: /Alteração:01/12/2023
Descrição Detalhada: Cria uma função do qual permite acessar o valor de title diretamente no componente.
O conteúdo da div é o valor da propriedade title, que será renderizado quando o componente Event for utilizado.
Observações Pertinentes: Este código não está em uso até o momento*/}

import React from 'react';
import './Event.css';

const Event = ({ title }) => {
  return <div className="event">{title}</div>;
};

export default Event;