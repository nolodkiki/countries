import { FC, memo } from "react";
import style from "./openCard.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { fetchCountry } from "../../../redux/slices/dataSlice";
import OpenCardInformation from "./OpenCardInformation";
import OpenCardHeader from "./OpenCardHeader";

const OpenCard: FC = () => {
    const { darkMode } = useAppSelector((state) => state.data);
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
            <OpenCardInformation fetchCountry={onFetchCountry} />
        </div>
    );
};

export default memo(OpenCard);
