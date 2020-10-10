import {DayType} from "./types";
import {ThunkType} from "../reduxStore";
import {getAppointmentInfo} from "../../api/api";

type InitialStateType = {
    appointments: DayType[]
    isLoad: boolean
}

const initialState: InitialStateType = {
    appointments: [],
    isLoad: false
}

type ActionsType<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never
const actionCreators = {
    setAppointments: (appointmentsInfo: DayType[]) => {
        return {type: 'SET_APPOINTMENTS_INFO', appointmentsInfo} as const
    },
    // addNewDayWithAppointments : (day : DayType) => {return {type: "ADD_NEW_DAY_WITH_APPOINTMENTS", day : {...day}} as const},
}

export const appointmentReducer = (state: InitialStateType = initialState, action: ActionsType<typeof actionCreators>): InitialStateType => {
    switch (action.type) {
        // case "ADD_NEW_DAY_WITH_APPOINTMENTS": {
        //     return {...state, appointments : [...state.appointments, action.day]}
        // }
        case "SET_APPOINTMENTS_INFO": {
            return {...state, appointments: [...action.appointmentsInfo], isLoad : true}
        }
        default :
            return state
    }
}

export const getAppointmentsInfo = () : ThunkType<ActionsType<typeof actionCreators>> => {
    return async (dispatch) => {
        const response = await getAppointmentInfo()
        dispatch(actionCreators.setAppointments(response))
    }
}


