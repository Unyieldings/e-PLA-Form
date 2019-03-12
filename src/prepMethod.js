import React from 'react';
import { Dose } from './dose';
import { CSSTransitionGroup } from 'react-transition-group';

export class PrepMethod extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayDose: [],
            textDose: '',
            results: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(e) {
        this.setState({
            results: e.target.value
        })
    }

    handleClick() {
            this.setState({
                textDose: 'Dose(s):',

                displayDose: 
                <Dose
                search={this.props.search}
                resultsUses={this.props.resultsUses}
                resultsSubPop={this.props.resultsSubPop}
                resultsROA={this.props.resultsROA}
                resultsPrep={this.state.results}
                intervalId={this.props.intervalId} /> 

                });
    }

    render(){
        const resultRows = this.props.displayPrep.map((item) => {
            return (
                <tbody className="Prep">
                     <tr>
                         <td>
                             <input type="radio" name="Prep" 
                                    value={item}
                                    onChange={e => this.handleClick(e)}
                                    onMouseOver={e => this.handleHover(e)} />{item}
                        </td>   
                     </tr>
                </tbody>
            );
        }, this);

        return (
            <div>
            <table className="table">
            <CSSTransitionGroup
                    transitionName="fade">
                <thead>
                    <tr>
                        <th className="Table-header">{this.props.textPrep}</th>
                    </tr>
                </thead>
                 {resultRows}
            </CSSTransitionGroup>
            </table>
            <h4 class="Dose">{this.state.textDose}</h4>
            {this.state.displayDose}    

            
            </div>
        )
    }

}
