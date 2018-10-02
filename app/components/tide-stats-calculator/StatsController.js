// React
import React, { Component } from 'react'
import PropTypes            from 'prop-types'
// Components
import StatElement from './StatElement'
// Styles
import originalStyles from '../calculator/styles/stats-controller.css'
import styles         from './styles/stats-controller.css'

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
        const { statsPoints } = this.props
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

        return {
            [maximums.firstMax]:  firstDominating  ? maximums.firstMax  : null,
            [maximums.secondMax]: secondDominating ? maximums.secondMax : null
        }
    }

    render() {
        const { increment, decrement, characteristics, statsPoints } = this.props
        const statuses = this.checkTideStats(this.getMaxTideStats())

        return (
            <div className={originalStyles.wrapper}>
                <div className={originalStyles.label}>{characteristics.label}</div>
                <div className={originalStyles['stat-elements']}>
                    {Object.keys(characteristics.stats).map((name) => (
                        <StatElement
                            statName        = {name}
                            statPoints      = {statsPoints[name]}
                            characteristics = {characteristics}
                            increment       = {increment}
                            decrement       = {decrement}
                            key             = {`${characteristics.name}-calc-${name}-stat`}
                            status          = {statuses[name] ? 'active' : 'unactive'}
                        />
                    ))}
                </div>
                <div className={styles.note}>Note: Зеленый цвет под потоком означает то, что он доминирующий</div>
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
