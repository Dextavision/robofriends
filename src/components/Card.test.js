import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('ecpect to render Card Component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
})
