// React
import React from 'react'
import PropTypes from 'prop-types'

const TideStatElement = (props) => {
    const { status, tip } = props
    return (
        <div className='app-block app-centered-flex-column app-calc-stat'>
            <div className='app-text-uppercase app-tooltip'>
                <div
                    className={`app-round app-tide-status-${status} app-small-shadow app-round-glass-effect`}/>
                {tip ? <span className='app-tooltip-text'>{tip}</span> : null}
            </div>
        </div>
    )
}

TideStatElement.propTypes = {
    tip: PropTypes.string,
    status: PropTypes.string.isRequired
}

export default (props) => TideStatElement(props)

