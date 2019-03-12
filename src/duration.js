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
            textDire: 'Required Directions of Use:'
        });
        if(this.props.search.duration === 'n/a') {
            this.setState({results: ''})
            
        }else {
            this.setState({
                results: e.target.value
            })
        };  
    }
    
    render(){
        const resultRows = this.props.displayDur.map((item) => {
            return (
                <tbody>
                     <tr>
                         <td name="Duration" >     
                         <button className="Required-button" onClick={e => this.handleClick(e)}>Next</button>{item}
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
                            <th className="Table-header">{this.props.textDur}</th>
                        </tr>
                    </thead>
                {resultRows}
                </CSSTransitionGroup>
                </table>
                
                
       
                <Direction
                    search={this.props.search}
                    displayDire={this.state.displayDire}
                    textDire={this.state.textDire}
                    resultsUses={this.props.resultsUses}
                    resultsSubPop={this.props.resultsSubPop}
                    resultsROA={this.props.resultsROA}
                    resultsPrep={this.props.resultsPrep}
                    resultsDose={this.props.resultsDose}
                    resultsDur={this.state.resultsDur}
                    intervalId={this.props.intervalId} />
            </div>
        )
    }
}
