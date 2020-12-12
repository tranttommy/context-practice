export const ACTION = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SET_INTERVAL: 'SET_INTERVAL',
}

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

