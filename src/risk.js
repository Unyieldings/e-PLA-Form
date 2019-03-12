import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export class Risk extends React.Component {
    render(){
        const resultRows = this.props.displayRisk.map((item) => {
            return (
                <tbody className="Risks">
                     <tr>
                         <td className="Risk">     
                            {item}
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
                            <th className="Table-header">{this.props.textRisk}</th>
                        </tr>
                    </thead>
                    {resultRows}
                </CSSTransitionGroup>
                </table>
            </div>
        )
    }
}


