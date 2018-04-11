// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import TideStatElement from './TideStatElement'

export default class TideStatsStatus extends Component {

    getMaxTideStats() {
        let firstMax = 'red', secondMax = 'red', stats = Object.assign({}, this.props.stats)
        delete stats.used

        Object.keys(stats).map((stat) => {
            const points = stats[stat]
            if (points > stats[firstMax] && stats[firstMax] !== stat) {
                secondMax = firstMax
                firstMax = stat
            } else if (points >= stats[secondMax] && stats[firstMax] !== stat) {
                secondMax = stat
            }
        })

        return { firstMax, secondMax }
    }

    checkTideStats(maximums) {
        let result = [], firstDominating = true, secondDominating = true, stats = Object.assign({}, this.props.stats), actives = 0
        delete stats.used

        console.log(`Calculating. Maximums: ${maximums.firstMax}${maximums.firstMax !== maximums.secondMax ? ` and ${maximums.secondMax}` : ''}`)
        const firstSpecialNum = Math.round(stats[maximums.firstMax] - (stats[maximums.firstMax] / 3))
        console.log(maximums.firstMax, `${stats[maximums.firstMax]} - (${stats[maximums.firstMax]} / 3) = ${firstSpecialNum}`)
        const secondSpecialNum = Math.round(stats[maximums.secondMax] - (stats[maximums.secondMax] / 3))
        console.log(maximums.secondMax, `${stats[maximums.secondMax]} - (${stats[maximums.secondMax]} / 3) = ${secondSpecialNum}`)

        Object.keys(stats).map((stat) => {
            const points = stats[stat]
            if (maximums.firstMax !== stat && maximums.secondMax !== stat) {
                if (!(firstSpecialNum > points)) firstDominating = false
                if (!(secondSpecialNum > points)) secondDominating = false
            }
        })

        return {
            [maximums.firstMax]: firstDominating ? maximums.firstMax : null,
            [maximums.secondMax]: secondDominating ? maximums.secondMax : null
        }
    }

    render() {
        const { statsData } = this.props
        let stats = Object.assign({}, this.props.stats)
        delete stats.used

        const statuses = this.checkTideStats(this.getMaxTideStats())

        return (
            <div className='app-block-wrapper app-centered app-horizontal-border app-mt20px app-mb20px app-p5px'>
                <div className='app-centered-text app-text-bold app-mb10px'>Доминирующие потоки</div>
                <div className='app-block app-justified-content'>
                    {Object.keys(stats).map((stat, num) => (
                        <TideStatElement
                            status={statuses[stat] ? 'active' : 'unactive'}
                            tip={statsData.statLabel[num]}
                            key={`calc-tide-element-${stat}`}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

TideStatsStatus.propTypes = {
    stats: PropTypes.object.isRequired,
    statsData: PropTypes.object.isRequired
}
