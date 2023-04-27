import { FC } from "react"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import Cards from "../components/Cards/Cards"
import OpenCard from "../components/Cards/OpenCard/OpenCard"

const Main: FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                {/* <Cards /> */}
                <OpenCard />
            </div>
        </>

    )
}

export default Main