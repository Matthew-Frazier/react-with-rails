import React from 'react';
import axios from 'axios'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Header, Container, } from 'semantic-ui-react';

class App extends React.Component {
  state = { todos: [], };

  componentDidMount() {
    // make a call to our rails server to get Items
    axios.get("/api/items")
    // .then occurs if it is successful
      .then( res => {
        this.setState({ todos: res.data, });
      })
    // .catch occurs if it fails
      .catch( err => {
        console.log(err);
      })
  };

  addItem = (name) => {
    // make api call to rails server to add an Item
    axios.post("/api/items", { name: name, })
      .then( res => {
        // add new todo to state
        this.setState({ todos: [...this.state.todos, res.data], });
      })
  };

  updateTodo = (id) => {
    // make api call to rails server to update todo
    axios.put(`/api/items/${id}`)
      .then( res => {
        const todos = this.state.todos.map( t => {
          if (t.id === id)
            return res.data
          return t;
        });
        // update state
        this.setState({ todos, })
      })
  };

  deleteTodo = (id) => {
    //  make api call to rails server to delete todo
    axios.delete(`/api/items/${id}`)
      .then( res => {
        const { todos, } = this.state;
        // remove todo from state
        this.setState({ todos: todos.filter( t => t.id !== id ), })
      })
  };

  render() {
    return(
      <Container style={{ padding:  "30px 0", }}>
        <div className="App">
          <Header as="h1">Rails/React Todo List</Header>
          <br/>
          <TodoForm addItem={this.addItem} />
          <br/>
          <br/>
          <TodoList
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </Container>
    );
  };
};


export default App;
