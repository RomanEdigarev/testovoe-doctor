import React, {FC, ReactElement, useEffect} from "react";
import Card from "./Card";
import style from './AppointmentCards.module.scss'
import {AppointmentInfo, DayType} from "../../redux/reducers/types";

type PropsType = {
    getAppointment : () => void,
    appointments : DayType[],
    isLoad : boolean
}
const AppointmentCards : FC<PropsType> = ({getAppointment,appointments, isLoad }) => {

    useEffect(() => {
        getAppointment()
    }, [])

    if(!isLoad) {
        return <div>Loading</div>
    }

    return (
        <div className={style.appointmentCard}>
            {appointments.map((day : DayType) : ReactElement<AppointmentInfo>=> {
                const {date, time,address,doctorInfo} = day.appointmentsInfo!
                return (
                    <Card date={date} time={time} address={address} doctorInfo={doctorInfo} key={time}/>
                )
            })}
        </div>
    )
}
export default AppointmentCards