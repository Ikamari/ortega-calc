Config template:

```
import CommonPrices from '../stat-prices/CommonPrices'

export default () => ({
    // Name of stats category
    name:                 'name',
    
    // Name (label) of calculator           
    label:                'characteristics_label',
    
    // Function that returns price of increment/decrement stat
    getPrice:             CommonPrices,
    
    // Initial amount of points that can be used
    initialPoints:        1,
    
    // Initial amount of points allocated to every stat
    initialPointsPerStat: 1,
    
    // Maximal amount of points that can be allocated to every stat
    maxPointsPerStat:     99,
    
    // Maximal amount of points that can be allocated to every stat
    minPointsPerStat:     1,
    
    stats: {
        'stat_name': {
            label: 'stat_label',
            color: 'round_color',
            tip:   'tip_text'     
        },
        ...
    },
    
    // Show specific text instead of digit
    pointsAmountNames: {
        1: 'name', 
        ...
    },
    
    // If true, then stat points will be showed up as text + pointsAmountNames will be used
    renderPointsAsText: false,
    
    // If true, then stat label will be showed up as round + color it's property will be used
    renderLabelAsRound: false,
    
    // If true, then a tip will be rendered when mouse is hovered on label/round
    renderTipes:      false
})
```