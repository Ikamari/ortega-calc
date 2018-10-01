// React
import React       from 'react'
import PropTypes   from 'prop-types'
// Components
import StatElement from '../calculator/StatElement'

export default class TideStatElement extends StatElement {
    renderStatus() {
        const { status } = this.props
        return (
            <div className='app-text-uppercase app-tooltip'>
                <div
                    className={`app-round app-tide-status-${status} app-small-shadow app-round-glass-effect`}/>
            </div>
        )
    }

    render() {
        return (
            <div className='app-tide-calc-element app-block app-centered-flex-column app-calc-stat'>
                {this.renderLabel()}
                {this.renderIncrementButton()}
                {this.renderPoints()}
                {this.renderDecrementButton()}
                {this.renderStatus()}
            </div>
        )
    }
}

TideStatElement.defaultProps = {
    status: 'unactive'
}

TideStatElement.propTypes = {
    statName:        PropTypes.string.isRequired,
    statPoints:      PropTypes.number.isRequired,
    characteristics: PropTypes.object.isRequired,
    increment:       PropTypes.func.isRequired,
    decrement:       PropTypes.func.isRequired,
    status:          PropTypes.string
}

