// React
import React, { Component } from 'react'
// Helpers
import StatCheck from '../helpers/StatCheck'

export default class Warnings extends Component {
    render() {
        const warnings = StatCheck(this.props.stats)
        return(
            <div className='warning-infobox'>
                {warnings.map((warning, num) => (
                    <div key={`infobox-warning-${num}`} className='warning-infobox-element'>
                        <div className='warning-infobox-element-symbol'>!</div>
                        <div className='warning-infobox-element-text'>{warning}</div>
                    </div>
                ))}
            </div>
        )
    }
}