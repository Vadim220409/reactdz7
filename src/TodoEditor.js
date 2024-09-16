import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
`;

class TodoEditor extends Component {
  state = {
    textValue: '',
  };

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTodo(this.state.textValue);
    this.setState({ textValue: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange}
          placeholder="Add a new task"
        />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

export default TodoEditor;