import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <input type="button" /* is this needed? clicked={ this.props.notDeleted } */ onClick={ this.props.deleteToDo} />
        <span> { this.props.description } </span>
      </li>
    );
  }
}

export default ToDo;
