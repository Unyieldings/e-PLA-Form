import React from 'react';

export class SmartPrep extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: ''
        }
    }
    render() {
        return(
            <div>
                <input 
                    type="radio" name="Smart-prep"
                    value={this.props.smartPrep} 
                    onClick={this.props.onClick}>{this.props.smartPrep}</input>
            </div>
        )
    }
}