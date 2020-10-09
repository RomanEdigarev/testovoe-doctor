import React, {FC, ReactElement, useEffect} from "react";
import Card from "./Card";
import style from './AppointmentCards.module.scss'
import {AppointmentInfo, DayType} from "../../redux/reducers/types";
import {Link} from "react-router-dom";

type PropsType = {
    getAppointment: () => void,
    appointments: DayType[],
    isLoad: boolean
    isRow: boolean
}
const AppointmentCards: FC<PropsType> = ({getAppointment, appointments, isLoad, isRow}) => {

    useEffect(() => {
        getAppointment()
    }, [])

    if (!isLoad) {
        return <div>Loading</div>
    }

    return (
        <div className={`${style.appointmentCard} ${isRow ? style.row : style.column}`}>
            {
                isRow ? appointments.slice(0, 2).map(day => {
                    const {time, date, address, doctorInfo} = day.appointmentsInfo!
                    return (
                        <Card date={date} time={time} address={address} doctorInfo={doctorInfo} key={time}/>
                    )
                }) : appointments.map(day => {
                    const {time, date, address, doctorInfo} = day.appointmentsInfo!
                    return (
                        <Card date={date} time={time} address={address} doctorInfo={doctorInfo} key={time}/>
                    )
                })
            }
            {
                isRow ?
                    <div className={style.more}>
                        Еще {`${appointments.length - 2}`} записи
                        <Link to={'/appointments'}>Подробнее</Link>
                    </div> :
                    null
            }
        </div>
    )
}
export default AppointmentCards