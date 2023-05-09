import style from './search.module.scss'
import searchIcon from '../../assets/icons/search.png'
import { FC } from 'react'
import { useAppDispatch } from '../../hook'
import { search } from '../../redux/slices/dataSlice'

interface IProps {
    value: string
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: FC<IProps> = ({ value, handleSearch }) => {
    return (
        <div className={style.search}>
            <img className={`icon`} src={searchIcon} alt="" />
            <input value={value} onChange={handleSearch} className={`${style.input} input`} type="text" placeholder='Search for counttries' />
        </div>
    )
}
export default Search