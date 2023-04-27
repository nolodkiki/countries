import { FC, useEffect } from "react";
import Card from "./Card/Card";
import style from "./cards.module.scss"
import { fetchData } from "../../redux/slices/dataSlice";
import { useAppDispatch, useAppSelector } from "../../hook";

const Cards: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchData('all'))
    }, [])

    const state = useAppSelector(state => state.data.countries)
    const renderCards = state.map(({ name, population, region, capital, flag }) => (
        <Card key={name} name={name} population={population} region={region} capital={capital} flag={flag} />
    ))

    return (
        <div className={`${style.cards}`}>
            {renderCards}

        </div>
    )
}
export default Cards