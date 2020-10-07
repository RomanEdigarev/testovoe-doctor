import React, {FC} from "react";
import style from './CalendarHeader.module.css'

const CalendarHeader : FC = (props) => {



    return (
        <div className={style.calendarHeader}>
            {props.children}
        </div>
    )
}

export default CalendarHeader