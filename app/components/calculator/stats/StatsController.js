// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import StatElement from './StatElement'

export default class StatsController extends Component {

    render() {
        const { increment, decrement, statsData } = this.props
        let stats = Object.assign({}, this.props.stats)
        delete stats.used

        return (
            <div className='app-block-wrapper app-centered app-horizontal-border app-mt20px app-mb20px app-p5px'>
                <div className='app-centered-text app-text-bold app-mb10px'>{statsData.label}</div>
                <div className='app-block app-justified-content'>
                    {Object.keys(stats).map((stat, num) => (
                        <StatElement
                            statName = {stat}
                            statPoints = {stats[stat]}
                            increment = {increment}
                            decrement = {decrement}
                            color = {statsData.color[num]}
                            tip = {statsData.statLabel[num]}
                            nameAsRound = {statsData.nameAsRound}
                            key={`calc-stat-element-${stat}`}
                        />
                    ))}
                </div>

            </div>
        )
    }
}

StatsController.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    stats: PropTypes.object.isRequired,
    statsData: PropTypes.object.isRequired
}
