import React from 'react';
import { Ashwagandha } from './monographs/Ashwagandha';
import { Dong_quai } from './monographs/Dong-quai';
import { Cinnamon } from './monographs/Cinnamon';
import { Form } from './form';
import { ROA } from './routeOfAdmin';
import { Intro } from './intro.js';
import './App.css';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: null,
            input: '',   
            displayROA: [],
            textROA: '',
            intervalId: ''
        } 
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.scrollDown = this.scrollDown.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
        if(e.target.value === 'Ashwagandha') {
            this.setState({search: Ashwagandha})
        }
        else if(e.target.value === 'Dong quai') {
            this.setState({search: Dong_quai})
        }
        else if(e.target.value === 'Cinnamon') {
            this.setState({search: Cinnamon})
        }
            
        
    };

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            displayROA: this.state.search.routeOfAdmin,
            textROA: 'Route(s) of Administration:'
            })
    }

    componentDidMount() {
        let intervalId = setInterval(this.scrollDown, 20)
        this.setState({intervalId: intervalId})
    }

    scrollDown() {
        const scrollingElement = (document.scrollingElement || document.body); 
        scrollingElement.scrollTop = scrollingElement.scrollHeight
    }

    render() {
        return(
            <div>
                
                <Form
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                     />
                
                <Intro />
                    

                    <ROA className ="Container"
                        displayROA={this.state.displayROA}
                        search={this.state.search}
                        textROA={this.state.textROA}
                        intervalId={this.state.intervalId}
                        />

            </div>
        )
    }

}