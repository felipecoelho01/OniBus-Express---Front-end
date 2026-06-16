import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/home/Home'
import ViagemsPage from './features/viagem/pages/ViagemPage'
import ReservasPage from './features/reserva/pages/ReservasPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path='/' element={Home}></Route>
        <Route path='/viagens' element={ViagemsPage}></Route>
        <Route path='/reservas' element={ReservasPage}></Route>
     </Routes>
    </>
  )
}

export default App
