import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


function MenuLateral() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/*Início do Menu lateral*/}

      <div className="cabecalho_menu">{/*div que contém um icon que tem a função deum botão*/}
        <Button className="lateral_menu" onClick={handleShow} variant='outiline'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-justify" viewBox="0 0 16 16"  >
            <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </Button>
      </div>


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Link to='/calendario'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16" className='home_calen'>
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>
          </Link>
        </Offcanvas.Header>{/*o closeButton é o botão de fechar*/}
        {/*início dos botões do menu*/}
        <Offcanvas.Body>
          {/*Início da div que contém todos os botões*/}
          <div className="d-grid gap-2">
            <Link to="/Todolist" className='hoje'>
              Hoje
            </Link>

            <Link to="/Todolist" className="semana">
              Semana
            </Link>

            <Link to="/Todolist" className="importante" >
              Importantes
            </Link>
          </div>
          {/*Fim da div*/}

        </Offcanvas.Body>
        
      </Offcanvas>
      {/*Fim do corpo do menu*/}
    </>
  );
}

export default MenuLateral;