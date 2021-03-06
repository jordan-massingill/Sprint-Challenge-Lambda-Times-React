import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({tabs: tabData, cards: cardData})
  }

  changeSelected = (tab) => {
    this.setState({selected: tab.target.textContent.toLowerCase()});
  }

  /* Complete this function, if the selected tab is 'all' it should return all
     of the items from cardData. If it is something else, it shoudl only return
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards
    }
    let cards = this.state.cards.filter(card => card.tab === this.state.selected);
    return cards;
  }

  render(){
    return (
      <div className="content-container">
        <Tabs selectedTab={this.state.selected} selectTabHandler={this.changeSelected} tabs={this.state.tabs}/>
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}
