import { FC, memo } from "react";
import style from "./openCard.module.scss"
import { useAppDispatch, useAppSelector } from "../../../hook";
import { Link } from "react-router-dom";



interface IProps {
    fetchCountry: (border: string) => void;
}

const OpenCardInformation: FC<IProps> = memo(({ fetchCountry }) => {
    const { nativeName, population, region, subregion, capital, tld, currencies, languages, borders, flag, name } = useAppSelector(state => state.data.country[0] || {});



    const renderBorders = borders ? borders.map(item => (
        <Link to={`/countries/${encodeURIComponent(item)}`} onClick={() => fetchCountry(item)} className={style.card_button_borders}>{item}</Link>
    )) : [];

    return (
        <div className={`${style.card_inner}`}>
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
                <div className={style.border}>
                    <p>Border Countries:</p>
                    <div className={style.border_btns}>
                        {renderBorders}
                    </div>
                </div>
            </div>
        </div>
    )
});

export default OpenCardInformation