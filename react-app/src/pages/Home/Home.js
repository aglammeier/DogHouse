import React from 'react';
import Header from '../shared-components/header';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonPressed: false
        }
    }

    buttonTest = () => {
        this.setState({
            buttonPressed: !this.state.buttonPressed
        })
    }


    render() {
        return (
            <div>
                <Header />
                <div id='homePage'>
                    <div id='welcomeHome'>welcome to my website</div>
                    <button id="testButton" onClick={this.buttonTest}>test button</button>
                    {this.state.buttonPressed ? <div id="testDiv">test</div> : null}
                </div>
            </div>
        )
    }
}

export default Home;
