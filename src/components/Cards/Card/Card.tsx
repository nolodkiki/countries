import { FC } from "react";
import style from "./card.module.scss"
import flag from "../../../assets/flag.png"


interface IProps {
    name: string,
    population: number,
    region: string,
    capital: string[],
}

const Card: FC<IProps> = ({ name, population, region, capital }) => {
    return (
        <div className={style.card}>
            <div className={style.flag}>
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
        </div>
    )
}

export default Card