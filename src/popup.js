import React from 'react';
import Popup from 'reactjs-popup';

export class Modal extends React.Component {
    render() {
        return (
            <div>
                <Popup className="Popup-menu"
                    trigger={<button className="Preview-button"> Preview Selection </button>}
                    modal
                    closeOnDocumentClick
                >
                    <span className="Popup-content">
                        <h3>Route of Adminitration:</h3>
                        {this.props.resultsROA}

                        <h3>Sub-Population:</h3>
                        {this.props.resultsSubPop}

                        <h3>Use or Purpose:</h3>
                        {this.props.resultsUses}

                        <h3>Preparation Method:</h3>
                        {this.props.resultsPrep}

                        <h3>Dosage:</h3>
                        {this.props.resultsDose} grams

                        <h3>Required Duration of Use:</h3>
                        {this.props.resultsDur}

                        <h3>Required Directions of Use:</h3>
                        {this.props.resultsDire} 

                        <h3>Required Risk Information:</h3>
                        <ul>
                            {this.props.resultsRisk.map(item => {
                            return <li className="Popup-risk">{item}</li>})}
                        </ul>
                        

                    </span>
                </Popup>
        
            </div>
        )
    }
}
    
  