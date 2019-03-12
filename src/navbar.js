import React from 'react';

export class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <h3 className="e-PLA">NNHPD e-PLA</h3>
                <div className="Dropdown">
                    <p className="Dropdown-button">
                        Monographs
                    </p>
                    <div className="Dropdown-content">
                        <a href="http://webprod.hc-sc.gc.ca/nhpid-bdipsn/monoReq.do?id=35&lang=eng">Ashwagandha</a>
                        <a href="http://webprod.hc-sc.gc.ca/nhpid-bdipsn/monoReq.do?id=842&lang=eng">Dong quai</a>
                        <a href="#">Placeholder</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}