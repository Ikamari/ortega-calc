// React
import React, { Component } from 'react';
// Components
import Calculator from './components/calculator/Calculator'
// Calculator stats
import TideStats from './calculator/stats/TideStats'
// Calculator prices
import CommonPrices from './calculator/prices/CommonPrices'

export default  class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialTidePoints: 0,
            tidePoints: 0
        }
    }

    sendStats(stats) {
    }

    restorePoints(categoryName) {
        const stateCurrentPropName = categoryName + 'Points'
        const stateInitialPropName = 'initial' + categoryName.charAt(0).toUpperCase() + categoryName.slice(1) + 'Points'
        console.log(stateInitialPropName)
        this.setState({
            [stateCurrentPropName]: this.state[stateInitialPropName]
        })
    }

    editPoints(categoryName, value) {
        const statePropName = categoryName + 'Points'
        this.setState({
            [statePropName]: this.state[statePropName] + value
        })
    }

    getPoints(categoryName) {
        const statePropName = categoryName + 'Points'
        return this.state[statePropName]
    }

    render() {
        return(
            <div className='app'>
                <div className='app-block-inline app-centered app-w100per app-centered-content'>
                    <Calculator
                        statsData={TideStats()}
                        getPoints={() => this.getPoints('tide')}
                        editPoints={(value) => this.editPoints('tide', value)}
                        restorePoints={() => this.restorePoints('tide')}
                        sendStats={(stats) => this.sendStats(stats)}
                        prices={CommonPrices}
                    />
                </div>
            </div>
        )
    }
}
