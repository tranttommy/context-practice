import { useSelector } from 'react-redux'
import CounterDisplay from '../components/CounterDisplay'

export default function CounterDisplayContainer() {
  const count = useSelector(state => state.count)

  return <CounterDisplay count={count}/>
}
