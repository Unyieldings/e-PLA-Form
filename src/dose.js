import React from 'react';
import { Duration } from './duration';

export class Dose extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayDur: [],
            textDur: '',
            inputDose: '',
            results: [],
            isValidated: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputDose: e.target.value
        }); 
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            displayDur: this.props.search.duration, 
            textDur: 'Required Duration of Use:',
            results: this.state.inputDose
        });
    }
    
    render(){
            return (
                <div>
                    <h4 className="Dose-title">{this.props.textDose}</h4>

                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input
                            className="Dose-input"
                            type="number" name="Dose" 
                            min={this.props.search.dosage.min}
                            max={this.props.search.dosage.max}
                            step="any"
                            value={this.state.inputDose}
                            onChange={e => this.handleChange(e)}
                            >
                        </input>
                        <button>Next</button>
                    </form>
                  
                <Duration
                        search={this.props.search}
                        displayDur={this.state.displayDur}
                        textDur={this.state.textDur}
                        resultsUses={this.props.resultsUses}
                        resultsSubPop={this.props.resultsSubPop}
                        resultsROA={this.props.resultsROA}
                        resultsPrep={this.props.resultsPrep}
                        resultsDose={this.state.results}
                        intervalId={this.props.intervalId} />
            </div>
        )
    }
}