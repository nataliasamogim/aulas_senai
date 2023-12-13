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

  return (
    <>
      {/*Botão para ir para a parte de adicionar os comprimissos*/}
      <Button className="plus " variant="outline" onClick={handleShow}  >
        <strong  className="add">+</strong>
      </Button>

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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                autoFocus
              />
            </Form.Group>
            {/*Fim data*/}

            {/*Início do campo horário*/}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Horário</Form.Label>
              <Form.Control
                type="time"
                autoFocus
              />
            </Form.Group>
            {/*Fim do horário*/}

            {/*Início do campo título*/}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Título da tarefa"
                autoFocus
              />
            </Form.Group>
            {/*Fim do título*/}

            {/*Início do campo descrição */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            {/*Fim da descrição*/}

            {/*Início do campo importante */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <input type="checkbox" name="Importante" id="importante" />
              <Form.Label>Importante</Form.Label>
            </Form.Group>
            {/*Fim do importante*/}

            {/*Início do campo lembre-me */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="lembrete">Lembre-me</Form.Label>
              {/*Botão que contém as opções de horário*/}
              <DropdownButton variant="outline-light"
                as={ButtonGroup}
                title="0 minutos"
                id="bg-vertical-dropdown-1"
              >
                <Dropdown.Item eventKey="1">5 minutos</Dropdown.Item>
                <Dropdown.Item eventKey="2">15 minutos</Dropdown.Item>
                <Dropdown.Item eventKey="3">30 minutos</Dropdown.Item>
                <Dropdown.Item eventKey="4">1 hora</Dropdown.Item>
                <Dropdown.Item eventKey="5">12 horas</Dropdown.Item>
                <Dropdown.Item eventKey="6">1 dia</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            {/*Fim do lembre-me*/}
          </Form>
          {/*Fim do formulário*/}
        </Modal.Body>
        {/*Fim do body*/}

        {/*Início do footer que contém o botão salvar*/}
        <Modal.Footer>
          <Button variant="outline-light" className="save" onClick={handleClose}>
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