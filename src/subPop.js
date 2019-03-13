import React from 'react';
import { Uses } from './uses';
import {CSSTransitionGroup} from 'react-transition-group';

export class Subpop extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            displayUses: [],
            textUses: '',
            results: []
        }
    this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({results: e.target.value})
        
        this.setState({
            displayUses: this.props.search.Uses, 
            textUses: 'Select Use or Purpose:',
            results: e.target.value
            })
    }

    render(){

        return (
            <div className="Table">
                <h4 className="Title">{this.props.textSubPop}</h4>

                <ul className="Lists">
                    <CSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={700}>

                    {this.props.displaySubPop.map((item) => {
                        return <li key={item}>
                        <input type="radio" name="Subpop" value={item} onClick={e => this.handleClick(e)}></input>
                        {item}</li>})}

                    </CSSTransitionGroup>
                </ul>
                    
                <Uses 
                    search={this.props.search}
                    displayUses={this.state.displayUses}
                    textUses={this.state.textUses}
                    resultsSubPop={this.state.results}
                    resultsROA={this.props.resultsROA}
                    intervalId={this.props.intervalId}/>
                
            </div>
        )
    }
}