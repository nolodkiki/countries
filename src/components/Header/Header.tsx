import style from './Header.module.scss'
import moonLight from '../../assets/icons/moonLight.png'
import { FC } from 'react'


const Header: FC = () => {
    return (
        <div className="header">
            <div className="container">
                <div className={`${style.header_inner} flex-between items-center`}>
                    <h1>Where in the world?</h1>
                    <div className={`${style.mod} flex-between items-center`}>
                        <img className='icon' src={moonLight} alt="icon" />
                        <p>Dark Mode</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header