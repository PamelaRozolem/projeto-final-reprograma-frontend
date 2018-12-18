import React, {Component} from 'react';
import picture from './picture.jpeg'
import './CardDashboard.css';

class CardDashboard extends Component{
  constructor(props){
    super(props);
  }

 

  render(){

    return ( 
          <div className="card-dashboard">
            <img/>
             <p><img className="cardDashboard__picture" src={picture} alt="Picture"></img>Olá Pamela,</p>
             <p>Você tem 2 wallerts</p>
                           
          </div>
    );
  }
}

export default CardDashboard;