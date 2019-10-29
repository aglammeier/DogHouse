import React from 'react';
import Header from '../shared-components/header';
import './About.css';



export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: [],
            showing: [
                "welcome to the about page",
                "i made this website to practice yava yript"
            ],
            theBeat: true
        }

    }
    removeMessage = (message) => {
        // Bonnery
        // const { hidden, showing } = this.state;
        // const deleteMessageIndex = showing.indexOf(message);
        // hidden.push(showing.splice(deleteMessageIndex, 1));
        // this.setState({ hidden, showing })

        //Stinesy
        this.setState({theBeat: false})
        this.setState((prevState) => {
            let { hidden, showing } = prevState;
            const deleteMessageIndex = showing.indexOf(message);
            hidden.push(showing.splice(deleteMessageIndex, 1));
            return { hidden, showing }           
        })

    }

    bringBeatBack = () => {
        // Bonnery
        // const { hidden, showing } = this.state;
        // if (hidden.length > 0) {
        //     showing.push(hidden.pop());
        //     this.setState({hidden,showing})
        // }

        // Stinesy
        this.setState((prevState) => {
            let {hidden, showing} = prevState;
            showing.push(hidden.pop())
            return {hidden, showing}
        })
        if (this.state.hidden.length === 1){
            this.setState({theBeat: true})
        }
        console.log(this.state.hidden.length)

    }

    render() {
        console.log(this.state)
        return (
            <div id="aboutPage">
                <Header />
                <div id="aboutBody">
                    {this.state.showing.map((message, i) => (
                        <TogglableComponent
                            key={`list-showing-${i}`}
                            handleClick={this.removeMessage}
                            message={message}
                        />))}
                    <button id="bringBeatBack" onClick={this.bringBeatBack}>bring beat back</button>
                    {this.state.theBeat ?
                    <img id="theBeat" src="https://img.discogs.com/yBx5fyBLv7OqczMpOfQ8u01H6ck=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2091256-1263495962.jpeg.jpg"></img>
                    : null}
                </div>
            </div>
        )
    }
}
/* Ur Gay */
let TogglableComponent = ({ message, handleClick }) => {
    return (
        <div onClick={() => handleClick(message)}>{message}</div>
    )
}