import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {appointmentReducer} from "./reducers/appointmentReducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({appointmentReducer})
type RootReducerType = typeof rootReducer
export type AppState = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

console.log(store.getState());

export default store