import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logaUsuario } from '../../redux/actions';
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda';
import Campo from '../../componentes/Campo/Campo';
import Menssagem from '../../componentes/Menssagem/Menssagem';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props)

    this.emailRef = React.createRef() 
    this.senhaRef = React.createRef()
    this.state = { desabilitado: true }
  }

  enviaDados = (evento) => {
    evento.preventDefault()

    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    const dados = {
      email: campoEmail.getValor(),
      password: campoSenha.getValor()
    }

    this.props.logaUsuario(dados)
  }

  habilitaOuDesabilitaBotao = () => {
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if (campoEmail.temErro() || campoSenha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }

  status = (message) => {
    switch(message.status){
      case 200:
        return <Redirect to="/dashboard" />
      break;
      case 400:
        return <Menssagem text={message.message} />
      break;
      default:
        return <Menssagem text='Ocorreu um erro inesperado, aguarde e tente novamente!' />
    }
  }

  render() {
    return (
      <main className="login">
        <h1>Login</h1>
        <p>Entre com seu email e senha.</p>
          {this.props.usuario &&
              this.status(this.props.usuario)
          }
        <form onSubmit={this.enviaDados}>
          <Legenda htmlFor="email">Email:</Legenda>
          <Campo ref={this.emailRef} id="email" type="email" name="email" placeholder="Email" required onChange={this.habilitaOuDesabilitaBotao} />
          
          <Legenda htmlFor="senha">Senha:</Legenda>
          <Campo ref={this.senhaRef} id="senha" type="password" name="senha" placeholder="Senha" required minLength={6} onChange={this.habilitaOuDesabilitaBotao} />

          <Botao desabilitado={this.state.desabilitado}>
            Enviar
          </Botao>

          <Link url="/forgot-password">Esqueci minha senha</Link><Link url="/registre">Criar uma conta</Link>
        </form>
      </main>
    )
  }
}

export default connect(
  (state) => ({ usuario: state.usuario }), 
  { logaUsuario }
)(Login)