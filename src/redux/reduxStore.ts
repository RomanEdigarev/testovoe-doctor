import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {appointmentReducer} from "./reducers/appointmentReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'

const rootReducer = combineReducers({appointmentReducer})
type RootReducerType = typeof rootReducer
export type AppState = ReturnType<RootReducerType>
export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppState, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store