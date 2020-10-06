import React, {FC} from "react";
import style from './Row.module.css'

const Row : FC = () => {
    return (
        <div className={style.row}>
            <div className={style.row__cell}>Пн</div>
            <div className={style.row__cell}>Вт</div>
            <div className={style.row__cell}>Ср</div>
            <div className={style.row__cell}>Чт</div>
            <div className={style.row__cell}>Пт</div>
            <div className={style.row__cell}>Сб</div>
            <div className={style.row__cell}>Вс</div>
        </div>
    )
}
export default Row;