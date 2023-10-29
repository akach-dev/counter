import {combineReducers, legacy_createStore as createStore} from "redux";
import {maxValueReducer} from "./maxValueReducer";
import {countReducer} from "./countReducer";


const rootReducer = combineReducers({
  counter: countReducer,
  maxStateValue: maxValueReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

