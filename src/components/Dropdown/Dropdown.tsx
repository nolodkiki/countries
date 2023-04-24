import style from './dropdown.module.scss'

import arrow from '../../assets/icons/arrow.png'
import { FC, useState } from 'react'

const Dropdown: FC = () => {
    const [show, setShow] = useState(false)


    return (
        <div className="dropdown">
            <button onClick={() => { setShow(!show) }} className={style.dropdown_togle}>
                Filter by Region
                <img src={arrow} alt='arrow' />
            </button>
            {show
                ? <ul className={style.dropdown_menu}>
                    <li onClick={() => { setShow(false) }} className="dropdown-item">Africa</li>
                    <li onClick={() => { setShow(false) }} className="dropdown-item">America</li>
                    <li onClick={() => { setShow(false) }} className="dropdown-item">Asia</li>
                    <li onClick={() => { setShow(false) }} className="dropdown-item">Eroupe</li>
                    <li onClick={() => { setShow(false) }} className="dropdown-item">Oceania</li>
                </ul>
                : null}

        </div>
    )
}

export default Dropdown