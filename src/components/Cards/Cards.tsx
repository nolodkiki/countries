import { FC } from "react";
import Card from "./Card/Card";
import style from "./cards.module.scss"
import { test } from "../../redux/slices/dataSlice";
import { useAppDispatch } from "../../hook";

const Cards: FC = () => {
    const dispatch = useAppDispatch()
    return (
        <div className={`${style.cards}`}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <div className="testButton">
                <button onClick={() => { dispatch(test('from cards')) }}>TEST</button>
            </div>

        </div>
    )
}
export default Cards