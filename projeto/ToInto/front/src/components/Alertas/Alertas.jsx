{/*Nome do componente: Alertas
Autora: Júlia
Data de alteração:03/12/2024
Descrição Detalhada: O componente Calendar é um calendário interativo construído com React, 
que permite aos usuários gerenciar tarefas, compromissos e lembretes. Ele combina funcionalidades
de exibição de calendário mensal, visualização de tarefas por dia, semana ou importante, além da exibição do todolist.*/}
import React, { useState } from "react";
import './Alertas.css';

{/*Nome da função: Alertas
Autora: Júlia
Data da alteração: 03/12/2024
Parâmetros de entrada: alertas
Retorno: retorna as notificações para as tarefas
Descrição: exibe notificações de eventos próximos e permite que o usuário feche notificações individualmente.*/}

function Alertas({ alertas }) {
  const [notificacoesFechadas, setNotificacoesFechadas] = useState([]);

  // Função para fechar uma notificação
  const fecharNotificacao = (id) => {
    setNotificacoesFechadas([...notificacoesFechadas, id]);
  };

  return (
    <div className="Alerta-Tarefa">
      {alertas.length > 0 ? (
        // Filtra as notificações para mostrar apenas aquelas que não foram fechadas
        alertas
          .filter((evento) => !notificacoesFechadas.includes(evento.id))
          .map((evento) => (
            <div key={evento.id} className="alerta-container">
              <p><strong>Notificação</strong></p>
              <p>
                {/* Mensagem que inclui o título do evento e o tempo de lembrete */}
                O evento <strong>{evento.titulo}</strong> está a menos de {evento.lembrete || "alguns"} minutos de começar!
              </p>
              {/* Botão para fechar a notificação */}
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
