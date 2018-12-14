import React, {Component} from 'react';
import './CardWallet.css';

class CardWallet extends Component{
  constructor(props){
    super(props);
  }

 

  render(){
    const {privateKey, publicKey} = this.props.dados;
    return (
          <div className="card-wallet">
              <h3>Wallet</h3>
              <p>Chave privada: <span className="word-break">{privateKey}</span></p>
              <br />
              <p>Chave publica: <span className="word-break">{publicKey}</span></p>
              <div className="wallet-tools">
                <button className="btn btn-danger" type="button" onClick={this.props.handleClick}>
                  <i class="far fa-trash-alt"></i> Excluir
                </button>
              </div>              
          </div>
    );
  }
}

export default CardWallet;