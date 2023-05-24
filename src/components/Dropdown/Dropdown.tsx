import style from './dropdown.module.scss'

import arrowBlack from '../../assets/icons/arrowBlack.png'
import arrowWhite from '../../assets/icons/arrowWhite.png'
import { FC, useState } from 'react'
import { fetchData } from '../../redux/slices/dataSlice'
import { useAppDispatch, useAppSelector } from '../../hook'

const Dropdown: FC = () => {
    const dispatch = useAppDispatch()
    const { regions, darkMode } = useAppSelector(state => state.data)


    const [show, setShow] = useState(false)
    const fetchRegion = (region: string) => {
        setShow(false)
        dispatch(fetchData(region))
    }

    const renderRegions = regions.map(item => (
        <li onClick={() => { fetchRegion(`region/${item}`) }} className="dropdown-item">{item}</li>
    ))


    return (
        <div className="dropdown">
            <button onClick={() => { setShow(!show) }} className={style.dropdown_togle}>
                Filter by Region
                <img className={style.arrow} src={darkMode ? arrowWhite : arrowBlack} alt='arrow' />
            </button>
            {show ? <ul className={style.dropdown_menu}>{renderRegions}</ul> : null}
        </div>
    )
}

export default Dropdown