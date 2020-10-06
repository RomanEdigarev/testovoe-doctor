import React, {FC} from "react";
import style from './NewCalendarContainer.module.css'
import CalendarHeader from "./calendar-header/CalendarHeader";
import MonthTitle from "./calendar-header/MonthTitle";
import TableContainer from "./table/TableContainer";

const NewCalendarContainer : FC = () => {

    return (
        <div className={style.calendarContainer}>
             <CalendarHeader>
                 <MonthTitle/>
             </CalendarHeader>
            <TableContainer/>
        </div>
    )
}

export default NewCalendarContainer;