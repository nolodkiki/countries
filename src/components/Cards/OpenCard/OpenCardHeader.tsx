import { FC, memo } from "react";
import style from "./openCard.module.scss";
import whiteArrow from "../../../assets/icons/lightLeftArrow.png";
import blackArrow from "../../../assets/icons/darkLeftArrow.png";

interface IProps {
    darkMode: boolean
    onNavigateBack: () => void
}

const OpenCardHeader: FC<IProps> = memo(({ darkMode, onNavigateBack }) => {
    return (
        <button onClick={onNavigateBack} className={style.button_img}><img src={darkMode ? whiteArrow : blackArrow} /><h1>Back</h1></button>
    )
})

export default OpenCardHeader