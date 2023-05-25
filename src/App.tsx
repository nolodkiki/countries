import Card from './pages/MainCard'
import Main from './pages/Main'
import './styles/main.scss'
import { Routes, Route } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hook'
import { useEffect } from 'react'
import { fetchData } from './redux/slices/dataSlice'

function App() {
  const mode = useAppSelector(state => state.data.darkMode)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchData('all'))
  }, [])


  return (
    <div className={mode ? 'theme-dark' : undefined}>
      <Routes>
        <Route path='/countries' element={<Main />} />
        <Route path='/countries/open' element={<Card />} />
      </Routes>
    </div>

  )
}

export default App
