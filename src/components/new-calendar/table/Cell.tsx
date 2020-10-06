import React, {FC, Props} from "react";
import style from './Cell.module.css'
import {addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek, isSameDay} from "date-fns";
import {DayType} from "./TableContainer";

type PropsType = {
    daysWithAppointments : DayType[]
    currentDate : Date
    monthEnd : Date
}

const Cell: FC<PropsType> = ({daysWithAppointments, currentDate, monthEnd }) => {

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
                            <div key={day.dayDate.toDateString()} className={`${style.cell} ${style.cell__noMonthDay}`}>
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