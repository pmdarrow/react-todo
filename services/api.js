import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyC98E2kb7Vhuzj1QCjUViq1aA0url65tA4',
  authDomain: 'react-todo-15260.firebaseapp.com',
  databaseURL: 'https://react-todo-15260.firebaseio.com',
  projectId: 'react-todo-15260',
  storageBucket: 'react-todo-15260.appspot.com',
  messagingSenderId: '41264994890',
};

class Api {
  constructor() {
    // Prevent hot reloading from initializing Firebase multiple times
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.database = firebase.database();
  }

  addTodo() {
    return this.database.ref('todos').push({
      value: '',
      completed: false,
    }).key;
  }

  editTodo(id, value, completed) {
    return this.database.ref(`todos/${id}`).set({ value, completed });
  }

  deleteTodo(id) {
    return this.database.ref(`todos/${id}`).remove();
  }

  fetchTodos() {
    return this.database.ref('todos').once('value');
  }
}

export default new Api();
