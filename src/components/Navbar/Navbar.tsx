import { FC } from "react"
import Dropdown from "../Dropdown/Dropdown"
import Search from "../Search/Search"
import style from './navbar.module.scss'

const Navbar: FC = () => {
    return (
        <div className={`${style.search_wrapper} flex-between`}>
            <Search />
            <Dropdown />
        </div>
    )
}

export default Navbar