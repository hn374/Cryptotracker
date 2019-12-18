import React from 'react';
import './landing.css';
import Ticker from './ticker';
import Nomics from 'nomics';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.getTicker = this.getTicker.bind(this);
        this.nomics = new Nomics({
            apiKey: 'd123a1ffbf0340875e75878383de2cc8'
        });
        this.state = {
            tickerData: []
        };
    }

    componentDidMount() {
        this.getTicker();
        this.interval = setInterval(() => {
            this.getTicker();
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    async getTicker() {
        const currencies = await this.nomics.currenciesTicker({ids: ['BTC', 'ETH', 'XRP', 'LTC', 'DOGE']});
        this.setState({
            tickerData: currencies
        });
    }

    render() {
        const tickerData = this.state.tickerData;
        const tickerOutput = [];

        for (const [index, value] of tickerData.entries()) {
            console.log(value);
            tickerOutput.push(<Ticker key={index} id={value.id} image={value.logo_url} price={value.price}/>)
        }

        return(
            <div className="container">
                <div className="center header">Cryptocurrency Tracker</div>
                { tickerOutput }
            </div>
        )
    }
}

export default Landing;