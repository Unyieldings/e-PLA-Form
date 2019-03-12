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
        const resultRows = this.props.displaySubPop.map((item) => {
            return (
                <tbody>
                     <tr>
                         <td>
                             <input type="radio" name="SubPop" 
                                    value={item}
                                    onChange={e => this.handleClick(e)} />{item}
                        </td>   
                     </tr>
                </tbody>
            );
        }, this);

        return (
            <div>
            <table className="table">
            <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={700}>
                <thead>
                    <tr>
                        <th className="Table-header">{this.props.textSubPop}</th>
                    </tr>
                </thead>
                 {resultRows}
            </CSSTransitionGroup>
            </table>
                    
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