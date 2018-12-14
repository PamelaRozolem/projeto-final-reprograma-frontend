import React from 'react'
import './HomePagina.css'
import { Link } from 'react-router-dom';


function HomePagina() {
  return (
    <main className="home-pagina banner">
      <div className="card">
        <h1>Control Your Future Wealth.</h1>
        <p>All-in-one wallet to secure, manage and exchange blockchain assets</p>
        <Link className="link-registre" to="/registre"><span class="fas fa-jedi"></span>  Registre-se</Link> 
        <Link className="link-acesse" to="/login"> <span class="fas fa-user"></span> Acesse</Link>
      </div>
    </main>
  )
}

export default HomePagina