import { FC } from "react";
import style from "./card.module.scss"
import flag from "../../../assets/flag.png"

const Card: FC = () => {
    return (
        <div className={style.card}>
            <div className={style.flag}>
                <img src={flag} alt="flag" />
            </div>
            <div className={style.info}>
                <div className={style.info_country}>
                    South Korea
                </div>
                <div className={style.info_details}>
                    Population: <span>70,000,000</span>
                </div>
                <div className={style.info_details}>
                    Region: <span>Asia</span>
                </div>
                <div className={style.info_details}>
                    Capital: <span>Seoul</span>
                </div>
            </div>
        </div>
    )
}

export default Card