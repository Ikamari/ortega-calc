// React
import React from 'react';
// Components
import PointController from './PointController'

const statElement = (increment, decrement, statName, statPoints, color, tip) => {
    return (
        <div className='app-block app-centered-flex-column' key={`calc-stat-element-${statName}`}>
            <div className='app-text-uppercase app-tooltip'>
                {statName}
                <span className='app-tooltip-text'>{tip}</span>
            </div>
            <div
                className={`app-arrow-button app-arrow-button-up app-${color}-border app-mt10px`}
                onClick={() => increment(statName)}
            />
            <div>{statPoints}</div>
            <div
                className={`app-arrow-button app-arrow-button-down app-${color}-border app-mb10px`}
                onClick={() => decrement(statName)}
            />
        </div>
    )
};

const CalculatorGUI = (props) => {
    let stats = Object.assign({}, props.stats)
    const { increment, decrement, initialPoints, statsData, editPoints, restorePoints, resetStatPoints} = props
    const usedPoints = props.stats.used
    delete stats.used

    return (
        <div className='app-block-wrapper app-centered app-sharp-border app-horizontal-border app-mt20px app-mb20px app-p5px'>
            <div className='app-centered-text app-text-bold app-mb10px'>{statsData.label}</div>
            <div className='app-block app-justified-content'>
                {Object.keys(stats).map((stat, num) => (
                    statElement(increment, decrement, stat, stats[stat], statsData.color[num], statsData.statLabel[num])
                ))}
            </div>
            <div className='app-centered-text'>
                Нераспределенные очки: {initialPoints - usedPoints}<br/>
            </div>
            <div className='app-button app-mt10px app-mb10px' onClick={() => resetStatPoints()}>Сбросить статы</div>
            <div className='app-button app-mb10px' onClick={() => restorePoints()}>Сбросить очки</div>
            <PointController
                initialPoints={initialPoints}
                editPoints={(value) => editPoints(value)}
            />
        </div>
    )
};

export default (props) => CalculatorGUI(props)
