import React, {FC, useEffect} from "react";
import Card from "./Card";
import style from './AppointmentCards.module.scss'
import {DayType} from "../../redux/reducers/types";


const AppointmentCards : FC<{getAppointment : () => void, appointments : DayType[]}> = ({getAppointment,appointments }) => {
    debugger
    useEffect(() => {
        getAppointment()
    }, [])

    console.log(appointments)

    return (
        <div className={style.appointmentCard}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default AppointmentCards