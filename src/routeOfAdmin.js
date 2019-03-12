import React from 'react';
import { Subpop } from './subPop';
import { selectedROA } from './actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        
        const resultRows = this.props.displayROA.map((item) => {
            return (
                
                <tbody>
                     <tr>
                         <td>
                             <input type="radio" name="ROA" 
                                    key={item}
                                    value={item}
                                    onChange={(e) => this.handleClick(e)} />{item}
                        </td>   
                     </tr>
                </tbody>
            );
        }, this);

        return (
            <div className ="Container">
                
            <table className="table">
            <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={700}
                >
                
                <thead>
                    <tr>
                        <th className="Table-header">{this.props.textROA}</th>
                    </tr>
                </thead>
                 {resultRows}
                 </CSSTransitionGroup>
            </table>
            
                <Subpop 
                        displaySubPop={this.state.displaySubPop}
                        search={this.props.search}
                        textSubPop={this.state.textSubPop}
                        resultsROA={this.state.results} 
                        intervalId={this.props.intervalId}
                        />    
            </div>
        
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        resROA: state.resROA
    };
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectedROA: selectedROA}, dispatch)

}
export default connect(mapStateToProps, matchDispatchToProps)(ROA)

