import {DayType} from "../redux/reducers/types";

const obj : DayType = {
    dayDate : new Date(),
    isAppointment : true,
    appointmentsInfo : {
        time : '15:30',
        address : 'СПБ ГБУЗ "Городская поликлиника №25, пр. Солидарности", д. 1, к. 1, лит. А',
        date : "Понедельник 15.06.20",
        doctorInfo : {
            avatar : 'https://www.flaticon.com/svg/static/icons/svg/1869/1869354.svg',
            name : 'Малушко Т. Н.',
            position : 'Хирургия'
        }
    }
}

class Server {
    protected obj : DayType[] = []
    constructor(obj : DayType) {
        this.obj.push(obj)
    }

     getObj() : Promise<DayType[]> {
        let resp : DayType[] = []
        const prom = new Promise<DayType[]>(resolve => {
            setTimeout(() => {
                resolve(this.obj)
            }, 2000)
        })

        return  prom.then((response : DayType[]) => {
            resp = response
            return resp
        })

    }
}

const api = new Server(obj)

export const getAppointmentInfo = () : Promise<DayType[]> => {
    return api.getObj()
}