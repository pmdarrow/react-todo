import React from 'react';
import TodoItem from './TodoItem';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          value: 'foo',
          completed: false,
        },
        {
          id: 1,
          value: 'bar',
          completed: false,
        },
        {
          id: 2,
          value: 'baz',
          completed: false,
        },
      ],
    };
  }

  handleItemDelete(id) {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id),
    });
  }

  handleItemSubmit(id) {
    // If the user has pressed enter on the last TodoItem, create a new one
    let lastItem = this.state.todos[this.state.todos.length - 1];
    if (lastItem.id === id && lastItem.value !== '') {
      this.setState({
        todos: this.state.todos.concat({
          id: lastItem.id + 1,
          value: '',
          completed: false,
        }),
      });
    }
  }

  render() {
    return (
      <ul>
        <For each="item" of={this.state.todos}>
          <TodoItem
            key={item.id}
            id={item.id}
            value={item.value}
            completed={item.completed}
            onDelete={this.handleItemDelete.bind(this)}
            onSubmit={this.handleItemSubmit.bind(this)}
          />
        </For>
      </ul>
    );
  }
}
