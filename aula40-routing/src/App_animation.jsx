import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from './components/reforcando/animacoes_de_transicao/Rotas';
import { Header } from './components/header';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Rotas />
      </Router>
    </>
  )
}

export default App
