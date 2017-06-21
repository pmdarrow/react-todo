import { connect } from 'react-redux';
import { addTodo, editTodo, deleteTodo, toggleTodo } from '../actions/todos';
import TodoList from '../components/TodoList';

// Transforms the current Redux store state into the props passed to the
// TodoList presentational component we are wrapping
function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

// Receives the dispatch() method and returns callback props that we want to
// inject into the TodoList presentational component
function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: () => dispatch(addTodo()),
    onEditTodo: (id, value) => {
      dispatch(editTodo({ id, value }));
    },
    onDeleteTodo: id => dispatch(deleteTodo({ id })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
