import React, {FC, useState} from "react";
import style from './MonthTitle.module.css'
import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";
import {addMonths, format, subMonths} from 'date-fns';
import {ru} from "date-fns/locale";

type PropsType = {
    goToPrevMonth: () => void
    goToNextMonth: () => void
    currentMonth: Date
}

const MonthTitle: FC<PropsType> = ({goToNextMonth, goToPrevMonth, currentMonth}) => {

    const dateFormat = 'LLLL yyyy'

    return (
        <div className={style.monthTitleContainer}>
            <BackBtn goToPrevMonth={goToPrevMonth}/>
            <div className={style.monthTitle}>{format(currentMonth, dateFormat, {locale: ru})}</div>
            <NextBtn goToNextMonth={goToNextMonth}/>
        </div>
    )
}

export default MonthTitle;