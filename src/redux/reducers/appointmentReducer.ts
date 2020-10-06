import {DayType} from "../../components/new-calendar/table/TableContainer";

type InitialStateType = {
    appointments : DayType[]
}

const initialState : InitialStateType = {
    appointments : []
}

type ActionsType<T> = T extends {[key:string] : (...args : any) => infer U } ? U : never
const actionCreators = {
    addNewDayWithAppointments : (day : DayType) => {return {type: "ADD_NEW_DAY_WITH_APPOINTMENTS", day : {...day}}}
}

export const appointmentReducer = (state : InitialStateType = initialState, action : ActionsType<typeof actionCreators>) : InitialStateType => {
    switch (action.type) {
        case "ADD_NEW_DAY_WITH_APPOINTMENTS": {
            return {...state, appointments : [...state.appointments, action.day]}
        }
        default : return state
    }
}

