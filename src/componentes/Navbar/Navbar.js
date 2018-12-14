import React from 'react'
import { connect } from 'react-redux'
import { deslogaUsuario, resetWallet} from '../../redux/actions'
import { Link, withRouter } from 'react-router-dom'
import Menu from '../Menu/Menu'
import logo from './logo.jpeg'
import './Navbar.css'


function Navbar(props) {
  return (
    <header className="navbar">
      <Link to="/">
        <img className="navbar__logo" src={logo} alt="Logo" />
      </Link>
      
      <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} reset={props.resetWallet} />      
      

    </header>
  )
}

export default withRouter(
  connect(
    (state) => ({ usuario: state.usuario }),
    { deslogaUsuario, resetWallet}
  )(Navbar)
)