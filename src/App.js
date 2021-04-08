import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Link to='/'>home</Link>
          <Link to='/login'>login</Link>
          <Link to='/profile'>profile</Link>
        </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
