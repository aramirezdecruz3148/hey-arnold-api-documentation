import React from 'react';
import { shallow } from 'enzyme';
import CharacterRoutes from './CharacterRoutes';

describe('CharacterRoutes component', () => {
  it('renders CharacterRoutes', () => {
    const wrapper = shallow(<CharacterRoutes />);
    expect(wrapper).toMatchSnapshot();
  });
});
