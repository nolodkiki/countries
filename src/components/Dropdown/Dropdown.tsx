import style from './dropdown.module.scss'

import arrow from '../../assets/icons/arrow.png'
import { FC, useState } from 'react'
import { fetchData, search } from '../../redux/slices/dataSlice'
import { useAppDispatch, useAppSelector } from '../../hook'

const Dropdown: FC = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.data)


    const [show, setShow] = useState(false)
    const fetchRegion = (region: string) => {
        setShow(false)
        dispatch(search(''))
        dispatch(fetchData(region))
    }

    const renderRegions = state.regions.map(item => (
        <li onClick={() => { fetchRegion(`region/${item}`) }} className="dropdown-item">{item}</li>
    ))


    return (
        <div className="dropdown">
            <button onClick={() => { setShow(!show) }} className={style.dropdown_togle}>
                Filter by Region
                <img src={arrow} alt='arrow' />
            </button>
            {show ? <ul className={style.dropdown_menu}>{renderRegions}</ul> : null}
        </div>
    )
}

export default Dropdown