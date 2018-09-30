// React
import React, { Component } from 'react'
import PropTypes            from 'prop-types'
// Components
import StatElement          from './StatElement'

export default class StatsController extends Component {

    render() {
        const { increment, decrement, characteristics, statsPoints } = this.props

        return (
            <div className='app-tide-calc app-block-wrapper app-centered app-mt20px app-pl5px app-pr5px'>
                <div className='app-centered-text app-text-bold app-mb10px app-mt10px'>{characteristics.label}</div>
                <div className='app-block app-justified-content'>
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
