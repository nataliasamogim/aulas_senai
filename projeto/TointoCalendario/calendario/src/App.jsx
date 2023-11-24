import Todolist from './components/Todolist';
import Calendario from './components/Calendario';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <div className="App" >
      <Calendario />
      <Todolist />
    </div>
  )
}

export default App
