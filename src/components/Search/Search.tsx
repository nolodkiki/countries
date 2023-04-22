import style from './search.module.scss'
import searchIcon from '../../assets/icons/search.png'
import { FC } from 'react'

const Search: FC = () => {
    return (
        <div className={style.search}>
            <img className={`icon`} src={searchIcon} alt="" />
            <input className={`${style.input} search_input`} type="text" placeholder='Search for counttries' />
        </div>
    )
}
export default Search