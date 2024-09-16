import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #ff6347;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
`;

const TodoList = ({ todos, onToggleComplete, onDelete }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Item key={id}>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {text}
        </span>
        <div>
          <Button onClick={() => onToggleComplete(id)}>
            {completed ? 'Uncomplete' : 'Complete'}
          </Button>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </div>
      </Item>
    ))}
  </List>
);

export default TodoList;