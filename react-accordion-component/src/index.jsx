import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

ReactDOM.render(<Accordion topics = {[
  { header: 'Hypertext Markup Language', description: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.' },
  { header: 'Cascading Style Sheets', description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.' },
  { header: 'JavaScript', description: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.' }
]}/>, document.querySelector('#root'));
