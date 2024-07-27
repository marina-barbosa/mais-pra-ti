
import './App.css'
import LimitedCounter from './components/ciclo_de_vida/limitedCounter'
import PersistentCounter from './components/ciclo_de_vida/persistentCounter'
import RealTimeClock from './components/ciclo_de_vida/realTimeClock'
import TitleUpdater from './components/ciclo_de_vida/titleUpdater'
import ToggleText from './components/ciclo_de_vida/toggleText'
import WindowSize from './components/ciclo_de_vida/windowSize'

function App() {

  return (
    <>
      <main className="min-h-screen p-4 flex flex-col justify-center">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">Reforçando</h1>
        </div>
        <section className='max-w-[1200px]'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-[calc(100vh-2rem)]">
            <div className="bg-gray-300 border border-gray-400 p-4 text-center h-36">
              <TitleUpdater />
            </div>
            <div className="bg-gray-300 border border-gray-400 p-4 text-center h-36">
              <WindowSize />
            </div>
            <div className="bg-gray-300 border border-gray-400 p-4 text-center h-36">
              <PersistentCounter />
            </div>
            <div className="bg-gray-300 border border-gray-400 p-4 text-center h-36">
              <RealTimeClock />
            </div>
            <div className="bg-gray-300 border border-gray-400 p-4 text-center h-36">
              <ToggleText />
            </div>
            <div className="bg-gray-300 border border-gray-400 p-4 text-center h-36">
              <LimitedCounter />
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export default App
