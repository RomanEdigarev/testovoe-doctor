import React, {FC, Props} from "react";
import style from './Cell.module.css'
import {addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek, isSameDay} from "date-fns";

type PropsType = {
    currentMonth: Date
}
type DayType = {
    dayDate: Date
    isAppointment: boolean
}
const Cell: FC<PropsType> = ({currentMonth}) => {

    const Appointments = [{dayDate: new Date(), isAppointment: true}]

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
        Appointments.forEach(dayWithAppointments => {
                if (isSameDay(dayOfMonth.dayDate, dayWithAppointments.dayDate)) {
                    returnedDay = {...dayWithAppointments}
                }
            }
        )
        return returnedDay
    })

    return (
        <div className={style.cell__container}>
            {daysWithAppointments.map(day => {
                    if (isSameDay(day.dayDate, currentDate) || day.dayDate > currentDate && day.dayDate < monthEnd) {
                        return (
                            <div key={day.dayDate.toDateString()} className={`${style.cell}`}>
                                {format(day.dayDate, 'd')}
                                {
                                    day.isAppointment ?
                                        <div className={style.cell__sticker}>
                                            <div>15</div>
                                        </div> : null
                                }
                            </div>
                        )
                    } else {
                        return (
                            <div key={day.dayDate.toDateString()} className={`${style.cell} ${style.cell__sameDay}`}>
                                {format(day.dayDate, 'd')}
                                {
                                    day.isAppointment ?
                                        <div className={style.cell__sticker}>
                                            <div>15</div>
                                        </div> : null
                                }
                            </div>
                        )
                    }
                }
            )}
        </div>
    )
}

export default Cell