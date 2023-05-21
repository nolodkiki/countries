import { FC, useState } from "react";
import Card from "./Card/Card";
import style from "./cards.module.scss";
import { search } from "../../redux/slices/dataSlice";
import { useAppDispatch, useAppSelector } from "../../hook";
import Navbar from "../Navbar/Navbar";
import Skeleton from "../Sceleton/Skeleton";

const Cards: FC = () => {
    const dispatch = useAppDispatch();
    const [searchText, setSearchText] = useState<string>("");

    const state = useAppSelector((state) =>
        state.data.searchCountry.length > 0 || state.data.searchValue
            ? state.data.searchCountry
            : state.data.countries
    );

    const loading = useAppSelector((state) => state.data.loading);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.trim().toLowerCase();
        setSearchText(text);
        dispatch(search(text));
    };

    const renderCards = state.map(({ name, population, region, capital, flag }) => (
        <Card
            key={name}
            name={name}
            population={population}
            region={region}
            capital={capital}
            flag={flag}
        />
    ));

    return (
        <>
            <Navbar value={searchText} handleSearch={handleSearch} />
            {loading ? (
                [...new Array(8)].map((_, id) => <Skeleton key={id} />)
            ) : (
                <div className={`${style.cards}`}>{renderCards}</div>
            )}
        </>
    );
};

export default Cards;
