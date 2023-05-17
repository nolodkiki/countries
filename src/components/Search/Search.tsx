import style from './search.module.scss'
import searchIcon from '../../assets/icons/search.png'
import { FC } from 'react'
import { useAppSelector } from '../../hook'

interface IProps {
    value: string
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: FC<IProps> = ({ value, handleSearch }) => {
    const searchValue = useAppSelector(state => state.data.searchValue)
    return (
        <div className={style.search}>
            <img className={`icon`} src={searchIcon} alt="" />
            <input value={searchValue} onChange={handleSearch} className={`${style.input} input`} type="text" placeholder='Search for counttries' />
        </div>
    )
}
export default Search