import { FC, useEffect, useState } from "react";
import Header from "../components/Header/Header"
import Cards from "../components/Cards/Cards"

const Main: FC = () => {

    return (
        <>
            <Header />
            <div className="container">
                <Cards />
            </div>
        </>

    )
}

export default Main