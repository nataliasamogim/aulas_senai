import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function MenuLateral() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {/*Início do Menu lateral*/}
      <div className="cabecalho_menu">{/*div que contém um icon que tem a função deum botão*/}
        <Button classname="menu" onClick={handleShow} variant='outline'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16"  >
            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </Button>
      </div>


      <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton></Offcanvas.Header>{/*o closeButton é o botão de fechar*/}
      {/*início dos botões do menu*/}
        <Offcanvas.Body>
          {/*Início da div que contém todos os botões*/}
          <div className="d-grid gap-2">
            <Button variant="outline" size="lg" className="hoje" >
              Hoje
            </Button>
            <Button variant="outline" size="lg" className="semana" >
              Semana
            </Button>
            <Button variant="outline" size="lg" className="importante" >
              Importantes
            </Button>
          </div>
          {/*Fim da div*/}

        </Offcanvas.Body>
        {/*Fim do corpo do menu*/}
      </Offcanvas>
      
    </>
  );
}

export default MenuLateral;