import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  width: 100%;
`;

const Filter = ({ value, onChange }) => (
  <Input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Filter tasks"
  />
);

export default Filter;