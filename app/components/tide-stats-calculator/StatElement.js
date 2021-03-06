// React
import React       from 'react'
import PropTypes   from 'prop-types'
// Components
import StatElement from '../calculator/StatElement'
// Styles
import originalStyles from '../calculator/styles/stat-element.css'
import styles         from './styles/stat-element.css'

export default class TideStatElement extends StatElement {
    renderStatus() {
        const { status } = this.props
        return (
            <div className={styles[`status-round-${status}`]} />
        )
    }

    render() {
        return (
            <div className={originalStyles.wrapper}>
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

