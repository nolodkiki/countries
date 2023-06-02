import { FC, useState } from "react"
import Dropdown from "../Dropdown/Dropdown"
import Search from "../Search/Search"
import style from './navbar.module.scss'


interface IProps {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Navbar: FC<IProps> = ({ handleSearch }) => {


    return (
        <div className={`${style.search_wrapper} flex-between`}>
            <Search handleSearch={handleSearch} />
            <Dropdown />
        </div>
    )
}

export default Navbar