import React, { Component } from 'react'
import './Menssagem.css'

class Menssagem extends Component {
    constructor(props) {
        super(props)
      }
      render() {
        return (
            <div className='menssagem'>
                <p>{this.props.text}</p>
            </div>
        );
      }
}

export default Menssagem;