
// import Card from "../card/Card"
import { Noticias } from '../noticias/noticias';
import { Machado } from '../machado/machado';


const Home = () => {
  return (
    <section id='home' className="p-8 flex-1 flex flex-col items-center justify-center gap-8">

      <Noticias />
      {/* <Machado /> */}

    </section>
  )
}

export default Home