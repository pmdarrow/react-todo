import React from 'react';
import TodoItem from './TodoItem';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Figure our the right way to initialize the todo list with an empty item
    props.onAddTodo();
  }

  render() {
    return (
      <div>
        <ul>
          <For each="item" of={this.props.todos}>
            <TodoItem
              key={item.id}
              id={item.id}
              value={item.value}
              completed={item.completed}
              onEdit={this.props.onEditTodo}
              onDelete={this.props.onDeleteTodo}
              onToggle={this.props.onToggleTodo}
              onSubmit={this.props.onAddTodo}
            />
          </For>
        </ul>
        <span>
          {this.props.todos.length}{' '}
          todo{this.props.todos.length > 1 ? 's' : ''}
        </span>
      </div>
    );
  }
}
