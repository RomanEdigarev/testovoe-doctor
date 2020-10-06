import React, {FC} from "react";
import style from './Row.module.css'
import {addDays, format, startOfWeek} from "date-fns";
import {ru} from "date-fns/locale";

type PropsType = {
    currentMonth: Date
}
const Row: FC<PropsType> = ({currentMonth}) => {

    const dateFormat = 'cccccc'
    const days = []

    let startDate = startOfWeek(currentMonth)

    for (let i = 0; i < 7; i++) {
        days.push(
            <div key={i} className={style.row__cell}>{format(addDays(startDate, i + 1), dateFormat, {locale: ru})}</div>
        )
    }

    return (
        <div className={style.row}>
            {days}
        </div>
    )
}
export default Row;