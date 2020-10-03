import React from "react";
import style from './Calendar.module.css'
import {format} from 'date-fns'
import {ru} from 'date-fns/locale'

type StateType = {
    currentDate: Date
    selectedDate: Date
}

const Calendar = () => {
        

    const state: StateType = {
        currentDate: new Date(),
        selectedDate: new Date()
    }

    const nextMonth = () => {


    }

    const prevMonth = () => {

    }

    const renderHeader = () => {
        const dateFormat = 'MMMM'

        return (
            <div className={`${style.header} ${style.row} flex-middle`}>

                <div className={`${style.col} ${style.col_start}`}>
                    <div className={style.icon} onClick={prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className={`${style.col} ${style.col_center}`}>
                    <span>
                      {format(state.currentDate, dateFormat, {locale : ru})}
                    </span>
                </div>
                <div className={`${style.col} ${style.col_end}`} onClick={nextMonth}>
                    <div className={style.icon}>chevron_right</div>
                </div>

            </div>
        )

    }

    const renderDays = () => {

    }

    const renderCells = () => {

    }

    const onDateClick = (day: any) => {

    }


    return (
        <div className={style.calendar}>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    )
}
export default Calendar