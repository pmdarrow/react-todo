import { connect } from 'react-redux';
import {
  addTodoRequested,
  editTodoRequested,
  deleteTodoRequested,
} from '../actions/todos';
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
    onAddTodo: () => dispatch(addTodoRequested()),
    onEditTodo: (id, value, completed) => {
      dispatch(editTodoRequested({ id, value, completed }));
    },
    onDeleteTodo: id => dispatch(deleteTodoRequested({ id })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
