import React from 'react';
import { Navbar } from './navbar';

export class Form extends React.Component{
    render() {
        return(
            <div className="Navbar">
                <Navbar />

                <div className="Form">
                    <form onSubmit={this.props.onSubmit}>

                        <input className="Input-box" 
                            type="text" 
                            value={this.props.input} 
                            placeholder="Enter Ingredient"
                            onChange={this.props.onChange}>
                        </input>
                    <button className="Submit-button" type="submit">Submit</button>
                </form>
                </div>
                
            </div>
            
        )
    }

}