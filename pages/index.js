import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import Title from '../components/Title';
import TodoContainer from '../containers/TodoContainer';
import reducer from '../reducers';

const store = createStore(
  reducer,
  typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () =>
  <Provider store={store}>
    <div>
      <Header />
      <Title />
      <TodoContainer />
    </div>
  </Provider>;
