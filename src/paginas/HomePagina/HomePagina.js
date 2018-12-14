import React from 'react'
import './HomePagina.css'
import { Link } from 'react-router-dom';


function HomePagina() {
  return (
    <main className="home-pagina banner">
      <div className="card">
        <h1>Especializados em gerencia.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Morbi sed est faucibus, imperdiet nibh non, vulputate orci. 
        </p>
        <Link className="link-registre" to="/registre"><span class="fas fa-jedi"></span>  Registre-se</Link> 
        <Link className="link-acesse" to="/login"> <span class="fas fa-user"></span> Acesse</Link>
      </div>
    </main>
  )
}

export default HomePagina