import React from 'react';
import TodoItem from './TodoItem';

export default class extends React.Component {
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

        <style jsx>{`
          ul {
            list-style: none;
            padding-left: 0;
          }
        `}</style>
      </div>
    );
  }
}
