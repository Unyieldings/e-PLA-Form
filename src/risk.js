import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export class Risk extends React.Component {
    render(){
        return(
            <div className="Table">
                <h4 className="Title">{this.props.textRisk}</h4>
                
                <ul className="Lists">
                    <div className="Risk">

                    <CSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={700}>

                    {this.props.displayRisk.map((item) => {
                        return <li key={item}>
                        {item}</li>})}

                    </CSSTransitionGroup>
                    </div>

                </ul>
            </div>
        )
    }
}


