// Third party
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// Project
import Home from './containers/home'
import ArtistDetail from './containers/artist-detail'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/artist/:id/detail' exact component={ArtistDetail} />
      </Switch>
    </BrowserRouter>
  )
}