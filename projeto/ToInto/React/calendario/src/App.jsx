import Todolist from './components/Todolist';
import Header_calen from './components/Header_calen';
import './App.css'
import Principal from './components/Principal';
import { BrowserRouter } from 'react-router-dom';
import Hoje from './pages/Hoje';
import Content from './components/Content'



const App = props => (
  <div className="App" >
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  </div>

)

export default App;
