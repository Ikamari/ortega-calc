// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class StatPointsController extends Component {
    render() {
        const { initialPoints, usedPoints, editPoints, restorePoints, resetStatPoints} = this.props
        return(
            <div className='app-block-wrapper app-centered app-mb5px'>
                <div className='app-centered-text'>
                    Нераспределенные очки: {initialPoints - usedPoints}<br/>
                </div>
                <div className='app-block app-centered-content app-mt10px app-mb10px'>
                    <div className='app-button app-w150px app-mlr5px app-dimgray-background' onClick={() => resetStatPoints()}>Сбросить статы</div>
                    <div className='app-button app-w150px app-mlr5px app-dimgray-background' onClick={() => restorePoints()}>Сбросить очки</div>
                </div>
                <div className='app-centered-text app-mb10px'>Количество очков:</div>
                <div className='app-block app-centered-content'>
                    <div
                        className='app-arrow-button app-arrow-button-left app-dimgray-border app-special-shadow'
                        onClick={() => editPoints(-1)}
                    />
                    <div className='app-lh20px app-ml5px app-mr5px'>{initialPoints}</div>
                    <div
                        className='app-arrow-button app-arrow-button-right app-dimgray-border app-special-shadow'
                        onClick={() => editPoints(1)}
                    />
                </div>
            </div>
        )
    }
}

StatPointsController.propTypes = {
    initialPoints: PropTypes.number.isRequired,
    usedPoints: PropTypes.number.isRequired,
    editPoints: PropTypes.func.isRequired,
    restorePoints: PropTypes.func.isRequired,
    resetStatPoints: PropTypes.func.isRequired
}
