export default function CounterControls({ increment, decrement, setInterval, interval, reset }) {
  console.log('CounterControls render')
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <br />
      Set Increment Interval{' '}
      <input type="range" min={1} max={10} value={interval} onChange={setInterval} />
      {interval}
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}
