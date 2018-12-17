import React, {Component} from 'react';
import picture from './picture.jpeg'
import './CardUser.css';
import Moment from 'react-moment';

class CardUser extends Component{
  constructor(props){
    super(props);
  }

 

  render(){
    const {createAt, email, name, status} = this.props.usuario;
    return ( 
          <div className="card-user">
            
            <div className="avatar">
              <img className="img-avatar" src={picture} alt="Picture"></img>
            </div>

            <div className="card-user-data">
              <h4><small>Nome: </small> {name} </h4>
              <p><small>Email: </small> {email}</p>
              <p><small>Data de Cadastro: </small>
              <Moment className="datetime" format="DD/MM/YYYY"> 
                {createAt}
              </Moment>
              </p>
            </div> 
            
            <div className="card-user-tools">
              <button className="btn btn-primary" onClick={this.props.handleClick}>
                <i className="fas fa-plus"></i> Wallet
              </button>
            </div> 

          </div>
    );
  }
}

export default CardUser;