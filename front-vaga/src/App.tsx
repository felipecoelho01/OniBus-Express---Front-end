import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './features/home/Home'
import ViagemsPage from './features/viagem/pages/ViagemPage'
import ReservasPage from './features/reserva/pages/ReservasPage'
import Navbar from './shared/components/navbar/Navbar'
import Footer from './shared/components/footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/viagens' element={<ViagemsPage />}></Route>
          <Route path='/reservas' element={<ReservasPage />}></Route>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
