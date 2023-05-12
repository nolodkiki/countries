import { FC, useEffect, useState } from "react";
import Card from "./Card/Card";
import style from "./cards.module.scss"
import { fetchData, search } from "../../redux/slices/dataSlice";
import { useAppDispatch, useAppSelector } from "../../hook";
import Navbar from "../Navbar/Navbar";

const Cards: FC = () => {
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchData('all'))
    }, [dispatch])


    const [searchText, setSearchText] = useState<string>('')


    const state = useAppSelector(state => state.data.searchCountry.length > 0 || searchText ? state.data.searchCountry : state.data.countries);
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.trim().toLowerCase();
        setSearchText(text);


        dispatch(search(text));
    }


    const renderCards = state.map(({ name, population, region, capital, flag }) => (
        <Card key={name} name={name} population={population} region={region} capital={capital} flag={flag} />
    ))

    return (
        <>
            <Navbar value={searchText} handleSearch={handleSearch} />
            <div className={`${style.cards}`}>
                {renderCards}
            </div>
        </>

    )
}
export default Cards