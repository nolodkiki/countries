import Card from './pages/MainCard'
import Main from './pages/Main'
import './styles/main.scss'
import { Routes, Route } from 'react-router-dom'
import { useAppDispatch } from './hook'
import { useEffect } from 'react'
import { fetchData } from './redux/slices/dataSlice'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchData('all'))
  }, [])

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
