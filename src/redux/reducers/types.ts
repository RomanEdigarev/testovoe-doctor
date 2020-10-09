export type DayType = {
    dayDate: Date
    isAppointment: boolean
    appointmentsInfo? : AppointmentInfo
}

export type AppointmentInfo = {
    date : string
    time : string
    address : string
    doctorInfo : {
        name : string
        position : string
        avatar : string | undefined
    }
}

