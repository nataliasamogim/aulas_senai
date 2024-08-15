{/* Componente Compromissos */}
{/* Autor: Júlia Dias Lara*/}
{/* 28/07/2023-01/12/2023 */}
{/* Descrição detalhada: o componente cria uma interface para adicionar os compromissos, ao clicar no botão "+" é apresentado */}
{/* um form com campos para inserir a data, horário, título, descrição e opções relacionadas a lembretes e salva os comprimissos */}
{/* ao clicar no botão salvar */}

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';

{/* Função  Compromissos*/}
{/* Autor: Júlia Dias Lara */}
{/* 28/07/2023-01/12/2023*/}
{/* Parâmetros entrada: nulo*/}
{/* Retorno:nulo */}
{/* Descrição/Observação: Permite ao usuário adicionar novos compromissos, Ele fornece campos para inserir informações relevantes, */}
{/*  como data, horário, título e descrição, além de opções adicionais como a marcação de "importante" e a configuração de lembretes. */}
function Compromissos() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [titulo, setTitulo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [descricao, setDescricao] = useState('');
  const [importante, setImportante] = useState('');
  const [lembrete, setLembrete] = useState('');

  const navigate = useNavigate();

  const [mensagensErro, setMensagensErro] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formAdicionar = {
      id_cad: localStorage.getItem("ID"),
      titulo: titulo,
      date: date,
      time: time,
      descricao: descricao,
      importante: importante,
      lembrete: lembrete,
    };

    try {
      const resposta = await fetch('http://localhost:5000/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formAdicionar),
      });

      const resultado = await resposta.json();

      if (resultado.erro) {
        // Exibe mensagens de erro no console.log ou em algum local visível
        console.error('Erro no servidor:', resultado.mensagens);

        // Atualiza o estado com as mensagens de erro para exibição no formulário
        setMensagensErro(resultado.mensagens);
      } else {
        // Dados foram processados com sucesso
        console.log('Dados processados com sucesso!', resposta);
        //navigate('/Todolist')
        setTitulo('')
        setDate('')
        setTime('')
        setDescricao('')
        setImportante('')
        setLembrete('')
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <>
      {/*Botão para ir para a parte de adicionar os comprimissos*/}
      <Button className="plus " variant="outline" onClick={handleShow}  >
        <strong  className="add">+</strong>
      </Button>

      {mensagensErro.length > 0 && (
        <div style={{ color: 'white' }}>
          <p>Erro ao processar os dados:</p>
          <ul>
            {mensagensErro.map((mensagem, index) => (
              <li key={index}>{mensagem.mensagem}</li>
            ))}
          </ul>
        </div>
      )}

      {/*Início da página dos compromissos*/}
      <Modal show={show} onHide={handleClose}>
        {/*Cabeçalho que contém apenas o título*/}
        <Modal.Header closeButton>
          <Modal.Title>Compromissos</Modal.Title>
        </Modal.Header>

        {/*Início do body do compromissos*/}
        <Modal.Body>
          {/*Início do formulário*/}
          <Form>
            {/*Início do campo da data*/}
            <Form.Group className="mb-3" controlId="dateinput">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            {/*Fim data*/}

            {/*Início do campo título*/}
            <Form.Group className="mb-3" controlId="tituloInput">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Título da tarefa"
                autoFocus
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Form.Group>
            {/*Fim do título*/}

            {/*Início do campo horário*/}
            <Form.Group className="mb-3" controlId="timeInput">
              <Form.Label>Horário</Form.Label>
              <Form.Control
                type="time"
                autoFocus
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
            {/*Fim do horário*/}

            {/*Início do campo descrição */}
            <Form.Group className="mb-3" controlId="descricaoInput">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Form.Group>
            {/*Fim da descrição*/}

            {/*Início do campo importante */}
            <Form.Group className="mb-3" controlId="importanteInput">
              <Form.Check type="checkbox" name="Importante" label="Importante" checked={importante} onChange={(e) => setImportante(e.target.checked)} />
            </Form.Group>
            {/*Fim do importante*/}

            {/*Início do campo lembre-me */}
            <Form.Group className="mb-3" controlId="lembreteInput">
              <Form.Label className="lembrete">Lembre-me</Form.Label>
              {/*Botão que contém as opções de horário*/}
              <DropdownButton variant="outline-light"
                as={ButtonGroup}
                title="0 minutos"
                value={lembrete || "0 minutos"}
                onSelect={(e) => setLembrete(e)}
              >
                <Dropdown.Item eventKey="15">15 minutos</Dropdown.Item>
                <Dropdown.Item eventKey="30">30 minutos</Dropdown.Item>
                <Dropdown.Item eventKey="60">1 hora</Dropdown.Item>
                <Dropdown.Item eventKey="720">12 horas</Dropdown.Item>
                <Dropdown.Item eventKey="1440">1 dia</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            {/*Fim do lembre-me*/}
          </Form>
          {/*Fim do formulário*/}
        </Modal.Body>
        {/*Fim do body*/}

        {/*Início do footer que contém o botão salvar*/}
        <Modal.Footer>
          <Button variant="outline-light" className="save" onClick={handleSubmit}>
            Salvar
          </Button>
        </Modal.Footer>
        {/*Fim do footer*/}
      </Modal>
      {/*Fim da página dos compromissos*/}
    </>
  );
}

export default Compromissos;