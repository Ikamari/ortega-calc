// Prices
import CommonPrices from "../stat-prices/CommonPrices";
// Stats controller
import TideStatsController from '../../components/tide-stats-calculator/StatsController'

export default {
    name:  'tide',
    getPrice: CommonPrices,
    statsController: TideStatsController,
    label: 'Потоки',
    initialPoints: 30,
    initialPointsPerStat: 1,
    maxPointsPerStat: 99,
    minPointsPerStat: 1,
    stats: {
        'red': {
            label: 'Красный',
            color: 'red',
            tip:   'Красный'
        },
        'turquoise': {
            label: 'Бирюзовый',
            color: 'turquoise',
            tip:   'Бирюзовый'
        },
        'indigo': {
            label: 'Индиго',
            color: 'indigo',
            tip:   'Индиго'
        },
        'malachite': {
            label: 'Малахитовый',
            color: 'malachite',
            tip:   'Малахитовый'
        },
        'gold': {
            label: 'Золотой',
            color: 'gold',
            tip:   'Золотой'
        },
        'dark_blue': {
            label: 'Темно-синий',
            color: 'dark_blue',
            tip:   'Темно-синий'
        },
        'silver': {
            label: 'Серебряный',
            color: 'silver',
            tip:   'Серебряный'
        },
        'carbonic': {
            label: 'Угольный',
            color: 'carbonic',
            tip:   'Угольный'
        },
    },
    renderPointsAsText: false,
    renderLabelAsRound: true,
    renderTips:         true
}