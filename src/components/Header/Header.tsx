import style from './Header.module.scss'
import moonLight from '../../assets/icons/moonLight.png'
import moonDark from '../../assets/icons/moonDark.png'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchData, toggleDarkMode } from '../../redux/slices/dataSlice'


const Header: FC = () => {
    const mode = useAppSelector(state => state.data.darkMode)
    const dispatch = useAppDispatch()



    return (
        <div className={`header`}>
            <div className="container">
                <div className={`${style.header_inner} flex-between items-center`}>

                    <button onClick={() => dispatch(fetchData('all'))}><h1>Where in the world?</h1></button>

                    <div onClick={() => dispatch(toggleDarkMode(!mode))} className={`${style.mod} flex-between items-center`}>
                        <img className='icon' src={mode ? moonLight : moonDark} alt="icon" />
                        <p>Dark Mode</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header