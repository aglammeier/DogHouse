import React from 'react';


class favoriteColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isColorShown: false,
            Color: ''
        }
    }

    updateColor = (event) => {
        this.setState({ Color: event.target.value });
        event.target.style.color = event.target.value;
        if (event.target.value != '' || null) {
            this.setState({ isColorShown: true })
        }
        else{
            this.setState({ isColorShown: false })
        }
    }

    displayColor = () => {
        return (
            <div id="favColor" style={{color:this.state.Color}}>my favorite color is {this.state.Color}</div>
        )
    }

    render() {
        return (
            <div id='divColor'>
                <div>my favorite color is</div>
                <input type="text" onChange={this.updateColor}></input>
                {this.state.isColorShown ?
                    this.displayColor() : null}
            </div>
        )
    };
}

export default favoriteColor;