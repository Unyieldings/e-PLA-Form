import React from 'react';
import { Risk } from './risk';
import { Modal } from './popup';
import  { CSSTransitionGroup } from 'react-transition-group';

export class Direction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayRisk: [],
            textRisk: '',
            results: [],
            previewButton: null,
            confirmButton: null
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() {
        alert('Request sent for approval')
        clearInterval(this.props.intervalId)
    }
    
    handleClick(e) {    
        this.setState({
            displayRisk: this.props.search.risk, 
            textRisk: 'Required Risk Information:',

            previewButton:
            <Modal
            resultsUses={this.props.resultsUses}
            resultsSubPop={this.props.resultsSubPop}
            resultsROA={this.props.resultsROA}
            resultsPrep={this.props.resultsPrep}
            resultsDose={this.props.resultsDose}
            resultsDur={this.props.resultsDur}
            resultsDire={this.state.results}
            resultsRisk={this.props.search.risk}
            />,
            confirmButton:<button type="submit" class="Confirm-Button" onClick={this.handleConfirm}>Confirm</button>
        });

        if(this.props.search.direction === 'n/a') {
            this.setState({results: ''})

        }else {
            this.setState({results: e.target.value})
        }    
    }

    render(){
        const resultRows = this.props.displayDire.map((item) => {
            return (
                <tbody className="Direction">
                     <tr>
                         <td name="Direction" >     
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
                            <th className="Table-header">{this.props.textDire}</th>
                        </tr>  
                    </thead>
                    {resultRows}
                </CSSTransitionGroup>
                </table>
            
                <Risk
                    search={this.props.search} 
                    displayRisk={this.state.displayRisk}
                    textRisk={this.state.textRisk}
                    />
                <div className="Preview-Button">
                    {this.state.previewButton}
                </div>

                <div className="Confirm-button">
                    {this.state.confirmButton}
                </div>

            
            </div>
        )
    }
}
