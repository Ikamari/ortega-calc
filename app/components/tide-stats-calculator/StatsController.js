// React
import React, { Component } from 'react'
import PropTypes            from 'prop-types'
// Components
import StatElement from './StatElement'
// Styles
import originalStyles from '../calculator/styles/stats-controller.css'
import styles         from './styles/stats-controller.css'

const STATUS_NAMES = [
    'unactive',
    'active',
    'error'
]

export default class TideStatsController extends Component {

    getMaxTideStats() {
        const { statsPoints } = this.props
        let firstMax = 'red', secondMax = 'red'

        Object.keys(statsPoints).map((statName) => {
            const points = statsPoints[statName]
            if (points > statsPoints[firstMax]) {
                secondMax = firstMax
                firstMax  = statName
            } else if (points >= statsPoints[secondMax] || firstMax === secondMax) {
                secondMax = statName
            }
        })

        return { firstMax, secondMax }
    }

    checkTideStats(maximums) {
        const { characteristics, statsPoints } = this.props
        let firstDominating = true, secondDominating = true

        const firstSpecialNum  = Math.round(statsPoints[maximums.firstMax]  - (statsPoints[maximums.firstMax] / 3)),
            secondSpecialNum = Math.round(statsPoints[maximums.secondMax] - (statsPoints[maximums.secondMax] / 3))

        Object.keys(statsPoints).map((statName) => {
            const points = statsPoints[statName]
            if (maximums.firstMax !== statName && maximums.secondMax !== statName) {
                if (!(firstSpecialNum > points))  firstDominating  = false
                if (!(secondSpecialNum > points)) secondDominating = false
            }
        })

        let isIncompatible = false
        if (firstDominating && secondDominating) {
            isIncompatible = characteristics.stats[maximums.firstMax].group === characteristics.stats[maximums.secondMax].group
        }
        return {
            [maximums.firstMax]:  firstDominating  ? (isIncompatible ? 2 : 1) : 0,
            [maximums.secondMax]: secondDominating ? (isIncompatible ? 2 : 1) : 0
        }
    }

    render() {
        const { increment, decrement, characteristics, statsPoints } = this.props
        const tideStatuses = this.checkTideStats(this.getMaxTideStats())

        return (
            <div className={originalStyles.wrapper}>
                <div className={originalStyles.label}>{characteristics.label}</div>
                <div className={originalStyles['stat-elements']}>
                    {characteristics.groups.map((data) => (
                        <div className={styles['stat-elements-group']} key={`${characteristics.name}-calc-${data.name}-group`}>
                            <div className={styles['stat-elements-group-label']}>{data.label}</div>
                            <div className={styles['stat-elements-group-elements']}>
                            {Object.keys(characteristics.stats).map((name) => {
                                if (characteristics.stats[name].group === data.name) {
                                    return (
                                        <StatElement
                                            statName={name}
                                            statPoints={statsPoints[name]}
                                            characteristics={characteristics}
                                            increment={increment}
                                            decrement={decrement}
                                            key={`${characteristics.name}-calc-${name}-stat`}
                                            status={tideStatuses[name] ? STATUS_NAMES[tideStatuses[name]]: 'unactive'}
                                        />
                                    )
                                }
                            })}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.note}>
                    <div>* Зеленый цвет под потоком означает то, что он доминирующий</div>
                    <div>* Красный цвет под парой потоков означает то, что они не могут быть оба доминирующими</div>
                </div>
            </div>
        )
    }

}

TideStatsController.propTypes = {
    increment:       PropTypes.func.isRequired,
    decrement:       PropTypes.func.isRequired,
    characteristics: PropTypes.object.isRequired,
    statsPoints:     PropTypes.object.isRequired
}
