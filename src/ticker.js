import React from 'react';
import './ticker.css';

class Ticker extends React.Component {
    render() {
        return(
            <div className="Container">
                <img src={this.props.image} alt="Ticker"/>
                <span className="Ticker">{this.props.id}</span>
                <span className="Price">${this.props.price}</span>
            </div>
        )
    }
}

export default Ticker;