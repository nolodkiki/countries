import { FC, useEffect } from "react"
import Header from "../components/Header/Header"
import OpenCard from "../components/Cards/OpenCard/OpenCard"
import { useAppSelector } from "../hook"





const MainCard: FC = () => {
    const { name, nativeName, population, region, capital, flag, subregion, tld, currencies, languages, borders } = useAppSelector(state => state.data.country[0])
    const { loading, country } = useAppSelector(state => state.data)

    return (
        <>
            <Header />
            <div className="container">
                {loading
                    ? <div>Loading...</div>
                    : country.length > 0
                        ? (
                            <OpenCard key={name} name={name} nativeName={nativeName} population={population} region={region} capital={capital} flag={flag} subregion={subregion} tld={tld} currencies={currencies} languages={languages} borders={borders} />
                        )
                        : (
                            <div>No data available</div>
                        )}
            </div>
        </>

    )
}

export default MainCard