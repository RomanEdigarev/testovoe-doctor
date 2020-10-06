import React, {FC, useState} from "react";
import style from './NewCalendarContainer.module.css'
import CalendarHeader from "./calendar-header/CalendarHeader";
import MonthTitle from "./calendar-header/MonthTitle";
import TableContainer from "./table/TableContainer";
import {addMonths, subMonths} from "date-fns";

const NewCalendarContainer : FC = () => {

    const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    const nextMonth = () => {
        setCurrentMonth(() : Date => {
            return addMonths(currentMonth, 1)
        })
    }
    const prevMonth = () => {
        setCurrentMonth((): Date => {
            return subMonths(currentMonth, 1)
        })
    }

    return (
        <div className={style.calendarContainer}>
             <CalendarHeader>
                 <MonthTitle goToNextMonth={nextMonth} goToPrevMonth={prevMonth} currentMonth={currentMonth}/>
             </CalendarHeader>
            <TableContainer currentMonth={currentMonth} />
        </div>
    )
}

export default NewCalendarContainer;