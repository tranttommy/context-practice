import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from './routes'

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.name} {...route} />
        ))}
      </Switch>
    </Router>
  )
}
