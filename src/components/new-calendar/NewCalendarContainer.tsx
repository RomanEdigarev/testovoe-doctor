import React, {FC, useState} from "react";
import style from './NewCalendarContainer.module.css'
import CalendarHeader from "./calendar-header/CalendarHeader";
import MonthTitle from "./calendar-header/MonthTitle";
import TableContainer, {DayType} from "./table/TableContainer";
import {addMonths, subMonths} from "date-fns";
import {connect} from "react-redux";
import {AppState} from "../../redux/reduxStore";

const NewCalendar : FC<MapStateToPropsType> = ({appointments}) => {

    const [currentMonth, setCurrentMonth] = useState<Date>(new Date())

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
            <TableContainer currentMonth={currentMonth} appointments={appointments}/>
        </div>
    )
}

type MapStateToPropsType = {appointments : DayType[]}
const mapStateToProps = (state : AppState) : MapStateToPropsType => {
    return {appointments : state.appointmentReducer.appointments}
}
const NewCalendarContainer = connect<MapStateToPropsType, unknown, unknown, AppState>(mapStateToProps, null)(NewCalendar)

export default NewCalendarContainer;