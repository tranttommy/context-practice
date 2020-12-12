import * as ACTION from './constants'

export const increment = () => ({
  type: ACTION.INCREMENT,
})

export const decrement = () => ({
  type: ACTION.DECREMENT,
})

export const setInterval = (interval) => ({
  type: ACTION.SET_INTERVAL,
  payload: interval,
})

export const reset = () => ({
  type: ACTION.RESET
})
