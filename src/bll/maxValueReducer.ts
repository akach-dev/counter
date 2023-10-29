const initialState = {
  maxValue: 5
}
export const maxValueReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "SET-MAX-VALUE":
      return {
        ...state, maxValue: action.value
      }
    default :
      return state
  }
}

// AC
export const setMaxValueAC = (value: number) => ({type: 'SET-MAX-VALUE', value} as const)

//types
type InitialStateType = typeof initialState
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>

type ActionType = SetMaxValueActionType