// React
import React, { Component } from 'react'
import PropTypes            from 'prop-types'
// Components
import StatElement from '../calculator/StatElement'
// Styles
import originalStyles from '../calculator/styles/stat-element.css'
import styles         from './styles/stat-element.css'

export default class CoreStatElement extends StatElement {
    renderPoints() {
        const { statPoints, characteristics } = this.props
        return (
            <div className={styles['amount-wrapper']}>
                <div className={originalStyles.amount}>
                    {characteristics.pointsAmountNames[statPoints]}
                </div>
            </div>
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

CoreStatElement.propTypes = {
    statName:        PropTypes.string.isRequired,
    statPoints:      PropTypes.number.isRequired,
    characteristics: PropTypes.object.isRequired,
    increment:       PropTypes.func.isRequired,
    decrement:       PropTypes.func.isRequired,
}