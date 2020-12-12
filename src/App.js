import { ContextProvider } from './context'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import CounterPage from './pages/CounterPage'
// import HomePage from './pages/HomePage'
import { routes } from './routes'

export default function App() {
  console.log('App render')
  return (
    <ContextProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.name} {...route} />
          ))}
        </Switch>
      </Router>
    </ContextProvider>
  )
}
