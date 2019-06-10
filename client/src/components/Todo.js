import React from 'react';
import { Button, Checkbox, Header, Icon, } from 'semantic-ui-react';

const Todo = ({ id, complete, name, updateTodo, deleteTodo, }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox
        defaultChecked={complete}
        onClick={() => updateTodo(id)}
      />
      <div style={complete ? styles.complete : {}}> 
        <Header as="h2" style={{ marginLeft: "15px", }}>{ name }</Header>
      </div>
    </div>
    <Button
      icon
      color="red"
      size="tiny"
      onClick={() => deleteTodo(id)}
      style={{ marginLeft: "15px", }}
    >
      <Icon name="trash" />
    </Button>
  </div>
);

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
  pointer: {
    cursor: "pointer",
  },
  flex:  {
    display: "flex",
    alignItems: "center",
  },
};

export default Todo;