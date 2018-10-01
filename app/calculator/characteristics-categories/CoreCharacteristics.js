// Prices
import CommonPrices from '../stat-prices/CommonPrices'
// Stats controller
import StatsController from '../../components/calculator/StatsController'

export default {
    name:  'core',
    getPrice: CommonPrices,
    statsController: StatsController,
    label: 'Характеристики',
    initialPoints:       14,
    initialPointsPerStat: 3,
    maxPointsPerStat:     5,
    minPointsPerStat:     1,
    stats: {
        'training': {
            label: 'Тренированность',
        },
        'skill': {
            label: 'Выучка'
        },
        'persistence': {
            label: 'Упорство'
        },
        'intelligence': {
            label: 'Интеллект'
        }
    },
    pointsAmountNames: {
        1: 'Плохо',
        2: 'Нормально',
        3: 'Хорошо',
        4: 'Отлично',
        5: 'Великолепно'
    },
    renderPointsAsText: true,
    renderLabelAsRound: false,
    renderTips:         false
}