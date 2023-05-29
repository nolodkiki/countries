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

    const { searchCountry, countries, loading } = useAppSelector(state => state.data);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.trim().toLowerCase();
        setSearchText(text);
        dispatch(search(text));
    };

    const dataToRender = searchCountry.length > 0 || searchText ? searchCountry : countries;
    const renderCards = dataToRender.map(({ name, population, region, capital, flag }) => (
        <Card key={name} name={name} population={population} region={region} capital={capital} flag={flag} />
    ));

    const skeletonCards = Array.from({ length: 8 }, (_, id) => <Skeleton key={id} />);

    return (
        <>
            <Navbar value={searchText} handleSearch={handleSearch} />
            <div className={`${style.cards}`}>
                {loading ? skeletonCards : renderCards}
            </div>
        </>
    );
};

export default Cards;
