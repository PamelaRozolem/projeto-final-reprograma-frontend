import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './componentes/Navbar/Navbar'
import Dashboard from './paginas/Dashboard/Dashboard'
import HomePagina from './paginas/HomePagina/HomePagina'
import Sobre from './paginas/Sobre/Sobre'
import Registre from './paginas/Registre/Registre'
import Login from './paginas/Login/Login'
import ForgotPassword from './paginas/ForgotPassword/ForgotPassword'
import ResetSenha from './paginas/ResetSenha/ResetSenha'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import './index.css'
import ConfirmarNovoUsuario from './paginas/ConfirmarNovoUsuario/ConfirmarNovoUsuario';

function App() {
  return (
    <div className="app">
      <Navbar />

      <Switch>
        <Route path="/" exact component={HomePagina} />
        <Route path="/login" component={Login}/>
        <Route path="/confirm/:hash" component={ConfirmarNovoUsuario}/>
        <Route path="/forgot-password" component={ForgotPassword}/>
        <Route path="/reset-senha/:hash" component={ResetSenha}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/registre" component={Registre}/>
        <Route path="/Sobre" component={Sobre} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('projeto')
)
