// React
import React, {Component} from 'react'
// Infobox styles
import multigonStyle from './wiki-infobox-styles/multigon'

class WikiCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStyle: 0
        }
    }

    changeInfoboxStyle(style) {
        this.setState({
            selectedStyle: style
        })
    }

    render() {
        let stats = Object.assign({}, this.state)
        delete stats.selectedStyle

        return (
            <div className='app-block-wrapper app-w530px app-centered app-sharp-border app-horizontal-border app-mb20px app-p5px'>
                {/*<div className='wiki-infobox-style-select'>*/}
                    {/*<div className='infobox-style-option'>*/}
                        {/*<label>Стандартный*/}
                            {/*<input type='radio' name='infoboxStyle' onClick={() => this.changeInfoboxStyle(0)}*/}
                                   {/*defaultChecked/>*/}
                            {/*<span />*/}
                        {/*</label>*/}
                    {/*</div>*/}
                    {/*<div className='infobox-style-option'>*/}
                        {/*<label>Гексагон*/}
                            {/*<input type='radio' name='infoboxStyle' onClick={() => this.changeInfoboxStyle(1)}/>*/}
                            {/*<span />*/}
                        {/*</label>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div>
                    <div className='app-centered-text app-text-bold app-mb10px'>Wiki infobox</div>
                    <div className='app-centered-text app-font-consolas'>
                        {multigonStyle(stats)}
                    </div>
                </div>
            </div>
        )
    }
}

export default WikiCode