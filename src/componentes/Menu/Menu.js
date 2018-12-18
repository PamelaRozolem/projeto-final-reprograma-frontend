import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { aberto: false }
  }

  abreOuFechaMenu = () => {
    if (this.state.aberto) {
      this.setState({ aberto: false })
    } else {
      this.setState({ aberto: true })
    }
  }

  sair = () => {
    this.abreOuFechaMenu()
    this.props.reset();
    this.props.deslogaUsuario();


  }
  
  render() {
    let classesDoBotao = 'navbar-menu__botao'
    let classesDasOpcoes = 'navbar-menu__opcoes'

    if (this.state.aberto) {
      classesDoBotao += ' navbar-menu__botao--aberto'
      classesDasOpcoes += ' navbar-menu__opcoes--aberto'
    }

    return (
      <nav className="navbar-menu">
        <button className={classesDoBotao} onClick={this.abreOuFechaMenu}>
          Menu
        </button>
        { !this.props.usuario ? (
          <ul className={classesDasOpcoes}>
         
            <li>
              <NavLink to="/" onClick={this.abreOuFechaMenu}>
                <span className="fas fa-home"></span> PÁGINA INICIAL
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre"  onClick={this.abreOuFechaMenu}>
                <span className="fas fa-book-open"></span> Sobre
              </NavLink>
            </li>
              <li>
                <NavLink to="/login" onClick={this.abreOuFechaMenu}>
                  <span className="fas fa-user"></span> Acessar
                </NavLink>
              </li>
            
              <li>
                <NavLink to="/registre" className="navbar-menu__opcoes--orange" onClick={this.abreOuFechaMenu}>
                <span className="fas fa-jedi"></span> Registre-se
                </NavLink>
              </li>
          </ul>
           ): (
            <ul className="ul-Logout">
              <li>
                <NavLink to="/login" className="navbar-logout" onClick={this.sair}>
                  <span className="texto-sair far fa-2x fa-user-circle" ></span> Sair
                </NavLink>
               </li>
            </ul>
           )}
      </nav>
    )
  }
}

export default Menu;
