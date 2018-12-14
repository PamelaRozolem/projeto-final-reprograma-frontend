import React, { Component } from 'react';
import { connect } from 'react-redux';
import { confirmEmail } from '../../redux/actions';
import { Redirect } from 'react-router-dom'

import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda';
import Campo from '../../componentes/Campo/Campo';
import Menssagem from '../../componentes/Menssagem/Menssagem';

import './ConfirmarNovoUsuario.css';



class ConfirmarNovoUsuario extends Component {
    constructor(props) {
      super(props);
        this.enviaDados(this.props.match.params.hash)
    }


    status = (message) => {
      
        switch(message.status){
          case 200:
              return <Redirect to="/login" />
          break;
          case 400:
            return <Menssagem text={message.message} />
          break;
        }
      }


    enviaDados = (hash)=>{
        this.props.confirmEmail(hash);
    }

    render(){

   

        return(
        <main className="confirmar-novo-usuario">
            <h1>Confirmação de Registro</h1>
            {
                this.status(this.props.statusEmail)
            }
        </main>
        )
    }    
};

export default connect(
    (store) =>({statusEmail: store.confirmarEmailNovoUsuario }), 
    { confirmEmail }
  )(ConfirmarNovoUsuario)