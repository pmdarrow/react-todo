import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new: false,
      editing: false,
      value: props.value || '',
      completed: props.completed,
    };
  }

  handleEditClick() {
    this.setState({
      editing: true,
    });
  }

  handleValueChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleValueBlur() {
    this.setState({
      editing: false,
    });
  }

  handleValueKeyPress(event) {
    console.log(event.key);
    if (event.key === 'Enter') {
      this.props.onSubmit(this.props.id);
    }
  }

  handleCompleteChange(event) {
    this.setState({
      editing: false,
      completed: event.target.checked,
    });
  }

  handleDeleteClick() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <li onClick={this.handleEditClick.bind(this)}>
        <Choose>
          <When condition={this.state.new}>
            +
          </When>
          <Otherwise>
            <input
              type="checkbox"
              onChange={this.handleCompleteChange.bind(this)}
            />
          </Otherwise>
        </Choose>

        <input
          autoFocus
          type="text"
          className={this.state.completed ? 'completed' : ''}
          value={this.state.value}
          onChange={this.handleValueChange.bind(this)}
          onBlur={this.handleValueBlur.bind(this)}
          onKeyPress={this.handleValueKeyPress.bind(this)}
        />

        <button onClick={this.handleDeleteClick.bind(this)}>X</button>

        <style>{`
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
