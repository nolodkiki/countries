import Card from './pages/MainCard'
import Main from './pages/Main'
import './styles/main.scss'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/open' element={<Card />} />
      </Routes>
    </>

  )
}

export default App
