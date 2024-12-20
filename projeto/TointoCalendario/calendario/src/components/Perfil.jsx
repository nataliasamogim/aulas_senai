import Dropdown from 'react-bootstrap/Dropdown';

function Perfil() {
    return (

        <Dropdown>
            <Dropdown.Toggle variant='outline' id="dropdown-basic">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" color="white">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu className='page-perfil'>
                <Dropdown.ItemText className='nome-perfil'>Nome</Dropdown.ItemText>
                <Dropdown.ItemText className='email-perfil'>tointo@listatarefas.com</Dropdown.ItemText>
                <input type="button" value="Sair" />
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Perfil;