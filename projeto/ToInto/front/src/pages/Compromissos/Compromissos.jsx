import { useState, useEffect } from 'react';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Modal from "react-modal";
import './CompStyle.css'

// Define o elemento principal da aplicação (geralmente o root do DOM)
Modal.setAppElement('#root');

const Compromissos = ({ isOpen, onRequestClose, tarefasData, receberTarefas, dataEscolhida }) => {
  const [idComp, setIdComp] = useState('');
  const [titulo, setTitulo] = useState('');
  const [date, setDate] = useState(dataEscolhida || ''); // Inicializa com dataEscolhida
  const [time, setTime] = useState('');
  const [descricao, setDescricao] = useState('');
  const [importante, setImportante] = useState(false);
  const [lembrete, setLembrete] = useState('');
  const [mensagensErro, setMensagensErro] = useState({});

  // Função para formatar a data
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    if (tarefasData) {
      setIdComp(tarefasData.id_comp);
      setTitulo(tarefasData.titulo);
      setDescricao(tarefasData.descricao);
      setDate(tarefasData.data_comp);
      setTime(tarefasData.horario);
      setImportante(tarefasData.importante || false);
      setLembrete(tarefasData.lembrete || '0 minutos');
    } else {
      setTitulo('');
      setDescricao('');
      setDate(dataEscolhida); // Define a data escolhida ao criar nova tarefa
      setTime('');
      setImportante(false);
      setLembrete('0 minutos');
    }
  }, [tarefasData, dataEscolhida]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tarefa = { titulo, descricao, date, time, importante, lembrete };
    console.log('Tarefas que estão chegando', tarefa);

    try {
      let response;
      if (tarefasData) {
        // Atualizar tarefa existente
        response = await fetch('http://10.135.60.57:8085/receber-dados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            titulo,
            descricao,
            date,
            time,
            importante,
            lembrete,
            id_cad: localStorage.getItem("ID"),
            acao: 'atualizar_comp',
            id_tarefa: idComp
          }),
        });
      } else {
        // Criar nova tarefa
        response = await fetch('http://10.135.60.57:8085/receber-dados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            titulo,
            descricao,
            date,
            time,
            importante,
            lembrete,
            id_cad: localStorage.getItem("ID"),
            acao: 'salvar_compromisso',
            plano_esc: localStorage.getItem("plano_esc")
          }),
        });
      }

      console.log('plano que esta chegando no compromissos', localStorage.getItem("plano_esc"))
      
      if (response) {
        const resultado = await response.json();
        if (resultado.erro) {
          console.error('Erro no servidor:', resultado.mensagens);
          // Resetando mensagens de erro
          setMensagensErro({});

          // Extraindo mensagens do formato que vem do backend
          resultado.mensagens.forEach(mensagem => {
            const campo = Object.keys(mensagem.mensagem)[0]; // pega o nome do campo
            const mensagemErro = mensagem.mensagem[campo]; // pega a mensagem do campo
            setMensagensErro(prev => ({ ...prev, [campo]: mensagemErro })); // associa a mensagem ao campo correto
          });
        } else {
          setTitulo('');
          setDescricao('');
          setDate(dataEscolhida); // Mantém a data fixa após a tarefa ser criada
          setTime('');
          setImportante(false);
          setLembrete('0 minutos');
          onRequestClose();
          receberTarefas(); // Atualiza a lista de tarefas
        }

      } else {
        console.error('Nenhuma resposta recebida.');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} backdrop="static" keyboard={false}>
      <button
        onClick={onRequestClose} // Chama a função para fechar o modal
        className="modal-close-button"
        aria-label="Fechar"
      >
        &times; {/* X para fechar */}
      </button>
      
      <div className='comph2div'>
        <h2 id='compromissosh2'>{tarefasData ? 'Atualizar tarefas' : 'Compromissos'}</h2>
      </div>
      <form onSubmit={handleSubmit} className='formulariocomp'>
        <div className="datadiv">
          <label id='datacentral'>{date ? formatDate(date) : ''}</label> {/* Mostra a data formatada */}
        </div>

        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          {mensagensErro.titulo && <div className="error-message">{mensagensErro.titulo}</div>}
        </div>

        <div className="form-group">
          <label>Horário</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          {mensagensErro.horario && <div className="error-message">{mensagensErro.horario}</div>}
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea
            className="form-control"
            id='descricaotext'
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
          {mensagensErro.descricao && <div className="error-message">{mensagensErro.descricao}</div>}
        </div>

        {/* Campo Importante */}
        <div className="form-group-imp">
          <input
            type="checkbox"
            className="form-check-input"
            checked={importante}
            onChange={(e) => setImportante(e.target.checked)}
          />
          <label className='label'>Importante</label>
        </div>

        {/* Campo Lembre-me */}
        <div className="form-group-lembrete">
          <label className='label-lembrete'>Lembre-me</label>
          <select
            className="form-control-lembrete"
            value={lembrete}
            onChange={(e) => setLembrete(e.target.value)}
          >
            <option value="0">0 minutos</option>
            <option value="15">15 minutos</option>
            <option value="30">30 minutos</option>
            <option value="60">1 hora</option>
            <option value="720">12 horas</option>
            <option value="1440">1 dia</option>
          </select>
        </div>

        <div className="button-salvar">
          <button type="submit" className="btn-criar-task">
            {tarefasData ? 'Atualizar' : 'Criar'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Compromissos;
