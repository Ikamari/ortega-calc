// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import StatPointsController from './stats/StatPointsController'
import StatsController from './stats/StatsController'
import TideStatsStatus from './tide/TideStatsStatus'

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
        const { prices: calculatePrice } = this.props
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
        const { prices: calculatePrice } = this.props
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
            used: this.props.statsData.elements,
            ...stats
        })
    }

    render() {
        return(
            <div className='app-ml5px app-mr5px'>
                <StatsController
                    increment={(statName) => this.incrementStatPoint(statName)}
                    decrement={(statName) => this.decrementStatPoint(statName)}
                    stats={this.state}
                    statsData={this.props.statsData}
                />
                <TideStatsStatus
                    stats={this.state}
                    statsData={this.props.statsData}
                />
                <StatPointsController
                    initialPoints={this.props.getPoints()}
                    usedPoints={this.state.used}
                    editPoints={(value) => this.props.editPoints(value)}
                    restorePoints={() => this.props.restorePoints()}
                    resetStatPoints={() => this.resetStatPoints()}
                />
            </div>
        )
    }
}

Calculator.propTypes = {
    statsData: PropTypes.object.isRequired,
    getPoints: PropTypes.func.isRequired,
    editPoints: PropTypes.func.isRequired,
    restorePoints: PropTypes.func.isRequired,
    sendStats: PropTypes.func.isRequired,
    prices: PropTypes.func.isRequired
}