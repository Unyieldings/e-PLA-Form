import React from 'react';
import { Direction } from './direction';
import { CSSTransitionGroup } from 'react-transition-group'

export class Duration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayDire: [],
            textDire: '',
            results: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            displayDire: this.props.search.direction, 
            textDire: 'Required Directions of Use:',
            results: e.target.value
        });
    }
    
    render(){
        return(
            <div className="Table">
                <h4 className="Title">{this.props.textDur}</h4>

                <ul className="Lists">
                    <div className="Duration">

                    <CSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={700}>

                    {this.props.displayDur.map((item) => {
                        return <li key={item}>
                        <input type="checkbox" value={item} name="Dur" className="Required-button" onClick={e => this.handleClick(e)}></input>
                        {item}</li>})}

                    </CSSTransitionGroup>
                    </div>
                </ul>
                
                
       
                <Direction
                    search={this.props.search}
                    displayDire={this.state.displayDire}
                    textDire={this.state.textDire}
                    resultsUses={this.props.resultsUses}
                    resultsSubPop={this.props.resultsSubPop}
                    resultsROA={this.props.resultsROA}
                    resultsPrep={this.props.resultsPrep}
                    resultsDose={this.props.resultsDose}
                    resultsDur={this.state.results}
                    intervalId={this.props.intervalId} />
            </div>
        )
    }
}
