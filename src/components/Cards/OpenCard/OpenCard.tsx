import { FC, memo } from "react";
import style from "./openCard.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { fetchCountry } from "../../../redux/slices/dataSlice";
import OpenCardInformation from "./OpenCardInformation";
import OpenCardHeader from "./OpenCardHeader";

const OpenCard: FC = () => {
    const { darkMode, loading, country } = useAppSelector((state) => state.data);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onFetchCountry = (name: string) => {
        dispatch(fetchCountry(name));
    };

    const onNavigateBack = () => {
        navigate(-1);
    };

    return (
        <div className={style.opencard}>
            <OpenCardHeader darkMode={darkMode} onNavigateBack={onNavigateBack} />
            {loading ? (
                <div>Loading...</div>
            ) : country.length > 0 ? (
                <OpenCardInformation fetchCountry={onFetchCountry} />
            ) : (
                <div>No data available</div>
            )}

        </div>
    );
};

export default memo(OpenCard);
