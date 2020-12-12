import CounterControlsContainer from '../containers/CounterControlsContainer'
import CounterDisplayContainer from '../containers/CounterDisplayContainer'

export default function CounterPage() {
  return (
    <>
      <h1>Counter</h1>
      <CounterDisplayContainer />
      <CounterControlsContainer />
    </>
  )
}
