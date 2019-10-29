import React from 'react';
import HellTimeDisplay from './timeDisplay';
import HellDayDisplay from './dayDisplay';
import HellFavoriteColor from './favoriteColor'
import Header from '../shared-components/header';
import './Hell.css'


export default class Hell extends React.Component {
  constructor(props) {
    super(props);
  }
  hellHeaders = () => {
    return (
      <React.Fragment>
        <div id="hellHeader">welcume to website</div>
        <div id="hellHeader2">this is another header</div>
        <div id="hellHeader3">and another</div>
        <div id="hellHeader4">and another</div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div id="hellPage">
        <Header />
        <div id="hellHeaderContainer">
          {this.hellHeaders()}
        </div>
        <div id="hellBody">
          <div id="hellComponents">
            <HellTimeDisplay />
            <HellDayDisplay />
            <HellFavoriteColor />
          </div>
        </div>
      </div>
    )
  }
}