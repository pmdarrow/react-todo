import React from 'react';

export default class extends React.Component {
  state = {
    editing: false,
  };

  handleEditClick() {
    this.setState({ editing: true });
  }

  handleValueChange(event) {
    this.props.onEdit(this.props.id, event.target.value);
  }

  handleValueBlur() {
    this.setState({ editing: false });
  }

  handleValueKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onSubmit(this.props.id);
    }
  }

  handleToggleChange(event) {
    this.setState({
      editing: false,
      completed: event.target.checked,
    });
    this.props.onToggle(this.props.id);
  }

  handleDeleteClick() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <li onClick={this.handleEditClick.bind(this)}>
        <input type="checkbox" onChange={this.handleToggleChange.bind(this)} />

        <input
          autoFocus
          type="text"
          placeholder="Enter a todo"
          className={this.props.completed ? 'completed' : ''}
          value={this.props.value}
          onChange={this.handleValueChange.bind(this)}
          onBlur={this.handleValueBlur.bind(this)}
          onKeyPress={this.handleValueKeyPress.bind(this)}
        />

        <button onClick={this.handleDeleteClick.bind(this)}>X</button>

        <style jsx>{`
          li button {
            display: none;
          }
          li:hover button {
            display: initial;
          }
          .completed {
            text-decoration: line-through;
          }
        `}</style>
      </li>
    );
  }
}
