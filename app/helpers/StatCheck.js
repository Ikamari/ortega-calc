// React
import React, { Component } from 'react';

export default (stats) => {
    let warnings = []
    const { str, ref, per, int, det, mag } = stats

    const rules = [
        () => checkInitialPoints(stats.initial),
        () => checkSameStatValues([str, ref, per, int, det, mag])
    ]

    rules.map((rule) => {
        const result = rule()
        result ? warnings.push(result) : undefined
    })

    return warnings
}

/**
 * Checks initial points
 * More than 55 violates the rules of the CRAbS
 * @param points
 */
const checkInitialPoints = (points) => (
    points > 55 ? "Взято слишком много очков" :
        (points < 30 ? "У лоли и то больше очков" : null)
)

/**
 * Checks points that all stats have
 * More than 2 stats with same amount of points violates the rules of the CRAbS
 * @param stats
 */
const checkSameStatValues = (stats) => {
    let values = {}

    // Go though all stats and count their values
    stats.map((stat) => {
        values.hasOwnProperty(stat) ?
            values[stat]++ : values[stat] = 1
    })

    // Check if there 3 or more stats with same values
    const keys = Object.keys(values)
    for(let i = 0; i < keys.length; i++) {
        if (values[keys[i]] > 2) {
            return "Не может быть больше 2 статов с одинаковым количеством очков"
        }
    }

    return null
}


