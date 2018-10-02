// React
import React, { Component } from 'react'
import PropTypes            from 'prop-types'
// Styles
import appStyles    from '../../App.css'
import styles       from './styles/stat-element.css'
import colors       from '../styles/colors.css'
import borderColors from '../styles/border-colors.css'

export default class StatElement extends Component {

    renderRound() {
        const { statName, characteristics } = this.props
        const color = characteristics.stats[statName].color
        return (
            <div className={`${styles.round} ${colors[color]} ${borderColors[color]}`} />
        )
    }

    renderTip() {
        const { statName, characteristics } = this.props
        return (
            <span className={styles.tip}>
                {characteristics.stats[statName].tip}
            </span>
        )
    }

    renderLabel() {
        const { statName, characteristics } = this.props
        return (
            <div className={styles.label}>
                {characteristics.renderLabelAsRound ?  this.renderRound() : characteristics.stats[statName].label}
                {characteristics.renderTips         ?  this.renderTip()   : null}
            </div>
        )
    }

    renderPoints() {
        const { statPoints } = this.props
        return (
            <div className={styles['amount-wrapper']}>
                <div className={styles.amount}>
                    {String((statPoints % 100) / 10)[0]}
                    {statPoints % 10}
                </div>
            </div>
        )
    }

    renderIncrementButton() {
        const { increment, statName } = this.props
        return (
            <button
                type='button'
                className={`${appStyles['arrow-button-up']} ${styles['increment-button']}`}
                onClick={() => increment(statName)}
            />
        )
    }

    renderDecrementButton() {
        const { decrement, statName } = this.props
        return (
            <button
                type='button'
                className={`${appStyles['arrow-button-down']} ${styles['decrement-button']}`}
                onClick={() => decrement(statName)}
            />
        )
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {this.renderLabel()}
                {this.renderIncrementButton()}
                {this.renderPoints()}
                {this.renderDecrementButton()}
            </div>
        )
    }

}

StatElement.propTypes = {
    statName:        PropTypes.string.isRequired,
    statPoints:      PropTypes.number.isRequired,
    characteristics: PropTypes.object.isRequired,
    increment:       PropTypes.func.isRequired,
    decrement:       PropTypes.func.isRequired,
}