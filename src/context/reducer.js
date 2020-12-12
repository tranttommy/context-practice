import { ACTION } from './actions'

export default function contextReducer(state, action) {
  switch(action.type) {
    case ACTION.INCREMENT:
      return {
        ...state,
        count: state.count + state.interval
      }
    case ACTION.DECREMENT:
      return {
        ...state,
        count: state.count - state.interval
      }
    case ACTION.SET_INTERVAL:
      return {
        ...state,
        interval: action.payload
      }
    default:
      throw new Error(`No handler for action type '${action.type}'`)
  }
}
