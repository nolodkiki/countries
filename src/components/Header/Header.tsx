import style from './Header.module.scss'
import moonLight from '../../assets/icons/moonLight.png'
import moonDark from '../../assets/icons/moonDark.png'
import { FC, useState } from 'react'


const Header: FC = () => {
    const [darkMod, setDarkMod] = useState(false)

    return (
        <div className={`header ${darkMod ? 'header_dark' : null}`}>
            <div className="container">
                <div className={`${style.header_inner} flex-between items-center`}>
                    <h1>Where in the world?</h1>
                    <div onClick={() => setDarkMod(!darkMod)} className={`${style.mod} flex-between items-center`}>
                        <img className='icon' src={darkMod ? moonLight : moonDark} alt="icon" />
                        <p>Dark Mode</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header