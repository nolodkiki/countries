import { FC, useState } from "react"
import Dropdown from "../Dropdown/Dropdown"
import Search from "../Search/Search"
import style from './navbar.module.scss'


interface IProps {
    value: string
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Navbar: FC<IProps> = ({ value, handleSearch }) => {

    return (
        <div className={`${style.search_wrapper} flex-between`}>
            <Search value={value} handleSearch={handleSearch} />
            <Dropdown />
        </div>
    )
}

export default Navbar