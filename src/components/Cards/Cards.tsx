import { FC } from "react";
import Card from "./Card/Card";
import style from "./cards.module.scss"

const Cards: FC = () => {
    return (
        <div className={`${style.cards}`}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default Cards