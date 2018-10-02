// React
import React, { Component } from 'react';
// Containers
import Calculator           from './containers/Calculator'
// Styles
import styles               from './App.css'
// Stat categories
import TideCharacteristics  from './calculator/characteristics-categories/TideCharacteristics'
import CoreCharacteristics  from './calculator/characteristics-categories/CoreCharacteristics'

const CHARACTERISTICS_CATEGORIES = [ CoreCharacteristics, TideCharacteristics ]

export default class App extends Component {

    renderCalculators() {
        return (
            CHARACTERISTICS_CATEGORIES.map((category) => (
                <Calculator characteristics={category} key={`${category.name}-calc`} />
            ))
        )
    }

    render() {
        return(
            <div className={styles.app}>
                <div className={styles.calculators}>
                    {this.renderCalculators()}
                </div>
            </div>
        )
    }

}
