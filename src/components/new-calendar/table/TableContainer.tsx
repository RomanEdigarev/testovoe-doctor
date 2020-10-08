import React, {FC} from "react";
import Row from "./Row";
import Cell from "./Cell";
import {addDays, endOfMonth, endOfWeek, isSameDay, startOfMonth, startOfWeek} from "date-fns";
import {DayType} from "../../../redux/reducers/types";

type PropsType = {
    currentMonth : Date
    appointments : DayType[]
}


const TableContainer : FC<PropsType> = ({currentMonth, appointments}) => {

    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)
    const currentDate = new Date();

    const days: DayType[] = [];
    let day = startDate;

    for (day; day <= endDate; day = addDays(day, 1)) {
        days.push({dayDate: day, isAppointment: false})
    }

    const daysWithAppointments: DayType[] = days.map(dayOfMonth => {
        let returnedDay : DayType= {...dayOfMonth}
        appointments.forEach(dayWithAppointments => {
                if (isSameDay(dayOfMonth.dayDate, dayWithAppointments.dayDate)) {
                    returnedDay = {...dayWithAppointments}
                }
            }
        )
        return returnedDay
    })

    return (
        <>
            <Row currentMonth={currentMonth}/>
            <Cell currentDate={currentDate} daysWithAppointments={daysWithAppointments} monthEnd={monthEnd}/>
        </>
    )
}
export default TableContainer;