import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../../redux/actions';

import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda';
import Campo from '../../componentes/Campo/Campo';
import Menssagem from '../../componentes/Menssagem/Menssagem';

import './ForgotPassword.css';

class ForgotPassword extends Component {
    constructor(props) {
      super(props)

      this.emailRef = React.createRef();

      this.state = { desabilitado: true };
    }

   
    habilitaDesabilita = ()=>{
    const email = this.emailRef.current;

    if(email.temErro()){
        this.setState({desabilitado:true});
    }else{
        this.setState({desabilitado:false});
        }
    };


    enviaDados = (evento)=>{
        evento.preventDefault();

        const campoEmail = this.emailRef.current;
      
        const dados = {
            email: campoEmail.getValor(),
        };

        this.props.forgotPassword(dados);
    }

    render(){
        const {message} = this.props;

        return(
        <main className="Forgot-Password">
            <h1>Autenticação de e-mail</h1>
            
            { message &&
                <Menssagem text={message} />
            }

            <form onSubmit = {this.enviaDados}>    
                <Legenda htmlFor="email">Email:</Legenda>
                <Campo ref={this.emailRef} id="email" type="email" name="email" placeholder="Email" required onChange={this.habilitaDesabilita} />
            
                <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
            </form>
           
        </main>
        )
    }    
};


export default connect( 
    (store) => 
    ({ message: store.forgotPassword.message}),
    {forgotPassword})
(ForgotPassword);