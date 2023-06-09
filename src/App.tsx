import MainCard from './pages/MainCard'
import Main from './pages/Main'
import './styles/main.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hook'
import { useEffect } from 'react'
import { fetchData } from './redux/slices/dataSlice'

function App() {
  const { darkMode, country } = useAppSelector(state => state.data)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchData('all'))
  }, [])


  return (
    <div className={darkMode ? 'theme-dark' : undefined}>
      <Routes>
        <Route path='/countries' element={<Main />} />
        <Route path={`/countries/:countryName`} element={<MainCard />} />
      </Routes>
    </div>

  )
}

export default App
