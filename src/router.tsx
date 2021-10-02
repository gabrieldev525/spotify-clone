// Third party
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// Project
import Home from './containers/home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}