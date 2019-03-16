import React from 'react';
import { Duration } from './duration';
import { Ashwagandha } from './monographs/Ashwagandha';
import { Dong_quai } from './monographs/Dong-quai';
import { Cinnamon } from './monographs/Cinnamon';

let unit = ''

export class Dose extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayDur: [], 
            textDur: '',
            inputDose: '',
            results: [],
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

        if(this.props.search === Ashwagandha || this.props.search === Dong_quai || this.props.search === Cinnamon) {
            unit = 'Grams (g)'
        }
        else {unit = 'Milligrams (mg)'};

            return (
                <div className="Table">
                    <h4 className="Dose-title">{this.props.textDose}</h4>

                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input
                            className="Dose-input"
                            type="number" name="Dose" 
                            placeholder={unit}
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