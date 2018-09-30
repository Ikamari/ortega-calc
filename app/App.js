// React
import React, { Component } from 'react';
// Containers
import Calculator           from './containers/Calculator'
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
            <div className='app'>
                <div className='app-centered app-w100per app-centered-content'>
                    {this.renderCalculators()}
                </div>
            </div>
        )
    }

}
