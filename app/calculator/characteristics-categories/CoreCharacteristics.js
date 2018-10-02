// Prices
import CommonPrices from '../stat-prices/CommonPrices'
// Stats controller
import CoreStatsController from '../../components/core-stats-calculator/StatsController'

export default {
    name:  'core',
    getPrice: CommonPrices,
    statsController: CoreStatsController,
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
        5: 'Супер'
    },
    renderPointsAsText: true,
    renderLabelAsRound: false,
    renderTips:         false
}