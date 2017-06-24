import React from 'react';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import withRedux from 'next-redux-wrapper';

import Header from '../components/Header';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import reducer from '../reducers';
import rootSaga from '../sagas';
import {
  addTodoRequested,
  editTodoRequested,
  deleteTodoRequested,
  fetchTodosRequested,
} from '../actions/todos';

// Wire up Redux devtools if we're in the browser and the extension is
// installed
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const sagaMiddleware = createSagaMiddleware();

function makeStore(initialState) {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
}

// Transforms the current Redux store state into the props passed to the
// TodosPage component we are wrapping
function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

// Receives the dispatch() method and returns callback props that we want to
// inject into the TodosPage component
function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: () => dispatch(addTodoRequested()),
    onEditTodo: (id, value, completed) => {
      dispatch(editTodoRequested({ id, value, completed }));
    },
    onDeleteTodo: id => dispatch(deleteTodoRequested({ id })),
  };
}

let clientTask = null;

class TodosPage extends React.Component {
  static async getInitialProps({ store, isServer }) {
    // For the initial page load, this function will execute on the server only.
    // It will be executed on the client when navigating to a different route
    // via the Link component or using the routing APIs.
    if (isServer) {
      const serverTask = sagaMiddleware.run(rootSaga); // Start saga monitor
      store.dispatch(fetchTodosRequested()); // Fetch initial data
      store.dispatch(END); // End the server saga monitor
      await serverTask.done; // Wait for monitor to terminate
    }
  }

  constructor(props) {
    super(props);
    // Start saga monitor on client
    if (!clientTask) {
      clientTask = sagaMiddleware.run(rootSaga);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Title />
        <TodoList {...this.props} />
      </div>
    );
  }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(
  TodosPage
);
