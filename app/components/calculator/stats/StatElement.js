// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class StatElement extends Component {

    drawName() {
        const { statName, color, tip, nameAsRound } = this.props
        return (
            <div className='app-text-uppercase app-tooltip'>
                {nameAsRound ? <div className={`app-round app-${color}-border app-${color}-color app-small-shadow app-round-glass-effect`} /> : statName}
                {tip ? <span className='app-tooltip-text'>{tip}</span> : null}
            </div>
        )
    }

    drawNumber() {
        const { statPoints } = this.props
        return (
            <div className='app-calc-digit-block'>
                <div className='app-calc-digit-wrapper'>
                    <div className='app-calc-digit-background'>@</div>
                    <div className='app-calc-digit'>{String((statPoints % 100) / 10)[0]}</div>
                </div>
                <div className='app-calc-digit-wrapper'>
                    <div className='app-calc-digit-background'>@</div>
                    <div className='app-calc-digit'>{statPoints % 10}</div>
                </div>
            </div>
        )
    }

    render() {
        const { increment, decrement, statName } = this.props
        return (
            <div className='app-tide-calc-element app-block app-centered-flex-column app-calc-stat'>
                {this.drawName()}
                <div
                    className={`app-arrow-button app-arrow-button-up app-dimgray-border app-mt10px app-special-shadow`}
                    onClick={() => increment(statName)}
                />
                {this.drawNumber()}
                <div
                    className={`app-arrow-button app-arrow-button-down app-dimgray-border app-mb10px app-special-shadow`}
                    onClick={() => decrement(statName)}
                />
            </div>
        )
    }

}

StatElement.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    statName: PropTypes.string,
    statPoints: PropTypes.number.isRequired,
    color: PropTypes.string,
    tip: PropTypes.string,
    nameAsRound: PropTypes.bool
}

StatElement.defaultProps = {
    statName: '',
    color: 'white',
    tip: '',
    nameAsRound: false
}