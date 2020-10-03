import React, {FC} from "react";
import CalendarHeader from "./CalendarHeader";
import MonthTitle from "./MonthTitle";
import style from './NewCalendarContainer.module.css'

const NewCalendarContainer : FC = () => {

    return (
        <div className={style.calendarContainer}>
             <CalendarHeader>
                 <MonthTitle/>
             </CalendarHeader>
        </div>
    )
}

export default NewCalendarContainer;