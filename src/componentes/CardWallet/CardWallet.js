import React, {Component} from 'react';
import './CardWallet.css';
import Moment from 'react-moment';

class CardWallet extends Component{
  constructor(props){
    super(props);
  }

 

  render(){
    const {privateKey, publicKey, createAt } = this.props.dados;
    return (
          <div className="card-wallet">
              <div className="header">
                 <h3>
                  <span className="fab fa-bitcoin text-yellow"></span>  Wallet
                  <Moment className="datetime" format="DD/MM/YYYY HH:mm:ss"> 
                    {createAt}
                  </Moment>
                </h3>
              </div>
              
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