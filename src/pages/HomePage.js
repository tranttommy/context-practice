import { Link } from 'react-router-dom'
import { routes } from '../routes'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        {routes.map(({ path, name }) => (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
