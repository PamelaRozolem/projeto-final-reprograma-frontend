import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardWallet from '../../componentes/CardWallet/CardWallet';
import CardUser from '../../componentes/CardUser/CardUser';
import { obterWallets, dadosUsuario, criarWallets, deletarWallet } from '../../redux/actions';
import './Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { carregando: false }
    
    this.props.obterWallets();
    this.props.dadosUsuario();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e, id){
   this.props.deletarWallet(id);
  }
     
  criarWallets (){
    this.props.criarWallets();
  }


  render() {
    return (
      <main className="dashboard">
        
        <div className="cardUser">
          <CardUser usuario={this.props.usuario} handleClick= {() => this.criarWallets(this)}></CardUser>
        </div>

        <div className="content">
         <div className="cards-content">
          {this.props.wallets.length > 0 &&
            this.props.wallets.map( (item) => {
              return <CardWallet dados={item} handleClick={() => this.handleClick(this, item._id)}/>
            })
          }

          {this.props.wallets.length == 0 &&
            <div className="card-vazio">
              <i className="fab fa-6x fa-bitcoin"></i>
              <h4>Wallet</h4>
              <p>Você não tem nenhuma wallet, clique em +wallet e aguarde a geração das suas chaves.</p>
            </div>
          }
          </div>
        
        </div>
      </main>
    )
  }
}

export default connect(
  (state) => ({wallets: state.wallets, usuario: state.cadastrarUsuario}), 
  {obterWallets,criarWallets, deletarWallet, dadosUsuario}
)(Dashboard)
