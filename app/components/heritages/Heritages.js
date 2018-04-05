// React
import React, { Component } from 'react';
// Heritage types
import HeritageTypes from './HeritageTypes'

export default class Heritages extends Component {
    render() {
        const { setPoints } = this.props
        return(
            <div className='app-block app-centered app-w530px app-sharp-border app-horizontal-border app-centered-flex-column'>
                <div className='app-centered-text app-text-bold app-mt5px'>Наследие</div>
                <div className='app-block app-w530px'>
                {HeritageTypes().map((heritage, num) => (
                    <div className="app-block app-radio-button app-w150px app-mt10px app-mb10px" key={`heritage-type-${num}`}>
                        <label>{heritage.label}
                            <input type="radio" name="heritageType" onClick={() => setPoints(heritage.vesselPoints, heritage.essencePoints)} />
                            <span />
                        </label>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}
