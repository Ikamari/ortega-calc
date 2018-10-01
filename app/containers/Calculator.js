// React
import React, { Component } from 'react'
import PropTypes            from 'prop-types'
// Components
import StatPointsController from '../components/calculator/StatPointsController'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.characteristics = this.props.characteristics

        this.state = {
            points: this.characteristics.initialPoints,
            usedPoints: this.characteristics.initialPointsPerStat * Object.keys(this.characteristics.stats).length,
            stats: {}
        }

        Object.keys(this.characteristics.stats).map((name) => {
            this.state.stats[name] = this.characteristics.initialPointsPerStat
        })
    }

    incrementStatPoint(stat) {
        const statPoints = this.state.stats[stat]
        const price      = this.characteristics.getPrice(statPoints, 1)

        if ((this.state.points >= this.state.usedPoints + price) && (statPoints < this.characteristics.maxPointsPerStat)) {
            let stats   = Object.assign({}, this.state.stats)
            stats[stat] = statPoints + 1

            this.setState({
                usedPoints: this.state.usedPoints + price,
                stats:      stats
            })
        }
    }

    decrementStatPoint(stat) {
        const statPoints = this.state.stats[stat]

        if (statPoints > this.characteristics.minPointsPerStat) {
            const price = this.characteristics.getPrice(statPoints, 0)

            let stats   = Object.assign({}, this.state.stats)
            stats[stat] = statPoints - 1

            this.setState({
                usedPoints: this.state.usedPoints - price,
                stats:      stats
            })
        }
    }

    setPoints(points) {
        this.setState({
            points: points
        })
    }

    resetPoints() {
        this.setPoints(this.characteristics.initialPoints)
    }

    resetStatPoints() {
        let stats = {}
        Object.keys(this.characteristics.stats).map((name) => {
            stats[name] = this.characteristics.initialPointsPerStat
        })

        this.setState({
            usedPoints: this.characteristics.initialPointsPerStat * Object.keys(this.characteristics.stats).length,
            stats:      stats
        })
    }

    render() {
        const StatsController = this.characteristics.statsController
        return(
            <div className='app-ml5px app-mr5px'>
                <StatsController
                    increment       = {(statName) => this.incrementStatPoint(statName)}
                    decrement       = {(statName) => this.decrementStatPoint(statName)}
                    characteristics = {this.props.characteristics}
                    statsPoints     = {this.state.stats}
                />
                <StatPointsController
                    initialPoints   = {this.state.points}
                    usedPoints      = {this.state.usedPoints}
                    editPoints      = {(value) => this.setPoints(value)}
                    restorePoints   = {() => this.resetPoints()}
                    resetStatPoints = {() => this.resetStatPoints()}
                />
            </div>
        )
    }
}

Calculator.propTypes = {
    characteristics: PropTypes.object.isRequired,
}