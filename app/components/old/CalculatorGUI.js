// React
import React from 'react'
// Components
import PointController from './PointController'

const statElement = (increment, decrement, statName, statPoints, color, tip, nameAsRound = false) => {
    return (
        <div className='app-block app-centered-flex-column app-calc-stat' key={`calc-stat-element-${statName}`}>
            <div className='app-text-uppercase app-tooltip'>
                {nameAsRound ? <div className={`app-round app-${color}-border app-${color}-color app-small-shadow app-round-glass-effect`} /> : statName}
                <span className='app-tooltip-text'>{tip}</span>
            </div>
            <div
                className={`app-arrow-button app-arrow-button-up app-dimgray-border app-mt10px app-special-shadow`}
                onClick={() => increment(statName)}
            />
            <div className='app-calc-digit-block'>
                <div className='app-calc-digit-wrapper'>
                    <div className='app-calc-digit-background'>@</div>
                    <div className='app-calc-digit'>{String((statPoints % 100) / 10)[0]}</div>
                </div>
                <div className='app-calc-digit-wrapper'>
                    <div className='app-calc-digit-background'>@</div>
                    <div className='app-calc-digit'>{statPoints % 10}</div>
                </div>
            </div>
            <div
                className={`app-arrow-button app-arrow-button-down app-dimgray-border app-mb10px app-special-shadow`}
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
        <div className='app-block-wrapper app-centered app-horizontal-border app-mt20px app-mb20px app-p5px'>
            <div className='app-centered-text app-text-bold app-mb10px'>{statsData.label}</div>
            <div className='app-block app-justified-content'>
                {Object.keys(stats).map((stat, num) => (
                    statElement(increment, decrement, stat, stats[stat], statsData.color[num], statsData.statLabel[num], statsData.nameAsRound)
                ))}
            </div>
            <div className='app-centered-text'>
                Нераспределенные очки: {initialPoints - usedPoints}<br/>
            </div>
            <div className='app-block app-centered-content app-mt10px app-mb10px'>
                <div className='app-button app-w150px app-mlr5px app-dimgray-background' onClick={() => resetStatPoints()}>Сбросить статы</div>
                <div className='app-button app-w150px app-mlr5px app-dimgray-background' onClick={() => restorePoints()}>Сбросить очки</div>
            </div>
            <PointController
                initialPoints={initialPoints}
                editPoints={(value) => editPoints(value)}
            />
        </div>
    )
};

export default (props) => CalculatorGUI(props)
