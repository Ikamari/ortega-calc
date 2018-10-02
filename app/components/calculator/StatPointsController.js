// React
import React, { Component } from 'react'
import PropTypes            from 'prop-types'
// Styles
import appStyles from '../../App.css'
import styles    from './styles/stat-points-controller.css'

export default class StatPointsController extends Component {
    render() {
        const { initialPoints, usedPoints, editPoints, restorePoints, resetStatPoints} = this.props
        return(
            <div className={styles.wrapper}>
                <div className={styles['available-points-wrapper']}>
                    <div className={styles['available-points-label']}>Нераспределенные очки:</div>
                    <div className={styles['points-amount-wrapper']}>{initialPoints - usedPoints}</div>
                </div>
                <div className={styles['points-change-wrapper']}>
                    <div className={styles['points-change-label']}>Количество очков:</div>
                    <div className={styles['points-amount-wrapper']}>
                        <button
                            type='button'
                            className={appStyles['arrow-button-left']}
                            onClick={() => editPoints(initialPoints - 1)}
                        />
                        <div className={styles['points-amount']}>{initialPoints}</div>
                        <button
                            type='button'
                            className={appStyles['arrow-button-right']}
                            onClick={() => editPoints(initialPoints + 1)}
                        />
                    </div>
                </div>
                <div className={styles['wipe-buttons-wrapper']}>
                    <button type='button' className={appStyles.button} onClick={() => resetStatPoints()}>Сбросить статы</button>
                    <button type='button' className={appStyles.button} onClick={() => restorePoints()}>Сбросить очки</button>
                </div>
            </div>
        )
    }
}

StatPointsController.propTypes = {
    initialPoints:   PropTypes.number.isRequired,
    usedPoints:      PropTypes.number.isRequired,
    editPoints:      PropTypes.func.isRequired,
    restorePoints:   PropTypes.func.isRequired,
    resetStatPoints: PropTypes.func.isRequired
}
