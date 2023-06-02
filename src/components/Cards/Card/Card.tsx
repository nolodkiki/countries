import { FC } from "react";
import style from "./card.module.scss"
import { useAppDispatch, useAppSelector } from "../../../hook";
import { fetchCountry } from "../../../redux/slices/dataSlice";
import { Link, useNavigate } from 'react-router-dom'
import Skeleton from "../../Sceleton/Skeleton";



interface IProps {
    name: string,
    population: number,
    region: string,
    capital?: string[],
    flag: string
}

const Card: FC<IProps> = ({ name, population, region, capital, flag }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { loading } = useAppSelector(state => state.data)

    const handleClick = () => {
        // dispatch(fetchCountry(name));
        // navigate(`/countries/${encodeURIComponent(name)}`);
    };





    return (
        <Link to={`/countries/${encodeURIComponent(name)}`} onClick={handleClick} className={style.card}>
            <div className={style.card_flag}>
                <img src={flag} alt="flag" />
            </div>
            <div className={style.info}>
                <div className={style.info_country}>
                    {name}
                </div>
                <div className={style.info_details}>
                    Population: <span>{population}</span>
                </div>
                <div className={style.info_details}>
                    Region: <span>{region}</span>
                </div>
                <div className={style.info_details}>
                    Capital: <span>{capital}</span>
                </div>
            </div>
        </Link>

    )
}

export default Card