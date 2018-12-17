import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardWallet from '../../componentes/CardWallet/CardWallet';
import CardDashboard from '../../componentes/CardDashboard/CardDashboard';
import { obterWallets } from '../../redux/actions';
import {criarWallets} from '../../redux/actions';
import {deletarWallet} from '../../redux/actions';

import './Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { carregando: false }
    
    this.props.obterWallets()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e, id){
   this.props.deletarWallet(id);
  }


     
  render() {
    return (
      <main className="dashboard">
        <div className="tools">
          <button className="btn btn-primary" onClick={this.props.criarWallets}>
          <i class="fas fa-plus"></i> Wallet</button>
        </div>
        
        <div className="content">
          {this.props.wallets.map( (item) => {
              return <CardWallet dados={item} handleClick={() => this.handleClick(this, item._id)}/>
          })}
        </div>

        <div className="cardUser">
          <CardDashboard></CardDashboard>
        </div>
    
      </main>
    )
  }
}

export default connect(
  (state) => ({wallets: state.wallets}), {obterWallets,criarWallets, deletarWallet}
)(Dashboard)
