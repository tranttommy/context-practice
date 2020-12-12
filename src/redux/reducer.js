import * as ACTION from './constants'

const initialState = {
  count: 0,
  interval: 1,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return {
        ...state,
        count: state.count + state.interval,
      }
    case ACTION.DECREMENT:
      return {
        ...state,
        count: state.count - state.interval,
      }
    case ACTION.SET_INTERVAL:
      return {
        ...state,
        interval: action.payload,
      }
    case ACTION.RESET:
      return {
        ...initialState,
      }
    default:
      console.warn(`No handler for action type: "${action.type}"`)
      return state
  }
}
