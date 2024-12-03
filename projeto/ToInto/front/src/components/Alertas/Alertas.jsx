import React, { useState } from "react";
import './Alertas.css';

function Alertas({ alertas }) {
  const [notificacoesFechadas, setNotificacoesFechadas] = useState([]);

  const fecharNotificacao = (id) => {
    setNotificacoesFechadas([...notificacoesFechadas, id]);
  };

  return (
    <div className="Alerta-Tarefa">
      {alertas.length > 0 ? (
        alertas
          .filter((evento) => !notificacoesFechadas.includes(evento.id))
          .map((evento) => (
            <div key={evento.id} className="alerta-container">
              <p><strong>Notificação</strong></p>
              <p>
                O evento <strong>{evento.titulo}</strong> está a menos de {evento.lembrete || "alguns"} minutos de começar!
              </p>
              <button onClick={() => fecharNotificacao(evento.id)} className="fechar-notificacao">
                Fechar
              </button>
            </div>
          ))
      ) : null}
    </div>
  );
}

export default Alertas;
