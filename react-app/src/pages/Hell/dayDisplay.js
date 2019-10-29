import React from 'react';

export default class HellDayDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateShown: false,
            currentDate: ''
        }
    }

    toggleDayDisplay = () => {
        this.setState({
            isDateShown: !this.state.isDateShown
        })
    }

    updateDate = () => {
        let date = new Date();    
        let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        let currentDate = date.getDay();
    

        this.setState({ currentDate : daysOfTheWeek[currentDate] })
        console.log(currentDate)
    }

    componentDidMount() {
        this.updateDate();
    }

    render() {
        return (
            <div id="divDay">
                <div id="whatTime">what day is it?</div>
                <button type="button" onClick={this.toggleDayDisplay} id="dayButton">let's find out</button>
                {this.state.isDateShown ? <div id="day"> {this.state.currentDate} </div> : null}
            </div>
        )

    }
}