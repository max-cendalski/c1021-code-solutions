import React from 'react';

export default class Accordion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    const newArray = [
      { name: 'Hypertext Markup Language', description: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.' },
      { name: 'Cascading Style Sheets', description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.' },
      { name: 'JavaScript', description: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.' }
    ];
    return (
      <ul>
        {newArray.map(item => <li key={newArray.name}>item.name</li>)}
      </ul>
    );
  }
}
