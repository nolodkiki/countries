import { FC } from "react"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import Cards from "../components/Cards/Cards"

const Main: FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Navbar />
                <Cards />
            </div>
        </>

    )
}

export default Main