import { FC } from "react";
import style from "./openCard.module.scss"
import flag from '../../../assets/flag.png'


// interface IProps {
//     name: string,
//     population: number,
//     region: string,
//     capital: string[],
//     flag: string
// }

const OpenCard: FC = () => {
    return (
        <div className={style.card}>
            <button className={style.button_img}>Back</button>
            <div className={style.card_inner}>
                <img src={flag} />
                <div className={style.information}>
                    <div className={style.country_name}>Belgium</div>
                    <div className={style.detailed}>
                        <p>Native Name: <span>Belgie</span></p>
                        <p>Population: <span>11,319,511</span></p>
                        <p>Region: <span>Europe</span></p>
                        <p>Sub Region: <span>Western Europe</span></p>
                        <p>Capital: <span>Brussles</span></p>
                        <p>Top Level Domain: <span>.be</span></p>
                        <p>Currencies: <span>Euro</span></p>
                        <p>Languages: <span>Dutch, French, German</span></p>
                    </div>
                    <div className={style.border}>
                        <p>Border Countries:</p>
                        <div className={style.border_btns}>
                            <button className={style.card_button}>France</button>
                            <button className={style.card_button}>Germany</button>
                            <button className={style.card_button}>Netherlands</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenCard