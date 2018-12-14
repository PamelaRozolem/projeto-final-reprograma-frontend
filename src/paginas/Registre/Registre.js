import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cadastrarUsuario } from '../../redux/actions';

import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda';
import Campo from '../../componentes/Campo/Campo';
import Menssagem from '../../componentes/Menssagem/Menssagem';

import './Registre.css';



class Registre extends Component {
    constructor(props) {
      super(props)
  
      this.nomeRef = React.createRef();
      this.emailRef = React.createRef();
      this.senhaRef = React.createRef();
      this.confirmarSenhaRef = React.createRef(); 
  
      this.state = { desabilitado: true };
    }


    habilitaDesabilita = ()=>{
        const nome = this.nomeRef.current;
        const email = this.emailRef.current;
        const senha = this.senhaRef.current;
        const confirmaSenha = this.confirmarSenhaRef.current;

        if(nome.temErro()|| email.temErro()|| senha.temErro()|| confirmaSenha.temErro() && senha.getValor() !== confirmaSenha.getValor()){
            this.setState({desabilitado:true});
        }else{
            this.setState({desabilitado:false});
        }
    }

    enviaDados = (evento)=>{
        evento.preventDefault();

        const campoNome = this.nomeRef.current;
        const campoEmail = this.emailRef.current;
        const campoSenha = this.senhaRef.current;

        const dados = {
            email: campoEmail.getValor(),
            name: campoNome.getValor(),
            password:  campoSenha.getValor(),
        };

        this.props.cadastrarUsuario(dados);
    }

    status = (message) => {
        switch(message.status){
          case 200:
            return <Menssagem text={message.message} />
          break;
          case 400:
            return <Menssagem text={message.message} />
          break;
        }
      }

    render(){

        return(
        <main className="registre">
            <h1>Registre-se</h1>
            <p>Envie o formulário para criar uma conta!</p>
            {
                this.status(this.props.statusCadastro)
            }
            <form onSubmit = {this.enviaDados}>
                <Legenda htmlFor="nome">Nome:</Legenda>
                <Campo ref={this.nomeRef} id="nome" type="text" name="nome" placeholder="Nome" required minLength={10} onChange={this.habilitaDesabilita} />
            
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
    (state) => ({ statusCadastro: state.cadastrarUsuario }), 
    { cadastrarUsuario }
  )(Registre)