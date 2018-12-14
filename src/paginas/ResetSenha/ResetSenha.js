import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetPassword } from '../../redux/actions';

import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda';
import Campo from '../../componentes/Campo/Campo';
import Menssagem from '../../componentes/Menssagem/Menssagem';

import './ResetSenha.css';



class ResetSenha extends Component {
    constructor(props) {
      super(props)

      this.emailRef = React.createRef();
      this.senhaRef = React.createRef();
      this.confirmarSenhaRef = React.createRef();
      this.hash = this.props.match.params.hash; 

      this.state = { desabilitado: true };
    }


    habilitaDesabilita = ()=>{
        const email = this.emailRef.current;
        const senha = this.senhaRef.current;
        const confirmaSenha = this.confirmarSenhaRef.current;

        if(email.temErro()|| senha.temErro()|| confirmaSenha.temErro() && senha.getValor() !== confirmaSenha.getValor()){
            this.setState({desabilitado:true});
        }else{
            this.setState({desabilitado:false});
        }
    }

    enviaDados = (evento)=>{
        evento.preventDefault();

        const campoEmail = this.emailRef.current;
        const campoSenha = this.senhaRef.current;
        

        const dados = {
            email: campoEmail.getValor(),
            password:  campoSenha.getValor(),
            token: this.hash
        };

        this.props.resetPassword(dados);
    }

    render(){

    const{message}= this.props;

        return(
        <main className="reset-senha">
            <h1>Redefinição de senha</h1>
            {message &&
                <Menssagem text={message}/>
            }
            <form onSubmit = {this.enviaDados}>
                <Legenda htmlFor="email">Email:</Legenda>
                <Campo ref={this.emailRef} id="email" type="email" name="email" placeholder="Email" required onChange={this.habilitaDesabilita} />
                
                <Legenda htmlFor="senha">Senha:</Legenda>
                <Campo ref={this.senhaRef} id="senha" type="password" name="senha" placeholder="Senha" required minLength={6} onChange={this.habilitaDesabilita} />
                
                <Legenda htmlFor="confirmaSenha">Confirme sua senha:</Legenda>
                <Campo ref={this.confirmarSenhaRef} id="confirmaSenha" type="password" name="confirmaSenha" placeholder="confirmar senha" required minLength={6} onChange={this.habilitaDesabilita} />
                
                <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
            </form>
            <Link url="/login">Fazer login</Link>
        </main>
        )
    }    
};

export default connect(
    (store) => 
    ({message: store.resetPassword.message }), 
    { resetPassword }
  )(ResetSenha)