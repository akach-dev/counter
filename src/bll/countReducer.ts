const initialState = {
  count: 0
}

export const countReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "SET-COUNT":
      return {
        ...state, count: action.value
      }
    case "INCREMENT":
      return {
        ...state, count: state.count + 1
      }
    case "RESET":
      return {
        ...state, count: 0
      }
    default:
      return state
  }
}


// actionCreators
export const incrementAC = () => ({type: 'INCREMENT'} as const)
export const resetAC = () => ({type: 'RESET'} as const)
export const setContToLocalStorageAC = (value: number) => ({type: 'SET-COUNT', value} as const)

// types
type ActionType = IncrementActionType | ResetActionType | SetContToLocalStorageActionType

export type InitialStateType = typeof initialState
export type IncrementActionType = ReturnType<typeof incrementAC>
export type ResetActionType = ReturnType<typeof resetAC>
export type SetContToLocalStorageActionType = ReturnType<typeof setContToLocalStorageAC>

