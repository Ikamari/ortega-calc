// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class StatElement extends Component {

    renderRound() {
        const { statName, characteristics } = this.props
        const color = characteristics.stats[statName].color
        return (
            <div className={`app-round app-${color}-border app-${color}-color app-small-shadow app-round-glass-effect`} />
        )
    }

    renderTip() {
        const { statName, characteristics } = this.props
        return (
            <span className='app-tooltip-text'>
                {characteristics.stats[statName].tip}
            </span>
        )
    }

    renderLabel() {
        const { statName, characteristics } = this.props
        return (
            <div className='app-text-uppercase app-tooltip'>
                {characteristics.renderLabelAsRound ?  this.renderRound() : characteristics.stats[statName].label}
                {characteristics.renderTips         ?  this.renderTip()   : null}
            </div>
        )
    }

    renderPoints() {
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
                {this.renderLabel()}
                <div
                    className={`app-arrow-button app-arrow-button-up app-dimgray-border app-mt10px app-special-shadow`}
                    onClick={() => increment(statName)}
                />
                {this.renderPoints()}
                <div
                    className={`app-arrow-button app-arrow-button-down app-dimgray-border app-mb10px app-special-shadow`}
                    onClick={() => decrement(statName)}
                />
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