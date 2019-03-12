import React from 'react';

export class Intro extends React.Component {
    render() {
        return(
            <div className="Intro">
                <h1 className="Intro-title">
                    Electronic Product License Application Form
                </h1>
                <h3 className="Intro-p1">
                This is an application form that is meant to illustrate my own version of the validation process of Health Canada's 
                Natural and Non-prescription Health Products Directorate's (NNHPD) validation process of natural health products 
                according to their monograph's regulations and guidelines.
                </h3>
                <h4 className="Intro-p2">
                    This form supports the available monographs listed in the "Monographs" drop-down menu on the top right.
                </h4>
                <h4 className="Intro-p3">
                    Simply search for the monograph name you wish to start the process.
                </h4>


            </div>
        )
    }
}