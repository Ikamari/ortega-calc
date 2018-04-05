// React
import React, { Component } from 'react';
// Components
import Calculator from './components/calculator/Calculator'
import Heritages from './components/heritages/Heritages'
import WikiCode from './components/wiki-code/WikiCode'
// Calculator stats
import VesselStats from './components/calculator/stats/VesselStats'
import EssenceStats from './components/calculator/stats/EssenceStats'

export default  class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialVesselPoints: 0,
            initialEssencePoints: 0,
            vesselPoints: 0,
            essencePoints: 0
        }
    }

    sendStats(stats) {
        const wikiInfobox = this.refs.wikiCode

        wikiInfobox.setState({
            ...stats
        })
    }

    setPoints(vesselPoints, essencePoints) {
        this.setState({
            vesselPoints,
            essencePoints,
            initialVesselPoints: vesselPoints,
            initialEssencePoints: essencePoints,
        })
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
                <Heritages
                    setPoints={(vesselPoints, essencePoints) => this.setPoints(vesselPoints, essencePoints)}
                />
                <div className='app-block-inline app-centered app-w100per app-centered-content'>
                    <Calculator
                        statsData={VesselStats()}
                        getPoints={() => this.getPoints('vessel')}
                        editPoints={(value) => this.editPoints('vessel', value)}
                        restorePoints={() => this.restorePoints('vessel')}
                        sendStats={(stats) => this.sendStats(stats)}
                    />
                    <Calculator
                        statsData={EssenceStats()}
                        getPoints={() => this.getPoints('essence')}
                        editPoints={(value) => this.editPoints('essence', value)}
                        restorePoints={() => this.restorePoints('essence')}
                        sendStats={(stats) => this.sendStats(stats)}
                    />
                </div>
                <WikiCode ref='wikiCode'/>
            </div>
        )
    }
}
