import React from 'react';
import { PrepMethod } from './prepMethod';
import { CSSTransitionGroup } from 'react-transition-group';
import { Cinnamon } from './monographs/Cinnamon';

export class Uses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayPrep: [],
            textPrep: '',
            results: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
       
                this.setState({
                    displayPrep: this.props.search.prepMethod,
                    textPrep: "Preparation:"
                })
          
        this.setState({results: e.target.value});
    }

    render(){
        const resultRows = this.props.displayUses.map((item) => {
            return (
                <tbody className="Uses">
                     <tr>
                         <td >
                             <input type="radio" name="Use"
                                    key={item} 
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
                        <th className="Table-header-Uses">{this.props.textUses}</th>
                    </tr>
                </thead>
                 {resultRows}
            </CSSTransitionGroup>
            </table>
            

                <PrepMethod 
                    displayPrep={this.state.displayPrep}
                    search={this.props.search}
                    textPrep={this.state.textPrep}
                    resultsUses={this.state.results}
                    resultsSubPop={this.props.resultsSubPop}
                    resultsROA={this.props.resultsROA}
                    intervalId={this.props.intervalId} />

            </div>
            
            
        );
   }
}

