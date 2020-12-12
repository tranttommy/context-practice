import HomePage from './pages/HomePage'
import CounterPage from './pages/CounterPage'

export const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    name: 'Counter',
    path: '/counter',
    exact: false,
    component: CounterPage
  }
]
