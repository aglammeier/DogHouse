import React from 'react';

export default class HellDisplayTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTimeShown: false,
            currentTime: ''
        }
    }

    toggleTimeDisplay = (event) => {
        if (this.state.isTimeShown == false) {
            event.target.innerHTML = "bye time";
        }
        else{
            event.target.innerHTML = "let's find out";
        }

        this.setState({
            isTimeShown: !this.state.isTimeShown
        })
        
    }

    updateTime = () => {
        var time, currentHour, currentMinute, currentSecond, currentTime;
        time = new Date();
        currentHour = time.getHours();
        currentMinute = time.getMinutes();
        currentSecond = time.getSeconds();

        if (currentMinute < 10) {
            currentMinute = "0" + currentMinute;
        }
        if (currentSecond < 10) {
            currentSecond = "0" + currentSecond;
        }

        currentTime = currentHour + ":" + currentMinute + ":" + currentSecond;

        this.setState({ currentTime })
    }

    componentDidMount() {
        this.updateTime();
        this.updateTimeIntervalID = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.updateTimeIntervalID);
    }

    render() {
        return (
            <div id="divTime">
                <div id="WhatTime">what time is it?</div>
                <button type="button" onClick={this.toggleTimeDisplay} id="timeButton">let's find out </button>
                {this.state.isTimeShown ? <div id="time"> {this.state.currentTime} </div> : null}
            </div>
        )
    }
}