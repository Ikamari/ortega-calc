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
            tip:   'Красный',
            group: 'emotions_and_mind'
        },
        'turquoise': {
            label: 'Бирюзовый',
            color: 'turquoise',
            tip:   'Бирюзовый',
            group: 'emotions_and_mind'
        },
        'indigo': {
            label: 'Индиго',
            color: 'indigo',
            tip:   'Индиго',
            group: 'compromise_and_ultimatum'
        },
        'malachite': {
            label: 'Малахитовый',
            color: 'malachite',
            tip:   'Малахитовый',
            group: 'compromise_and_ultimatum'
        },
        'gold': {
            label: 'Золотой',
            color: 'gold',
            tip:   'Золотой',
            group: 'altruism_and_egoism'
        },
        'dark_blue': {
            label: 'Темно-синий',
            color: 'dark_blue',
            tip:   'Темно-синий',
            group: 'altruism_and_egoism'
        },
        'silver': {
            label: 'Серебряный',
            color: 'silver',
            tip:   'Серебряный',
            group: 'glory_and_dishonor'
        },
        'carbonic': {
            label: 'Угольный',
            color: 'carbonic',
            tip:   'Угольный',
            group: 'glory_and_dishonor'
        },
    },
    groups: [
        {
            name: 'emotions_and_mind',
            label: 'Эмоции и разум'
        },
        {
            name: 'compromise_and_ultimatum',
            label: 'Компромисс и ультиматум'
        },
        {
            name: 'altruism_and_egoism',
            label: 'Альтруизм и эгоизм'
        },
        {
            name: 'glory_and_dishonor',
            label: 'Слава и бесчестие'
        }
    ],
    renderPointsAsText: false,
    renderLabelAsRound: true,
    renderTips:         true
}