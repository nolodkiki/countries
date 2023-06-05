import { FC, useState } from "react";
import Card from "./Card/Card";
import style from "./cards.module.scss";
import { search } from "../../redux/slices/dataSlice";
import { useAppDispatch, useAppSelector } from "../../hook";
import Navbar from "../Navbar/Navbar";
import Skeleton from "../Sceleton/Skeleton";

const Cards: FC = () => {
    const dispatch = useAppDispatch();

    const { searchCountry, countries, loading, searchValue } = useAppSelector(state => state.data);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.trim().toLowerCase();
        dispatch(search(text));
    };

    const dataToRender = searchCountry.length > 0 || searchValue ? searchCountry : countries;
    const renderCards = dataToRender.map(({ name, population, region, capital, flag }) => (
        <Card key={name} name={name} population={population} region={region} capital={capital} flag={flag} />
    ));
    const skeletonCards = Array.from({ length: 8 }, (_, id) => <Skeleton key={id} />);

    return (
        <>
            <Navbar handleSearch={handleSearch} />
            <div className={`${style.cards}`}>
                {loading ? skeletonCards : renderCards}
            </div>
        </>
    );
};

export default Cards;
