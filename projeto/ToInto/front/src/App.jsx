{/*Nome componente: Componente App*/}
{/*Autor(a): Natália Aparecida Samogim*/}
{/*Data de criação:20/10/2023 e data de alteração: 06/12/2023*/}
{/*configura a estrutura do componente App, que vai conter o roteamento da aplicação*/}
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content'



const App = props => (
  <div className="App" >
    <BrowserRouter> {/*permite o roteamento que contém no Content(contém a lógica de roteamento) e a sua renderização */}
      <Content />
    </BrowserRouter>
  </div>

)

export default App;
