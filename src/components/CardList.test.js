import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('ecpect to render CardList Component', () => {
  const mockrobots = [
    {
      id: 1,
      name: 'house',
      username: 'drhouse',
      email: 'notLupus@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockrobots} />)).toMatchSnapshot();
})
