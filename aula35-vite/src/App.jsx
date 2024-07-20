

// import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Footer from './components/footer/Footer.jsx'


function App() {
  return (
    <div className=' relative flex-1 flex flex-col min-h-screen p-8'>

      <Header />
      <Home />
      <Footer />

    </div>
  )
}

export default App
