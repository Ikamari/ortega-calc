// React
import React, { Component } from 'react'

export default class PointController extends Component {
    render() {
        const { initialPoints, editPoints } = this.props
        return(
            <div className='app-block-wrapper app-centered app-mb5px'>
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
