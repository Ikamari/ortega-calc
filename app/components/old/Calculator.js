// React
import React, { Component } from 'react'
// Components
import GUI from './CalculatorGUI'
// Helpers
import calculatePrice from '../../helpers/StatPointPriceCalculator'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        const stats = this.props.statsData

        // Set used points value (1 stat = +1 used point)
        this.state={
            used: stats.elements,
        }

        // Something unusual here: pull all stats in state with map
        stats.name.map((stat) => {
            this.state={
                ...this.state,
                [stat]: 1
            }
        })
    }

    componentDidUpdate() {
        let stats = Object.assign({}, this.state)
        delete stats.used
        this.props.sendStats(stats)
    }

    decrementStatPoint(stat) {
        const statPoints = this.state[stat]
        if (statPoints > 1) {
            const usedPoints = this.state.used
            const price = calculatePrice(statPoints, 0)
            this.setState({
                used: usedPoints - price,
                [stat]: statPoints - 1
            })
        }
    }

    incrementStatPoint(stat) {
        const statPoints = this.state[stat]
        const usedPoints = this.state.used
        const initialPoints = this.props.getPoints()
        const price = calculatePrice(statPoints, 1)

        if (initialPoints >= usedPoints + price) {
            this.setState({
                used: usedPoints + price,
                [stat]: statPoints + 1
            })
        }
    }

    resetStatPoints() {
        const statNames = this.props.statsData.name
        let stats = {}
        statNames.map((stat) => {stats[stat] = 1})

        this.setState({
            used: 4,
            ...stats
        })
    }

    render() {
        return(
            <div className='app-ml5px app-mr5px'>
                <GUI
                    stats={this.state}
                    statsData={this.props.statsData}
                    initialPoints={this.props.getPoints()}
                    editPoints={(value) => this.props.editPoints(value)}
                    restorePoints={() => this.props.restorePoints()}
                    resetStatPoints={() => this.resetStatPoints()}
                    increment={(statName) => this.incrementStatPoint(statName)}
                    decrement={(statName) => this.decrementStatPoint(statName)}
                />
            </div>
        )
    }
}
