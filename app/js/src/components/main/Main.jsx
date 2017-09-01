import React from 'react'
import Menu from '../menu/Menu'
import Section from '../section/Section'

export default class Main extends React.Component {
  render() {
    var sections = this.props.sections.map(section => {
      return <Section key={section.title} title={section.title} content={section.content}/>;
    });

    return (
      <div>
        <Menu />
        <h1>Hello, {this.props.name}!</h1>
        {sections}
      </div>
    );
  }
}