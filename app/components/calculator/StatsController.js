// React
import React, { Component } from 'react'
import PropTypes            from 'prop-types'
// Components
import StatElement from './StatElement'
// Styles
import styles from './styles/stats-controller.css'

export default class StatsController extends Component {

    render() {
        const { increment, decrement, characteristics, statsPoints } = this.props

        return (
            <div className={styles.wrapper}>
                <div className={styles.label}>{characteristics.label}</div>
                <div className={styles['stat-elements']}>
                    {Object.keys(characteristics.stats).map((name) => (
                        <StatElement
                            statName        = {name}
                            statPoints      = {statsPoints[name]}
                            characteristics = {characteristics}
                            increment       = {increment}
                            decrement       = {decrement}
                            key             = {`${characteristics.name}-calc-${name}-stat`}
                        />
                    ))}
                </div>
            </div>
        )
    }

}

StatsController.propTypes = {
    increment:       PropTypes.func.isRequired,
    decrement:       PropTypes.func.isRequired,
    characteristics: PropTypes.object.isRequired,
    statsPoints:     PropTypes.object.isRequired
}
