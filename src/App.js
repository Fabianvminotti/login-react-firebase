import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Menu from './componentes/Menu'
import Login from './componentes/Login'
import Inicio from './componentes/Inicio'
import Admin from './componentes/Admin'
import Agendar from './componentes/Agendar'



function App() {
  return (
    <div className="container">
      <Router>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Inicio}></Route>
          <Route path='/admin' component={Admin}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/agendar' component={Agendar}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
