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
    };

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
    };

    render(){
        return(
            <div className="Table">
                <h4 className="Title">{this.props.textPrep}</h4>

                <ul className="Lists">
                    <CSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={700}>

                    {this.props.displayPrep.map((item) => {
                        return <li key={item}>
                        <input type="radio" name="Prep" value={item} 
                                onClick={e => this.handleClick(e)} onMouseOver={e => this.handleHover(e)}></input>
                        {item}</li>})}

                    </CSSTransitionGroup>
                </ul>

                <h4 class="Dose">{this.state.textDose}</h4>
                {this.state.displayDose}    

            </div>
        )
    }

}
