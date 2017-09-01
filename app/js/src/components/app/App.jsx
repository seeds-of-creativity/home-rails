import React from 'react'

import Main from '../main/Main.jsx'

export default class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props = props;

    this.sections = [
      {
        title: 'About',
        content: 'This is the About section',
      },
      {
        title: 'Artists',
        content: 'This is the Artists section',
      },
      {
        title: 'Donation',
        content: 'This is the Donation section',
      },
    ]
  }

  render() {
    return (
      <div>
        <Main name={this.props.name} sections={this.sections}/>
      </div>  
    );
  }
}