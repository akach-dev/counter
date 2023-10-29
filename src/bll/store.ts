import {combineReducers, legacy_createStore as createStore} from "redux";
import {maxValueReducer} from "./maxValueReducer";
import {countReducer} from "./countReducer";
import {loadState, saveState} from "../utils/localStorage-utils";


export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  counter: countReducer,
  maxStateValue: maxValueReducer
})

export const store = createStore(rootReducer, loadState())
// store.subscribe(() => {
//   // localStorage.setItem('count', JSON.stringify(store.getState().counter.count))
//   // localStorage.setItem('maxValue', JSON.stringify(store.getState().maxStateValue.maxValue))
//   localStorage.setItem('app-state', JSON.stringify(store.getState()))
// })


store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
    maxStateValue: store.getState().maxStateValue,
  })
})