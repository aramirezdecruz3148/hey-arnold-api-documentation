import React from 'react';
import { shallow } from 'enzyme';
import GifRoutes from './GifRoutes';

describe('GifRoutes component', () => {
  it('renders GifRoutes', () => {
    const wrapper = shallow(<GifRoutes />);
    expect(wrapper).toMatchSnapshot();
  });
});
