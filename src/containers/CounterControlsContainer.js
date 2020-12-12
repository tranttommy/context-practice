import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setInterval, reset } from '../redux/actions'
import CounterControls from '../components/CounterControls'

export default function CounterControlsContainer() {
  const interval = useSelector((state) => state.interval)
  const dispatch = useDispatch()

  return (
    <CounterControls
      increment={() => dispatch(increment())}
      decrement={() => dispatch(decrement())}
      setInterval={(e) => dispatch(setInterval(Number(e.target.value)))}
      interval={interval}
      reset={() => dispatch(reset())}
    />
  )
}
