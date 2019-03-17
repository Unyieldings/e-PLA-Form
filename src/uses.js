import React from 'react';
import { PrepMethod } from './prepMethod';
import { CSSTransitionGroup } from 'react-transition-group';
import { Cinnamon } from './monographs/Cinnamon';
import { SmartPrep } from './smartPrep';

export class Uses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayPrep: [],
            textPrep: '',
            results: [],
            smartPrep: '',
            displaySmartPrep: ''
            
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if(this.props.search === Cinnamon) {
            this.setState({
                displaySmartPrep: <SmartPrep
                                    smartPrep={this.state.smartPrep}
                                    
                                    />
            })

            if(e.target.value === this.props.search.Uses[0] || 
                e.target.value === this.props.search.Uses[2] || 
                e.target.value === this.props.search.Uses[3] ) {
                this.setState({
                    smartPrep: this.props.search.prepMethod[0],
                    
                    results: e.target.value
                    })
            }else if(e.target.value === this.props.search.Uses[1]) {
                this.setState({
                    smartPrep: this.props.search.prepMethod[1],
                    results: e.target.value
                })
            }
        }else {
            this.setState({displayPrep: this.props.search.prepMethod})
        }
                
        this.setState({
            textPrep: "Preparation:",
            results: e.target.value })
    };

    render() {
        return (
            <div className="Table">
                <h4 className="Title">{this.props.textUses}</h4>

                <ul className="Lists">
                    <div className="Use">

                    <CSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={700}>

                    {this.props.displayUses.map((item) => {
                        return <li key={item}>
                        <input type="radio" name="Use" value={item} onClick={e => this.handleClick(e)}></input>
                        {item}</li>})}
                        
                    </CSSTransitionGroup>
                        
                    </div>
                </ul>
                
                
                <PrepMethod 
                    displayPrep={this.state.displayPrep}
                    search={this.props.search}
                    textPrep={this.state.textPrep}
                    resultsUses={this.state.results}
                    resultsSubPop={this.props.resultsSubPop}
                    resultsROA={this.props.resultsROA}
                    intervalId={this.props.intervalId} 
                    
                    smartPrep={this.state.smartPrep}
                    displaySmartPrep={this.state.displaySmartPrep} />
            </div>


        )
        
                    
                
        
                 
          
        
    
    }
}

