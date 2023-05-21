import { FC, memo } from "react";
import style from "./openCard.module.scss"
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from "../../../hook";



interface IProps {
    name: string,
    nativeName: string,
    population: number,
    region: string,
    capital: string[],
    flag: string,
    subregion: string[],
    tld?: string[],
    currencies: string,
    languages: string[],
    borders: string[]
}

const OpenCard: FC<IProps> = memo(({ name, nativeName, population, region, capital, flag, subregion, tld, currencies, languages, borders }) => {
    const mode = useAppSelector(state => state.data.darkMode)
    const navigate = useNavigate()

    const addSpace = (elem: string[] | undefined): string[] => (
        elem ? elem.map(item => `${item} `) : []
    )



    return (
        <div className={`${style.opencard} ${mode ? 'theme-dark' : ''}`}>
            <h1><button onClick={() => navigate(-1)} className={style.button_img}>Back</button></h1>

            <div className={`${style.card_inner}  `}>
                <img src={flag} />
                <div className={style.information}>
                    <div className={style.country_name}>{name}</div>
                    <div className={style.detailed}>
                        <p>Native Name: <span>{nativeName}</span></p>
                        <p>Population: <span>{population}</span></p>
                        <p>Region: <span>{region}</span></p>
                        <p>Sub Region: <span>{subregion}</span></p>
                        <p>Capital: <span>{capital}</span></p>
                        <p>Top Level Domain: <span>{tld?.join(', ')}</span></p>
                        <p>Currencies: <span>{currencies}</span></p>
                        <p>Languages: <span>{languages.join(', ')}</span></p>
                    </div>
                    {/* <div className={style.border}>
                        <p>Border Countries:</p>
                        <div className={style.border_btns}>
                            <button className={style.card_button}>France</button>
                            <button className={style.card_button}>Germany</button>
                            <button className={style.card_button}>Netherlands</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
})

export default OpenCard