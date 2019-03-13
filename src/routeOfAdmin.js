import React from 'react';
import { Subpop } from './subPop';
import {CSSTransitionGroup} from 'react-transition-group'

export class ROA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displaySubPop: [],
            textSubPop: '',
            results: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({
            displaySubPop: this.props.search.subPop, 
            textSubPop: 'Sub-Population(s):',
            results: e.target.value
                })
    }

    render(){
        return (
            <div className="Container">
                <div className="Table">
                <h4 className="Title">{this.props.textROA}</h4>

                <ul className="Lists" >
                    <CSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={700}>

                    {this.props.displayROA.map((item) => {
                        return <li  key={item}>
                        <input type="radio" name="ROA" value={item} onClick={e => this.handleClick(e)}></input>
                        {item}</li>})}

                    </CSSTransitionGroup>
                </ul>
            
                <Subpop 
                        displaySubPop={this.state.displaySubPop}
                        search={this.props.search}
                        textSubPop={this.state.textSubPop}
                        resultsROA={this.state.results} 
                        intervalId={this.props.intervalId}
                        />    
                </div>
            </div>
        
        )
    }
    
}


